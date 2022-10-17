import { MigrationInterface, QueryRunner } from "typeorm";

export class addedisActiveColumnUser1665880993032 implements MigrationInterface {
    name = 'addedisActiveColumnUser1665880993032'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "isActive" boolean NOT NULL DEFAULT true`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "isActive"`);
    }

}
