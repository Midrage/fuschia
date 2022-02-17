import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
const defaultOptions = {} as const
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any
  /** Mongo object id scalar type */
  ObjectId: any
}

export type Api = {
  __typename?: 'Api'
  liveEndpoint: Scalars['String']
  models: Array<EntityModel>
  mutations: Array<Scalars['String']>
  queries: Array<Scalars['String']>
  sandboxEndpoint: Scalars['String']
  subscriptions: Array<Scalars['String']>
}

export type AppConfig = {
  __typename?: 'AppConfig'
  apiConfig: Api
  authConfig: Auth
}

export type Auth = {
  __typename?: 'Auth'
  _id: Scalars['ObjectId']
  allowUnauthenticatedUsers?: Maybe<Scalars['Boolean']>
  clientRefreshTokenValidity?: Maybe<Scalars['Float']>
  defaultPasswordPolicy?: Maybe<Scalars['Boolean']>
  emailVerificationMessage?: Maybe<Scalars['String']>
  emailVerificationSubject?: Maybe<Scalars['String']>
  mfaConfiguration?: Maybe<Scalars['String']>
  mfaEnabled?: Maybe<Scalars['Boolean']>
  mfaTypes?: Maybe<Scalars['String']>
  passwordFieldId?: Maybe<Scalars['String']>
  passwordPolicyMinLength?: Maybe<Scalars['Float']>
  passwordRequiresNumbers: Scalars['Boolean']
  passwordRequiresSymbols: Scalars['Boolean']
  passwordRequiresUppercase: Scalars['Boolean']
  requiredAttributes?: Maybe<Array<Scalars['String']>>
  smsAuthenticationMessage?: Maybe<Scalars['String']>
  smsVerificationMessage?: Maybe<Scalars['String']>
  tableId?: Maybe<Scalars['String']>
  usernameCaseSensitive?: Maybe<Scalars['Boolean']>
  usernameFieldId?: Maybe<Scalars['String']>
}

export type AuthInput = {
  allowUnauthenticatedUsers?: InputMaybe<Scalars['Boolean']>
  clientRefreshTokenValidity?: InputMaybe<Scalars['Float']>
  defaultPasswordPolicy?: InputMaybe<Scalars['Boolean']>
  emailVerificationMessage?: InputMaybe<Scalars['String']>
  emailVerificationSubject?: InputMaybe<Scalars['String']>
  mfaConfiguration?: InputMaybe<Scalars['String']>
  mfaEnabled?: InputMaybe<Scalars['Boolean']>
  mfaTypes?: InputMaybe<Scalars['String']>
  passwordFieldId?: InputMaybe<Scalars['String']>
  passwordPolicyMinLength?: InputMaybe<Scalars['Float']>
  passwordRequiresNumbers?: InputMaybe<Scalars['Boolean']>
  passwordRequiresSymbols?: InputMaybe<Scalars['Boolean']>
  passwordRequiresUppercase?: InputMaybe<Scalars['Boolean']>
  requiredAttributes?: InputMaybe<Array<Scalars['String']>>
  requiresAuth?: InputMaybe<Scalars['Boolean']>
  smsAuthenticationMessage?: InputMaybe<Scalars['String']>
  smsVerificationMessage?: InputMaybe<Scalars['String']>
  tableId?: InputMaybe<Scalars['String']>
  usernameCaseSensitive?: InputMaybe<Scalars['Boolean']>
  usernameFieldId?: InputMaybe<Scalars['String']>
}

export type Connection = {
  __typename?: 'Connection'
  fieldNames: Array<Scalars['String']>
  keyName: Scalars['String']
}

export type DataAuth = {
  __typename?: 'DataAuth'
  allow: Scalars['String']
  groupClaim: Scalars['String']
  groups: Array<Scalars['String']>
  groupsField: Scalars['String']
  identityClaim: Scalars['String']
  operations: Array<Scalars['String']>
  ownerField: Scalars['String']
  provider: Scalars['String']
}

export type DataField = {
  __typename?: 'DataField'
  _id: Scalars['ObjectId']
  connection?: Maybe<Array<Connection>>
  dataType: Scalars['String']
  fieldName: Scalars['String']
  isHashed: Scalars['Boolean']
  isUnique: Scalars['Boolean']
  keys: Array<Key>
  nullable: Scalars['Boolean']
  rules: Array<DataAuth>
}

export type DataFieldInput = {
  dataType: Scalars['String']
  fieldName: Scalars['String']
  isHashed: Scalars['Boolean']
  isUnique: Scalars['Boolean']
  nullable: Scalars['Boolean']
}

export type EntityModel = {
  __typename?: 'EntityModel'
  _id: Scalars['ObjectId']
  auth: Array<DataAuth>
  fields: Array<DataField>
  keys: Array<Key>
  name: Scalars['String']
}

export type FieldError = {
  __typename?: 'FieldError'
  field: Scalars['String']
  message: Scalars['String']
}

export type Key = {
  __typename?: 'Key'
  fieldNames: Array<Scalars['String']>
  name: Scalars['String']
}

export type Mutation = {
  __typename?: 'Mutation'
  createDataField?: Maybe<DataField>
  createEntityModel?: Maybe<EntityModel>
  createField?: Maybe<Scalars['Boolean']>
  createMutation?: Maybe<Scalars['Boolean']>
  createOrganization: Organization
  createProject: Project
  createQuery?: Maybe<Scalars['Boolean']>
  createRelationship?: Maybe<Scalars['Boolean']>
  createSubscription?: Maybe<Scalars['Boolean']>
  createUser: User
  deleteDataField?: Maybe<Scalars['ObjectId']>
  deleteEntityModel?: Maybe<Scalars['Boolean']>
  deleteField?: Maybe<Scalars['Boolean']>
  deleteMutations?: Maybe<Scalars['Boolean']>
  deleteOrganization: Scalars['ObjectId']
  deleteProject: Scalars['ObjectId']
  deleteQuery?: Maybe<Scalars['Boolean']>
  deleteRelationship?: Maybe<Scalars['Boolean']>
  deleteSubscription?: Maybe<Scalars['Boolean']>
  login: UserResponse
  logout: Scalars['Boolean']
  publishApi: Scalars['Boolean']
  register: UserResponse
  updateAuth?: Maybe<Auth>
  updateEntityModel?: Maybe<Scalars['Boolean']>
  updateField?: Maybe<Scalars['Boolean']>
  updateMutation?: Maybe<Scalars['Boolean']>
  updateQuery?: Maybe<Scalars['Boolean']>
  updateRelationship?: Maybe<Scalars['Boolean']>
  updateSubscription?: Maybe<Scalars['Boolean']>
}

export type MutationCreateDataFieldArgs = {
  dataField: DataFieldInput
  entityModelId: Scalars['ObjectId']
  projectId: Scalars['ObjectId']
}

export type MutationCreateEntityModelArgs = {
  name: Scalars['String']
  projectId: Scalars['ObjectId']
}

export type MutationCreateOrganizationArgs = {
  organization: OrganizationInput
}

export type MutationCreateProjectArgs = {
  project: ProjectInput
}

export type MutationCreateUserArgs = {
  user: UserInput
}

export type MutationDeleteDataFieldArgs = {
  dataFieldId: Scalars['ObjectId']
  entityModelId: Scalars['ObjectId']
  projectId: Scalars['ObjectId']
}

