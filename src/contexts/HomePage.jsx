import { createContext, useState } from "react";


export const HomeContext = createContext();

export const HomeProvider = ({ children }) => {
    const [isHomePage, setIsHomePage] = useState(true);

    return (
        <HomeContext.Provider value={{ isHomePage, setIsHomePage }}>
            {children}
        </HomeContext.Provider>
    );
};