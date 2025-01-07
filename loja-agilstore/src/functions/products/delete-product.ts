import { getInput } from "@/functions/utils/get-input-data";
import { showMainMenu } from "@/functions/utils/show-main-menu";
import { clearTerminal } from "@/functions/utils/clear-terminal";
import { readProductsFile } from "@/functions/files/read-products-file";
import { productsFilePath } from "@/constants";
import { saveProductsFile } from "@/functions/files/save-products-file";

export async function deleteProduct() {
  clearTerminal();
  console.log("\nDigite o ID do produto que deseja deletar.");

  const products = await readProductsFile(productsFilePath);
  const productIdInput = await getInput("ID do produto: ");
  const productId = parseInt(productIdInput);

  const productIndex = products.findIndex((product) => product.id === productId);

  if (productIndex === -1) {
    console.log(`Produto com ID ${productId} não encontrado.`);
    return;
  }

  console.log("Produto encontrado");

  const confirmDeletion = await getInput(
    `Tem certeza de que deseja deletar o produto com ID ${productId}? (sim/não): `
  );

  if (confirmDeletion.toLowerCase() !== "sim") {
    console.log("Exclusão cancelada.");
    return;
  }

  products.splice(productIndex, 1);

  await saveProductsFile(productsFilePath, products);

  console.log(`Produto com ID ${productId} foi deletado com sucesso!`);
  console.log(`Voltando ao menu principal...`);

  setTimeout(() => {
    clearTerminal();
    showMainMenu();
  }, 3000);
}
