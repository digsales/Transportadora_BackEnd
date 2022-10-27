import { schema, rules, CustomMessages } from "@ioc:Adonis/Core/Validator";
import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class CargaValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    caminhaoId: schema.number([
      rules.exists({ table: "caminhaos", column: "id" }),
    ]),
    reboqueId: schema.number([
      rules.exists({ table: "reboques", column: "id" }),
    ]),
    clienteId: schema.number([
      rules.exists({ table: "clientes", column: "id" }),
    ]),
    peso: schema.number(),
    tipoCarga: schema.string([rules.maxLength(100)]),
  });
  public messages: CustomMessages = {};
}
