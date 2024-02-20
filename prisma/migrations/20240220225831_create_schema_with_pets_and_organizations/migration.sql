-- CreateTable
CREATE TABLE "pets" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "type" TEXT NOT NULL,
    "size" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "energy_level" INTEGER NOT NULL,
    "dependency_level" TEXT NOT NULL,
    "environment" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "latitude" INTEGER NOT NULL,
    "longitude" INTEGER NOT NULL,
    "organization_id" TEXT NOT NULL,

    CONSTRAINT "pets_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "organization " (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "latitude" TEXT NOT NULL,
    "longitude" TEXT NOT NULL,
    "whatsapp" INTEGER NOT NULL,
    "password_hash" TEXT NOT NULL,

    CONSTRAINT "organization _pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "pets" ADD CONSTRAINT "pets_organization_id_fkey" FOREIGN KEY ("organization_id") REFERENCES "organization "("id") ON DELETE RESTRICT ON UPDATE CASCADE;
