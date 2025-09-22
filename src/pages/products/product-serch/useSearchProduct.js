import { useFormik } from "formik";
import { useState } from "react";
import { initialValues } from "./search-product.initial-value.js";
import { validationSchema } from "./search-product.validation-schema.js";

const useContactForm = () => {
    const [ isSubmitted, setIsSubmitted ] = useState(false);

    const formik = useFormik({
        initialValues,
        validationSchema,
        validateOnChange: true,
        validateOnBlur: true,
        onSubmit: (values) => {
            console.log("values", values);
            formik.resetForm();
            setIsSubmitted(true);
        },
    });

    const isSubmitDisabled = () => {
        return isSubmitted
            || !formik.values.searchProduct;
    };

    return {
        formik,
        isSubmitDisabled,
        isSubmitted,
    };

};
export default useContactForm;