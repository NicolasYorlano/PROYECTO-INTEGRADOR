import * as Yup from "yup";

const SEARCH_MAX_LENGTH = 25;

export const validationSchema = Yup.object({
    searchProduct: Yup
        .string()
        .max(SEARCH_MAX_LENGTH, `El nombre no puede tener más de ${SEARCH_MAX_LENGTH} caracteres`),
});