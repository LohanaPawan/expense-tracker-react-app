
import './App.css';
import Header from "../src/components/Header"
import Balance from '../src/components/Balance'
import IncomeExpenses from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import {GlobalProvider} from '../src/context/GlobalContext'

function App() {
  return (
    <GlobalProvider>
     <Header />
     <div className = "container">
       <Balance />
       <IncomeExpenses />
       <TransactionList />
       <AddTransaction />
     </div>
    </GlobalProvider>
  );
}

export default App;
