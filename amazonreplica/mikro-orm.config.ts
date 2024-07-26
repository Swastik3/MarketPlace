import {defineConfig } from '@mikro-orm/core';
import { MongoDriver } from '@mikro-orm/mongodb';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';
import {Product} from './entities/Product';
import dotenv from 'dotenv';
dotenv.config();

const config = defineConfig({
  driver: MongoDriver,

  clientUrl: process.env.CLIENT_URI,
  dbName: 'amazon', // Replace with your actual database name
  entities: [Product], // Path to your entity files
  entitiesTs: ['./entities/'], // Path to your TypeScript entity files
  debug: true,
});

export default config;