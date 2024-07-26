'use client';
import {Image} from '@nextui-org/react'
import React from 'react'
import NextImage from 'next/image';

import { Product } from '@/entities/Product';


function cleanImageUrl(imageUrl:string | undefined) {
    if(imageUrl === undefined) {
      return "https://picsum.photos/300";
    }
    return imageUrl
      .replace(/^\["/, '') // Remove the leading [" characters
      .replace(/"\]$/, ''); // Remove the trailing "] characters
  }

const ImageComponent: React.FC<{ product: Product | undefined }> = ({ product }) => {
    return (
            <Image
            className='max-w-[100%] max-h-[50vh]'
            src={cleanImageUrl(product?.images[0])}
                alt={product?.title}
                width={500}
                height={400}
                shadow='sm'
                isZoomed={true}
                fallbackSrc="https://api.api-ninjas.com/v1/randomimage?category=technology"

            />
    )
}

export default ImageComponent
