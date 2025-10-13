import { Text } from "@/components/texts";
import AppContext from "@/contexts/AppContext";
import { useContext } from "react";
import "./mission.scss";

const Mission = () => {
    const { institutionContext } = useContext(AppContext);
    const { institution } = institutionContext;

    return (
        <section className="mission">
            <Text className="mission__title" variant="h3">Nuestra Misión</Text>
            <div className="mission__content">
                <div className="mission__image-wrapper">
                    <img className="mission__image" src={"/images/about/mission.png"} alt="Imagen de la misión de la empresa"/>
                </div>
                <Text className="mission__description" variant="p">{institution.about.mission}</Text>
            </div>
        </section>
    );
};

export default Mission;