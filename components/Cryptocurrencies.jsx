import React, {useEffect} from 'react';
import millify from "millify";
import Link from "next/link";
import {useSelector, useDispatch} from "react-redux";
import {selectCryptos} from "../redux/slices/cryptoSlices/cryptoSlice";
import {getAllCryptos} from "../redux/slices/cryptoSlices/cryptoAPI";
import Loader from "./Loader";

const Cryptocurrencies = ({coin}) => {
    const {name, rank, price, marketCap, change, iconUrl, id} = coin;
    const {loading} = useSelector(selectCryptos);
    const dispatch =  useDispatch();
    
    useEffect(() => {
        dispatch(getAllCryptos());
    }, [dispatch])

    if (loading === "loading") return <Loader />

    return (
        <Link href={`/cryptocurrencies/${id}`}>
            <section className={"shadow-md dark:bg-gray-600 cursor-pointer hover:shadow-lg bg-white py-4 px-5 space-y-3"}>
                <div>
                    <div className={"flex items-center dark:text-gray-200 justify-between font-semibold "}>
                        <h2>{rank}. {name}</h2>
                        <img width={30} height={30} className={""} src={iconUrl} alt=""/>
                    </div>

                    <div className={"border-b w-full px-5 py-2"}/>
                </div>


                <p className={"text-sm text-gray-600 dark:text-gray-50"}>Price: {millify(price)}</p>
                <p className={"text-sm text-gray-600 dark:text-gray-50"}>Market Cap: {millify(marketCap)}</p>
                <p className={"text-sm text-gray-600 dark:text-gray-50 pb-4"}>Daily Change : {millify(change)}%</p>

            </section>
        </Link>
    );
};

export default Cryptocurrencies;