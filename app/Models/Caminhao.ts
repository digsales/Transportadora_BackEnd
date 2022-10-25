import { DateTime } from "luxon";
import {
  BaseModel,
  BelongsTo,
  belongsTo,
  column,
  HasMany,
  hasMany,
} from "@ioc:Adonis/Lucid/Orm";
import Motorista from "./Motorista";
import Carga from "./Carga";

export default class Caminhao extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public motoristaId: number;

  @column()
  public modelo: string;

  @column()
  public cabine: string;

  @column()
  public marca: string;

  @column()
  public placa: string;

  @column()
  public cor: string;

  @column()
  public tipoCaminhao: string;

  @column()
  public potencia: number;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @belongsTo(() => Motorista)
  public motorista: BelongsTo<typeof Motorista>;

  @hasMany(() => Carga)
  public carga: HasMany<typeof Carga>;
}
