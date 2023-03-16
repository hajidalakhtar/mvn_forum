/*
  Warnings:

  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_authorId_fkey";

-- DropTable
DROP TABLE "Post";

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "AttendanceUser" (
    "id" STRING NOT NULL,
    "employee_number" STRING,
    "unit" STRING,
    "employee_name" STRING,
    "job_title_name" STRING,
    "job_level" STRING,
    "grade" STRING,
    "status_karyawan" STRING,
    "keikutsertaan" STRING,
    "status" STRING,
    "email" STRING,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "attendance_at" TIMESTAMP(3),

    CONSTRAINT "AttendanceUser_pkey" PRIMARY KEY ("id")
);
