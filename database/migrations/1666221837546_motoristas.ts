import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  protected tableName = "motoristas";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id");
      table.string("nome", 100).notNullable();
      table.string("cpf", 14).notNullable();
      table.date("data_nascimento");
      table.string("uf", 2);
      table.string("cidade", 100);
      table.string("logradouro", 100);
      table.string("complemento", 100);
      table.string("cep", 9);
      table.string("telefone", 15).notNullable();
      table.string("email", 100).notNullable();
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp("created_at", { useTz: true });
      table.timestamp("updated_at", { useTz: true });
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
