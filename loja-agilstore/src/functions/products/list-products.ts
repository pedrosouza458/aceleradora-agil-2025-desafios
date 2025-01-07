import { readProductsFile } from "@/functions/files/read-products-file";
import { clearTerminal } from "@/functions/utils/clear-terminal";
import { getInput } from "@/functions/utils/get-input-data";
import { showMainMenu } from "@/functions/utils/show-main-menu";
import { clearListProducts } from "@/functions/products/utils/clear-list-products";
import { productsFilePath } from "@/constants";
import { formatProductTable } from "@/functions/products/utils/format-product-table";
import { table } from "table";

export async function listProducts() {
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

      const productsByCategory = products.filter((product) =>
        product.category.includes(category)
      );

      if (productsByCategory.length > 0) {
        clearTerminal();
        console.log(`Lista de produtos com a categoria contendo ${category}:`);
        const productsByCategoryTable = await formatProductTable(productsByCategory);
        console.log(table(productsByCategoryTable));
      } else {
        console.log("Nenhum produto com essa categoria foi encontrado.");
      }

      console.log("Pressione Enter para voltar ao menu de filtros");
      await clearListProducts();
      break;

    case "2":
      clearTerminal();
      console.log("Lista de produtos ordenados por nome");
      const productsByName = products.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      const productsByNameTable = await formatProductTable(productsByName);
      console.log(table(productsByNameTable));
      console.log("Pressione Enter para voltar ao menu de filtros");
      await clearListProducts();
      break;

    case "3":
      clearTerminal();
      console.log("Lista de produtos ordenados por quantidade");
      const productsByQuantity = products.sort(
        (a, b) => b.quantity - a.quantity
      );
      const productsByQuantityTable = await formatProductTable(
        productsByQuantity
      );
      console.log(table(productsByQuantityTable));
      console.log("Pressione Enter para voltar ao menu de filtros");
      await clearListProducts();
      break;

    case "4":
      clearTerminal();
      console.log("Lista de produtos ordenados por preço");
      const productsByPrice = (products.sort((a, b) => b.price - a.price));
      const productsByPriceTable = await formatProductTable(productsByPrice)
      console.log(table(productsByPriceTable))
      console.log("Pressione Enter para voltar ao menu de filtros");
      await clearListProducts();
      break;

    case "0":
      clearTerminal();
      showMainMenu();
      break;

    default:
      console.log("Opção inválida! Por favor, digite um número de 0 a 4.");
      await listProducts();
      break;
  }
}
