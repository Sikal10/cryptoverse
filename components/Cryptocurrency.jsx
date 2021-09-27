import {BiDollarCircle, BiHash, BiErrorCircle} from "react-icons/bi";
import {BiChart, BiTrophy} from "react-icons/bi";
import {HiCurrencyYen} from "react-icons/hi";
import {AiOutlineThunderbolt} from "react-icons/ai";
import CryptoStats from "./CryptoStats";
import CryptoLinks from "./CryptoLinks";
import LineChart from "./LineChart";
import millify from "millify";
import {useEffect, useRef, useState} from "react";

const Cryptocurrency = ({coin, success, coinHistory, priceChange, handleChange, timePeriod}) => {
    const [isSuccess, setIsSuccess] = useState(success || "");

    useEffect(() => {
        setIsSuccess(success);
        const description = descriptionRef?.current?.childNodes;
        for (let [idx, child] of description.entries()) {
            if (child.nodeName === 'H3') child.classList.add("font-bold");
            if(child.nodeName === "P") child.classList.add("text-gray-600","dark:text-gray-500");
            if (child.nodeName === "P" && idx === 22) child.classList.add("cursor-pointer","text-blue-600");
        }
    }, [success])

    const descriptionRef = useRef();

    const {
        name,
        description,
        rank,
        volume,
        marketCap,
        price,
        allTimeHigh,
        numberOfMarkets,
        circulatingSupply,
        numberOfExchanges,
        approvedSupply,
        totalSupply,
        links,
        slug
    } = coin;

    const highestPrice = allTimeHigh.price;

    return (
        <section>
            <div className={"text-center p-20"}>
                <h2 className={"font-bold text-blue-600 text-3xl mb-7 dark:text-gray-50"}>{name} ({slug}) Price</h2>
                <p className={"text-gray-600 mb-10 dark:text-gray-200"}>Bitcoin live price in US Dollar (USD). View value statistics, market cap and supply.</p>
                <div className={"border-b-2 border-gray-200 dark:border-gray-600"}/>
            </div>

            <LineChart coinName={name} currentPrice={millify(price)} coinHistory={coinHistory} priceChange={priceChange}/>

            <main className={"grid sm:grid-cols-2 gap-x-7 mx-10 mt-10"}>
                <div className={"space-y-3"}>
                    <h3 className={"text-2xl text-blue-500 font-semibold dark:text-gray-50"}>{name} Value Statistics</h3>
                    <p className={"text-gray-500 dark:text-gray-200"}>An overview showing the statistics of {name}, such as the base and
                        quote currency, the rank, and trading volume.</p>

                    <main className={"divide-y-2 divide-gray-200"}>
                        <CryptoStats Icon={BiDollarCircle} value={price} title={"Price to USD"}/>
                        <CryptoStats Icon={BiHash} value={rank} title={"Rank"}/>
                        <CryptoStats Icon={AiOutlineThunderbolt} value={volume} title={"24h Volume"}/>
                        <CryptoStats Icon={BiDollarCircle} value={marketCap} title={"Market Cap"}/>
                        <CryptoStats Icon={BiTrophy} value={highestPrice} title={"All-time-high(daily avg.)"}/>
                        <hr/>
                    </main>

                </div>

                <div className={"space-y-3"}>
                    <h3 className={"text-2xl text-blue-500 font-semibold dark:text-gray-50"}>Other Stats Info</h3>
                    <p className={"text-gray-500 dark:text-gray-200"}>An overview showing the statistics of Cryptocurrencies, such as the
                        base and quote currency, the rank, and trading volume.</p>

                    <main className={"divide-y-2 divide-gray-200"}>
                        <CryptoStats Icon={BiChart} value={numberOfMarkets} title={"Number Of Markets"}/>
                        <CryptoStats Icon={HiCurrencyYen} value={numberOfExchanges} title={"Number Of Exchanges"}/>
                        <CryptoStats Icon={BiErrorCircle} value={totalSupply} approved={approvedSupply}
                                     title={"Approved Supply"}/>
                        <CryptoStats Icon={BiErrorCircle} value={totalSupply} title={"Total Supply"}/>
                        <CryptoStats Icon={BiErrorCircle} value={circulatingSupply} title={"Circulating Supply"}/>
                        <hr/>
                    </main>

                </div>
            </main>

            <main className={"grid sm:grid-cols-2 gap-x-7 mx-10 mt-10"}>
                <div>
                    <h3 className={"text-2xl text-blue-600 font-semibold mb-3 dark:text-gray-50"}>What is {name}?</h3>
                    <div ref={descriptionRef} dangerouslySetInnerHTML={{__html: description}} className={"space-y-4 mb-6 dark:text-gray-200"}/>
                </div>

                <div>
                    <h3 className={"text-2xl text-blue-500 font-semibold mb-3  dark:text-gray-200 "}>{name} Links</h3>
                    <section className={"divide-y-2 divide-gray-200 "}>
                        {links.map((link, i) => <CryptoLinks link={link} key={i} />)}
                    </section>
                </div>
            </main>

        </section>
    );
};

export default Cryptocurrency;