import React from 'react';
import './App.css';
import { Header }  from './components/Header';
import { Balance }  from './components/Balance';
import { Incomeexpences }  from './components/Incomeexpences';
import { TransactionList }  from './components/TransactionList';
import { AddTransation }  from './components/AddTransation';
import { GlobalProvider } from  './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
     <Header/>
     <div className='container'>
       <Balance/>
       <Incomeexpences/>
       <TransactionList/>
       <AddTransation/>
     </div>
    </GlobalProvider>
  );
}

export default App;
