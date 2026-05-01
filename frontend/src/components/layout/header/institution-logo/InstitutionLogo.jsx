import { Text } from "@/components/texts";
import AppContext from "@/contexts/AppContext";
import PropTypes from "prop-types";
import { useContext } from "react";
import "./institution-logo.scss";

const InstitutionLogo = (props) => {
    const { className, ...restProps } = props;
    const classes = `institution-logo ${className ?? ""}`;

    const { institutionContext } = useContext(AppContext);
    const { institution } = institutionContext;

    return (
        <div className={classes} {...restProps}>
            {institution?.name && (
                <>
                    <Text className="institution-logo__title" variant="h1">{institution.name}</Text>
                </>
            )}
        </div>
    );
};

InstitutionLogo.propTypes = {
    className: PropTypes.string,
};

export default InstitutionLogo;