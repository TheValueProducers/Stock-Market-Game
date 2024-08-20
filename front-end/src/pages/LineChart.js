import React, { useState, useEffect, useContext } from 'react';
import "../assets/styles/lineChart.css";
import LightBulb from "../assets/images/light_bulb.png";
import { IgrFinancialChart } from 'igniteui-react-charts';
import { IgrFinancialChartModule } from 'igniteui-react-charts';
import { useParams } from 'react-router-dom';
import { StockContext } from '../context/stockContext';
import { generateStockData } from './stockData'; // Import the generateStockData function

IgrFinancialChartModule.register();

const FinancialChartPanes = () => {
    const { shareName } = useParams();
    const { stockData, setStockData } = useContext(StockContext);

    

    return (
        <>
            <header className='header'>
                <h1 className='username'>Username</h1>
                <div className='line'></div>
            </header>
            <section className='content'>
                <div className='top-section'>
                    <div className='info'>
                        <img className='info-icon' src={LightBulb} alt="Info Icon" />
                        <div className='info-content'>
                            <div>Time Elapsed: 1 Month</div>
                            <div>Cash:</div>
                            <div>Net Worth:</div>
                        </div>
                    </div>
                    <div className='stock-action'>
                        <div className='top-section-action'>
                            <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/625px-Apple_logo_black.svg.png" alt="Apple Logo" />
                            <div className='company-info'>
                                <h2>Apple Inc. (APPL)</h2>
                                <p>0 shares</p>
                            </div>
                        </div>
                        <h3 className='price'>Price 81.74$</h3>
                        <h3 className='quantity'>Quantity: 10</h3>
                        <div className='action'>
                            <button className='buy'>Buy</button>
                            <button className='sell'>Sell</button>
                        </div>
                        <input type="number" className='choose-quantity' />
                    </div>
                </div>
                <div className='graph'>
                    <h2 className='share-name'>{shareName}</h2>
                    <div className='graph-container'>
                        <div className='graph-wrapper'>
                            <IgrFinancialChart
                                width="100%"
                                height="400px"
                                chartType="Candle"
                                zoomSliderType="Candle"
                                volumeType="Area"
                                overlayBrushes="rgba(5, 138, 0, 0.17)"
                                overlayOutlines="rgba(5, 138, 0, 0.4)"
                                overlayThickness={1}
                                dataSource={null}
                            />
                        </div>
                    </div>
                </div>
            </section>
            <footer>
                <div className='line'></div>
                <div className='game-code'>234h28</div>
            </footer>
        </>
    );
};

export default FinancialChartPanes;