import { Text } from "@/components/texts";
import "./highlighted-products.scss";

const HighlightedProduct = () => {
    return (
        <section className="highlighted-products">
            <Text className="highlighted-products__title" id="products-highlighted" variant="h2">Nuestros productos más destacados</Text>

            <article className="card card--highlighted">
                <div className="card--highlighted--float">
                    <Text className="card__title card__title--highlighted" variant="h3">Hamburguesa Clásica</Text>
                    <Text className="card__description card__description--highlighted" variant="p">Carne vacuna, lechuga, tomate y mayonesa.</Text>
                </div>
                <img
                    className="card__image"
                    src="/highlighted/highlighted-1.png"
                    alt="Producto destacado 1"/>
            </article>

            <article className="card card--highlighted">
                <div className="card--highlighted--float">
                    <Text className="card__title card__title--highlighted" variant="h3">Hamburguesa Doble Queso</Text>
                    <Text className="card__description card__description--highlighted" variant="p">Doble carne con cheddar y panceta.</Text>
                </div>
                <img
                    className="card__image"
                    src="/highlighted/highlighted-2.png"
                    alt="Producto destacado 2"/>
            </article>

            <article className="card card--highlighted">
                <div className="card--highlighted--float">
                    <Text className="card__title card__title--highlighted" variant="h3">Hamburguesa BBQ</Text>
                    <Text className="card__description card__description--highlighted" variant="p">Carne, queso, cebolla crispy y salsa BBQ.</Text>
                </div>
                <img
                    className="card__image"
                    src="/highlighted/highlighted-3.png"
                    alt="Producto destacado 3"/>
            </article>
        </section>
    );
};

export default HighlightedProduct;