import PropTypes from "prop-types";
import Input from "./Input";

const InputSearch = ({ formik, name, maxLength = 30, label, ...restProps }) => {
    return (
        <Input
            type="text"
            id={name}
            name={name}
            label={label}
            value={formik.values[name]}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched[name] && Boolean(formik.errors[name])}
            helperText={formik.touched[name] && formik.errors[name]}
            inputProps={{ maxLength }}
            {...restProps}/>
    );
};

InputSearch.propTypes = {
    formik: PropTypes.shape({
        values: PropTypes.shape({ query: PropTypes.string.isRequired }).isRequired,
        handleChange: PropTypes.func.isRequired,
        handleBlur: PropTypes.func.isRequired,
        touched: PropTypes.shape({ query: PropTypes.bool }).isRequired,
        errors: PropTypes.shape({ query: PropTypes.string }).isRequired,
    }).isRequired,
    name: PropTypes.string,
    maxLength: PropTypes.number,
    label: PropTypes.string,
};

export default InputSearch;