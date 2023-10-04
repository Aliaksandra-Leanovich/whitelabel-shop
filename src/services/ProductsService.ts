import axios from "axios";
import { IProduct } from "./types";

class ProductsService {
  private readonly API_URL = "https://63924bcab750c8d178dba71f.mockapi.io/";

  private api = axios.create({
    baseURL: this.API_URL,
  });

  public async getProducts(): Promise<IProduct[]> {
    const { data } = await this.api.get<IProduct[]>("/catalog");

    return data;
  }

  public async getProductDetails(id: string): Promise<IProduct> {
    const { data } = await this.api.get<IProduct>(`/catalog/${id}`);

    return data;
  }
}
export const productsApi = new ProductsService();
