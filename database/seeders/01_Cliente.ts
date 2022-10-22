import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import Cliente from "App/Models/Cliente";

export default class extends BaseSeeder {
  public async run() {
    await Cliente.createMany([
      {
        nome: "SUPERMERCADO TATICO",
        cnpj: "12.185.577/0004-47",
        uf: "DF",
        cidade: "Samabaia",
        logradouro: "Quadra 201 Conjunto 1, S/N",
        complemento: "Lote 3 A 5 Parte A",
        cep: "72341-001",
        telefone: "(61) 2109-0200",
      },
      {
        nome: "POSTO DE COMBUSTIVEL COMPLETO LTDA",
        cnpj: "09.588.643/0001-72",
        uf: "CE",
        cidade: "Boa Viagem",
        logradouro: "BOAVIAGINHA, Rua 26 de Junho",
        complemento: "836",
        cep: "63870-000",
      },
    ]);
    // Write your database queries inside the run method
  }
}
