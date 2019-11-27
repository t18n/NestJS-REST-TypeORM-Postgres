import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateBooks1574819073976 implements MigrationInterface {
    name = 'CreateBooks1574819073976'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "book" ("id" SERIAL NOT NULL, "title" character varying(50) NOT NULL, "price" integer NOT NULL, "genre" character varying(100), CONSTRAINT "PK_a3afef72ec8f80e6e5c310b28a4" PRIMARY KEY ("id"))`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP TABLE "book"`, undefined);
    }

}
