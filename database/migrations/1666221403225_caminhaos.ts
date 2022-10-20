import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  protected tableName = "caminhaos";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id");
      table
        .integer("motorista_id")
        .unsigned()
        .references("id")
        .inTable("motoristas")
        .notNullable();
      table.string("modelo").notNullable();
      table.string("marca").notNullable();
      table.integer("qtd_eixos");
      table.integer("potencia");

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
