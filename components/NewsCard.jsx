import moment from "moment";
import Link from "next/link";

const NewsCard = ({news}) => {
    const {name, datePublished, description, url} = news;
    const image = news.image?.thumbnail.contentUrl;

    const provider = news?.provider[0];
    const providerName = provider?.name;

    const providerImg = provider.image?.thumbnail.contentUrl;

    return (
        <Link href={`${url}`}>
            <section className={"bg-white dark:bg-gray-600 cursor-pointer hover:shadow-lg shadow-md p-5 space-y-3"}>
                <div className={"space-x-3  dark:text-gray-200 flex justify-between"}>
                    <p className={"font-semibold text-lg"}>{name}</p>
                    <img className={"h-[65px] w-[85px] object-contain"} src={image} alt=""/>
                </div>

                <p className={"text-gray-500 line-clamp-2  dark:text-gray-50"}>{description}</p>

                <main className={"flex items-center text-gray-500 pb-3 dark:text-gray-50 text-xs justify-between"}>
                    <div className={"items-center flex "}>
                        <img className={"rounded-full w-[30px] h-[30px]"} src={providerImg} alt=""/>
                        <p className={"ml-2 w-[150px]"}>{providerName}</p>
                    </div>
                    <p>{moment(datePublished).startOf("ss").fromNow()}</p>
                </main>

            </section>
        </Link>
    );
};

export default NewsCard;