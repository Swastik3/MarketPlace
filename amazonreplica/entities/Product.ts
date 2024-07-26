import { Entity, PrimaryKey, Property } from '@mikro-orm/core';
import { ObjectId } from '@mikro-orm/mongodb';

@Entity()
export class Product {
  @PrimaryKey()
  _id: ObjectId;

  @Property()
  name: string;

  @Property()
  description: string;

  @Property()
  price: number;

  @Property()
  inStock: boolean;

  constructor(name: string, description: string, price: number, inStock: boolean) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.inStock = inStock;
  }
}
