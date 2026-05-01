import HighlightedProduct from "./home-highlighted-products/HighlightedProduct";
import HomeSlider from "./home-slider/HomeSlider";
import "./home.scss";

const Home = () => {
    return (
        <div className="home">
            <HomeSlider/>
            <HighlightedProduct/>
        </div>
    );
};

export default Home;