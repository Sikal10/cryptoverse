import {useState} from 'react';
import millify from "millify";

const Exchanges = ({exchanges}) => {
    const [click, setClick] = useState(false);
    const [selectedItem, setSelectedItem] = useState(1);

    const toggleClick = rank => {
        setSelectedItem(rank);
        setClick(!click);
    }

    return (
        <>
            <section className={"mx-4 my-5 divide-y border border-gray-600 dark:divide-gray-600"}>
                <main className={"grid grid-cols-4 dark:text-gray-100 py-2"}>
                    <div>Exchanges</div>
                    <div>24h Trade Volume</div>
                    <div>Markets</div>
                    <div>Change</div>
                </main>

                {exchanges.map((exchange, index) => {
                    const {iconUrl, rank, name, volume, numberOfMarkets, marketShare, description, id} = exchange;

                    return (
                        <>
                            <main key={index} onClick={() => toggleClick(rank)}
                                  className={`grid cursor-pointer dark:bg-gray-900 dark:text-gray-100 bg-white items-center grid-cols-4 py-4`}>
                                <div className={"flex items-center space-x-3"}>
                                    <p className={"ml-2"}>{rank}.</p>
                                   <div className={"flex flex-col md:flex-row md:space-x-3"}>
                                       <img className={"w-[35px] h-[35px]"} src={iconUrl} alt=""/>
                                       <p className={"text-xs md:text-base font-semibold md:w-full"}>{name}</p>
                                   </div>
                                </div>
                                <p>${millify(volume)}</p>
                                <p>{millify(numberOfMarkets)}</p>
                                <p>{millify(marketShare)}%</p>
                            </main>
                            {click && selectedItem === rank &&
                            <p className={"transition duration-200 ease-in bg-white space-y-3 p-4 dark:text-gray-200 dark:bg-gray-600"}
                               dangerouslySetInnerHTML={{__html: description}}/>}
                        </>
                    )

                })}
            </section>
        </>
    );
};

export default Exchanges;