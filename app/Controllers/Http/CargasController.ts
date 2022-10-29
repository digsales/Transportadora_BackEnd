// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Carga from "App/Models/Carga";
import CargaValidator from "App/Validators/CargaValidator";

export default class CargasController {
  async index() {
    return await Carga.query()
      .preload("caminhao")
      .preload("reboque")
      .preload("cliente");
  }

  async store({ request }) {
    const dados = await request.validate(CargaValidator);
    return await Carga.create(dados);
  }

  async show({ request }) {
    const id = await request.param("id");
    return await Carga.findOrFail(id);
  }

  async destroy({ request }) {
    const id = await request.param("id");
    const carga = await Carga.findOrFail(id);
    return carga.delete();
  }

  async update({ request }) {
    const id = await request.param("id");
    const carga = await Carga.findOrFail(id);

    const dados = await request.validate(CargaValidator);

    carga.merge(dados).save();

    return carga;
  }
}
