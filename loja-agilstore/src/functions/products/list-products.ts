import path from "path";
import { readProductsFile } from "../files/read-products-file";
import { clearTerminal } from "../utils/clear-terminal";
import { getInput } from "../utils/get-input-data";
import { showMainMenu } from "../utils/show-main-menu";
import { Product } from "../../types/product";
import { clearListProducts } from "./utils/clear-list-products";

const filePath = path.join(__dirname, "/../../data/products.json");

export async function listProducts() {

  clearTerminal();
  const products = await readProductsFile(filePath);

  if (products.length > 0) {
    console.log(" Lista de todos os produtos:");
    console.table(products);
  } else {
    console.log(" Nenhum produto foi achado, voltando ao menu principal...");
    setTimeout(() => {
      clearTerminal();
      showMainMenu();
    }, 3000);
    return; // Prevent further execution
  }

  console.log(
    ` Filtre por essas opções: \n 
      - 1 para filtrar por categoria \n 
      - 2 para ordenar por nome \n 
      - 3 para ordenar por quantidade \n 
      - 4 para ordenar por preço \n 
      - 0 para voltar ao menu prinicpal \n 
      `
  );

  const input = await getInput();
  let category: string;

  switch (input) {
    case "1":
      category = await getInput(" Escreva o nome da categoria: ");

      const filteredProducts = products.filter((product) =>
        product.category.includes(category)
      );

      if (filteredProducts.length > 0) {
        clearTerminal();
        console.log(`Lista de produtos com a categoria contendo ${category}:`)
        console.table(filteredProducts);
      } else {
        console.log("Nenhum produto com essa categoria foi encontrado.");
      }

      console.log("Pressione Enter para voltar ao menu de filtros");
      await clearListProducts();
      break;

    case "2":
      clearTerminal();
      console.log("Lista de produtos ordenados por nome")
      console.table(products.sort((a, b) => a.name.localeCompare(b.name)));
      console.log("Pressione Enter para voltar ao menu de filtros");
      await clearListProducts();
      break;

    case "3":
      clearTerminal();
      console.log("Lista de produtos ordenados por quantidade")
      console.table(products.sort((a, b) => b.quantity - a.quantity));
      console.log("Pressione Enter para voltar ao menu de filtros");
      await clearListProducts();
      break;

    case "4":
      clearTerminal();
      console.log("Lista de produtos ordenados por preç]")
      console.table(products.sort((a, b) => b.price - a.price));
      console.log("Pressione Enter para voltar ao menu de filtros");
      await clearListProducts();
      break;

    case "0":
      clearTerminal();
      showMainMenu();
      break;
      
    default:
      console.log("Opção inválida! Por favor, digite um número de 0 a 1.");
      await listProducts();
      break;
  }
}
