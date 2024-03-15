import './styles.css'


import { useState } from "react";
import Buttons from "./components/Buttons";
import Input from "./components/Input";

export default function Calculator() {
    const [input, setInput] = useState<string | null>(null);
    const [total, setTotal] = useState<number>(0);
    const [hasError, setHasError] = useState<boolean>(false);

    const [oldIput, setOldInput] = useState<string | null>(null);
    const [showOldInput, setShowOldInput] = useState<boolean>(false);
    const [prevSymbol, setPrevSymbol] = useState<string | null>(null);
    const [equalSignPressed, setEqualSignPressed] = useState<boolean>(false);


    function storeNumToScreen(num: string){
        setInput(prev => prev === '0' || prev === null || equalSignPressed && input?.charAt(0) !== '.'? num: prev + num)
    }

    function handleSymbol(symbol: string){
        // TODO: Implement logic to handle different button types (symbol, numbers)
    }
    
    function handleButtonPress(value: string): void {
        if (showOldInput) {
            setShowOldInput(false);
        }
        const numValue: number = parseInt(value);
        if (Number.isNaN(numValue)) {
            handleSymbol(value);
        } 
        else {
            storeNumToScreen(value);
            if (equalSignPressed) {
                setTotal(0)
            }
        }
        if (value !== '=') {
            setEqualSignPressed((value === '+/-' && equalSignPressed || value === '%' || value === '.' && equalSignPressed))
        }
    }
    return (
        <div className='calculator-container'>
            <Input error={hasError} input={null ?? '0'} />
            <Buttons handleOnPress={handleButtonPress} />
        </div>
    );
}