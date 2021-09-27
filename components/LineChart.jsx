import {Line} from "react-chartjs-2";

const LineChart = ({coinHistory, coinName, currentPrice, priceChange}) => {
    const coinPrices = coinHistory.map(coin => coin.price);

    const coinTimestamps = coinHistory.map(({timestamp}) => {
        return new Date(timestamp).toLocaleString()
    });

    const data = {
        labels: coinTimestamps,
        datasets: [
            {
                label: 'Price in USD',
                data: coinPrices,
                fill: false,
                backgroundColor: '#0071BD',
                borderColor: '#0071BD',
            },
        ],
    };

    const options = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],
        },
    };


    return (
        <section className={"md:mx-10 md:mt-5"}>
            <div className={"flex justify-between"}>
                <h3 className={"ml-7 md:text-3xl text-blue-600 font-semibold dark:text-gray-50"}>{coinName} Price Chart</h3>
                <div className={"flex items-center space-x-3 font-extrabold dark:text-gray-100"}>
                    <p>Change: {priceChange}%</p>
                    <p>Current {coinName} Price: ${currentPrice}</p>
                </div>
            </div>
            <div className={"hidden sm:block max-w-6xl"}>
                <Line data={data} options={options}  />
            </div>
        </section>
    );
};

export default LineChart;