import classNames from "classnames";
import { type FC } from "react";

type PickOneRadioProps = {
    selected: boolean;
    value: string;
}

const PickOneRadio:FC<PickOneRadioProps> = ({ selected, value}) => {
    const valueClasses = classNames(
        "py-1 px-2 w-20 text-center cursor-pointer rounded text-sm",
        {
            "bg-white": selected,
        }
    );
    
    return (
        <label 
            htmlFor="radio"
            className="flex items-center justify-center px-1"
        >
            <input type="radio" className="hidden"/>
            <p className={valueClasses}>
                {value}
            </p>
        </label>
    )
}

type PickOneProps = {
    values: string[];
}

const PickOne:FC<PickOneProps> = ({ values }) => {
    return (
        <fieldset 
            role="radiogroup"
            className="flex items-center p-1 mx-auto divide-x rounded divide-slate-400 bg-slate-200 w-fit"
        >
            {values.map((val, index) => (
                <PickOneRadio 
                    key={val} 
                    value={val} 
                    selected={index === 0}
                />
            ))}
        </fieldset>
    )
};

export default PickOne;