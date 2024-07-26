import { NextRequest, NextResponse } from 'next/server';
import { MikroORM, EntityManager } from '@mikro-orm/core';
import { Product } from '../../../entities/Product'; // Adjust this import path
import OrmWrapper from '../../../lib/mikro-orm';


export async function GET(request: NextRequest) {
  try {
    // Get the EntityManager
    const orm = await OrmWrapper.getInstance();
    const em = orm.em.fork();
    // Fetch all products
    const products = await em.find(Product, {}, { limit: 18 });
    console.log("inside the API call", products.entries())
    // Return the products as JSON
    return NextResponse.json({
        allProducts: products,
        message: "Successfully fetched products"
    });
  } catch (error) {
    console.error('Failed to fetch products:', error);
    return NextResponse.json(
      { error: 'Failed to fetch products' },
      { status: 500 }
    );
  }
}