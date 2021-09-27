import {useSelector, useDispatch} from "react-redux";
import {useEffect, useState} from "react";
import {selectIsNewsLoading, selectNews} from "../redux/slices/newsSlices/newsSlice";
import {getNews} from "../redux/slices/newsSlices/newsAPI";
import {getAllCryptos} from "../redux/slices/cryptoSlices/cryptoAPI";
import {selectCryptos} from "../redux/slices/cryptoSlices/cryptoSlice";
import NewsCard from "./NewsCard";
import Loader from "./Loader";

const News = () => {
    const [newsCategory, setNewsCategory] = useState("Cryptocurrency");

    const dispatch = useDispatch();
    const cryptoNews = useSelector(selectNews);
    const isNewsLoading = useSelector(selectIsNewsLoading);

    const {coins, loading} = useSelector(selectCryptos);

    const handleChange = e => {
        setNewsCategory(e.target.value);
    }

    useEffect(() => {
        dispatch(getNews(newsCategory));
        dispatch(getAllCryptos());
    }, [dispatch, newsCategory]);

    if (isNewsLoading === "loading" && loading === "loading") {
        return <Loader/>
    }

    return (
        <>
            <section className={"dark:bg-gray-900"}>
                <div className={"bg-white dark:bg-gray-900 max-w-[200px] m-5"}>
                    <select placeholder={"Select a crypto"} value={newsCategory} onChange={handleChange}
                            className={"border py-4 dark:text-gray-50 dark:bg-transparent text-gray-500 font-semibold text-sm  focus:outline-none w-full py-1"}>
                        <option className={"dark:bg-gray-900"} value="">{newsCategory}</option>
                        {coins.map((coin) => {
                            return <option className={"dark:bg-gray-900"} key={coin.id}
                                           value={coin.name}>{coin.name}</option>
                        })}
                    </select>
                </div>
                <div className={"mt-4 grid md:grid-cols-3 lg:grid-cols-3 gap-8 m-5"}>
                    {cryptoNews.map((news, index) => <NewsCard key={index} news={news}/>)}
                </div>
            </section>
            <div className={"mt-[30px] border-b w-full dark:border-gray-600 "}/>
        </>

    );
};

export default News;