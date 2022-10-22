import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import Reboque from "App/Models/Reboque";

export default class extends BaseSeeder {
  public async run() {
    await Reboque.createMany([
      {
        tipoReboque: "Frigorífico",
      },
      {
        tipoReboque: "Tanque",
      },
    ]);
    // Write your database queries inside the run method
  }
}
