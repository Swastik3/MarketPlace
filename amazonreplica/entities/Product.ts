import { Entity, PrimaryKey, Property } from '@mikro-orm/core';
import { ObjectId } from '@mikro-orm/mongodb';
@Entity()
export class Product {
  @PrimaryKey()
  _id!: ObjectId;

  @Property({ persist: false })
  get stringId(): string {
    return this._id.toString();
  }
  
  @Property()
  title!: string;

  @Property()
  price!: number;

  @Property()
  description!: string;

  @Property()
  images!: string[];
}
