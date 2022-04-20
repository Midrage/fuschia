import styled from '@emotion/styled'
import React, { useState } from 'react'
import Paper from '@mui/material/Paper'
import Editor from './Editors/Editor'
import {
  GetProjectDocument,
  PackageComponentType,
  useGetComponentQuery,
  useGetPackagesQuery,
  useGetProjectQuery,
  useUpdateAppConfigMutation,
} from '../../../generated/graphql'
import { ObjectSchema, Schema } from '@fuchsia/types'
import TabPanel from '../../Shared/TabPanel'
import DataSources from './DataSources'
import { useParams } from 'react-router-dom'
import { LabeledTextInput } from '../../Shared/primitives/LabeledTextInput'
import {
  useInsertComponent,
  useSelection,
  useUpdateComponent,
} from '../../../utils/hooks'
import { LabeledCheckbox } from '../../Shared/primitives/LabeledCheckbox'
import { gql } from '@apollo/client'
import { variableNameRegex } from '../../../utils/regexp'
import { DragDropContext, DropResult } from 'react-beautiful-dnd'
import {
  useProjectComponents,
  StructuredComponent,
} from '../../../utils/hooks/useProjectComponents'
import { NavMenu } from '../../Shared/CascadingMenu'
import { FunctionWrapper, ActionWrapper } from './Editors/FunctionEditor'
import { OutlinedButton } from '../../Shared/primitives/Button'

const TabHeader = styled.span`
  font-weight: 600;
  border-width: 2px;
  border-style: solid;
  padding: 2px 5px;
  border-radius: 5px;
  cursor: pointer;
`

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 2rem;
  height: 100%;
  pointer-events: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Inner = styled.div`
  width: 300px;
  height: 100%;
  padding-top: calc(56px + 1rem);
  padding-bottom: calc(56px + 1rem);
`

const cardStyles = {
  height: '100%',
  padding: '0.5rem',
  margin: '1rem 0',
  display: 'flex',
  flexDirection: 'column',
  pointerEvents: 'all',
  overflowY: 'auto',
  overflowX: 'hidden',
}

const HeaderTypes = [
  {
    label: 'Properties',
    value: 'properties',
  },
  {
    label: 'Layout',
    value: 'layout',
  },
  {
    label: 'Styles',
    value: 'style',
  },
  {
    label: 'Actions',
    value: 'actions',
  },
]

function AddMenu({ parentId }: { parentId: string }) {
  const { data: packageData } = useGetPackagesQuery()
  const createComponent = useInsertComponent()

  return (
    <NavMenu>
      {packageData &&
        packageData.getPackages.flatMap(_package => {
          return _package.components.map(component => (
            <li
              onClick={() => {
                createComponent({
                  name: component.name,
                  componentType: component.componentType,
                  package: _package.packageName,
                  type: component.name,
                  parent: parentId,
                  props: component.defaultPropValue,
                  layout: component.defaultLayoutValue,
                  x: 0,
                  y: 0,
                })
              }}
            >
              {component.name}
            </li>
          ))
        })}
    </NavMenu>
  )
}

function LayerChildren({
  childComponents,
}: {
  childComponents: StructuredComponent[]
}) {
  const { setSelection } = useSelection()
  const [addMenuOpened, setAddMenuOpened] = useState(false)
  return (
    <FunctionWrapper>
      {childComponents.map(_c => (
        <ActionWrapper
          onClick={e => {
            e.stopPropagation()
            setSelection([_c._id])
          }}
        >
          <span>
            {_c.name}
            {_c.componentType !== PackageComponentType.Element ? (
              <OutlinedButton
                onClick={e => {
                  e.stopPropagation()
                  setAddMenuOpened(o => !o)
                }}
              >
                Add
              </OutlinedButton>
            ) : (
              <></>
            )}
          </span>
          {_c.children && _c.children.length > 0 && (
            <LayerChildren childComponents={_c.children} />
          )}
          {addMenuOpened && <AddMenu parentId={_c._id} />}
        </ActionWrapper>
      ))}
    </FunctionWrapper>
  )
}

function Layers({ componentId }: { componentId: string }) {
  const { projectId } = useParams<{ projectId: string }>()
  const components = useProjectComponents(projectId!)
  const { setSelection } = useSelection()
  const [addMenuOpened, setAddMenuOpened] = useState(false)
  // find the component in the structure
  let component: StructuredComponent | undefined = undefined
  components.some(c => {
    const search = (children: StructuredComponent[]) => {
      children.some(ch => {
        if (ch._id === componentId) {
          component = ch
          return true
        }
        if (ch.children) {
          return search(ch.children)
        }
      })
      return true
    }
    if (c._id === componentId) {
      component = c
      return true
    }
    if (c.children) {
      return search(c.children)
    }
    return false
  })
  if (component) {
    const structuredComponent = component as StructuredComponent
    return (
      <div>
        {structuredComponent.children ? (
          <LayerChildren childComponents={structuredComponent.children!} />
        ) : (
          <div>No Children</div>
        )}
        <OutlinedButton onClick={() => setAddMenuOpened(o => !o)}>
          Add
        </OutlinedButton>
        {addMenuOpened && <AddMenu parentId={structuredComponent._id} />}
      </div>
    )
  }
  return null
}

