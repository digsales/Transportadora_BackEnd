// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Motorista from "App/Models/Motorista";
import MotoristaUpdateValidator from "App/Validators/MotoristaUpdateValidator";
import MotoristaValidator from "App/Validators/MotoristaValidator";

export default class MotoristasController {
  async index() {
    return await Motorista.query().preload("caminhoes");
  }

  async store({ request }) {
    const dados = await request.validate(MotoristaValidator);
    return await Motorista.create(dados);
  }

  async show({ request }) {
    const id = await request.param("id");
    return await Motorista.findOrFail(id);
  }

  async destroy({ request }) {
    const id = await request.param("id");
    const motorista = await Motorista.findOrFail(id);
    motorista.delete();
    return "Motorista deletado com sucesso!";
  }

  async update({ request }) {
    const id = await request.param("id");
    const motorista = await Motorista.findOrFail(id);

    const dados = await request.validate(MotoristaUpdateValidator);

    motorista.merge(dados).save();

    return motorista;
  }
}
