import { schema, rules, CustomMessages } from "@ioc:Adonis/Core/Validator";
import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class ReboqueValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    tipoReboque: schema.string([rules.maxLength(100)]),
  });

  public messages: CustomMessages = {};
}
