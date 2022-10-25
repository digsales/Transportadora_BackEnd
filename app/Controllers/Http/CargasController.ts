// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Carga from "App/Models/Carga";

export default class CargasController {
  index() {
    return Carga.query();
  }

  store({ request }) {
    const dados = request.only([
      "caminhaoId",
      "reboqueId",
      "clienteId",
      "peso",
      "tipoCarga",
    ]);
    return Carga.create(dados);
  }

  show({ request }) {
    const id = request.param("id");
    return Carga.findOrFail(id);
  }

  async destroy({ request }) {
    const id = request.param("id");
    const carga = await Carga.findOrFail(id);
    return carga.delete();
  }

  async update({ request }) {
    const id = request.param("id");
    const carga = await Carga.findOrFail(id);

    const dados = request.only([
      "caminhaoId",
      "reboqueId",
      "clienteId",
      "peso",
      "tipoCarga",
    ]);

    carga.merge(dados).save();

    return carga;
  }
}
