import { ButtonPrimary } from "@/components/buttons";
import { InputSearch } from "@/components/inputs";
import { Text } from "@/components/texts";
import { Form, Formik } from "formik";
import "./product-search.scss";
import searchProductInitialValues from "./search-product-initial-values";
import searchProductValidationSchema from "./search-product.validation-schema";
import { useSearchProduct } from "./useSearchProduct";

const ProductSearch = () => {
    const { handleSearch, noResults, isLoading } = useSearchProduct();

    return (
        <div className="product-search">
            <Formik
                initialValues={searchProductInitialValues}
                validationSchema={searchProductValidationSchema}
                onSubmit={handleSearch}>
                {(formik) => (
                    <Form className="product-search__form">
                        <InputSearch
                            formik={formik}
                            className="product-search__input"
                            name="query"
                            label="Ingresa para bsucar"
                            placeholder="Buscar productos..."
                            maxLength={50}/>

                        <ButtonPrimary
                            className="product-search__button"
                            disabled={formik.isSubmitting || isLoading}>
                            {isLoading ? "Buscando..." : "Buscar"}
                        </ButtonPrimary>

                        {noResults && !isLoading && (
                            <Text className="product-search__no-results" variant="p">
                No se encontraron resultados para tu búsqueda.
                            </Text>
                        )}
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default ProductSearch;