// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Caminhao from "App/Models/Caminhao";
import CaminhaoValidator from "App/Validators/CaminhaoValidator";

export default class CaminhaosController {
  async index() {
    return await Caminhao.query().preload("motorista").preload("cargas");
  }

  async store({ request }) {
    const dados = await request.validate(CaminhaoValidator);
    return await Caminhao.create(dados);
  }

  async show({ request }) {
    const id = await request.param("id");
    return await Caminhao.findOrFail(id);
  }

  async destroy({ request }) {
    const id = await request.param("id");
    const caminhao = await Caminhao.findOrFail(id);
    return caminhao.delete();
  }

  async update({ request }) {
    const id = await request.param("id");
    const caminhao = await Caminhao.findOrFail(id);

    const dados = await request.validate(CaminhaoValidator);

    caminhao.merge(dados).save();

    return caminhao;
  }
}
