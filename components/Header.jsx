import Link from "next/link";
import {useSelector} from "react-redux";
import {selectCryptos} from "../redux/slices/cryptoSlices/cryptoSlice";
import millify from "millify";
import {FiSun, FiMoon} from "react-icons/fi";
import useDarkMode from "../helpers/useDarkMode";

const link = "https://www.iconpacks.net/icons/2/free-cryptocurrency-coin-icon-2422-thumb.png";

const Header = () => {
    const {loading, stats} = useSelector(selectCryptos);
    const {totalMarketCap, totalMarkets, totalExchanges, total24hVolume, total} = stats;
    const [colorTheme, setTheme] = useDarkMode()

    const toggleColorTheme = () => {
        setTheme(colorTheme);
    };

    return (
        <header className={"bg-white dark:bg-gray-800 transition duration-300 ease"}>
            <div className={"space-x-3 flex justify-end max-w-7xl mx-auto py-3 px-5"}>
                <p onClick={toggleColorTheme} className={"items-center flex"}>{colorTheme === "light" ? <FiSun className={"text-xl text-white cursor-pointer"} /> : <FiMoon className={"cursor-pointer text-xl"} />}</p>
                <button className={"headerLinks hover:text-green-600"}>Login</button>
                <button className={"headerLinks hover:text-green-600"}>Sign Up</button>
                <button className={"font-semibold text-green-700 border-green-500 border py-2 px-3 rounded-lg"}>Subscribe</button>
            </div>
            <hr className={" dark:border-gray-700"}/>

            <div className={"space-x-5 sm:space-x-3 flex items-center max-w-7xl mx-auto py-3 px-5"}>
                <Link href={"/"}>
                    <div className={"flex items-center cursor-pointer"}>
                        <img src={link} alt="" className={"cursor-pointer w-50 h-[45px] object-contain"}/>
                        <h2 className={"ml-1 sm:ml-0 sm:text-xl font-semibold dark:text-white"}>CoinVerse</h2>
                    </div>
                </Link>

                <div className={"flex items-center space-x-3"}>
                    <Link href={"/cryptocurrencies"}>
                        <p className={"headerLinks hover:text-green-600"}>Coins</p>
                    </Link>
                    <Link href={"/exchanges"}>
                        <p className={"headerLinks hover:text-green-600"}>Exchanges</p>
                    </Link>
                    <Link href={"/news"}>
                        <p className={"headerLinks hover:text-green-600"}>News</p>
                    </Link>
                </div>
            </div>
            <hr className={" dark:border-gray-700"}/>

            {loading === "loaded" && <div className={"space-x-3 flex items-center max-w-7xl mx-auto py-3 px-5 "}>
                <p className={"headerLinks"}>Coins: <span className={"text-green-600"}>{total}</span></p>
                <p className={"headerLinks"}>Exchanges: <span className={"text-green-600"}>{totalExchanges}</span></p>
                <p className={"headerLinks"}>Market Cap: <span className={"text-green-600"}>${millify(totalMarketCap)}</span></p>
                <p className={"headerLinks"}>24h Vol: <span className={"text-green-600"}>${millify(total24hVolume)}</span></p>
                <p className={"headerLinks"}>Total Markets: <span className={"text-green-600"}>{millify(totalMarkets)}</span></p>
            </div>}
            <hr className={" dark:border-gray-700"}/>

        </header>
    );
};

export default Header;