## Fullstack Engineer Interview Project: Amazon-like Marketplace
# Project Overview
Create a simplified version of an Amazon-like marketplace using Next.js, React, MikroORM, and Next UI components. The project should include a homepage and a product page.

# Technical Stack
Frontend: React with Next.js
Backend: Next.js API routes
Database: Any database of your choice (e.g., PostgreSQL, MySQL, SQLite)
ORM: MikroORM
UI Components: Next UI
Styling: Tailwind CSS

# Features

Homepage
- Header with logo and navigation menu
- Product grid displaying:
    - Product image (use stock images)
    - Product name
    - Price
- "Add to Cart" button (non-functional)

Cart page (placeholder page)


Product Page
- Product details:
    - Larger product image
    - Product name
    - Price
    - Description
    - "Add to Cart" button (again, non functional)

## Setup Instructions

Clone the repository:
`git clone https://github.com/Swastik3/MarketPlace.git`
 
`cd MarketPlace`
 
`cd amazonreplica`

Use the mongoDB URI in the email and create a `.env` file in `amazonreplica` (the root NextJS directory)
`CLIENT_URI = <uri_in_the_email>`



Install all the dependencies: `npm install`

Start the dev server: `npm run dev`

Navigate to `http://localhost:3000` in your browser to view the application.

## NOTES:

This was my first time using this tech stack: NextJS, TypeScript, Next UI and MikrORM. I have worked with tailwindCSS and MongoDB in the past and I am quite familiar with React and JavaScript in general which is why I could understand the implementation of this tech stack.

Here are some of the steps that I took and the entire roadmap of this development:
- I did use AI to generate simple UI template which I edited and made visually appealing
- Used mongoDB and loaded dummy data from "https://api.escuelajs.co/api/v1/products", the python script outside the next js directory for used for this
- Integrated mongoDB with mikrORM. Here is a particular detail I found with mongoDB which took me around 6 hours to debug
    - Since NextJS uses Webpack, TsMorphMetadataProvider cannot be used to detech TypeScript source files defining all entities. Unfortunately, in a lot of integrations, TsMorphMetadataProvider is used. While wokring with MongoDB + NextJS + TypeScript, always stick to the default metadata provider for Mikrorm.
- Set up API routes to fetch data from the DB 
- Made the website repsonsive

## Implementation shortcomings:
I do want to take a bit of time to explain the issues with the current state of this project. Having only started with Nextjs, here are the following things I could not implement in this timeframe:
- Pagination (partly because after the first 16 dummy data units, the rest are nonsencial)
- Add to Cart: since I could not implement authentication in this time, adding to cart did not make sense since there was no associated user to add the product to.
- Lack of Authentication