export type MutationDeleteOrganizationArgs = {
  organizationId: Scalars['ObjectId']
}

export type MutationDeleteProjectArgs = {
  projectId: Scalars['ObjectId']
}

export type MutationLoginArgs = {
  email: Scalars['String']
  password: Scalars['String']
}

export type MutationPublishApiArgs = {
  projectId: Scalars['ObjectId']
}

export type MutationRegisterArgs = {
  email: Scalars['String']
  password: Scalars['String']
}

export type MutationUpdateAuthArgs = {
  input: AuthInput
  projectId: Scalars['ObjectId']
}

export type Organization = {
  __typename?: 'Organization'
  _id: Scalars['ObjectId']
  members: Array<User>
  name: Scalars['String']
  owner: User
  projects: Project
}

export type OrganizationInput = {
  name: Scalars['String']
}

export type Project = {
  __typename?: 'Project'
  _id: Scalars['ObjectId']
  appConfig: AppConfig
  appId: Scalars['String']
  organization: Organization
  projectName: Scalars['String']
}

export type ProjectInput = {
  organizationId: Scalars['ObjectId']
  projectName: Scalars['String']
}

export type Query = {
  __typename?: 'Query'
  getProject: Project
  listEntityModel?: Maybe<Scalars['Boolean']>
  listFields?: Maybe<Scalars['Boolean']>
  listMutations?: Maybe<Scalars['Boolean']>
  listOrganizations: Array<Organization>
  listProjects: Array<Project>
  listQueries?: Maybe<Scalars['Boolean']>
  listRelationships?: Maybe<Scalars['Boolean']>
  listSubscriptions?: Maybe<Scalars['Boolean']>
  me?: Maybe<User>
  retrieveEntityModel?: Maybe<Scalars['Boolean']>
  retrieveField?: Maybe<Scalars['Boolean']>
  retrieveMutation?: Maybe<Scalars['Boolean']>
  retrieveQuery?: Maybe<Scalars['Boolean']>
  retrieveRelationship?: Maybe<Scalars['Boolean']>
  retrieveSubscription?: Maybe<Scalars['Boolean']>
}

export type QueryGetProjectArgs = {
  projectId: Scalars['ObjectId']
}

export type User = {
  __typename?: 'User'
  _id: Scalars['ObjectId']
  email: Scalars['String']
  lastLogin?: Maybe<Scalars['DateTime']>
  organizations: Array<Organization>
  status: Scalars['String']
  userRole: Scalars['String']
}

export type UserInput = {
  email: Scalars['String']
  password: Scalars['String']
}

export type UserResponse = {
  __typename?: 'UserResponse'
  errors?: Maybe<Array<FieldError>>
  sessionId?: Maybe<Scalars['String']>
  user?: Maybe<User>
}

/**
 * A Directive provides a way to describe alternate runtime execution and type validation behavior in a GraphQL document.
 *
 * In some cases, you need to provide options to alter GraphQL's execution behavior in ways field arguments will not suffice, such as conditionally including or skipping a field. Directives provide this by describing additional information to the executor.
 */
export type __Directive = {
  __typename?: '__Directive'
  name: Scalars['String']
  description?: Maybe<Scalars['String']>
  isRepeatable: Scalars['Boolean']
  locations: Array<__DirectiveLocation>
  args: Array<__InputValue>
}

/**
 * A Directive provides a way to describe alternate runtime execution and type validation behavior in a GraphQL document.
 *
 * In some cases, you need to provide options to alter GraphQL's execution behavior in ways field arguments will not suffice, such as conditionally including or skipping a field. Directives provide this by describing additional information to the executor.
 */
export type __DirectiveArgsArgs = {
  includeDeprecated?: InputMaybe<Scalars['Boolean']>
}

/** A Directive can be adjacent to many parts of the GraphQL language, a __DirectiveLocation describes one such possible adjacencies. */
export enum __DirectiveLocation {
  /** Location adjacent to a query operation. */
  Query = 'QUERY',
  /** Location adjacent to a mutation operation. */
  Mutation = 'MUTATION',
  /** Location adjacent to a subscription operation. */
  Subscription = 'SUBSCRIPTION',
  /** Location adjacent to a field. */
  Field = 'FIELD',
  /** Location adjacent to a fragment definition. */
  FragmentDefinition = 'FRAGMENT_DEFINITION',
  /** Location adjacent to a fragment spread. */
  FragmentSpread = 'FRAGMENT_SPREAD',
  /** Location adjacent to an inline fragment. */
  InlineFragment = 'INLINE_FRAGMENT',
  /** Location adjacent to a variable definition. */
  VariableDefinition = 'VARIABLE_DEFINITION',
  /** Location adjacent to a schema definition. */
  Schema = 'SCHEMA',
  /** Location adjacent to a scalar definition. */
  Scalar = 'SCALAR',
  /** Location adjacent to an object type definition. */
  Object = 'OBJECT',
  /** Location adjacent to a field definition. */
  FieldDefinition = 'FIELD_DEFINITION',
  /** Location adjacent to an argument definition. */
  ArgumentDefinition = 'ARGUMENT_DEFINITION',
  /** Location adjacent to an interface definition. */
  Interface = 'INTERFACE',
  /** Location adjacent to a union definition. */
  Union = 'UNION',
  /** Location adjacent to an enum definition. */
  Enum = 'ENUM',
  /** Location adjacent to an enum value definition. */
  EnumValue = 'ENUM_VALUE',
  /** Location adjacent to an input object type definition. */
  InputObject = 'INPUT_OBJECT',
  /** Location adjacent to an input object field definition. */
  InputFieldDefinition = 'INPUT_FIELD_DEFINITION',
}

/** One possible value for a given Enum. Enum values are unique values, not a placeholder for a string or numeric value. However an Enum value is returned in a JSON response as a string. */
export type __EnumValue = {
  __typename?: '__EnumValue'
  name: Scalars['String']
  description?: Maybe<Scalars['String']>
  isDeprecated: Scalars['Boolean']
  deprecationReason?: Maybe<Scalars['String']>
}

/** Object and Interface types are described by a list of Fields, each of which has a name, potentially a list of arguments, and a return type. */
export type __Field = {
  __typename?: '__Field'
  name: Scalars['String']
  description?: Maybe<Scalars['String']>
  args: Array<__InputValue>
  type: __Type
  isDeprecated: Scalars['Boolean']
  deprecationReason?: Maybe<Scalars['String']>
}

/** Object and Interface types are described by a list of Fields, each of which has a name, potentially a list of arguments, and a return type. */
export type __FieldArgsArgs = {
  includeDeprecated?: InputMaybe<Scalars['Boolean']>
}

/** Arguments provided to Fields or Directives and the input fields of an InputObject are represented as Input Values which describe their type and optionally a default value. */
export type __InputValue = {
  __typename?: '__InputValue'
  name: Scalars['String']
  description?: Maybe<Scalars['String']>
  type: __Type
  /** A GraphQL-formatted string representing the default value for this input value. */
  defaultValue?: Maybe<Scalars['String']>
  isDeprecated: Scalars['Boolean']
  deprecationReason?: Maybe<Scalars['String']>
}

