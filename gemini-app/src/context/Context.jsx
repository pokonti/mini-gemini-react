import { createContext, useState } from "react";
import run from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {

    const [input, setInput] = useState("");
    const [recentPrompt, setRecentPrompt] = useState("");
    const [prevPrompts, setPrevPrompts] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resultData, setResultData] = useState("");

    const newChat = () => {
        setLoading(false)
        setShowResult(false)
    }

    const onSent = async (prompt) => {
        setResultData("")
        setLoading(true)
        setShowResult(true)
        setRecentPrompt(input)
        setPrevPrompts(p=>[...p, input])
        const response = await run(input)
        setResultData(response)
        setLoading(false)
    }

    const ContextValue = {
        prevPrompts,
        setPrevPrompts,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput,
        newChat
    }

    return(
        <Context.Provider value={ContextValue}>
            {props.children}
        </Context.Provider>
    )
}
export default ContextProvider

