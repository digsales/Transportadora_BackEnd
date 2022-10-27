// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Motorista from "App/Models/Motorista";
import MotoristaValidator from "App/Validators/MotoristaValidator";

export default class MotoristasController {
  index() {
    return Motorista.query().preload("caminhao");
  }

  store({ request }) {
    const dados = request.validate(MotoristaValidator);
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
