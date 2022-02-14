import { ObjectType, Field } from "type-graphql";
import mongoose from 'mongoose'
import { modelOptions, prop as Property, Severity } from "@typegoose/typegoose";
import { Api } from "./Api/Api.entity";

@modelOptions({ schemaOptions: { _id: false }, options: { allowMixed: Severity.ALLOW }})
@ObjectType()
export class AppConfig {
    @Field()
    @Property({type: () => Api, _id: false, default: new Api() })
    apiConfig!: Api;
}