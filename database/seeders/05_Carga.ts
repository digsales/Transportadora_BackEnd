import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import Carga from "App/Models/Carga";

export default class extends BaseSeeder {
  public async run() {
    await Carga.createMany([
      {
        caminhaoId: 1,
        reboqueId: 1,
        clienteId: 1,
        peso: 8,
        tipoCarga: "Carnes",
      },
      {
        caminhaoId: 2,
        reboqueId: 2,
        clienteId: 2,
        peso: 13,
        tipoCarga: "Gasolina",
      },
    ]);
    // Write your database queries inside the run method
  }
}
