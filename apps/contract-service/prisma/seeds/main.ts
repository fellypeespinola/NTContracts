import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  try {
    await prisma.customer.createMany({
      data: [
        {
          name: 'Customer 1',
          email: 'custumer1@example.com',
          identity: '123456789',
          address: 'Address 1',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Customer 2',
          email: 'custumer2@example.com',
          identity: '987654321',
          address: 'Address 2',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
    });
  } catch (e) {
    console.log('Error: ', e);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async () => {
    await prisma.$disconnect();
    process.exit(1);
  });
