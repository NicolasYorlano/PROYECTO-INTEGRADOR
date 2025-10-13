import { Text } from "@/components/texts";
import "./home.scss";

const Home = () => {
    return (
        <div className="home">
            <article className="slider">
                <div className="slider__slides">
                    <div className="slider__slide">
                        <img src="/images/slider/slide1.jpg" alt="Image-slider-1" />
                    </div>
                    <div className="slider__slide">
                        <img src="/images/slider/slide2.jpg" alt="Image-slider-2" />
                    </div>
                    <div className="slider__slide">
                        <img src="/images/slider/slide3.jpg" alt="Image-slider-3" />
                    </div>
                </div>

                <div className="slider__text">
                    <Text variant="h3">Las mejores Hamburguesas de La Plata</Text>
                    <Text variant="p">Mirá nuestros productos destacados <a href="#products-highlighted">acá</a></Text>
                </div>
            </article>

            <article className="highlighted-products">
                <Text className="highlighted-products__title" id="products-highlighted" variant="h2">Nuestros productos más destacados</Text>

                <div className="card card--highlighted">
                    <div className="card--highlighted--float">
                        <Text className="card__title card__title--highlighted" variant="h3">Hamburguesa Clásica</Text>
                        <Text className="card__description card__description--highlighted" variant="p">Carne vacuna, lechuga, tomate y mayonesa.</Text>
                    </div>
                    <img
                        className="card__image"
                        src="/images/highlighted/image1.png"
                        alt="highlighted-product-1"/>
                </div>

                <div className="card card--highlighted">
                    <div className="card--highlighted--float">
                        <Text className="card__title card__title--highlighted" variant="h3">Hamburguesa Doble Queso</Text>
                        <Text className="card__description card__description--highlighted" variant="p">Doble carne con cheddar y panceta.</Text>
                    </div>
                    <img
                        className="card__image"
                        src="/images/highlighted/image2.png"
                        alt="highlighted-product-2"/>
                </div>

                <div className="card card--highlighted">
                    <div className="card--highlighted--float">
                        <Text className="card__title card__title--highlighted" variant="h3">Hamburguesa BBQ</Text>
                        <Text className="card__description card__description--highlighted" variant="p">Carne, queso, cebolla crispy y salsa BBQ.</Text>
                    </div>
                    <img
                        className="card__image"
                        src="/images/highlighted/image3.png"
                        alt="highlighted-product-3"/>
                </div>
            </article>
        </div>
    );
};

export default Home;