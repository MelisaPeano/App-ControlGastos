import { VictoryPie, VictoryLabel } from "victory"
import { useGlobalState } from "../context/GlobalState"
const ExpenseComponent = () => {

    const { transactions = [] } = useGlobalState();
    
    const totalIngresos = transactions
    .filter(transaction => transaction.amount > 0)
    .reduce((acc, transaction) => (acc += transaction.amount), 0)

    const totalGastos = transactions
    .filter(transaction => transaction.amount < 0)
    .reduce((acc, transaction) => (acc += transaction.amount), 0) * -1;
    
   const totalExpensesPorcentage= totalIngresos !==0 
   ? Math.round((totalGastos / totalIngresos) * 100)
   : 0
   const totalIncomes = (100 - totalExpensesPorcentage)

   if (isNaN(totalExpensesPorcentage) || isNaN(totalIncomes)) {
    console.error("Error: Valores calculados son NaN");
    return null; // O algún componente de fallback
}
    
    return (

        <VictoryPie
            colorScale={[" #c21f6e" , "#8ec21f" ]}
            
            data={[
                { x: "Expenses", y: totalExpensesPorcentage },
                { x: "Icomes", y: totalIncomes },
            ]}
            animate= {{duration: 2000}}
            labels={({datum}) => `${datum.y}%`}
            labelComponent={<VictoryLabel
                angle={45}
                style={{fill: "white"}}
            />
            }
        />
    )
}

export default ExpenseComponent