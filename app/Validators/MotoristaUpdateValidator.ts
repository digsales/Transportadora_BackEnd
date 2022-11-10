import { schema, CustomMessages, rules } from "@ioc:Adonis/Core/Validator";
import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class MotoristaUpdateValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    nome: schema.string.optional([rules.maxLength(100)]),
    cpf: schema.string.optional([
      rules.range(11, 14),
      rules.regex(/^[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}$/),
    ]),
    dataNascimento: schema.date.optional(),
    uf: schema.string.optional([
      rules.minLength(2),
      rules.maxLength(2),
      rules.alpha(),
    ]),
    cidade: schema.string.optional([rules.maxLength(100)]),
    logradouro: schema.string.optional([rules.maxLength(100)]),
    complemento: schema.string.optional([rules.maxLength(100)]),
    cep: schema.string.optional([rules.range(8, 9)]),
    telefone: schema.string.optional([
      rules.range(11, 15),
      rules.mobile({ locale: ["pt-BR"] }),
    ]),
    email: schema.string.optional([rules.email(), rules.maxLength(100)]),
  });

  public messages: CustomMessages = {};
}
