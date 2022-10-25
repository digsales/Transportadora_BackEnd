import Route from "@ioc:Adonis/Core/Route";

Route.get("/", async () => {
  return { servidor: "online" };
});

Route.resource("/caminhao", "CaminhaosController").apiOnly();
Route.resource("/carga", "CargasController").apiOnly();
Route.resource("/cliente", "ClientesController").apiOnly();
Route.resource("/motorista", "MotoristasController").apiOnly();
Route.resource("/reboque", "ReboquesController").apiOnly();
