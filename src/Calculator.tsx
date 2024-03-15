import './styles.css'


import { useState } from "react";
import Buttons from "./components/Buttons";
import Input from "./components/Input";

export default function Calculator() {
    const [input, setInput] = useState<string | null>(null);
    const [total, setTotal] = useState<number>(0);
    const [hasError, setHasError] = useState<boolean>(false)


    function handleButtonPress(value: string): void {
    // TODO: Implement logic to handle different button types (symbol, numbers)

    }
    return (
        <div className='calculator-container'>
            <Input error={hasError} input={null ?? '0'} />
            <Buttons handleOnPress={handleButtonPress} />
        </div>
    );
}