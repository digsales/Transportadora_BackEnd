import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  protected tableName = "clientes";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id");
      table.string("nome").notNullable();
      table.string("cnpj", 14).notNullable();
      table.string("uf", 2).notNullable();
      table.string("cidade").notNullable();
      table.string("logradouro").notNullable();
      table.string("telefone").notNullable();
      table.string("email").notNullable();

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
