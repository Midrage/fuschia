import { ObjectType, Field } from "type-graphql";
import { prop as Property, getModelForClass, modelOptions, Severity } from "@typegoose/typegoose";
import { ObjectIdScalar } from "../../../utils/object-id.scalar";
import { ObjectId } from "mongoose";

@modelOptions({ options: { allowMixed: Severity.ALLOW }})
@ObjectType()
export class Auth {
  @Field(type => ObjectIdScalar)
  readonly _id!: ObjectId;

  @Field({ nullable: true })
  @Property()
  allowUnauthenticatedUsers!: Boolean;
  
  @Field({ nullable: true })
  @Property()
  mfaEnabled!: Boolean;
  
  @Field({ nullable: true })
  @Property()
  mfaConfiguration!: 'OFF' | 'ON' | 'OPTIONAL';
  
  @Field({ nullable: true })
  @Property()
  mfaTypes!: 'SMS' | 'TOTP' | 'EMAIL';
  
  @Field({ nullable: true })
  @Property()
  smsAuthenticationMessage!: string;
  
  @Field({ nullable: true })
  @Property()
  smsVerificationMessage!: string;
  
  @Field({ nullable: true })
  @Property()
  emailVerificationSubject!: string;
  
  @Field({ nullable: true })
  @Property()
  emailVerificationMessage!: string;

  @Field({ nullable: true })
  @Property()
  defaultPasswordPolicy!: boolean;

  @Field({ nullable: true })
  @Property()
  passwordPolicyMinLength!: number;
  
  @Field()
  @Property()
  passwordRequiresUppercase!: boolean;

  @Field()
  @Property()
  passwordRequiresNumbers!: boolean;
  
  @Field()
  @Property()
  passwordRequiresSymbols!: boolean;

  @Field(type => [String], { nullable: true })
  @Property({type: () => [String], default: [] })
  requiredAttributes!: string[];
  
  @Field({ nullable: true })
  @Property()
  clientRefreshTokenValidity!: number;
  
  @Field({ nullable: true })
  @Property()
  usernameCaseSensitive!: boolean;
  
  @Field({ nullable: true })
  @Property()
  tableId!: string;

  @Field({ nullable: true })
  @Property()
  usernameFieldId!: string;

  @Field({ nullable: true })
  @Property()
  passwordFieldId!: string;
}