import { schema, rules, CustomMessages } from "@ioc:Adonis/Core/Validator";
import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class CaminhaoValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    motoristaId: schema.number([
      rules.exists({ table: "motoristas", column: "id" }),
    ]),
    modelo: schema.string([rules.maxLength(100)]),
    cabine: schema.string.optional([rules.maxLength(100)]),
    marca: schema.string([rules.maxLength(100)]),
    placa: schema.string([
      rules.minLength(7),
      rules.maxLength(7),
      rules.alphaNum(),
    ]),
    cor: schema.string.optional([rules.maxLength(100)]),
    tipoCaminhao: schema.string([rules.maxLength(100)]),
    potencia: schema.number.optional(),
  });

  public messages: CustomMessages = {};
}
