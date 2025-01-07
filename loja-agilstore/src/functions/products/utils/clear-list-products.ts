import { clearTerminal } from "../../utils/clear-terminal";
import { getInput } from "../../utils/get-input-data";
import { listProducts } from "../list-products";

export async function clearListProducts(){
  await getInput();
  clearTerminal();
  await listProducts();
}
