import {FC, memo, useState} from "react";
import {symbolsList} from "../../utility/constants.ts";
import Drawer from "../ui/Drawer.tsx";

interface IProps {
  widgets: string[]
  addNewWidget: (symbol: string) => void
}

const SymbolsDrawer: FC<IProps> = ({addNewWidget, widgets}) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>

      <button
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 transition-all font-medium rounded-lg text-sm px-5 py-2.5"
        onClick={() => setIsDrawerOpen(true)}
        style={{
          animation: 'button-pulse 2s infinite',
        }}
      >
        Add New Widget +
      </button>

      {isDrawerOpen && <Drawer onClose={() => setIsDrawerOpen(false)} title='Symbols Drawer'>
          <div className="grid grid-cols-1 gap-4">
            {symbolsList.map((symbol: string) => (
              <div className="p-4 flex justify-between shadow-lg rounded-lg" key={symbol}>
                <div>{symbol}</div>
                <div>
                  {!widgets.includes(symbol) ? (
                    <button
                      onClick={() => addNewWidget(symbol)}
                      className="text-white bg-blue-700 hover:bg-blue-800 transition-all font-medium rounded-lg text-sm px-5 py-2.5"
                    >
                      Add +
                    </button>
                  ) : (
                    <button
                      disabled
                      className="text-black-300 bg-white border-2 font-medium rounded-lg text-sm px-5 py-2"
                    >
                      Added
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
      </Drawer>}
    </>
  )
}

export default memo(SymbolsDrawer);