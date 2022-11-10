import { schema, rules, CustomMessages } from "@ioc:Adonis/Core/Validator";
import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class CaminhaoUpdateValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    motoristaId: schema.number.optional([
      rules.exists({ table: "motoristas", column: "id" }),
    ]),
    modelo: schema.string.optional([rules.maxLength(100)]),
    cabine: schema.string.optional([rules.maxLength(100)]),
    marca: schema.string.optional([rules.maxLength(100)]),
    placa: schema.string.optional([
      rules.minLength(7),
      rules.maxLength(7),
      rules.alphaNum(),
    ]),
    cor: schema.string.optional([rules.maxLength(100)]),
    tipoCaminhao: schema.string.optional([rules.maxLength(100)]),
    potencia: schema.number.optional(),
  });

  public messages: CustomMessages = {};
}
