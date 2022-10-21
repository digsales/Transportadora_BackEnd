import { DateTime } from "luxon";
import { BaseModel, column } from "@ioc:Adonis/Lucid/Orm";

export default class Carga extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public caminhaoId: number;

  @column()
  public reboqueId: number;

  @column()
  public clienteId: number;

  @column()
  public peso: number;

  @column()
  public tipoCarga: string;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}
