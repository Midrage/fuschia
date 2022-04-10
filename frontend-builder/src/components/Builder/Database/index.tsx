import { Paper, Tab, Tabs, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { styled } from '@mui/material/styles'
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion'
import { Add } from '@mui/icons-material'
import {
  useCreateEntityModelMutation,
  useGetProjectQuery,
  useGetServerStatusQuery,
  usePublishApiMutation,
} from '../../../generated/graphql'
import DataEditor from './DataEditor'
import { EntityModel } from './EntityModel'
import GraphQLDesigner from './GraphQLDesigner'
import { GetProjectDocument } from '../../../generated/graphql'
import {
  AccordionDetails,
  AccordionSummary,
  Box,
  IconButton,
} from '@mui/material'
import { ExpandMore } from '@mui/icons-material'
import Modal from '@mui/material/Modal'
import PlayCircleIcon from '@mui/icons-material/PlayCircle'
import RestartAltIcon from '@mui/icons-material/RestartAlt'
import { LabeledTextInput } from '../../Shared/primitives/LabeledTextInput'
import { Checkbox } from '../../Shared/primitives/Checkbox'
import { variableNameRegex } from '../../../utils/regexp'
import { MainTabHeader, TabWrapper } from '../../Shared/Tabs'

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  '&:before': {
    display: 'none',
  },
}))

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <div>
          <span>{children}</span>
        </div>
      )}
    </div>
  )
}

function StatusChip({
  label,
  status,
  onClick,
}: {
  label: string
  status?: boolean
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}) {
  return (
    <Box
      sx={{
        color: status ? 'black' : 'white',
        borderColor: status ? 'var(--success)' : 'var(--error)',
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 5,
        width: 125,
      }}
    >
      <Box
        sx={{
          margin: '2px',
          backgroundColor: status ? 'var(--success)' : 'var(--error)',
          borderRadius: 4,
          padding: '0.5rem',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'auto auto',
            justifyContent: 'space-between',
            width: '100%',
            alignItems: 'center',
          }}
        >
          <span>{label}</span>
          <IconButton onClick={onClick}>
            {status ? <RestartAltIcon /> : <PlayCircleIcon />}
          </IconButton>
        </div>
      </Box>
    </Box>
  )
}

function VariableConfiguration({
  selectedPage,
  pageIndex,
}: {
  selectedPage: number
  pageIndex: number
}) {
  return (
    <div
      style={{ display: selectedPage === pageIndex ? 'initial' : 'none' }}
    ></div>
  )
}

