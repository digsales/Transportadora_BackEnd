import { schema, rules, CustomMessages } from "@ioc:Adonis/Core/Validator";
import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class ClienteValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    nome: schema.string([rules.maxLength(100)]),
    cnpj: schema.string([
      //rules.minLength(14),
      //rules.maxLength(14),
      rules.unique({ table: "clientes", column: "cnpj" }),
    ]),
    uf: schema.string([
      rules.minLength(2),
      rules.maxLength(2),
      rules.alphaNum(),
    ]),
    cidade: schema.string([rules.maxLength(100), rules.alpha()]),
    logradouro: schema.string([rules.maxLength(100)]),
    complemento: schema.string.optional([rules.maxLength(100)]),
    cep: schema.string.optional([rules.minLength(8), rules.maxLength(8)]),
    telefone: schema.string.optional([
      rules.maxLength(15),
      rules.unique({ table: "clientes", column: "telefone" }),
    ]),
    email: schema.string.optional([
      rules.email(),
      rules.maxLength(100),
      rules.unique({ table: "clientes", column: "email" }),
    ]),
  });

  public messages: CustomMessages = {};
}
