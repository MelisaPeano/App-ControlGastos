import { useGlobalState } from "../context/GlobalState";

const IcomeExpenses = () => {

    const { transactions } = useGlobalState()

    if(!transactions){
        return (
            <div>
                <h4>No hay transacciones</h4>
            </div>
        )
    }

    const montos = transactions.map(transaction => transaction.amount)

    const icome = montos.filter(monto => monto > 0).reduce((acc, item) => (acc += item), 0)

    const Expense = montos.filter(monto => monto < 0).reduce((acc, item) => (acc += item), 0) * -1;

    return (
        <>
            <div className="bg-zinc-600 text-white px-3 py-1 rounded-lg mb-2 w-full flex justify-between items-center">
                <h4>Ingresos</h4>
                <p>{icome}</p>
            </div>
            <div className="bg-zinc-600 text-white px-3 py-1 rounded-lg mb-10 w-full flex justify-between items-center">
                <h4>Gastos</h4>
                <p>{Expense}</p>
            </div>
        </>
    )
}

export default IcomeExpenses;