import {useSelector, useDispatch} from "react-redux";
import {selectCryptos} from "../redux/slices/cryptoSlices/cryptoSlice";
import {useEffect} from "react";
import {getAllCryptos} from "../redux/slices/cryptoSlices/cryptoAPI";
import Cryptocurrencies from "./Cryptocurrencies";
import Link from "next/link";
import {selectNews, selectIsNewsLoading} from "../redux/slices/newsSlices/newsSlice";
import {getNews} from "../redux/slices/newsSlices/newsAPI";
import NewsCard from "./NewsCard";
import Loader from "./Loader";

const Home = () => {
    const dispatch =  useDispatch();
    const {coins, loading} = useSelector(selectCryptos);
    const filteredCoins = coins.slice(0, 10);

    const cryptoNews = useSelector(selectNews);
    const isNewsLoading = useSelector(selectIsNewsLoading);
    const filteredNews = cryptoNews.slice(0, 5);

    useEffect(() => {
        dispatch(getAllCryptos());
        dispatch(getNews("Cryptocurrency"));
    }, [dispatch]);

    if (loading === "loading" && isNewsLoading === "loading") {
        return <Loader />
    }

    return (
        <>
            <main className={"mx-5"}>
                <section>
                    <div className={" mt-8 text-2xl font-semibold sm:flex items-center justify-between "}>
                        <h3 className={"dark:text-gray-200"}>Top 10 Cryptos In The World</h3>
                        <p className={"text-blue-500 dark:text-gray-200 dark:hover:text-green-500"}>
                            <Link href={"/cryptocurrencies"}>Show more</Link>
                        </p>
                    </div>

                    <div className={"mt-4 sm:grid-cols-2 grid md:grid-cols-3 lg:grid-cols-4 gap-8"}>
                        {filteredCoins?.map(coin => <Cryptocurrencies key={coin.id} coin={coin}/>)}
                    </div>
                </section>

                <section className={"mt-10 mb-3"}>
                    <div className={"mb-6 text-2xl font-semibold flex items-center justify-between"}>
                        <h3 className={"dark:text-gray-200"}>Latest Crypto News</h3>
                        <p className={"text-blue-500 dark:text-gray-200 dark:hover:text-green-500"}><Link href={"/news"}>Show more</Link></p>
                    </div>

                    <div className={"mt-4 grid md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-8"}>
                        {filteredNews.map((news, index) => <NewsCard key={index} news={news} />)}
                    </div>

                </section>
            </main>
            <div className={"mt-[30px] border-b w-full dark:border-gray-600 "}/>
        </>
    );
}

export default Home;