import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import Motorista from "App/Models/Motorista";

export default class extends BaseSeeder {
  public async run() {
    await Motorista.createMany([
      {
        nome: "Diogo Sales",
        cpf: "058.890.541-04",
        dataNascimento: new Date(2003, 8, 10),
        uf: "DF",
        cidade: "Samambaia",
        logradouro: "QR 207, conjunto 6",
        complemento: "Casa 19",
        cep: "72341-306",
        telefone: "(61) 98421-2998",
        email: "diogodobu@gmail.com",
      },
      {
        nome: "Rikelme Lopes",
        cpf: "999.999.999-99",
        dataNascimento: new Date(2001, 7, 7),
        uf: "DF",
        cidade: "Ceilândia",
        logradouro: "QNO 19, conjunto 9",
        complemento: "Casa 9",
        cep: "72261-009",
        telefone: "(61) 8176-0878",
        email: "rikelme.lopes777@gmail.com",
      },
    ]);
    // Write your database queries inside the run method
  }
}
