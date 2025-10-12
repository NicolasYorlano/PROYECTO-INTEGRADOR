import PropTypes from "prop-types";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import "./layout.scss";
import Main from "./main/Main";

const Layout = (props) => {
    const { children } = props;

    return (
        <div className="layout">
            <Header/>
            <Main>{children}</Main>
            <Footer/>
        </div>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;