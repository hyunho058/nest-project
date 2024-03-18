import { Prop, Schema, SchemaFactory, SchemaOptions } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

const options: SchemaOptions = {
  timestamps: true,
};

@Schema(options)
export class User extends Document {
  @Prop({
    request: true,
    unique: true,
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @Prop()
  @IsString()
  @IsNotEmpty()
  name: string;

  @Prop()
  @IsNotEmpty()
  password: number;

  @Prop()
  imgUrl: string;
}

export const CatSchema = SchemaFactory.createForClass(User);
