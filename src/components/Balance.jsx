
import { useGlobalState } from "../context/GlobalState";

const Balance = () => {

  const { transactions = []} = useGlobalState();
  
  const montos = transactions.map(transaction => Number(transaction.amount)).filter(amount => !isNaN(amount));
  const total = montos.reduce((acc, item)=> (acc += item), 0)
  

    return (
        <>
        <div className="block justify-between p-3 m-4 text-2xl">
            <h4>Tu balance</h4>
            <h1 className="text-3xl font-bold block m-3">${total}</h1>
        </div>
       
        </>
    )
}

export default Balance;