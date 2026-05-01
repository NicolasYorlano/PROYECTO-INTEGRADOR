import { Text } from "@/components/texts";
import "./home-slider.scss";

const HomeSlider = () => {
    return (
        <article className="slider">
            <div className="slider__slides">
                <div className="slider__slide">
                    <img src="/slider/slide1.jpg" alt="Image-slider-1" />
                </div>
                <div className="slider__slide">
                    <img src="/slider/slide2.jpg" alt="Image-slider-2" />
                </div>
                <div className="slider__slide">
                    <img src="/slider/slide3.jpg" alt="Image-slider-3" />
                </div>
            </div>

            <div className="slider__text">
                <Text variant="h3">Las mejores Hamburguesas de La Plata</Text>
                <Text variant="p">Mirá nuestros productos destacados <a href="#products-highlighted">acá</a></Text>
            </div>
        </article>
    );
};

export default HomeSlider;