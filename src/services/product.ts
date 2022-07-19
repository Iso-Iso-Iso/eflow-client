import axios from "axios";
import { ref } from "vue";
import { ProductGetResponse, Product } from "@interfaces/product";

export function useGetProducts() {
    const isLoading = ref(false);
    const isError = ref(false);
    const isSuccess = ref(false);
    const response = ref<ProductGetResponse | undefined>(undefined);

    async function getProducts(page = 1) {
        try {
            isLoading.value = true;
            const res = await axios.get("/api/product", {
                params: {
                    p: page,
                },
            });
            response.value = res.data;

            isSuccess.value = true;
        } catch (e) {
            isError.value = true;
        } finally {
            isLoading.value = false;
        }
    }

    return { isLoading, isError, isSuccess, response, getProducts };
}

export function useGetSingleProduct() {
    const isLoading = ref(false);
    const isError = ref(false);
    const isSuccess = ref(false);
    const response = ref<Product | undefined>(undefined);

    async function getSingleProduct(id: number | string) {
        try {
            isLoading.value = true;
            const res = await axios.get("/api/product/" + id);
            response.value = res.data;
            console.log(response.value);

            isSuccess.value = true;
        } catch (e) {
            console.log(e);

            isError.value = true;
        } finally {
            isLoading.value = false;
        }
    }

    return { isLoading, isError, isSuccess, response, getSingleProduct };
}