/** A GraphQL Schema defines the capabilities of a GraphQL server. It exposes all available types and directives on the server, as well as the entry points for query, mutation, and subscription operations. */
export type __Schema = {
  __typename?: '__Schema'
  description?: Maybe<Scalars['String']>
  /** A list of all types supported by this server. */
  types: Array<__Type>
  /** The type that query operations will be rooted at. */
  queryType: __Type
  /** If this server supports mutation, the type that mutation operations will be rooted at. */
  mutationType?: Maybe<__Type>
  /** If this server support subscription, the type that subscription operations will be rooted at. */
  subscriptionType?: Maybe<__Type>
  /** A list of all directives supported by this server. */
  directives: Array<__Directive>
}

/**
 * The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.
 *
 * Depending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name, description and optional `specifiedByUrl`, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.
 */
export type __Type = {
  __typename?: '__Type'
  kind: __TypeKind
  name?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  specifiedByUrl?: Maybe<Scalars['String']>
  fields?: Maybe<Array<__Field>>
  interfaces?: Maybe<Array<__Type>>
  possibleTypes?: Maybe<Array<__Type>>
  enumValues?: Maybe<Array<__EnumValue>>
  inputFields?: Maybe<Array<__InputValue>>
  ofType?: Maybe<__Type>
}

/**
 * The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.
 *
 * Depending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name, description and optional `specifiedByUrl`, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.
 */
export type __TypeFieldsArgs = {
  includeDeprecated?: InputMaybe<Scalars['Boolean']>
}

/**
 * The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.
 *
 * Depending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name, description and optional `specifiedByUrl`, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.
 */
export type __TypeEnumValuesArgs = {
  includeDeprecated?: InputMaybe<Scalars['Boolean']>
}

/**
 * The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.
 *
 * Depending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name, description and optional `specifiedByUrl`, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.
 */
export type __TypeInputFieldsArgs = {
  includeDeprecated?: InputMaybe<Scalars['Boolean']>
}

/** An enum describing what kind of type a given `__Type` is. */
export enum __TypeKind {
  /** Indicates this type is a scalar. */
  Scalar = 'SCALAR',
  /** Indicates this type is an object. `fields` and `interfaces` are valid fields. */
  Object = 'OBJECT',
  /** Indicates this type is an interface. `fields`, `interfaces`, and `possibleTypes` are valid fields. */
  Interface = 'INTERFACE',
  /** Indicates this type is a union. `possibleTypes` is a valid field. */
  Union = 'UNION',
  /** Indicates this type is an enum. `enumValues` is a valid field. */
  Enum = 'ENUM',
  /** Indicates this type is an input object. `inputFields` is a valid field. */
  InputObject = 'INPUT_OBJECT',
  /** Indicates this type is a list. `ofType` is a valid field. */
  List = 'LIST',
  /** Indicates this type is a non-null. `ofType` is a valid field. */
  NonNull = 'NON_NULL',
}

export type CreateDataFieldMutationVariables = Exact<{
  projectId: Scalars['ObjectId']
  entityModelId: Scalars['ObjectId']
  dataField: DataFieldInput
}>

export type CreateDataFieldMutation = {
  __typename?: 'Mutation'
  createDataField?: {
    __typename?: 'DataField'
    _id: any
    fieldName: string
    isUnique: boolean
    isHashed: boolean
    nullable: boolean
    dataType: string
    rules: Array<{
      __typename?: 'DataAuth'
      allow: string
      provider: string
      ownerField: string
      identityClaim: string
      groupClaim: string
      groups: Array<string>
      groupsField: string
      operations: Array<string>
    }>
    keys: Array<{ __typename?: 'Key'; name: string; fieldNames: Array<string> }>
    connection?: Array<{
      __typename?: 'Connection'
      keyName: string
      fieldNames: Array<string>
    }> | null
  } | null
}

export type DeleteDataFieldMutationVariables = Exact<{
  projectId: Scalars['ObjectId']
  entityModelId: Scalars['ObjectId']
  dataFieldId: Scalars['ObjectId']
}>

export type DeleteDataFieldMutation = {
  __typename?: 'Mutation'
  deleteDataField?: any | null
}

export type CreateEntityModelMutationVariables = Exact<{
  projectId: Scalars['ObjectId']
  name: Scalars['String']
}>

export type CreateEntityModelMutation = {
  __typename?: 'Mutation'
  createEntityModel?: {
    __typename?: 'EntityModel'
    _id: any
    name: string
  } | null
}

export type FullTypeFragment = {
  __typename?: '__Type'
  kind: __TypeKind
  name?: string | null
  fields?: Array<{
    __typename?: '__Field'
    name: string
    isDeprecated: boolean
    deprecationReason?: string | null
    args: Array<{
      __typename?: '__InputValue'
      name: string
      defaultValue?: string | null
      type: {
        __typename?: '__Type'
        kind: __TypeKind
        name?: string | null
        ofType?: {
          __typename?: '__Type'
          kind: __TypeKind
          name?: string | null
          ofType?: {
            __typename?: '__Type'
            kind: __TypeKind
            name?: string | null
            ofType?: {
              __typename?: '__Type'
              kind: __TypeKind
              name?: string | null
              ofType?: {
                __typename?: '__Type'
                kind: __TypeKind
                name?: string | null
                ofType?: {
                  __typename?: '__Type'
                  kind: __TypeKind
                  name?: string | null
                  ofType?: {
                    __typename?: '__Type'
                    kind: __TypeKind
                    name?: string | null
                    ofType?: {
                      __typename?: '__Type'
                      kind: __TypeKind
                      name?: string | null
                    } | null
                  } | null
                } | null
              } | null
            } | null
          } | null
        } | null
      }
    }>
    type: {
      __typename?: '__Type'
      kind: __TypeKind
      name?: string | null
      ofType?: {
        __typename?: '__Type'
        kind: __TypeKind
        name?: string | null
        ofType?: {
          __typename?: '__Type'
          kind: __TypeKind
          name?: string | null
          ofType?: {
            __typename?: '__Type'
            kind: __TypeKind
            name?: string | null
            ofType?: {
              __typename?: '__Type'
              kind: __TypeKind
              name?: string | null
              ofType?: {
                __typename?: '__Type'
                kind: __TypeKind
                name?: string | null
                ofType?: {
                  __typename?: '__Type'
                  kind: __TypeKind
                  name?: string | null
                  ofType?: {
                    __typename?: '__Type'
                    kind: __TypeKind
                    name?: string | null
                  } | null
                } | null
              } | null
            } | null
          } | null
        } | null
      } | null
    }
  }> | null
  inputFields?: Array<{
    __typename?: '__InputValue'
    name: string
    defaultValue?: string | null
    type: {
      __typename?: '__Type'
      kind: __TypeKind
      name?: string | null
      ofType?: {
        __typename?: '__Type'
        kind: __TypeKind
        name?: string | null
        ofType?: {
          __typename?: '__Type'
          kind: __TypeKind
          name?: string | null
          ofType?: {
            __typename?: '__Type'
            kind: __TypeKind
            name?: string | null
            ofType?: {
              __typename?: '__Type'
              kind: __TypeKind
              name?: string | null
              ofType?: {
                __typename?: '__Type'
                kind: __TypeKind
                name?: string | null
                ofType?: {
                  __typename?: '__Type'
                  kind: __TypeKind
                  name?: string | null
                  ofType?: {
                    __typename?: '__Type'
                    kind: __TypeKind
                    name?: string | null
                  } | null
                } | null
              } | null
            } | null
          } | null
        } | null
      } | null
    }
  }> | null
  interfaces?: Array<{
    __typename?: '__Type'
    kind: __TypeKind
    name?: string | null
    ofType?: {
      __typename?: '__Type'
      kind: __TypeKind
      name?: string | null
      ofType?: {
        __typename?: '__Type'
        kind: __TypeKind
        name?: string | null
        ofType?: {
          __typename?: '__Type'
          kind: __TypeKind
          name?: string | null
          ofType?: {
            __typename?: '__Type'
            kind: __TypeKind
            name?: string | null
            ofType?: {
              __typename?: '__Type'
              kind: __TypeKind
              name?: string | null
              ofType?: {
                __typename?: '__Type'
                kind: __TypeKind
                name?: string | null
                ofType?: {
                  __typename?: '__Type'
                  kind: __TypeKind
                  name?: string | null
                } | null
              } | null
            } | null
          } | null
        } | null
      } | null
    } | null
  }> | null
  enumValues?: Array<{
    __typename?: '__EnumValue'
    name: string
    isDeprecated: boolean
    deprecationReason?: string | null
  }> | null
  possibleTypes?: Array<{
    __typename?: '__Type'
    kind: __TypeKind
    name?: string | null
    ofType?: {
      __typename?: '__Type'
      kind: __TypeKind
      name?: string | null
      ofType?: {
        __typename?: '__Type'
        kind: __TypeKind
        name?: string | null
        ofType?: {
          __typename?: '__Type'
          kind: __TypeKind
          name?: string | null
          ofType?: {
            __typename?: '__Type'
            kind: __TypeKind
            name?: string | null
            ofType?: {
              __typename?: '__Type'
              kind: __TypeKind
              name?: string | null
              ofType?: {
                __typename?: '__Type'
                kind: __TypeKind
                name?: string | null
                ofType?: {
                  __typename?: '__Type'
                  kind: __TypeKind
                  name?: string | null
                } | null
              } | null
            } | null
          } | null
        } | null
      } | null
    } | null
  }> | null
}

