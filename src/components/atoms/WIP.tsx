import { BsConeStriped } from 'react-icons/bs';

const WIP = () => {
    return (
        <div className="
            p-5 rounded-xl w-1/2 mx-auto my-5
            flex flex-col justify-center items-center 
            bg-slate-100
            border-2 border-black
        ">
            <BsConeStriped className="w-20 h-20 fill-orange-500"/>
            <p className="text-center">This site is currently under construction.</p>
        </div>
    );
}

export default WIP;