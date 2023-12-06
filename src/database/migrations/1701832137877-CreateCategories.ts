// arquivo.ts
import * as dotenv from 'dotenv';
dotenv.config();

import { MigrationInterface, QueryRunner, Table } from "typeorm"
import { createConnection, ConnectionOptions } from "typeorm";

export class CreateCategories1701832137877 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        
        await queryRunner.createTable(
          new Table({
            name: "categories",
            columns: [
              {
                name: "id",
                type: "uuid",
                isPrimary: true,
              },
              {
                name: "id",
                type: "varchar",
                isUnique: true,
              },
              {
                name: "description",
                type: "varchar",
              },
              {
                name: "created_at",
                type: "timestamp",
                default: "now()",
              },
            ],
          })
        );
      }
    
      public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("categories")
      }
}