export type InputValueFragment = {
  __typename?: '__InputValue'
  name: string
  defaultValue?: string | null
  type: {
    __typename?: '__Type'
    kind: __TypeKind
    name?: string | null
    ofType?: {
      __typename?: '__Type'
      kind: __TypeKind
      name?: string | null
      ofType?: {
        __typename?: '__Type'
        kind: __TypeKind
        name?: string | null
        ofType?: {
          __typename?: '__Type'
          kind: __TypeKind
          name?: string | null
          ofType?: {
            __typename?: '__Type'
            kind: __TypeKind
            name?: string | null
            ofType?: {
              __typename?: '__Type'
              kind: __TypeKind
              name?: string | null
              ofType?: {
                __typename?: '__Type'
                kind: __TypeKind
                name?: string | null
                ofType?: {
                  __typename?: '__Type'
                  kind: __TypeKind
                  name?: string | null
                } | null
              } | null
            } | null
          } | null
        } | null
      } | null
    } | null
  }
}

export type IntrospectionQueryQueryVariables = Exact<{ [key: string]: never }>

export type IntrospectionQueryQuery = {
  __typename?: 'Query'
  __schema: {
    __typename?: '__Schema'
    queryType: { __typename?: '__Type'; name?: string | null }
    mutationType?: { __typename?: '__Type'; name?: string | null } | null
    subscriptionType?: { __typename?: '__Type'; name?: string | null } | null
    types: Array<{
      __typename?: '__Type'
      kind: __TypeKind
      name?: string | null
      fields?: Array<{
        __typename?: '__Field'
        name: string
        isDeprecated: boolean
        deprecationReason?: string | null
        args: Array<{
          __typename?: '__InputValue'
          name: string
          defaultValue?: string | null
          type: {
            __typename?: '__Type'
            kind: __TypeKind
            name?: string | null
            ofType?: {
              __typename?: '__Type'
              kind: __TypeKind
              name?: string | null
              ofType?: {
                __typename?: '__Type'
                kind: __TypeKind
                name?: string | null
                ofType?: {
                  __typename?: '__Type'
                  kind: __TypeKind
                  name?: string | null
                  ofType?: {
                    __typename?: '__Type'
                    kind: __TypeKind
                    name?: string | null
                    ofType?: {
                      __typename?: '__Type'
                      kind: __TypeKind
                      name?: string | null
                      ofType?: {
                        __typename?: '__Type'
                        kind: __TypeKind
                        name?: string | null
                        ofType?: {
                          __typename?: '__Type'
                          kind: __TypeKind
                          name?: string | null
                        } | null
                      } | null
                    } | null
                  } | null
                } | null
              } | null
            } | null
          }
        }>
        type: {
          __typename?: '__Type'
          kind: __TypeKind
          name?: string | null
          ofType?: {
            __typename?: '__Type'
            kind: __TypeKind
            name?: string | null
            ofType?: {
              __typename?: '__Type'
              kind: __TypeKind
              name?: string | null
              ofType?: {
                __typename?: '__Type'
                kind: __TypeKind
                name?: string | null
                ofType?: {
                  __typename?: '__Type'
                  kind: __TypeKind
                  name?: string | null
                  ofType?: {
                    __typename?: '__Type'
                    kind: __TypeKind
                    name?: string | null
                    ofType?: {
                      __typename?: '__Type'
                      kind: __TypeKind
                      name?: string | null
                      ofType?: {
                        __typename?: '__Type'
                        kind: __TypeKind
                        name?: string | null
                      } | null
                    } | null
                  } | null
                } | null
              } | null
            } | null
          } | null
        }
      }> | null
      inputFields?: Array<{
        __typename?: '__InputValue'
        name: string
        defaultValue?: string | null
        type: {
          __typename?: '__Type'
          kind: __TypeKind
          name?: string | null
          ofType?: {
            __typename?: '__Type'
            kind: __TypeKind
            name?: string | null
            ofType?: {
              __typename?: '__Type'
              kind: __TypeKind
              name?: string | null
              ofType?: {
                __typename?: '__Type'
                kind: __TypeKind
                name?: string | null
                ofType?: {
                  __typename?: '__Type'
                  kind: __TypeKind
                  name?: string | null
                  ofType?: {
                    __typename?: '__Type'
                    kind: __TypeKind
                    name?: string | null
                    ofType?: {
                      __typename?: '__Type'
                      kind: __TypeKind
                      name?: string | null
                      ofType?: {
                        __typename?: '__Type'
                        kind: __TypeKind
                        name?: string | null
                      } | null
                    } | null
                  } | null
                } | null
              } | null
            } | null
          } | null
        }
      }> | null
      interfaces?: Array<{
        __typename?: '__Type'
        kind: __TypeKind
        name?: string | null
        ofType?: {
          __typename?: '__Type'
          kind: __TypeKind
          name?: string | null
          ofType?: {
            __typename?: '__Type'
            kind: __TypeKind
            name?: string | null
            ofType?: {
              __typename?: '__Type'
              kind: __TypeKind
              name?: string | null
              ofType?: {
                __typename?: '__Type'
                kind: __TypeKind
                name?: string | null
                ofType?: {
                  __typename?: '__Type'
                  kind: __TypeKind
                  name?: string | null
                  ofType?: {
                    __typename?: '__Type'
                    kind: __TypeKind
                    name?: string | null
                    ofType?: {
                      __typename?: '__Type'
                      kind: __TypeKind
                      name?: string | null
                    } | null
                  } | null
                } | null
              } | null
            } | null
          } | null
        } | null
      }> | null
      enumValues?: Array<{
        __typename?: '__EnumValue'
        name: string
        isDeprecated: boolean
        deprecationReason?: string | null
      }> | null
      possibleTypes?: Array<{
        __typename?: '__Type'
        kind: __TypeKind
        name?: string | null
        ofType?: {
          __typename?: '__Type'
          kind: __TypeKind
          name?: string | null
          ofType?: {
            __typename?: '__Type'
            kind: __TypeKind
            name?: string | null
            ofType?: {
              __typename?: '__Type'
              kind: __TypeKind
              name?: string | null
              ofType?: {
                __typename?: '__Type'
                kind: __TypeKind
                name?: string | null
                ofType?: {
                  __typename?: '__Type'
                  kind: __TypeKind
                  name?: string | null
                  ofType?: {
                    __typename?: '__Type'
                    kind: __TypeKind
                    name?: string | null
                    ofType?: {
                      __typename?: '__Type'
                      kind: __TypeKind
                      name?: string | null
                    } | null
                  } | null
                } | null
              } | null
            } | null
          } | null
        } | null
      }> | null
    }>
    directives: Array<{
      __typename?: '__Directive'
      name: string
      locations: Array<__DirectiveLocation>
      args: Array<{
        __typename?: '__InputValue'
        name: string
        defaultValue?: string | null
        type: {
          __typename?: '__Type'
          kind: __TypeKind
          name?: string | null
          ofType?: {
            __typename?: '__Type'
            kind: __TypeKind
            name?: string | null
            ofType?: {
              __typename?: '__Type'
              kind: __TypeKind
              name?: string | null
              ofType?: {
                __typename?: '__Type'
                kind: __TypeKind
                name?: string | null
                ofType?: {
                  __typename?: '__Type'
                  kind: __TypeKind
                  name?: string | null
                  ofType?: {
                    __typename?: '__Type'
                    kind: __TypeKind
                    name?: string | null
                    ofType?: {
                      __typename?: '__Type'
                      kind: __TypeKind
                      name?: string | null
                      ofType?: {
                        __typename?: '__Type'
                        kind: __TypeKind
                        name?: string | null
                      } | null
                    } | null
                  } | null
                } | null
              } | null
            } | null
          } | null
        }
      }>
    }>
  }
}

