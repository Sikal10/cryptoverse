import '../styles/globals.css'
import Layout from "../components/Layout/Layout";
import {Provider} from "react-redux";
import {store} from "../redux/app/store";
import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";

const progress = new ProgressBar({
    size: 3,
    color: "#111827",
    className: "z-1",
    delay: 100
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

function MyApp({Component, pageProps}) {
    return <Provider store={store}>
        <Layout>
            <Component {...pageProps} />
        </Layout>
    </Provider>
}

export default MyApp
