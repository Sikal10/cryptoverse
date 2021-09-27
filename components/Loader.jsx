import {CgSpinner} from "react-icons/cg";

const Loader = () => {
    return (
        <div className={'h-screen grid place-items-center'}>
            <CgSpinner className={"dark:text-white text-5xl animate-spin"} />
        </div>
    );
};

export default Loader;