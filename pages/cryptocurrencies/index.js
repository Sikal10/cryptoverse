import Cryptocurrencies from "../../components/Cryptocurrencies";
import axios from "axios";
import {useEffect, useState} from "react";
import Title from "../../components/Title";

const CryptocurrencyPage = ({coins}) => {
    const [coinsList, setCoinList] = useState([]);
    const [input, setInput] = useState("");

    const handleChange = e => {
        setInput(e.target.value);
    }

    useEffect(() => {
        const filteredCoins = coins.filter((coin) => coin.name.toLowerCase().includes(input.toLowerCase()));
        setCoinList(filteredCoins);
    }, [coins, input]);


    return (
        <section>
            <Title title={"Cryptocurrencies"} />
            <div className={"mt-10 mb-5 max-w-[300px] mx-auto"}>
                <input value={input} onChange={handleChange} type="search" className={"mx-auto dark:bg-transparent rounded-lg dark:text-gray-100 p-2 focus:outline-none border border-gray-200 w-full "} placeholder={"Search Crypto"}/>
            </div>
            
            <div className={"my-4 mx-6 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"}>
                {coinsList.map((coin) => <Cryptocurrencies coin={coin} key={coin.id} />)}
            </div>

            <div className={"mt-[30px] border-b w-full dark:border-gray-600 "}/>

        </section>
    );
};

export default CryptocurrencyPage;

export const getServerSideProps = async () => {
    const options = {
        headers: {
            'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
            'x-rapidapi-key': 'b3211a2b97mshea05310a6ed9abcp19900fjsn4f82924ab119'
        }
    }
    const BASE_URL = "https://coinranking1.p.rapidapi.com/coins";
    const {data} = await axios.get(`${BASE_URL}?limit=100`, options);

    return {
        props: {
            coins: data.data.coins
        }
    }
}