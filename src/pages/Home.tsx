import {useCallback, useEffect, useRef, useState} from "react";
import {ChartData, ICryptoData} from "../utility/types";
import {getUniqueItems} from "../utility/helpers";
import {socket} from "../utility/socket";
import Widget from "../components/widget";
import SymbolsDrawer from "../components/drawers/Symbols";
import MainLayout from "../layouts/MainLayout";

interface ICryptoResponse {
  type: string;
  data: ICryptoData[];
}

type SymbolsData = Record<string, Array<ChartData & { t: number }>>

const Page = () => {
  const socketRef = useRef(socket).current;
  const [symbolsData, setSymbolsData] = useState<SymbolsData>({
    'BINANCE:BTCUSDT': [],
  });
  const [widgets, setWidgets] = useState(['BINANCE:BTCUSDT']);


  const unsubscribe = function (symbol: string) {
    socketRef.readyState && socketRef.send(JSON.stringify({'type': 'unsubscribe', 'symbol': symbol}));
  }


  useEffect(() => {
    socketRef.addEventListener('open', function () {
      Object.keys(symbolsData).forEach((symbol) => {
        socketRef.send(JSON.stringify({'type': 'subscribe', 'symbol': symbol}));
      })
    });

    socketRef.addEventListener('message', function (event) {
      const response = JSON.parse(event.data) as ICryptoResponse;

      if (response && response.data) {
        setSymbolsData((prevState) => {

          return Object.keys(prevState).reduce((acc, symbol: string) => {
            const symbolData = prevState[symbol]
            const lastItem = symbolData.length > 0 ? symbolData[symbolData.length - 1] : {
              t: 0
            }

            const newItems = getUniqueItems(response.data.filter((item, key) => item.t > lastItem.t && item.s === symbol && item.t > (key === 0 ? lastItem.t : response.data[key - 1].t + 1000)));

            const allItems = [
              ...symbolData, ...newItems.map((item: any) => ({
                date: new Date(item.t),
                price: item.p,
                t: item.t,
              })).sort((a, b) => a.t - b.t)
            ]

            if (allItems.length >= 100) {
              allItems.splice(0, 11);
            }

            acc[symbol] = allItems;

            return acc
          }, {} as SymbolsData)
        })
      }
    });

    return () => {
      Object.keys(symbolsData).forEach((symbol) => {
        unsubscribe(symbol);
      })
    }
  }, []);

  const handleAddWidget = useCallback((symbol: string) => {
    setSymbolsData((prevState) => {
      if (prevState[symbol]) {
        return prevState;
      }

      socketRef.send(JSON.stringify({type: 'subscribe', symbol}));

      return {
        ...prevState,
        [symbol]: []
      }
    })
    setWidgets(prevState => prevState.includes(symbol) ? prevState : [...prevState, symbol])
  }, [])

  const handleRemoveWidget = (symbol: string) => {
    unsubscribe(symbol);

    setSymbolsData((prevState) => {
      delete prevState[symbol];

      return prevState;
    })

    setWidgets(prevState => prevState.filter(item => item !== symbol));
  }


  return (
    <MainLayout>
      <div className='flex items-center justify-between'>
        <h1 className='font-bold text-3xl'>Dashboard</h1>
        <SymbolsDrawer widgets={widgets} addNewWidget={handleAddWidget}/>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-10'>
        {Object.keys(symbolsData).map((symbol) => (
          <Widget key={symbol} data={symbolsData[symbol]} symbol={symbol} onRemove={handleRemoveWidget}/>
        ))}
      </div>
    </MainLayout>
  )
}

export default Page
