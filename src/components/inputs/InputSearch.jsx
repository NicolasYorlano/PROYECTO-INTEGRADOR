import PropTypes from "prop-types";
import Input from "./Input";

const InputSearch = (props) => {
    const {
        formik,
        maxLength = 30,
        ...restProps
    } = props;

    return (
        <Input
            type="text"
            id="searchProduct"
            name="searchProduct"
            label="Ingresa para buscar"
            value={formik.values.searchProduct}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.searchProduct && Boolean(formik.errors.searchProduct)}
            helperText={formik.touched.searchProduct && formik.errors.searchProduct}
            inputProps={{ maxLength }}
            {...restProps}/>
    );
};

InputSearch.propTypes = {
    formik: PropTypes.shape({
        values: PropTypes.shape({ searchProduct: PropTypes.string.isRequired }).isRequired,
        handleChange: PropTypes.func.isRequired,
        handleBlur: PropTypes.func.isRequired,
        touched: PropTypes.shape({ searchProduct: PropTypes.bool }).isRequired,
        errors: PropTypes.shape({ searchProduct: PropTypes.string }).isRequired,
    }).isRequired,
    maxLength: PropTypes.number,
};

export default InputSearch;