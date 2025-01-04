#!/user/bin/env node
import { showMainMenu } from "./functions/show-main-menu";

showMainMenu()

process.stdin.on("data", (data) => {
  const input = data.toString().trim();

  switch (input) {
    case "1":
      console.log("Adicionar produto");
      break;

    case "2":
      console.log("Listar Produto");
      break;

    case "3":
      console.log("Atualizar Produto");
      break;

    case "4":
      console.log("Excluir Produto");
      break;

    case "5":
      console.log("Buscar Produto");
      break;

    case "0":
      console.log("Até logo");
      process.exit();

    default:
      console.log("Opção inválida! Por favor, digite um número de 0 a 5.");
      break;
  }

});
