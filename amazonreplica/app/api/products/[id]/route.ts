import { NextRequest, NextResponse } from 'next/server';
import { Product } from '../../../../entities/Product';
import OrmWrapper from '../../../../lib/mikro-orm';
import { ObjectId } from '@mikro-orm/mongodb';

export async function GET(request: NextRequest, { params }: { params: { id: string }}) {
  try {
    // Get the EntityManager
    const orm = await OrmWrapper.getInstance();
    const em = orm.em.fork();
    // Get the product ID from the query parameter
    const productId = params.id;

    if (!productId) {
      return NextResponse.json(
        { error: 'Product ID is required' },
        { status: 400 }
      );
    }
    console.log("The product ID is:",  new ObjectId(productId));
    // Fetch the specific product
    const product = await em.findOne(Product, { _id: new ObjectId(productId) });
    console.log("The product fetched is:", product);
    if (!product) {
      return NextResponse.json(
        { error: 'Product not found' },
        { status: 404 }
      );
    }

    // Return the product as JSON
    return NextResponse.json({
      product: product,
      message: "Successfully fetched product"
    });
  } catch (error) {
    console.error('Failed to fetch product:', error);
    return NextResponse.json(
      { error: 'Failed to fetch product' },
      { status: 500 }
    );
  }
}