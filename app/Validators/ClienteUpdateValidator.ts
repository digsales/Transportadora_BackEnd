import { schema, CustomMessages, rules } from "@ioc:Adonis/Core/Validator";
import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class ClienteUpdateValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    nome: schema.string.optional([rules.maxLength(100)]),
    cnpj: schema.string.optional([
      rules.range(14, 18),
      rules.regex(/^[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}\-?[0-9]{2}$/),
    ]),
    uf: schema.string.optional([
      rules.minLength(2),
      rules.maxLength(2),
      rules.alphaNum(),
    ]),
    cidade: schema.string.optional([rules.maxLength(100), rules.alpha()]),
    logradouro: schema.string.optional([rules.maxLength(100)]),
    complemento: schema.string.optional([rules.maxLength(100)]),
    cep: schema.string.optional([rules.range(8, 9)]),
    telefone: schema.string.optional([
      rules.maxLength(15),
      rules.mobile({ locale: ["pt-BR"] }),
    ]),
    email: schema.string.optional([rules.email(), rules.maxLength(100)]),
  });

  public messages: CustomMessages = {};
}
