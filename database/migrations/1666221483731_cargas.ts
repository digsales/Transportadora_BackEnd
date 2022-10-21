import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  protected tableName = "cargas";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id");
      table
        .integer("caminhao_id")
        .unsigned()
        .references("id")
        .inTable("caminhaos")
        .notNullable();
      table
        .integer("reboque_id")
        .unsigned()
        .references("id")
        .inTable("reboques")
        .notNullable();
      table
        .integer("cliente_id")
        .unsigned()
        .references("id")
        .inTable("clientes")
        .notNullable();
      table.integer("peso").notNullable();
      table.string("tipo_carga").notNullable();

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
