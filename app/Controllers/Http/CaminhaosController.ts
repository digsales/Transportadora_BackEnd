// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Caminhao from "App/Models/Caminhao";
import CaminhaoValidator from "App/Validators/CaminhaoValidator";

export default class CaminhaosController {
  index() {
    return Caminhao.query().preload("carga");
  }

  store({ request }) {
    const dados = request.validate(CaminhaoValidator);
    return Caminhao.create(dados);
  }

  show({ request }) {
    const id = request.param("id");
    return Caminhao.findOrFail(id);
  }

  async destroy({ request }) {
    const id = request.param("id");
    const caminhao = await Caminhao.findOrFail(id);
    return caminhao.delete();
  }

  async update({ request }) {
    const id = request.param("id");
    const caminhao = await Caminhao.findOrFail(id);

    const dados = request.only([
      "motoristaId",
      "modelo",
      "cabine",
      "marca",
      "placa",
      "cor",
      "tipoCaminhao",
      "potencia",
    ]);

    caminhao.merge(dados).save();

    return caminhao;
  }
}
