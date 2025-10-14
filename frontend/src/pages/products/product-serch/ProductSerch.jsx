import { ButtonPrimary } from "@/components/buttons";
import { InputSearch } from "@/components/inputs";
import "./product-serch.scss";
import useContactForm from "./useSearchProduct";

const ProductSerch = () => {

    const { formik, isSubmitDisabled } = useContactForm();

    return (
        <div>
            <form onSubmit={formik.handleSubmit} className="input-search-product">
                <InputSearch className="input-search-product__form" formik={formik} />
                <ButtonPrimary className="input-search-product__button" disabled={isSubmitDisabled()}>Buscar</ButtonPrimary>
            </form>
        </div>
    );
};

export default ProductSerch;