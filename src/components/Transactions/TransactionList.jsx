import { useGlobalState } from "../../context/GlobalState";




const TransactionList = () => {
    const { transactions, deleteTransaction } = useGlobalState();



    return (
        <>
            <h3 className="text-slate-300 text-xl font-bold block">History</h3>
                {transactions.map((transaction) => (
                        <li key = {transaction.id}
                         className="bg-zinc-600 text-white px-3 py-1 rounded-lg mb-2 w-full flex justify-between items-center"
                        >
                            <p className="text-sm">{transaction.description}</p>
                            <div>
                                <span>${transaction.amount}</span>
                                <button className="p-2" onClick={() => deleteTransaction(transaction.id)
                                }> x </button>

                            </div>
                        </li>
                
                ))
                }
        </>
    )
}



export default TransactionList;