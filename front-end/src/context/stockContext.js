import React, { createContext, useState, useEffect } from 'react';


const ENDPOINT = "http://127.0.0.1:4001";

export const StockContext = createContext();

export const StockProvider = ({ children }) => {
    const [stockData, setStockData] = useState([]);

   

    return (
        <StockContext.Provider value={{ stockData, setStockData, ENDPOINT }}>
            {children}
        </StockContext.Provider>
    );
};