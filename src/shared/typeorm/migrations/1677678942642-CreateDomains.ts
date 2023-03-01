import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateDomains1677678942642 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'domains',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'client_id',
            type: 'uuid',
          },
          {
            name: 'name',
            type: 'varchar',
            isUnique: true,
          },
          {
            name: 'price',
            type: 'decimal',
            precision: 10,
            scale: 2,
          },
          {
            name: 'status',
            type: 'varchar',
          },
          {
            name: 'buyDate',
            type: 'timestamp with time zone',
            default: 'now()',
          },
          {
            name: 'dueDate',
            type: 'timestamp with time zone',
            default: `now() + INTERVAL '12 months'`,
          },
          {
            name: 'created_at',
            type: 'timestamp with time zone',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp with time zone',
            default: 'now()',
          },
        ],
        foreignKeys: [
          {
            name: 'client',
            referencedTableName: 'users',
            referencedColumnNames: ['id'],
            columnNames: ['client_id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('domains');
  }
}
