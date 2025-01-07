import { getInput } from "@/functions/utils/get-input-data";
import { showMainMenu } from "@/functions/utils/show-main-menu";
import { clearTerminal } from "@/functions/utils/clear-terminal";
import { readProductsFile } from "@/functions/files/read-products-file";
import { productsFilePath } from "@/constants";
import { saveProductsFile } from "@/functions/files/save-products-file";

export async function updateProduct() {
  clearTerminal();
  console.log("\nDigite o ID do produto que deseja alterar.");

  const products = await readProductsFile(productsFilePath);
  const productIdInput = await getInput("ID do produto: ");
  const productId = parseInt(productIdInput);

  const productIndex = products.findIndex((product) => product.id === productId);

  if (productIndex === -1) {
    console.log(`Produto com ID ${productId} não encontrado.`);
    return;
  }

  const currentProduct = products[productIndex];
  console.log("Produto encontrado:", currentProduct);

  console.log("Atualize as informações do produto. Deixe em branco os campos que não deseja alterar.");

  let newProductName: string = currentProduct.name;
  let newProductCategory: string = currentProduct.category;
  let newProductStockQuantity: number = currentProduct.quantity;
  let newProductPrice: number = currentProduct.price;

  const productName: string = await getInput("Nome do produto: ");
  if (productName !== "") {
    newProductName = productName;
  }

  const productCategory: string = await getInput("Nome da categoria: ");
  if (productCategory !== "") {
    newProductCategory = productCategory;
  }

  let productStockQuantity: string = await getInput("Quantidade em estoque: ");
  if (productStockQuantity !== "") {
    const quantity = parseInt(productStockQuantity);
    if (!isNaN(quantity) && quantity >= 0) {
      newProductStockQuantity = quantity;
    } else {
      console.log("Quantidade inválida, mantendo o valor atual.");
    }
  }

  let productPrice: string = await getInput("Preço do produto: ");
  if (productPrice !== "") {
    const price = parseFloat(productPrice);
    if (!isNaN(price) && price >= 0) {
      newProductPrice = price;
    } else {
      console.log("Preço inválido, mantendo o valor atual.");
    }
  }

  products[productIndex] = {
    ...currentProduct,
    name: newProductName,
    category: newProductCategory,
    quantity: newProductStockQuantity,
    price: newProductPrice,
  };

  await saveProductsFile(productsFilePath, products);

  console.log("Produto atualizado com sucesso!");
  console.log("Voltando ao menu principal...")

  setTimeout(() => {
    clearTerminal();
    showMainMenu();
  }, 3000);
}
