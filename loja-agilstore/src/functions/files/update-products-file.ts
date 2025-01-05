import path from "path";
import fs from "fs"
import { Product } from "../../types/product";

export async function UpdateProductsFile(filePath: string, newProduct: Product) {
  try {
    const dirPath = path.dirname(filePath);
    await fs.promises.mkdir(dirPath, { recursive: true });
    let products = [];
    let data = "";
    data = await fs.promises.readFile(filePath, "utf8");
    if (data.trim()) {
      products = JSON.parse(data);
    }
    products.push(newProduct);
    await fs.promises.writeFile(filePath, JSON.stringify(products, null, 2));
    console.log("Produto salvo com sucesso no arquivo JSON!");
  } catch (err) {
    console.error("Erro ao salvar o produto:", err);
  }
}
