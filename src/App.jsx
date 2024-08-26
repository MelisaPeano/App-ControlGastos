
import { GlobalProvider } from "./context/GlobalState"
import Balance from "./components/Balance"
import TransactionForm from "./components/Transactions/TransactionForm"
import TransactionList from "./components/Transactions/TransactionList"
import IcomeExpenses from "./components/IcomeExpenses"
import ExpenseComponent from "./components/ExpenseComponent"

function App() {


  return (
    <>
      <GlobalProvider>
        <div className="bg-zinc-900 text-white h-screen flex justify-center items-center">
          <div className="container mx-auto w-3/6">
            <div className="bg-zinc-800 p-10 rounded-lg flex gap-x-2">
            <div>
                <h1 className="text-4x1 font-bold">Seguidor de Gastos</h1>
                <Balance />
                <IcomeExpenses />
                <TransactionForm />
            </div>
            <div className="flex flex-col flex-1">
              <TransactionList />
              <ExpenseComponent/>
            </div>
            </div>

          </div>
        </div>
      </GlobalProvider>
    </>
  )
}

export default App
