import { DateTime } from "luxon";
import { BaseModel, column, HasMany, hasMany } from "@ioc:Adonis/Lucid/Orm";
import Carga from "./Carga";

export default class Reboque extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public tipoReboque: string;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @hasMany(() => Carga)
  public carga: HasMany<typeof Carga>;
}