function Properties({
  component,
  schema,
  elementId,
}: {
  schema: Schema
  elementId: string
  component: any
}) {
  let { projectId } = useParams<{ projectId: string }>()
  const [value, setValue] = useState(0)
  const [name, setName] = useState(component.name)
  const { updateComponent, updateComponentProps } = useUpdateComponent()
  const { data: projectData } = useGetProjectQuery({
    variables: {
      projectId,
    },
  })
  const [updateAppConfig] = useUpdateAppConfigMutation({
    refetchQueries: [
      {
        query: gql`
          ${GetProjectDocument}
        `,
        variables: {
          projectId,
        },
      },
    ],
  })
  function getReference(name: string) {
    if (schema.definitions) {
      return schema.definitions[name.substring('#/definitions/'.length)]
    }
    return undefined
  }

  return (
    <>
      <LabeledTextInput
        label="Component Name"
        value={name}
        onBlur={e => {
          if (name !== component.name) {
            updateComponent(
              elementId,
              {
                name,
              },
              {
                name: component.name,
              }
            )
          }
        }}
        onChange={e => {
          const newName = e.target.value
          if (name === '' || variableNameRegex.test(newName)) {
            setName(newName)
          }
        }}
      />
      {(component.componetType === PackageComponentType.Screen ||
        component.componetType === PackageComponentType.Stack) && (
        <>
          <LabeledTextInput
            label="x"
            value={component.x}
            onChange={e => {
              const x = parseInt(e.target.value)

              updateComponent(
                elementId,
                {
                  x,
                },
                {
                  x: component.x,
                }
              )
            }}
          />
          <LabeledTextInput
            label="y"
            value={component.y}
            onChange={e => {
              const y = parseInt(e.target.value)

              updateComponent(
                elementId,
                {
                  y,
                },
                {
                  y: component.y,
                }
              )
            }}
          />
        </>
      )}
      {component.componentType === PackageComponentType.Screen && (
        <LabeledCheckbox
          label="Welcome Screen?"
          checked={
            projectData?.getProject.appConfig.appEntryComponentId === elementId
          }
          onChange={e => {
            const value = e.target.checked
            if (value === true) {
              updateAppConfig({
                variables: {
                  projectId,
                  appConfig: {
                    appEntryComponentId: elementId,
                  },
                },
              })
            }
          }}
        />
      )}
      <div
        style={{
          marginTop: '10px',
          marginBottom: '10px',
          display: 'flex',
          flexWrap: 'wrap',
        }}
      >
        {HeaderTypes.map((header, index) => {
          if ((schema as ObjectSchema).properties[header.value]) {
            return (
              <TabHeader
                key={index}
                onClick={() => setValue(index)}
                style={{
                  color: value === index ? 'var(--accent)' : '#808080',
                  borderColor:
                    value === index ? 'var(--accent)' : 'transparent',
                }}
              >
                {header.label}
              </TabHeader>
            )
          } else {
            return null
          }
        })}
        {component.componentType !== 'Element' && (
          <TabHeader
            onClick={() => setValue(4)}
            style={{
              color: value === 4 ? 'var(--accent)' : '#808080',
              borderColor: value === 4 ? 'var(--accent)' : 'transparent',
            }}
          >
            Layers
          </TabHeader>
        )}
        {component.componentType === 'Screen' && (
          <>
            <TabHeader
              onClick={() => setValue(5)}
              style={{
                color: value === 5 ? 'var(--accent)' : '#808080',
                borderColor: value === 5 ? 'var(--accent)' : 'transparent',
              }}
            >
              Data
            </TabHeader>
          </>
        )}
      </div>
      {HeaderTypes.map((header, index) => {
        if ((schema as ObjectSchema).properties[header.value]) {
          return (
            <TabPanel value={value} index={index} key={index}>
              <Editor
                componentId={elementId}
                initialValue={JSON.parse(
                  JSON.stringify(component.props[header.value] || {})
                )}
                updateValue={(value, isValid) => {
                  if (value) {
                    updateComponentProps(
                      elementId,
                      {
                        ...component.props,
                        [header.value]: value,
                      },
                      component.props
                    )
                  }
                }}
                getReference={getReference}
                required={true}
                schema={(schema as ObjectSchema).properties[header.value]}
              />
            </TabPanel>
          )
        } else {
          return null
        }
      })}
      <TabPanel value={value} index={5}>
        <DataSources
          models={projectData?.getProject.appConfig.apiConfig.models || []}
          componentId={elementId}
          component={component}
        />
      </TabPanel>

      <TabPanel value={value} index={4}>
        <Layers componentId={elementId} />
      </TabPanel>
    </>
  )
}

interface PropertyWindowProps {
  schema: Schema
  properties: any
  elementId: string
}

const PropertyWindow: React.FC<PropertyWindowProps> = function PropertyWindow(
  props
) {
  const { data: componentData } = useGetComponentQuery({
    variables: {
      componentId: props.elementId,
    },
  })
  function handleDragEnd(e: DropResult) {}

  if (componentData && componentData.getComponent) {
    return (
      <Wrapper
        onClick={e => e.stopPropagation()}
        onWheel={e => e.stopPropagation()}
        onKeyDown={e => e.stopPropagation()}
      >
        <DragDropContext onDragEnd={handleDragEnd}>
          <Inner>
            <Paper elevation={12} sx={cardStyles}>
              <span>{props.schema.title}</span>
              <Properties
                component={componentData.getComponent}
                elementId={props.elementId}
                schema={props.schema}
              />
            </Paper>
          </Inner>
        </DragDropContext>
      </Wrapper>
    )
  }
  return null
}

export default PropertyWindow
