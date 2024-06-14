import { createContext } from "react";
import { useState } from "react";
const stateContext = createContext();
export function StateProvider({children}) {
    const [searchStatus, setSearchStatus] = useState('sale');
    const [loading, setIsLoading] = useState(false);
    return ( 
        <>
            <stateContext.Provider value={
                {
                    searchStatus,
                    setSearchStatus,
                    loading,
                    setIsLoading,
                }
            }>
                {children}
            </stateContext.Provider>
        </>
    );
}

export default stateContext;