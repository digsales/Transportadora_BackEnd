import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import Caminhao from "App/Models/Caminhao";

export default class extends BaseSeeder {
  public async run() {
    await Caminhao.createMany([
      {
        motoristaId: 1,
        modelo: "FH",
        cabine: "Globetrotter XL",
        marca: "Volvo",
        placa: "AAA1A11",
        cor: "Roxo",
        tipoCaminhao: "Cavalo mecânico",
        potencia: 460,
      },
      {
        motoristaId: 2,
        modelo: "Linha S",
        cabine: "S-sleeper perfil alto",
        marca: "Scania",
        placa: "BBB2B22",
        cor: "Branco",
        tipoCaminhao: "Cavalo mecânico",
        potencia: 420,
      },
    ]);
    // Write your database queries inside the run method
  }
}
