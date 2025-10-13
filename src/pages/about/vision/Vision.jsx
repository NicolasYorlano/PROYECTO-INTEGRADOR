import { Text } from "@/components/texts";
import AppContext from "@/contexts/AppContext";
import { useContext } from "react";
import "./vision.scss";

const Vision = () => {
    const { institutionContext } = useContext(AppContext);
    const { institution } = institutionContext;

    return (
        <section className="vision">
            <Text className="vision__title" variant="h3">Nuestra Visión</Text>
            <div className="mission__content">
                <div className="vision__image-wrapper">
                    <img className="vision__image" src={"/images/about/vision.png"} alt="Imagen de la visión de la empresa"/>
                </div>
                <Text className="vision__description" variant="p">{institution.about.vision}</Text>
            </div>
        </section>
    );
};

export default Vision;