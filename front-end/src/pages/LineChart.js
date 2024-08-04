import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import "../assets/styles/lineChart.css"
import LightBulb from "../assets/images/light_bulb.png"

import { IgrFinancialChart } from 'igniteui-react-charts';
import { IgrFinancialChartModule } from 'igniteui-react-charts';
import { StockIndexData } from './StockIndexData';
import { useParams } from 'react-router-dom';

IgrFinancialChartModule.register();

const FinancialChartPanes = () => {
    const [data, setData] = useState([]);
    const {shareName} = useParams();

    useEffect(() => {
        const initData = () => {
            const today = new Date();
            const year = today.getFullYear();
            const month = today.getMonth();
            const dateEnd = new Date(year, month, 1);
            const dateStart = new Date(year - 1, month, 1);

            const stockData = StockIndexData.getData();
            setData(stockData);
        };

        initData();
    }, []);

   

    

    return (
      <>
          <header className='header'>
            <h1 className='username'>Username</h1>
            <div className='line' ></div>
          </header>
          <section className='content'>
            <div className='info'>
                <img className='info-icon' src = {LightBulb}/>
                <div className='info-content'>
                    <div>Time Elapsted: 1 Month</div>
                    <div>Cash:</div>
                    <div>Net Worth:</div>
                </div>
            </div>
            <div className='graph'>
              <h2 className='share-name'>{shareName}</h2>
              <div className='graph-container'>
                    <div  className='graph-wrapper'>
                        <IgrFinancialChart
                            width="100%"
                            height="100%"
                            chartType="Candle"
                            zoomSliderType="Candle"
                            volumeType="Area"
                            overlayBrushes="rgba(5, 138, 0, 0.17)"
                            overlayOutlines="rgba(5, 138, 0, 0.4)"
                            overlayThickness={1}
                            dataSource={data}
                        />
                    </div>
              </div>
            </div>
          </section>
          <footer>
            <div className='line' ></div>
            <div className='game-code'>234h28</div>

          </footer>
        </>
    );
};

export default FinancialChartPanes;