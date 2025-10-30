import PropTypes from "prop-types";
import Input from "./Input";

const InputSearchProduct = (props) => {
    const {
        formik,
        name,
        maxLength = 25,
        ...restProps
    } = props;

    return (
        <Input
            type="text"
            id={name}
            name={name}
            label="Ingresa para buscar"
            value={formik.values[name]}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched[name] && Boolean(formik.errors[name])}
            helperText={formik.touched[name] && formik.errors[name]}
            inputProps={{ maxLength }}
            {...restProps}/>
    );
};

InputSearchProduct.propTypes = {
    formik: PropTypes.shape({
        values: PropTypes.objectOf(PropTypes.string).isRequired,
        handleChange: PropTypes.func.isRequired,
        handleBlur: PropTypes.func.isRequired,
        touched: PropTypes.shape({ name: PropTypes.bool }).isRequired,
        errors: PropTypes.shape({ name: PropTypes.string }).isRequired,
    }).isRequired,
    name: PropTypes.string.isRequired,
    maxLength: PropTypes.number,
};

export default InputSearchProduct;