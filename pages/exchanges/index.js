import Exchanges from "../../components/Exchanges";
import axios from "axios";
import Title from "../../components/Title";

const ExchangesPage = ({exchanges}) => {
    return (
        <>
            <Title title={"Exchanges"} />
            <Exchanges exchanges={exchanges} />
        </>
    );
};

export default ExchangesPage;

export const getStaticProps = async () => {
    const options = {
        headers: {
            'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
            'x-rapidapi-key': 'b3211a2b97mshea05310a6ed9abcp19900fjsn4f82924ab119'
        }
    }
    const BASE_URL = "https://coinranking1.p.rapidapi.com";
    const {data} = await axios.get(`${BASE_URL}/exchanges`, options);

    return {
        props: {
            exchanges: data.data.exchanges
        }
    }
}