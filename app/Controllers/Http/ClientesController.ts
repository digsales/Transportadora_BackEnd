// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Cliente from "App/Models/Cliente";

export default class ClientesController {
  index() {
    return Cliente.query().preload("carga");
  }

  store({ request }) {
    const dados = request.only([
      "nome",
      "cnpj",
      "uf",
      "cidade",
      "logradouro",
      "complemento",
      "cep",
      "telefone",
      "email",
    ]);
    return Cliente.create(dados);
  }

  show({ request }) {
    const id = request.param("id");
    return Cliente.findOrFail(id);
  }

  async destroy({ request }) {
    const id = request.param("id");
    const cliente = await Cliente.findOrFail(id);
    return cliente.delete();
  }

  async update({ request }) {
    const id = request.param("id");
    const cliente = await Cliente.findOrFail(id);

    const dados = request.only([
      "nome",
      "cnpj",
      "uf",
      "cidade",
      "logradouro",
      "complemento",
      "cep",
      "telefone",
      "email",
    ]);

    cliente.merge(dados).save();

    return cliente;
  }
}