export type TypeRefFragment = {
  __typename?: '__Type'
  kind: __TypeKind
  name?: string | null
  ofType?: {
    __typename?: '__Type'
    kind: __TypeKind
    name?: string | null
    ofType?: {
      __typename?: '__Type'
      kind: __TypeKind
      name?: string | null
      ofType?: {
        __typename?: '__Type'
        kind: __TypeKind
        name?: string | null
        ofType?: {
          __typename?: '__Type'
          kind: __TypeKind
          name?: string | null
          ofType?: {
            __typename?: '__Type'
            kind: __TypeKind
            name?: string | null
            ofType?: {
              __typename?: '__Type'
              kind: __TypeKind
              name?: string | null
              ofType?: {
                __typename?: '__Type'
                kind: __TypeKind
                name?: string | null
              } | null
            } | null
          } | null
        } | null
      } | null
    } | null
  } | null
}

export type CreateOrganizationMutationVariables = Exact<{
  organization: OrganizationInput
}>

export type CreateOrganizationMutation = {
  __typename?: 'Mutation'
  createOrganization: {
    __typename?: 'Organization'
    _id: any
    name: string
    owner: { __typename?: 'User'; _id: any }
    members: Array<{ __typename?: 'User'; _id: any; email: string }>
  }
}

export type DeleteOrganizationMutationVariables = Exact<{
  organizationId: Scalars['ObjectId']
}>

export type DeleteOrganizationMutation = {
  __typename?: 'Mutation'
  deleteOrganization: any
}

export type ListOrganizationsQueryVariables = Exact<{ [key: string]: never }>

export type ListOrganizationsQuery = {
  __typename?: 'Query'
  listOrganizations: Array<{
    __typename?: 'Organization'
    _id: any
    name: string
    owner: { __typename?: 'User'; _id: any }
    members: Array<{ __typename?: 'User'; _id: any; email: string }>
  }>
}

export type CreateProjectMutationVariables = Exact<{
  project: ProjectInput
}>

export type CreateProjectMutation = {
  __typename?: 'Mutation'
  createProject: {
    __typename?: 'Project'
    _id: any
    projectName: string
    appId: string
  }
}

export type DeleteProjectMutationVariables = Exact<{
  projectId: Scalars['ObjectId']
}>

export type DeleteProjectMutation = {
  __typename?: 'Mutation'
  deleteProject: any
}

export type GetProjectQueryVariables = Exact<{
  projectId: Scalars['ObjectId']
}>

export type GetProjectQuery = {
  __typename?: 'Query'
  getProject: {
    __typename?: 'Project'
    _id: any
    appId: string
    projectName: string
    appConfig: {
      __typename?: 'AppConfig'
      apiConfig: {
        __typename?: 'Api'
        queries: Array<string>
        mutations: Array<string>
        subscriptions: Array<string>
        models: Array<{
          __typename?: 'EntityModel'
          _id: any
          name: string
          keys: Array<{
            __typename?: 'Key'
            name: string
            fieldNames: Array<string>
          }>
          auth: Array<{
            __typename?: 'DataAuth'
            allow: string
            provider: string
            ownerField: string
            identityClaim: string
            groupClaim: string
            groups: Array<string>
            groupsField: string
            operations: Array<string>
          }>
          fields: Array<{
            __typename?: 'DataField'
            _id: any
            fieldName: string
            isUnique: boolean
            isHashed: boolean
            nullable: boolean
            dataType: string
            rules: Array<{
              __typename?: 'DataAuth'
              allow: string
              provider: string
              ownerField: string
              identityClaim: string
              groupClaim: string
              groups: Array<string>
              groupsField: string
              operations: Array<string>
            }>
            keys: Array<{
              __typename?: 'Key'
              name: string
              fieldNames: Array<string>
            }>
            connection?: Array<{
              __typename?: 'Connection'
              keyName: string
              fieldNames: Array<string>
            }> | null
          }>
        }>
      }
    }
  }
}

export type ListProjectsQueryVariables = Exact<{ [key: string]: never }>

export type ListProjectsQuery = {
  __typename?: 'Query'
  listProjects: Array<{
    __typename?: 'Project'
    _id: any
    projectName: string
    appId: string
  }>
}

export type PublishApiMutationVariables = Exact<{
  projectId: Scalars['ObjectId']
}>

export type PublishApiMutation = {
  __typename?: 'Mutation'
  publishApi: boolean
}

export type UpdateAuthMutationVariables = Exact<{
  projectId: Scalars['ObjectId']
  input: AuthInput
}>