function DatabaseConfiguration({
  isLocal,
  selectedPage,
  pageIndex,
}: {
  isLocal: boolean
  selectedPage: number
  pageIndex: number
}) {
  let { projectId } = useParams<{ projectId: string }>()
  const [expanded, setExpanded] = React.useState<string | false>(false)
  const { data: liveServerStatusData } = useGetServerStatusQuery({
    variables: {
      projectId,
      sandbox: false,
    },
    pollInterval: 10000,
  })
  const { data: sandboxServerStatusData } = useGetServerStatusQuery({
    variables: {
      projectId,
      sandbox: true,
    },
    pollInterval: 10000,
  })
  const [newModelName, setNewModelName] = useState('')
  const { data, loading, error } = useGetProjectQuery({
    variables: { projectId },
  })
  const [publishApi] = usePublishApiMutation()
  const [createNewEntityModel] = useCreateEntityModelMutation({
    refetchQueries: [
      {
        query: GetProjectDocument,
        variables: { projectId },
      },
    ],
  })
  const handleAccordianChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false)
    }
  if (error) {
    return <div>Error</div>
  }
  if (loading) {
    return <div>Loading...</div>
  }
  if (!projectId) {
    return <div>missing project id</div>
  }
  return (
    <div style={{ display: selectedPage === pageIndex ? 'initial' : 'none' }}>
      {isLocal ? (
        <div />
      ) : (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'auto auto',
            justifyContent: 'end',
            gap: '0.5rem',
          }}
        >
          <StatusChip
            label="Sandbox"
            status={sandboxServerStatusData?.getServerStatus}
            onClick={() => {
              publishApi({
                variables: {
                  projectId,
                  sandbox: true,
                },
              })
            }}
          />
          <StatusChip
            label="Live"
            status={liveServerStatusData?.getServerStatus}
            onClick={() => {
              publishApi({
                variables: {
                  projectId,
                  sandbox: false,
                },
              })
            }}
          />
        </div>
      )}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '250px 1fr',
          gap: '1.5rem',
          overflow: 'hidden',
        }}
      >
        <div style={{ overflow: 'auto' }}>
          {data?.getProject && (
            <div>
              {data.getProject.appConfig.apiConfig.models
                .filter(m => m.isLocal === isLocal)
                .map(model => (
                  <Accordion
                    key={model._id}
                    expanded={expanded === model._id.toString()}
                    onChange={handleAccordianChange(model._id.toString())}
                    elevation={0}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMore />}
                      sx={{
                        margin: '0.25rem',
                        background: '#F7F6F6',
                        color:
                          expanded === model._id.toString()
                            ? '#DD1C74'
                            : 'black',
                        borderStyle: 'dashed',
                        borderWidth: '1px',
                        borderColor:
                          expanded === model._id.toString()
                            ? '#F24726'
                            : 'black',
                        borderRadius: 5,
                      }}
                    >
                      {model.name}
                    </AccordionSummary>
                    <AccordionDetails>
                      <EntityModel
                        projectId={projectId!}
                        model={model}
                        models={data.getProject.appConfig.apiConfig.models}
                      />
                    </AccordionDetails>
                  </Accordion>
                ))}
              <Accordion
                expanded={expanded === 'new'}
                onChange={handleAccordianChange('new')}
                elevation={0}
                sx={{
                  margin: '0.25rem',
                  background: '#F7F6F6',
                  color: '#DD1C74',
                  border: 'dashed 1px #F24726',
                  borderRadius: 5,
                }}
              >
                <AccordionSummary sx={{}}>
                  <div className="spaced-and-centered">
                    <span>Create New Data Collection</span>
                    <span style={{ color: 'black' }}>
                      <Add />
                    </span>
                  </div>
                </AccordionSummary>
                <AccordionDetails>
                  <div>
                    <LabeledTextInput
                      label="Collection Name"
                      type="text"
                      value={newModelName}
                      onChange={e => {
                        const name = e.currentTarget.value
                        if (name === '' || variableNameRegex.test(name)) {
                          setNewModelName(name)
                        }
                      }}
                    />
                    <button
                      className="outlined-accent-button"
                      onClick={async () => {
                        await createNewEntityModel({
                          variables: {
                            name: newModelName,
                            isLocal,
                            projectId,
                          },
                        })
                        setNewModelName('')
                      }}
                    >
                      Create New Model
                    </button>
                  </div>
                </AccordionDetails>
              </Accordion>
            </div>
          )}
        </div>
        <div style={{ overflow: 'auto' }}>
          {data && (
            <DataEditor
              model={data.getProject.appConfig.apiConfig.models.find(
                model => model._id.toString() === expanded
              )}
              models={data.getProject.appConfig.apiConfig.models}
              sandboxEndpoint={
                data.getProject.appConfig.apiConfig.sandboxEndpoint
              }
              liveEndpoint={data.getProject.appConfig.apiConfig.liveEndpoint}
            />
          )}
        </div>
      </div>
    </div>
  )
}

const Database: React.FC = function Database() {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0)
  const navigate = useNavigate()

  return (
    <Modal open={true} onClose={() => navigate('../')} sx={{ padding: '5rem' }}>
      <Paper
        sx={{
          height: '100%',
          width: '100%',
          display: 'grid',
          gridTemplateRows: 'auto auto 1fr',
          padding: '2em',
        }}
      >
        <TabWrapper>
          <MainTabHeader
            selected={selectedTabIndex === 0}
            onClick={() => setSelectedTabIndex(0)}
          >
            Server Database
          </MainTabHeader>
          <MainTabHeader
            selected={selectedTabIndex === 1}
            onClick={() => setSelectedTabIndex(1)}
          >
            App Variables
          </MainTabHeader>
          <MainTabHeader
            selected={selectedTabIndex === 2}
            onClick={() => setSelectedTabIndex(2)}
          >
            Local Database
          </MainTabHeader>
        </TabWrapper>
        <DatabaseConfiguration
          isLocal={false}
          pageIndex={0}
          selectedPage={selectedTabIndex}
        />
        <VariableConfiguration pageIndex={0} selectedPage={selectedTabIndex} />
        <DatabaseConfiguration
          isLocal={true}
          pageIndex={2}
          selectedPage={selectedTabIndex}
        />
      </Paper>
    </Modal>
  )
}

export default Database
