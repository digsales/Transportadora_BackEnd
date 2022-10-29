// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Reboque from "App/Models/Reboque";
import ReboqueValidator from "App/Validators/ReboqueValidator";

export default class ReboquesController {
  async index() {
    return await Reboque.query().preload("cargas");
  }

  async store({ request }) {
    const dados = await request.validate(ReboqueValidator);
    return await Reboque.create(dados);
  }

  async show({ request }) {
    const id = await request.param("id");
    return await Reboque.findOrFail(id);
  }

  async destroy({ request }) {
    const id = await request.param("id");
    const reboque = await Reboque.findOrFail(id);
    return reboque.delete();
  }

  async update({ request }) {
    const id = await request.param("id");
    const reboque = await Reboque.findOrFail(id);

    const dados = await request.validate(ReboqueValidator);

    reboque.merge(dados).save();

    return reboque;
  }
}
