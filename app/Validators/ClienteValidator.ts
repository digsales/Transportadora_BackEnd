import { schema, rules, CustomMessages } from "@ioc:Adonis/Core/Validator";
import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class ClienteValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    nome: schema.string([rules.maxLength(100)]),
    cnpj: schema.string([
      rules.range(14, 18),
      rules.regex(/^[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}\-?[0-9]{2}$/),
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
    cep: schema.string.optional([rules.range(8, 9)]),
    telefone: schema.string.optional([
      rules.maxLength(15),
      rules.mobile({ locale: ["pt-BR"] }),
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
