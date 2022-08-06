import axios from "axios";
import { ref } from "vue";
import {
    ProductGetResponse,
    Product,
} from "@interfaces/product";

export async function getProductsPagination(
    page: number = 1
) {
    const res = await axios.get<ProductGetResponse>(
        "/api/product",
        {
            params: {
                p: page,
            },
        }
    );

    return res.data;
}

export async function getProductById(id: number) {
    const res = await axios.get<Product>(
        "/api/product/" + id
    );
    return res.data;
}
