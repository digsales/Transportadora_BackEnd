// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Motorista from "App/Models/Motorista";

export default class MotoristasController {
  index() {
    return Motorista.query();
  }

  store({ request }) {
    const dados = request.only([
      "nome",
      "cpf",
      "dataNascimento",
      "uf",
      "cidade",
      "logradouro",
      "complemento",
      "cep",
      "telefone",
      "email",
    ]);
    return Motorista.create(dados);
  }

  show({ request }) {
    const id = request.param("id");
    return Motorista.findOrFail(id);
  }

  async destroy({ request }) {
    const id = request.param("id");
    const motorista = await Motorista.findOrFail(id);
    return motorista.delete();
  }

  async update({ request }) {
    const id = request.param("id");
    const motorista = await Motorista.findOrFail(id);

    const dados = request.only([
      "nome",
      "cpf",
      "dataNascimento",
      "uf",
      "cidade",
      "logradouro",
      "complemento",
      "cep",
      "telefone",
      "email",
    ]);

    motorista.merge(dados).save();

    return motorista;
  }
}
