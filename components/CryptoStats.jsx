import millify from "millify";
import {MdDone} from "react-icons/md";

const CryptoStats = ({Icon, value, title, approved}) => {
    return (
        <section className={"info"}>
            <div className={"flex items-center  dark:text-gray-200 "}>
                <Icon className={"text-xl "}  />
                <p className={"ml-1 "}>{title}</p>
            </div>
            {title === "Number Of Markets" &&  <p className={"font-semibold  dark:text-gray-200 "}>{value}</p>}
            {title === "Number Of Exchanges" &&  <p className={"font-semibold  dark:text-gray-200 "}>{value}</p>}
            {approved ? <MdDone className={" dark:text-gray-200 "} /> : title !== "Rank" && title !== "Number Of Markets" && title !== "Number Of Exchanges" && <p className={"font-semibold  dark:text-gray-200 "}>{`$${millify(value)}`}</p>}
            {title === "Rank" && <p className={"font-semibold   dark:text-gray-200 "}>{value}</p>}
        </section>
    );
};

export default CryptoStats;