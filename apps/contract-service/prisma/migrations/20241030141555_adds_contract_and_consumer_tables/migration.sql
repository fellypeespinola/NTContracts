-- CreateEnum
CREATE TYPE "Currency" AS ENUM ('USD', 'BRL');

-- CreateEnum
CREATE TYPE "ContractStatus" AS ENUM ('draft', 'signed', 'canceled', 'not_signed', 'terminated');

-- CreateTable
CREATE TABLE "contract" (
    "id" SERIAL NOT NULL,
    "uuid" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "currency" "Currency" NOT NULL,
    "identifier" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "status" "ContractStatus" NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL,
    "end_date" TIMESTAMP(3) NOT NULL,
    "reniew_date" TIMESTAMP(3) NOT NULL,
    "contractor_id" INTEGER NOT NULL,
    "contracted_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deactivated_at" TIMESTAMP(3),

    CONSTRAINT "contract_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "customer" (
    "id" SERIAL NOT NULL,
    "uuid" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "identity" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deactivated_at" TIMESTAMP(3),

    CONSTRAINT "customer_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "contract_identifier_key" ON "contract"("identifier");

-- CreateIndex
CREATE UNIQUE INDEX "customer_email_key" ON "customer"("email");

-- CreateIndex
CREATE UNIQUE INDEX "customer_address_key" ON "customer"("address");

-- CreateIndex
CREATE UNIQUE INDEX "customer_identity_key" ON "customer"("identity");

-- AddForeignKey
ALTER TABLE "contract" ADD CONSTRAINT "contract_contractor_id_fkey" FOREIGN KEY ("contractor_id") REFERENCES "customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "contract" ADD CONSTRAINT "contract_contracted_id_fkey" FOREIGN KEY ("contracted_id") REFERENCES "customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
