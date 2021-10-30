// Do not have to import react with version 17
import Footer from "../components/Footer";
import Header from "../components/Header";

const Layout = ({ updateState, children }) => {
    return (<>
        <Header updateState={updateState} />
        {children}
        <Footer />
    </>
    )
}

export default Layout;