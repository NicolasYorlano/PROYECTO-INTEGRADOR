import { Text } from "@/components/texts";
import { API_URL_IMAGES } from "@/constants/api.constant";
import AppContext from "@/contexts/AppContext";
import { useContext } from "react";
import "./vision.scss";

const Vision = () => {
    const { institutionContext } = useContext(AppContext);
    const { institution } = institutionContext;
    const vision = institution?.vision;

    return (
        <section className="vision">
            <Text className="vision__title" variant="h3">Nuestra Visión</Text>
            {vision?.description && vision?.thumbnail && (
                <div>
                    <div className="vision__image-wrapper">
                        <img className="vision__image" src={`${API_URL_IMAGES}/institutions/${vision.thumbnail}`} alt="Imagen de la visión de la empresa"/>
                    </div>
                    <Text className="vision__description" variant="p">{vision.description}</Text>
                </div>
            )}
        </section>
    );
};

export default Vision;