import { getInput } from "../utils/get-input-data";
import { showMainMenu } from "../utils/show-main-menu";
import { clearTerminal } from "../utils/clear-terminal";
import path from "path";
import { UpdateProductsFile } from "../files/update-products-file";
import { readProductsFile } from "../files/read-products-file";

const filePath = path.join(__dirname, "/../../data/products.json");

export async function addProduct() {
  clearTerminal();
  console.log("\n Digite as informações do seu produto \n");

  const products = await readProductsFile(filePath)
  let productsCounter = 1;
  if(products.length > 0){
      productsCounter++
  }
  // using autoincrement instead of UUID to easy update 
  const productId = productsCounter

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
    const price: string = await getInput(" preço do produto: ");
    parsedPrice = parseFloat(price);

    if (isNaN(parsedPrice) || parsedPrice <= 0) {
      console.log(" Por favor preencha um preço maior que 0.");
    }
  } while (isNaN(parsedPrice) || parsedPrice <= 0);

  console.log(`
    Produto adicionado com sucesso! \n
    Id do produto: ${productId} 
    Nome do Produto: ${productName} 
    Categoria: ${productCategory} 
    Quantidade em estoque: ${parsedStockQuantity} 
    Preço do produto: ${parsedPrice} \n
      `);

  const newProduct = {
    id: productId,
    name: productName,
    category: productCategory,
    quantity: parsedStockQuantity,
    price: parsedPrice,
  };

  UpdateProductsFile(filePath, newProduct)

  setTimeout(() => {
    clearTerminal();
    showMainMenu();
  }, 3000);
}
