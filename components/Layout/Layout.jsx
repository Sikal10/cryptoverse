import Footer from "./Footer";
import Header from "../Header";

const Layout = ({children}) => {
    return (
        <section className={"dark:bg-gray-900 transition duration-300 ease"}>
            <Header />
            <main className={"overflow-y-auto mx-auto max-w-7xl"}>{children}</main>
            <Footer/>
        </section>
    );
};

export default Layout;