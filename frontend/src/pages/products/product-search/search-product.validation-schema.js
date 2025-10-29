import * as Yup from "yup";

const SEARCH_MIN_LENGTH = 2;
const SEARCH_MAX_LENGTH = 25;

const searchProductValidationSchema = Yup.object({
    query: Yup
        .string().trim()
        .min(SEARCH_MIN_LENGTH, `Para buscar ingrese como mínimo ${SEARCH_MIN_LENGTH} caracteres`)
        .max(SEARCH_MAX_LENGTH, `El nombre no puede tener más de ${SEARCH_MAX_LENGTH} caracteres`),
});

export default searchProductValidationSchema;