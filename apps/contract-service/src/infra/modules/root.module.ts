import { join } from 'path';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { PrismaModule } from './prisma/prisma.module';
import { ContractModule } from './contract/contract.module';
import { CustomerModule } from './customer/customer.module';

@Module({
  imports: [
    PrismaModule,
    ContractModule,
    CustomerModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: join(
        process.cwd(),
        'src/infra/config/graphql/schema.gql',
      ),
    }),
  ],
  controllers: [],
  providers: [],
})
export class RootModule {}
