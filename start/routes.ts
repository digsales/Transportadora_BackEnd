import Route from "@ioc:Adonis/Core/Route";

Route.get("/", async () => {
  return { servidor: "online" };
});

Route.post("/store", "UsersController.store");
Route.post("/login", "UsersController.login");

Route.group(() => {
  Route.resource("/caminhao", "CaminhaosController").apiOnly();
  Route.resource("/carga", "CargasController").apiOnly();
  Route.resource("/cliente", "ClientesController").apiOnly();
  Route.resource("/motorista", "MotoristasController").apiOnly();
  Route.resource("/reboque", "ReboquesController").apiOnly();
}).middleware("auth");
