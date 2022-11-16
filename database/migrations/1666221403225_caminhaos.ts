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
        .onDelete("CASCADE");
      table.string("modelo", 100).notNullable();
      table.string("cabine", 100);
      table.string("marca", 100).notNullable();
      table.string("placa", 7).notNullable();
      table.string("cor", 100);
      table.string("tipo_caminhao", 100).notNullable();
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
