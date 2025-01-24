-- CreateTable
CREATE TABLE "Messages" (
    "message" TEXT,
    "name" VARCHAR(255),
    "id" SERIAL NOT NULL,
    "email" VARCHAR(255),
    "userID" INTEGER,
    "createdAt" TIMESTAMPTZ(6) NOT NULL,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "Messages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Products" (
    "product" VARCHAR(255) NOT NULL,
    "id" SERIAL NOT NULL,
    "description" VARCHAR(255),
    "price" DOUBLE PRECISION,
    "createdAt" TIMESTAMPTZ(6) NOT NULL,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "Products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SequelizeMeta" (
    "name" VARCHAR(255) NOT NULL,

    CONSTRAINT "SequelizeMeta_pkey" PRIMARY KEY ("name")
);

-- CreateTable
CREATE TABLE "Users" (
    "name" VARCHAR(255),
    "firstName" VARCHAR(255),
    "lastName" VARCHAR(255),
    "email" VARCHAR(255),
    "uid" SERIAL NOT NULL,
    "createdAt" TIMESTAMPTZ(6) NOT NULL,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("uid")
);

-- CreateTable
CREATE TABLE "jarens" (
    "age" INTEGER,
    "name" VARCHAR,
    "look" VARCHAR,
    "id" SERIAL NOT NULL,

    CONSTRAINT "jarens_pkey" PRIMARY KEY ("id")
);

