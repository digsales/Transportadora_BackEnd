import { schema, rules, CustomMessages } from "@ioc:Adonis/Core/Validator";
import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class CargaUpdateValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    caminhaoId: schema.number.optional([
      rules.exists({ table: "caminhaos", column: "id" }),
    ]),
    reboqueId: schema.number.optional([
      rules.exists({ table: "reboques", column: "id" }),
    ]),
    clienteId: schema.number.optional([
      rules.exists({ table: "clientes", column: "id" }),
    ]),
    peso: schema.number.optional(),
    tipoCarga: schema.string.optional([rules.maxLength(100)]),
  });

  public messages: CustomMessages = {};
}
