import { Text } from "@/components/texts";
import { API_URL_IMAGES } from "@/constants/api.constant";
import AppContext from "@/contexts/AppContext";
import { useContext } from "react";
import "./vision.scss";

const Vision = () => {
    const { institutionContext } = useContext(AppContext);
    const { institution } = institutionContext;

    return (
        <section className="vision">
            <Text className="vision__title" variant="h3">Nuestra Visión</Text>
            <div>
                {institution.vision && institution.vision.description && (
                    <>
                        <div className="vision__image-wrapper">
                            <img className="vision__image" src={`${API_URL_IMAGES}/institutions/${institution.vision.thumbnail}`} alt="Imagen de la visión de la empresa"/>
                        </div>
                        <Text className="vision__description" variant="p">{institution.vision.description}</Text>
                    </>
                )}
            </div>
        </section>
    );
};

export default Vision;