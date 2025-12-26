import { Route, Routes } from 'react-router-dom'
import { Aside } from '../single/Aside'
import { Exchanges } from '../single/Exchanges'
import { HeaderApp } from '../single/HeaderApp'
import { Notify } from '../single/Notify'
import './App.scss'
import { TransactionPage } from '../../pages/TransactionPage'
import { AccauntPage } from '../../pages/AccauntPage'

export const App = () => {
  return (
    <>
     <div className="app">
        <div className="app-wrapper">
          <Aside/>
          <div className="app-main">
            <HeaderApp/>
            <div className="app-main-field">
                <Routes>
                  <Route path={'/'} element={<TransactionPage/>}/>
                  <Route path={'/accaunt'} element={<AccauntPage/>}/>
                </Routes>
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

