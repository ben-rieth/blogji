import { type ChangeEvent, useState, type FC } from "react";
import PickOne from "../controls/PickOne";

type BigOVisualizerProps = object;

const BigOVisualizer:FC<BigOVisualizerProps> = () => {
    
    const [items, setItems] = useState<number>(25);
    
    return (
        <div>
            <p>Work Done: {items * items}</p>
            <div className="flex flex-col">
                <label htmlFor="input-slider">Size of Input: {items}</label>
                <div className="flex items-center gap-5">
                    <p>n = 0</p>
                    <input 
                        className="flex-1"
                        id="input-slider"
                        type="range"
                        min="0"
                        max="1000"
                        step="25"
                        value={items}
                        onChange={(event: ChangeEvent<HTMLInputElement>) => {
                            setItems(Number(event.currentTarget.value));
                        }}
                    />
                    <p>n = 1000</p>
                </div>
            </div>
            <PickOne values={["O(1)", "O(logN)", "O(N)", "O(N*logN)", "O(N^2)", "O(2^N)"]}/>
        </div>
    );
};

export default BigOVisualizer;