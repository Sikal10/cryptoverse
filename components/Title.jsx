import Head from "next/head";

const Title = ({title}) => {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name="description" content="cryptoverse-sikal.vercel.app" />
                <link rel="icon" href="/coinverse.png" />
            </Head>
        </div>
    );
};

export default Title;