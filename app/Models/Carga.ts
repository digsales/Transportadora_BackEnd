import { DateTime } from "luxon";
import { BaseModel, BelongsTo, belongsTo, column } from "@ioc:Adonis/Lucid/Orm";
import Caminhao from "./Caminhao";
import Reboque from "./Reboque";
import Cliente from "./Cliente";

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

  @belongsTo(() => Caminhao)
  public caminhao: BelongsTo<typeof Caminhao>;

  @belongsTo(() => Reboque)
  public reboque: BelongsTo<typeof Reboque>;

  @belongsTo(() => Cliente)
  public cliente: BelongsTo<typeof Cliente>;
}
