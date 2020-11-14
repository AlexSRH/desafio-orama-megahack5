import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm'

export class CreateLogoFieldOnCompany1605372246932
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'companies',
      new TableColumn({
        name: 'stories',
        type: 'varchar',
        isNullable: true
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('companies', 'stories')
  }
}
