import {FC, memo, useMemo} from "react";
import {ChartData} from "../../utility/types";
import Skeleton from "../ui/Skeleton";
import AppChart from "../ui/AppChart";

interface IProps {
  symbol: string;
  data: Array<ChartData & { t: number }>;
  onRemove: (symbol: string) => void;
}

const Widget: FC<IProps> = ({symbol, data, onRemove}) => {
  const appChartData = useMemo(() => data.map(({date, price}) => ({date, price})), [data]);

  return (
    <Skeleton loading={!data.length} className="w-full h-[355px]">
      <div className="shadow-lg p-4">
        <div className="mb-2 flex justify-between">
          <h2 className="text-xl font-semibold">
            {symbol} ${data.length && data[data.length - 1].price.toLocaleString()}
          </h2>
          <button className="cursor-pointer" onClick={() => onRemove(symbol)} title="Remove">X</button>
        </div>
        <AppChart data={appChartData}/>
      </div>
    </Skeleton>
  )
}

export default memo(Widget, (prevProps, nextProps) => prevProps.data.length === nextProps.data.length);
