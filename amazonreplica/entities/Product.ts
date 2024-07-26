import { Entity, PrimaryKey, Property } from '@mikro-orm/core';
import { ObjectId } from '@mikro-orm/mongodb';
@Entity()
export class Product {
  @PrimaryKey()
  _id!: ObjectId;

  @Property()
  id!: number;

  @Property()
  title!: string;

  @Property()
  price!: number;

  @Property()
  description!: string;

  @Property()
  images!: string[];
}
