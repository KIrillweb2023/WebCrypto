import { Aside } from '../single/Aside'
import { Exchanges } from '../single/Exchanges'
import { HeaderApp } from '../single/HeaderApp'
import { Notify } from '../single/Notify'
import { Transactions } from '../single/Transactions'
import './App.scss'

export const App = () => {
  return (
    <>
     <div className="app">
        <div className="app-wrapper">
          <Aside/>
          <div className="app-main">
            <HeaderApp/>
            <div className="app-main-field">
                <Transactions/>
                <div className="app-main-field__other">
                  <Exchanges/>
                  <Notify/>
                </div>
            </div>
          </div>
        </div>
     </div>
    </>
  )
}

