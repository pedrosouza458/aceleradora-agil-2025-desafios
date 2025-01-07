import { getInput } from "./functions/utils/get-input-data";
import { addProducts } from "./functions/products/add-products";
import { showMainMenu } from "./functions/utils/show-main-menu";
import { listProducts } from "./functions/products/list-products";

async function main() {
  showMainMenu();

  while (true) {
    const input = await getInput();

    switch (input) {
      case "1":
        await addProducts();
        break;

      case "2":
        await listProducts()
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
  }
}

main();
