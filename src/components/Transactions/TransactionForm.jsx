import { useState } from "react"
import { useGlobalState } from "../../context/GlobalState"


const TransactionForm = () => {
    const { addTransaction } = useGlobalState();
    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        addTransaction({
            id: window.crypto.randomUUID(),
            description: description,
            amount: +amount,
        });
        setAmount(0),
        setDescription("")
        console.log(description, amount)

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Descripción"
                    onChange={(e) => setDescription(e.target.value)}
                    className="bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full"
                    value={description}
                />
                <input type="number" step={0.01} placeholder="Monto"
                    onChange={(e) => setAmount(e.target.value)}
                    className="bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full"
                    value={amount}
                />
                <button
                className="bg-indigo-700 text-white px-3 py-2 rounded-lg block mb-2 w-full">Agregar</button>
            </form>
        </div>
    )
}

export default TransactionForm;