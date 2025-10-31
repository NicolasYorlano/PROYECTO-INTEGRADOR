import { ButtonPrimary } from "@/components/buttons";
import InputSearchProduct from "@/components/inputs/InputSearchProduct";
import AppContext from "@/contexts/AppContext";
import { useFormik } from "formik";
import PropTypes from "prop-types";
import { useContext, useEffect } from "react";
import "./product-search.scss";
import searchProductInitialValues from "./search-product-initial-values";
import { useSearchProduct } from "./useSearchProduct";

const ProductSearch = ({ className, ...restProps }) => {
    const classes = `search-product-form ${className ?? ""}`;
    const { handleSearch, resetNoResults } = useSearchProduct();
    const { productsContext } = useContext(AppContext);
    const { noResults } = productsContext;

    const formik = useFormik({
        initialValues: searchProductInitialValues,
        onSubmit: handleSearch,
    });

    useEffect(() => {
        if (noResults && formik.values.query) {
            resetNoResults();
        }
    }, [formik.values.query]);

    return (
        <form onSubmit={formik.handleSubmit} {...restProps}>
            <div className={classes}>
                <InputSearchProduct formik={formik} name="query" />
                <ButtonPrimary>Buscar</ButtonPrimary>
            </div>
        </form>
    );
};

ProductSearch.propTypes = {
    className: PropTypes.string,
};

export default ProductSearch;