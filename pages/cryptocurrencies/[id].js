import Cryptocurrency from "../../components/Cryptocurrency";
import axios from "axios";
import Title from "../../components/Title";

const SpecificCryptoPage = ({success, coin, coinHistory, priceChange}) => {
    return (
        <>
            <Title title={coin.name} />
            <Cryptocurrency coin={coin} success={success} coinHistory={coinHistory} priceChange={priceChange}/>
        </>
    );
};

export default SpecificCryptoPage;

export const getServerSideProps = async (context) => {
    const options = {
        headers: {
            'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
            'x-rapidapi-key': 'b3211a2b97mshea05310a6ed9abcp19900fjsn4f82924ab119'
        }
    }
    const BASE_URL = "https://coinranking1.p.rapidapi.com";
    const coinId = context.query.id;
    const timePeriod = "7d";
    const {data} = await axios.get(`${BASE_URL}/coin/${coinId}`, options);
    const res = await axios.get(`${BASE_URL}/coin/${coinId}/history/${timePeriod}`, options);
    const coinHistory = await res.data.data.history;
    const priceChange = await res.data.data.change;

    console.log(priceChange);


    return {
        props: {
            success: data.status,
            coin: data.data.coin,
            coinHistory,
            priceChange
        }
    }
}