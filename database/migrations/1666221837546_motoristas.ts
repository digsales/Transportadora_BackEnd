import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  protected tableName = "motoristas";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id");
      table.string("Nome").notNullable();
      table.string("cpf", 11).notNullable();
      table.date("data_de_nascimento");
      table.string("uf", 2);
      table.string("cidade");
      table.string("logradouro");
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
