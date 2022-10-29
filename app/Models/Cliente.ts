import { DateTime } from "luxon";
import { BaseModel, column, HasMany, hasMany } from "@ioc:Adonis/Lucid/Orm";
import Carga from "./Carga";

export default class Cliente extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public nome: string;

  @column()
  public cnpj: string;

  @column()
  public uf: string;

  @column()
  public cidade: string;

  @column()
  public logradouro: string;

  @column()
  public complemento: string;

  @column()
  public cep: string;

  @column()
  public telefone: string;

  @column()
  public email: string;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @hasMany(() => Carga)
  public cargas: HasMany<typeof Carga>;
}
