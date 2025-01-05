import path from "path";
import fs from "fs"
import { Product } from "../../types/product";
import { readProductsFile } from "./read-products-file";

export async function UpdateProductsFile(filePath: string, newProduct: Product) {
  try {
    let products = await readProductsFile(filePath)
    products.push(newProduct);
    await fs.promises.writeFile(filePath, JSON.stringify(products, null, 2));
    console.log("Produto salvo com sucesso no arquivo JSON!");
  } catch (err) {
    console.error("Erro ao salvar o produto:", err);
  }
}
