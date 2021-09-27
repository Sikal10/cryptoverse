const link = "https://www.iconpacks.net/icons/2/free-cryptocurrency-coin-icon-2422-thumb.png";

const Footer = () => {
    return (
        <footer className={"text-center grid space-x-10 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-2 gap-y-3 overflow-auto max-w-7xl mx-auto py-10 dark:bg-gray-900 dark:text-gray-100"}>
            <main className={"space-y-3 text-left md:ml-3"}>
                <div className={"flex space-x-1 space-x-3"}>
                    <img className={"h-10 w-10 sm:10 ml-9 sm:h-10 lg:w-20 sm:ml-9 lg:h-20 "} src={link} alt=""/>
                    <h2 className={"dark:text-gray-200 lg:text-4xl sm:text-2xl font-semibold"}>CoinVerse</h2>
                </div>
                <p className={"dark:text-gray-200 sm:block sm:ml-10 ml-10 dark:text-gray-400 text-gray-600 text-sm"}>CoinVerse provides a fundamental analysis of the crypto
                    market. In addition to tracking price, volume
                    and market capitalization, CoinVerse tracks community growth, open-source code development,
                    major events and on-chain metrics.
                </p>
            </main>
            <div className={"space-y-3 text-left"}>
                <p className={"font-semibold"}>Donations</p>
                <p className={"dark:text-gray-400"}>Bitcoin</p>
                <p className={"dark:text-gray-400"}>Ethereum</p>
            </div>
            <div className={"space-y-3 text-left"}>
                <p className={"font-semibold"}>CoinVerse</p>
                <p className={"dark:text-gray-400"}>About Us</p>
                <p className={"dark:text-gray-400"}>Methodology</p>
                <p className={"dark:text-gray-400"}>Careers</p>
                <p className={"dark:text-gray-400"}>Branding Guide</p>
                <p className={"dark:text-gray-400"}>Advertising</p>
            </div>
            <div className={"space-y-3 text-left"}>
                <p className={"font-semibold "}>Interested to stay up-to-date with cryptocurrencies?</p>
                <p className={"dark:text-gray-400"}>Get the latest crypto news, updates, and reports by subscribing to our free newsletter.</p>
                <div className={""}>
                    <p className={"dark:text-gray-400"}>Your email address:</p>
                    <input className={"px-5 py-2 lg:w-full rounded-md border border-black outline-none dark:text-gray-800 "} type="text"/>
                </div>
                <button className={"px-10 py-3 bg-green-600 text-gray-200 font-semibold rounded-md border-none dark:hover:bg-green-400"}>Subscribe</button>
            </div>

        </footer>
    );
};

export default Footer;