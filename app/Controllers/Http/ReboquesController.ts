// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Reboque from "App/Models/Reboque";

export default class ReboquesController {
  index() {
    return Reboque.query();
  }

  store({ request }) {
    const dados = request.only(["tipoReboque"]);
    return Reboque.create(dados);
  }

  show({ request }) {
    const id = request.param("id");
    return Reboque.findOrFail(id);
  }

  async destroy({ request }) {
    const id = request.param("id");
    const reboque = await Reboque.findOrFail(id);
    return reboque.delete();
  }

  async update({ request }) {
    const id = request.param("id");
    const reboque = await Reboque.findOrFail(id);

    const dados = request.only(["tipoReboque"]);

    reboque.merge(dados).save();

    return reboque;
  }
}
