const { PrismaClient } = require('@prisma/client');
const express = require('express')

const prisma = new PrismaClient

const PORT  = process.env.PORT || 4000

const app = require('./app')


app.listen(PORT, async () => {
    try {
        await prisma.$connect();
    
        console.log(`Server running on port ${PORT}`);
    
      } catch (error) {
        console.error('Error connecting to database:', error);
        process.exit(1);
      }
})


process.on('SIGINT', async () => {
    await prisma.$disconnect();
    process.exit(0);
  });