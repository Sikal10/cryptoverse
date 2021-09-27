import Link from "next/link";

const CryptoLinks = ({link}) => {
    const {name, url, type} = link;

    return (
        <div className={"info"}>
            <h2 className={"font-semibold capitalize dark:text-gray-200  "}>{type}</h2>
            <p className={"text-blue-700 font-bold"}>
                <Link href={`${url}`}>{name}</Link>
            </p>
        </div>
    );
};

export default CryptoLinks;