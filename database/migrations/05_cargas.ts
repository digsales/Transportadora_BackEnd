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
        .notNullable()
        .onDelete("CASCADE");
      table
        .integer("reboque_id")
        .unsigned()
        .references("id")
        .inTable("reboques")
        .notNullable()
        .onDelete("CASCADE");
      table
        .integer("cliente_id")
        .unsigned()
        .references("id")
        .inTable("clientes")
        .notNullable()
        .onDelete("CASCADE");
      table.decimal("peso").notNullable();
      table.string("tipo_carga", 100).notNullable();

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