export type UpdateAuthMutation = {
  __typename?: 'Mutation'
  updateAuth?: {
    __typename?: 'Auth'
    _id: any
    allowUnauthenticatedUsers?: boolean | null
    mfaEnabled?: boolean | null
    mfaConfiguration?: string | null
    mfaTypes?: string | null
    smsAuthenticationMessage?: string | null
    smsVerificationMessage?: string | null
    emailVerificationSubject?: string | null
    emailVerificationMessage?: string | null
    defaultPasswordPolicy?: boolean | null
    passwordPolicyMinLength?: number | null
    passwordRequiresUppercase: boolean
    passwordRequiresNumbers: boolean
    passwordRequiresSymbols: boolean
    requiredAttributes?: Array<string> | null
    clientRefreshTokenValidity?: number | null
    usernameCaseSensitive?: boolean | null
    tableId?: string | null
    usernameFieldId?: string | null
    passwordFieldId?: string | null
  } | null
}

export type LoginMutationVariables = Exact<{
  email: Scalars['String']
  password: Scalars['String']
}>

export type LoginMutation = {
  __typename?: 'Mutation'
  login: {
    __typename?: 'UserResponse'
    sessionId?: string | null
    errors?: Array<{
      __typename?: 'FieldError'
      field: string
      message: string
    }> | null
    user?: {
      __typename?: 'User'
      _id: any
      email: string
      userRole: string
    } | null
  }
}

export type RegisterMutationVariables = Exact<{
  email: Scalars['String']
  password: Scalars['String']
}>

export type RegisterMutation = {
  __typename?: 'Mutation'
  register: {
    __typename?: 'UserResponse'
    errors?: Array<{
      __typename?: 'FieldError'
      field: string
      message: string
    }> | null
    user?: { __typename?: 'User'; email: string; userRole: string } | null
  }
}

export const TypeRefFragmentDoc = gql`
  fragment TypeRef on __Type {
    kind
    name
    ofType {
      kind
      name
      ofType {
        kind
        name
        ofType {
          kind
          name
          ofType {
            kind
            name
            ofType {
              kind
              name
              ofType {
                kind
                name
                ofType {
                  kind
                  name
                }
              }
            }
          }
        }
      }
    }
  }
`
export const InputValueFragmentDoc = gql`
  fragment InputValue on __InputValue {
    name
    type {
      ...TypeRef
    }
    defaultValue
  }
  ${TypeRefFragmentDoc}
`
export const FullTypeFragmentDoc = gql`
  fragment FullType on __Type {
    kind
    name
    fields(includeDeprecated: true) {
      name
      args {
        ...InputValue
      }
      type {
        ...TypeRef
      }
      isDeprecated
      deprecationReason
    }
    inputFields {
      ...InputValue
    }
    interfaces {
      ...TypeRef
    }
    enumValues(includeDeprecated: true) {
      name
      isDeprecated
      deprecationReason
    }
    possibleTypes {
      ...TypeRef
    }
  }
  ${InputValueFragmentDoc}
  ${TypeRefFragmentDoc}
`
export const CreateDataFieldDocument = gql`
  mutation CreateDataField(
    $projectId: ObjectId!
    $entityModelId: ObjectId!
    $dataField: DataFieldInput!
  ) {
    createDataField(
      projectId: $projectId
      entityModelId: $entityModelId
      dataField: $dataField
    ) {
      _id
      fieldName
      isUnique
      isHashed
      nullable
      dataType
      rules {
        allow
        provider
        ownerField
        identityClaim
        groupClaim
        groups
        groupsField
        operations
      }
      keys {
        name
        fieldNames
      }
      connection {
        keyName
        fieldNames
      }
    }
  }
`
export type CreateDataFieldMutationFn = Apollo.MutationFunction<
  CreateDataFieldMutation,
  CreateDataFieldMutationVariables
>

/**
 * __useCreateDataFieldMutation__
 *
 * To run a mutation, you first call `useCreateDataFieldMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateDataFieldMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createDataFieldMutation, { data, loading, error }] = useCreateDataFieldMutation({
 *   variables: {
 *      projectId: // value for 'projectId'
 *      entityModelId: // value for 'entityModelId'
 *      dataField: // value for 'dataField'
 *   },
 * });
 */
export function useCreateDataFieldMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateDataFieldMutation,
    CreateDataFieldMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    CreateDataFieldMutation,
    CreateDataFieldMutationVariables
  >(CreateDataFieldDocument, options)
}
export type CreateDataFieldMutationHookResult = ReturnType<
  typeof useCreateDataFieldMutation
>
export type CreateDataFieldMutationResult =
  Apollo.MutationResult<CreateDataFieldMutation>
export type CreateDataFieldMutationOptions = Apollo.BaseMutationOptions<
  CreateDataFieldMutation,
  CreateDataFieldMutationVariables
>
export const DeleteDataFieldDocument = gql`
  mutation DeleteDataField(
    $projectId: ObjectId!
    $entityModelId: ObjectId!
    $dataFieldId: ObjectId!
  ) {
    deleteDataField(
      projectId: $projectId
      entityModelId: $entityModelId
      dataFieldId: $dataFieldId
    )
  }
`
export type DeleteDataFieldMutationFn = Apollo.MutationFunction<
  DeleteDataFieldMutation,
  DeleteDataFieldMutationVariables
>

/**
 * __useDeleteDataFieldMutation__
 *
 * To run a mutation, you first call `useDeleteDataFieldMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteDataFieldMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteDataFieldMutation, { data, loading, error }] = useDeleteDataFieldMutation({
 *   variables: {
 *      projectId: // value for 'projectId'
 *      entityModelId: // value for 'entityModelId'
 *      dataFieldId: // value for 'dataFieldId'
 *   },
 * });
 */
export function useDeleteDataFieldMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteDataFieldMutation,
    DeleteDataFieldMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    DeleteDataFieldMutation,
    DeleteDataFieldMutationVariables
  >(DeleteDataFieldDocument, options)
}
export type DeleteDataFieldMutationHookResult = ReturnType<
  typeof useDeleteDataFieldMutation
>
export type DeleteDataFieldMutationResult =
  Apollo.MutationResult<DeleteDataFieldMutation>
export type DeleteDataFieldMutationOptions = Apollo.BaseMutationOptions<
  DeleteDataFieldMutation,
  DeleteDataFieldMutationVariables
>
export const CreateEntityModelDocument = gql`
  mutation CreateEntityModel($projectId: ObjectId!, $name: String!) {
    createEntityModel(projectId: $projectId, name: $name) {
      _id
      name
    }
  }
`
export type CreateEntityModelMutationFn = Apollo.MutationFunction<
  CreateEntityModelMutation,
  CreateEntityModelMutationVariables
>

