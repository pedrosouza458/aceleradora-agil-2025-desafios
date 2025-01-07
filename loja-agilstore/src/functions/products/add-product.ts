import { getInput } from "@/functions/utils/get-input-data";
import { showMainMenu } from "@/functions/utils/show-main-menu";
import { clearTerminal } from "@/functions/utils/clear-terminal";
import { readProductsFile } from "@/functions/files/read-products-file";
import { productsFilePath } from "@/constants";
import { saveProductsFile } from "@/functions/files/save-products-file";

export async function addProduct() {
  clearTerminal();
  console.log("\n Digite as informações do seu produto \n");

  const products = await readProductsFile(productsFilePath);
  let productsCounter = 1;
  if (products.length > 0) {
    productsCounter++;
  }
  // using autoincrement instead of UUID to easy update
  const productId =
    products.length > 0
      ? Math.max(...products.map((product) => product.id)) + 1
      : 1;

  const productName: string = await getInput(" nome do produto: ");
  const productCategory: string = await getInput(" nome da categoria: ");

  let parsedStockQuantity: number;
  do {
    const stockQuantity: string = await getInput(" quantidade em estoque: ");
    parsedStockQuantity = parseInt(stockQuantity);

    if (isNaN(parsedStockQuantity) || parsedStockQuantity < 0) {
      console.log(
        " Por favor preencha uma quantidade em estoque maior ou igual a 0."
      );
    }
  } while (isNaN(parsedStockQuantity) || parsedStockQuantity < 0);

  let parsedPrice: number;
  do {
    const price: string = await getInput(
      " preço do produto (use . ao invés de ,): "
    );
    parsedPrice = parseFloat(price);

    if (isNaN(parsedPrice) || parsedPrice <= 0) {
      console.log(" Por favor preencha um preço maior que 0.");
    }
  } while (isNaN(parsedPrice) || parsedPrice <= 0);

  parsedPrice = parseFloat(parsedPrice.toFixed(2));

  console.log(`
    Produto adicionado com sucesso! \n
    Id do produto: ${productId} 
    Nome do Produto: ${productName} 
    Categoria: ${productCategory} 
    Quantidade em estoque: ${parsedStockQuantity} 
    Preço do produto: ${parsedPrice.toFixed(2)} \n
      `);

  const newProduct = {
    id: productId,
    name: productName,
    category: productCategory,
    quantity: parsedStockQuantity,
    price: parsedPrice,
  };

  products.push(newProduct);

  await saveProductsFile(productsFilePath, products);

  setTimeout(() => {
    clearTerminal();
    showMainMenu();
  }, 3000);
}
