import { DateTime } from "luxon";
import { BaseModel, column } from "@ioc:Adonis/Lucid/Orm";

export default class Caminhao extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public motoristaId: number;

  @column()
  public modelo: string;

  @column()
  public marca: string;

  @column()
  public tipoCaminhao: string;

  @column()
  public potencia: number;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}
