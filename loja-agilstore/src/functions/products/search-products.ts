import { readProductsFile } from "@/functions/files/read-products-file";
import { clearTerminal } from "@/functions/utils/clear-terminal";
import { getInput } from "@/functions/utils/get-input-data";
import { showMainMenu } from "@/functions/utils/show-main-menu";
import { productsFilePath } from "@/constants";
import { formatProductTable } from "@/functions/products/utils/format-product-table";
import { table } from "table";
import { clearSearchProducts } from "./utils/clear-search-products";

export async function searchProducts() {
  clearTerminal();
  const products = await readProductsFile(productsFilePath);

  if (products.length > 0) {
    const productsTable = await formatProductTable(products);
    console.log(" Lista de todos os produtos:");

    console.log(table(productsTable));
  } else {
    console.log(" Nenhum produto foi achado, voltando ao menu principal...");
    setTimeout(() => {
      clearTerminal();
      showMainMenu();
    }, 3000);
    return; 
  }

  console.log(
    ` Busque por essas opções: \n 
      - 1 para buscar por ID \n 
      - 2 para buscar por parte do nome \n 
      - 0 para voltar ao menu prinicpal \n 
      `
  );

  const input = await getInput();

  switch (input) {
    case "1":
      const id = await getInput(" Escreva o id do produto: ");
      const parsedId = parseInt(id)

      const productWithId = products.filter((product) =>
        product.id === parsedId
      );

      if (productWithId.length > 0) {
        clearTerminal();
        console.log(`Produto com o id contendo ${id}:`);
        const productWithIdTable = await formatProductTable(productWithId);
        console.log(table(productWithIdTable));
      } else {
        console.log("Nenhum produto com esse id foi encontrado.");
      }

      console.log("Pressione Enter para voltar ao menu de busca");
      await clearSearchProducts();
      break;

    case "2":
      const name = await getInput(" Escreva o nome ou parte do nome do produto: ");

      const productWithName = products.filter((product) =>
        product.name.toLowerCase().includes(name.toLowerCase())
      );

      if (productWithName.length > 0) {
        clearTerminal();
        console.log(`Produto com o nome contendo ${name}:`);
        const productsWithNameTable = await formatProductTable(productWithName);
        console.log(table(productsWithNameTable));
      } else {
        console.log("Nenhum produto com esse nome foi encontrado.");
      }

      console.log("Pressione Enter para voltar ao menu de busca");
      await clearSearchProducts();
      break;

    case "0":
      clearTerminal();
      showMainMenu();
      break;

    default:
      console.log("Opção inválida! Por favor, digite um número de 0 a 1.");
      await searchProducts();
      break;
  }
}
