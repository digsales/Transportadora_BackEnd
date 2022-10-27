import { schema, rules, CustomMessages } from "@ioc:Adonis/Core/Validator";
import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class MotoristaValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    nome: schema.string([rules.maxLength(100)]),
    cpf: schema.string([
      rules.minLength(11),
      rules.maxLength(14),
      rules.unique({ table: "motoristas", column: "cpf" }),
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
    cep: schema.string.optional([rules.minLength(8), rules.maxLength(8)]),
    telefone: schema.string([
      rules.range(11, 15),
      rules.unique({ table: "motoristas", column: "telefone" }),
    ]),
    email: schema.string([
      rules.email(),
      rules.maxLength(100),
      rules.unique({ table: "motoristas", column: "email" }),
    ]),
  });

  public messages: CustomMessages = {};
}