/**
 * __useCreateEntityModelMutation__
 *
 * To run a mutation, you first call `useCreateEntityModelMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateEntityModelMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createEntityModelMutation, { data, loading, error }] = useCreateEntityModelMutation({
 *   variables: {
 *      projectId: // value for 'projectId'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useCreateEntityModelMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateEntityModelMutation,
    CreateEntityModelMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    CreateEntityModelMutation,
    CreateEntityModelMutationVariables
  >(CreateEntityModelDocument, options)
}
export type CreateEntityModelMutationHookResult = ReturnType<
  typeof useCreateEntityModelMutation
>
export type CreateEntityModelMutationResult =
  Apollo.MutationResult<CreateEntityModelMutation>
export type CreateEntityModelMutationOptions = Apollo.BaseMutationOptions<
  CreateEntityModelMutation,
  CreateEntityModelMutationVariables
>
export const IntrospectionQueryDocument = gql`
  query IntrospectionQuery {
    __schema {
      queryType {
        name
      }
      mutationType {
        name
      }
      subscriptionType {
        name
      }
      types {
        ...FullType
      }
      directives {
        name
        locations
        args {
          ...InputValue
        }
      }
    }
  }
  ${FullTypeFragmentDoc}
  ${InputValueFragmentDoc}
`

/**
 * __useIntrospectionQueryQuery__
 *
 * To run a query within a React component, call `useIntrospectionQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useIntrospectionQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIntrospectionQueryQuery({
 *   variables: {
 *   },
 * });
 */
export function useIntrospectionQueryQuery(
  baseOptions?: Apollo.QueryHookOptions<
    IntrospectionQueryQuery,
    IntrospectionQueryQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    IntrospectionQueryQuery,
    IntrospectionQueryQueryVariables
  >(IntrospectionQueryDocument, options)
}
export function useIntrospectionQueryLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    IntrospectionQueryQuery,
    IntrospectionQueryQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    IntrospectionQueryQuery,
    IntrospectionQueryQueryVariables
  >(IntrospectionQueryDocument, options)
}
export type IntrospectionQueryQueryHookResult = ReturnType<
  typeof useIntrospectionQueryQuery
>
export type IntrospectionQueryLazyQueryHookResult = ReturnType<
  typeof useIntrospectionQueryLazyQuery
>
export type IntrospectionQueryQueryResult = Apollo.QueryResult<
  IntrospectionQueryQuery,
  IntrospectionQueryQueryVariables
>
export const CreateOrganizationDocument = gql`
  mutation CreateOrganization($organization: OrganizationInput!) {
    createOrganization(organization: $organization) {
      _id
      name
      owner {
        _id
      }
      members {
        _id
        email
      }
    }
  }
`
export type CreateOrganizationMutationFn = Apollo.MutationFunction<
  CreateOrganizationMutation,
  CreateOrganizationMutationVariables
>

/**
 * __useCreateOrganizationMutation__
 *
 * To run a mutation, you first call `useCreateOrganizationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOrganizationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOrganizationMutation, { data, loading, error }] = useCreateOrganizationMutation({
 *   variables: {
 *      organization: // value for 'organization'
 *   },
 * });
 */
export function useCreateOrganizationMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateOrganizationMutation,
    CreateOrganizationMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    CreateOrganizationMutation,
    CreateOrganizationMutationVariables
  >(CreateOrganizationDocument, options)
}
export type CreateOrganizationMutationHookResult = ReturnType<
  typeof useCreateOrganizationMutation
>
export type CreateOrganizationMutationResult =
  Apollo.MutationResult<CreateOrganizationMutation>
export type CreateOrganizationMutationOptions = Apollo.BaseMutationOptions<
  CreateOrganizationMutation,
  CreateOrganizationMutationVariables
>
export const DeleteOrganizationDocument = gql`
  mutation DeleteOrganization($organizationId: ObjectId!) {
    deleteOrganization(organizationId: $organizationId)
  }
`
export type DeleteOrganizationMutationFn = Apollo.MutationFunction<
  DeleteOrganizationMutation,
  DeleteOrganizationMutationVariables
>

/**
 * __useDeleteOrganizationMutation__
 *
 * To run a mutation, you first call `useDeleteOrganizationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOrganizationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOrganizationMutation, { data, loading, error }] = useDeleteOrganizationMutation({
 *   variables: {
 *      organizationId: // value for 'organizationId'
 *   },
 * });
 */
export function useDeleteOrganizationMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteOrganizationMutation,
    DeleteOrganizationMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    DeleteOrganizationMutation,
    DeleteOrganizationMutationVariables
  >(DeleteOrganizationDocument, options)
}
export type DeleteOrganizationMutationHookResult = ReturnType<
  typeof useDeleteOrganizationMutation
>
export type DeleteOrganizationMutationResult =
  Apollo.MutationResult<DeleteOrganizationMutation>
export type DeleteOrganizationMutationOptions = Apollo.BaseMutationOptions<
  DeleteOrganizationMutation,
  DeleteOrganizationMutationVariables
>
export const ListOrganizationsDocument = gql`
  query ListOrganizations {
    listOrganizations {
      _id
      name
      owner {
        _id
      }
      members {
        _id
        email
      }
    }
  }
`

/**
 * __useListOrganizationsQuery__
 *
 * To run a query within a React component, call `useListOrganizationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useListOrganizationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListOrganizationsQuery({
 *   variables: {
 *   },
 * });
 */
export function useListOrganizationsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ListOrganizationsQuery,
    ListOrganizationsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    ListOrganizationsQuery,
    ListOrganizationsQueryVariables
  >(ListOrganizationsDocument, options)
}
export function useListOrganizationsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ListOrganizationsQuery,
    ListOrganizationsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    ListOrganizationsQuery,
    ListOrganizationsQueryVariables
  >(ListOrganizationsDocument, options)
}
export type ListOrganizationsQueryHookResult = ReturnType<
  typeof useListOrganizationsQuery
>
export type ListOrganizationsLazyQueryHookResult = ReturnType<
  typeof useListOrganizationsLazyQuery
>
export type ListOrganizationsQueryResult = Apollo.QueryResult<
  ListOrganizationsQuery,
  ListOrganizationsQueryVariables
>
export const CreateProjectDocument = gql`
  mutation CreateProject($project: ProjectInput!) {
    createProject(project: $project) {
      _id
      projectName
      appId
    }
  }
`
export type CreateProjectMutationFn = Apollo.MutationFunction<
  CreateProjectMutation,
  CreateProjectMutationVariables
>

/**
 * __useCreateProjectMutation__
 *
 * To run a mutation, you first call `useCreateProjectMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProjectMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProjectMutation, { data, loading, error }] = useCreateProjectMutation({
 *   variables: {
 *      project: // value for 'project'
 *   },
 * });
 */
export function useCreateProjectMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateProjectMutation,
    CreateProjectMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    CreateProjectMutation,
    CreateProjectMutationVariables
  >(CreateProjectDocument, options)
}
export type CreateProjectMutationHookResult = ReturnType<
  typeof useCreateProjectMutation
>
export type CreateProjectMutationResult =
  Apollo.MutationResult<CreateProjectMutation>
export type CreateProjectMutationOptions = Apollo.BaseMutationOptions<
  CreateProjectMutation,
  CreateProjectMutationVariables
>
export const DeleteProjectDocument = gql`
  mutation DeleteProject($projectId: ObjectId!) {
    deleteProject(projectId: $projectId)
  }
`
export type DeleteProjectMutationFn = Apollo.MutationFunction<
  DeleteProjectMutation,
  DeleteProjectMutationVariables
>

/**
 * __useDeleteProjectMutation__
 *
 * To run a mutation, you first call `useDeleteProjectMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteProjectMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteProjectMutation, { data, loading, error }] = useDeleteProjectMutation({
 *   variables: {
 *      projectId: // value for 'projectId'
 *   },
 * });
 */
export function useDeleteProjectMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteProjectMutation,
    DeleteProjectMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    DeleteProjectMutation,
    DeleteProjectMutationVariables
  >(DeleteProjectDocument, options)
}
export type DeleteProjectMutationHookResult = ReturnType<
  typeof useDeleteProjectMutation
>
export type DeleteProjectMutationResult =
  Apollo.MutationResult<DeleteProjectMutation>
export type DeleteProjectMutationOptions = Apollo.BaseMutationOptions<
  DeleteProjectMutation,
  DeleteProjectMutationVariables
>
export const GetProjectDocument = gql`
  query GetProject($projectId: ObjectId!) {
    getProject(projectId: $projectId) {
      _id
      appId
      projectName
      appConfig {
        apiConfig {
          models {
            _id
            name
            keys {
              name
              fieldNames
            }
            auth {
              allow
              provider
              ownerField
              identityClaim
              groupClaim
              groups
              groupsField
              operations
            }
            fields {
              _id
              fieldName
              isUnique
              isHashed
              nullable
              dataType
              rules {
                allow
                provider
                ownerField
                identityClaim
                groupClaim
                groups
                groupsField
                operations
              }
              keys {
                name
                fieldNames
              }
              connection {
                keyName
                fieldNames
              }
            }
          }
          queries
          mutations
          subscriptions
        }
      }
    }
  }
`

/**
 * __useGetProjectQuery__
 *
 * To run a query within a React component, call `useGetProjectQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProjectQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProjectQuery({
 *   variables: {
 *      projectId: // value for 'projectId'
 *   },
 * });
 */
export function useGetProjectQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetProjectQuery,
    GetProjectQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetProjectQuery, GetProjectQueryVariables>(
    GetProjectDocument,
    options
  )
}
export function useGetProjectLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetProjectQuery,
    GetProjectQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetProjectQuery, GetProjectQueryVariables>(
    GetProjectDocument,
    options
  )
}
export type GetProjectQueryHookResult = ReturnType<typeof useGetProjectQuery>
export type GetProjectLazyQueryHookResult = ReturnType<
  typeof useGetProjectLazyQuery
>
export type GetProjectQueryResult = Apollo.QueryResult<
  GetProjectQuery,
  GetProjectQueryVariables
>
export const ListProjectsDocument = gql`
  query ListProjects {
    listProjects {
      _id
      projectName
      appId
    }
  }
`

/**
 * __useListProjectsQuery__
 *
 * To run a query within a React component, call `useListProjectsQuery` and pass it any options that fit your needs.
 * When your component renders, `useListProjectsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListProjectsQuery({
 *   variables: {
 *   },
 * });
 */
export function useListProjectsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ListProjectsQuery,
    ListProjectsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<ListProjectsQuery, ListProjectsQueryVariables>(
    ListProjectsDocument,
    options
  )
}
export function useListProjectsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ListProjectsQuery,
    ListProjectsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<ListProjectsQuery, ListProjectsQueryVariables>(
    ListProjectsDocument,
    options
  )
}
export type ListProjectsQueryHookResult = ReturnType<
  typeof useListProjectsQuery
>
export type ListProjectsLazyQueryHookResult = ReturnType<
  typeof useListProjectsLazyQuery
>
export type ListProjectsQueryResult = Apollo.QueryResult<
  ListProjectsQuery,
  ListProjectsQueryVariables
>
export const PublishApiDocument = gql`
  mutation PublishApi($projectId: ObjectId!) {
    publishApi(projectId: $projectId)
  }
`
export type PublishApiMutationFn = Apollo.MutationFunction<
  PublishApiMutation,
  PublishApiMutationVariables
>

/**
 * __usePublishApiMutation__
 *
 * To run a mutation, you first call `usePublishApiMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePublishApiMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [publishApiMutation, { data, loading, error }] = usePublishApiMutation({
 *   variables: {
 *      projectId: // value for 'projectId'
 *   },
 * });
 */
export function usePublishApiMutation(
  baseOptions?: Apollo.MutationHookOptions<
    PublishApiMutation,
    PublishApiMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<PublishApiMutation, PublishApiMutationVariables>(
    PublishApiDocument,
    options
  )
}
export type PublishApiMutationHookResult = ReturnType<
  typeof usePublishApiMutation
>
export type PublishApiMutationResult = Apollo.MutationResult<PublishApiMutation>
export type PublishApiMutationOptions = Apollo.BaseMutationOptions<
  PublishApiMutation,
  PublishApiMutationVariables
>
export const UpdateAuthDocument = gql`
  mutation UpdateAuth($projectId: ObjectId!, $input: AuthInput!) {
    updateAuth(projectId: $projectId, input: $input) {
      _id
      allowUnauthenticatedUsers
      mfaEnabled
      mfaConfiguration
      mfaTypes
      smsAuthenticationMessage
      smsVerificationMessage
      emailVerificationSubject
      emailVerificationMessage
      defaultPasswordPolicy
      passwordPolicyMinLength
      passwordRequiresUppercase
      passwordRequiresNumbers
      passwordRequiresSymbols
      requiredAttributes
      clientRefreshTokenValidity
      usernameCaseSensitive
      tableId
      usernameFieldId
      passwordFieldId
    }
  }
`
export type UpdateAuthMutationFn = Apollo.MutationFunction<
  UpdateAuthMutation,
  UpdateAuthMutationVariables
>

/**
 * __useUpdateAuthMutation__
 *
 * To run a mutation, you first call `useUpdateAuthMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAuthMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAuthMutation, { data, loading, error }] = useUpdateAuthMutation({
 *   variables: {
 *      projectId: // value for 'projectId'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateAuthMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateAuthMutation,
    UpdateAuthMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<UpdateAuthMutation, UpdateAuthMutationVariables>(
    UpdateAuthDocument,
    options
  )
}
export type UpdateAuthMutationHookResult = ReturnType<
  typeof useUpdateAuthMutation
>
export type UpdateAuthMutationResult = Apollo.MutationResult<UpdateAuthMutation>
export type UpdateAuthMutationOptions = Apollo.BaseMutationOptions<
  UpdateAuthMutation,
  UpdateAuthMutationVariables
>
export const LoginDocument = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      errors {
        field
        message
      }
      user {
        _id
        email
        userRole
      }
      sessionId
    }
  }
`
export type LoginMutationFn = Apollo.MutationFunction<
  LoginMutation,
  LoginMutationVariables
>

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(
  baseOptions?: Apollo.MutationHookOptions<
    LoginMutation,
    LoginMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<LoginMutation, LoginMutationVariables>(
    LoginDocument,
    options
  )
}
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>
export type LoginMutationOptions = Apollo.BaseMutationOptions<
  LoginMutation,
  LoginMutationVariables
>
export const RegisterDocument = gql`
  mutation Register($email: String!, $password: String!) {
    register(email: $email, password: $password) {
      errors {
        field
        message
      }
      user {
        email
        userRole
      }
    }
  }
`
export type RegisterMutationFn = Apollo.MutationFunction<
  RegisterMutation,
  RegisterMutationVariables
>

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useRegisterMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RegisterMutation,
    RegisterMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(
    RegisterDocument,
    options
  )
}
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>
export type RegisterMutationOptions = Apollo.BaseMutationOptions<
  RegisterMutation,
  RegisterMutationVariables
>
