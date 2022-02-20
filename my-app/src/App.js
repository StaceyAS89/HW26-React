import React, {
   useState
} from "react"


const App = () => {

   const workers = [{
         name: 'Wasif',
         surname: 'Wassifwas',
         workedDays: 5,
         moneyPerDay: 133,
         salary: 0
      },
      {
         name: 'Ali',
         surname: 'Ifwas',
         workedDays: 8,
         moneyPerDay: 163,
         salary: 0
      },
      {
         name: 'Saad',
         surname: 'DmonoinWassifwas',
         workedDays: 10,
         moneyPerDay: 165,
         salary: 0
      },
      {
         name: 'Asad',
         surname: 'Qirssifwas',
         workedDays: 13,
         moneyPerDay: 175,
         salary: 0
      }
   ]
   const [inputValueDays, setInputValuesDays] = useState('');
   const [inputValueMoney, setInputValuesMoney] = useState('');


   let renderTableHeader = () => {
      let header = Object.keys(workers[0])
      return header.map((key, index) => {
         return <th key = {index} > { key.toUpperCase()} </th>
      })
   }
   const onChangeHandlerDays = (event) => {
      setInputValuesDays(event.target.value)
   }
   const onChangeHandlerMoney = (event) => {
      setInputValuesMoney(event.target.value)
   }


   let renderTableData = () => {
      return workers.map((worker, index) => {
         let {
            name,
            surname,
            workedDays,
            moneyPerDay
         } = worker //destructuring
         return ( 
         <tr key = {name}> <td> {name} </td>
            <td> {surname} </td>
            <td> <input value = {inputValueDays} placeholder = {workedDays} onChange = {(event) => onChangeHandlerDays(event)}/></td >
            <td> <input value = {inputValueMoney} placeholder = {moneyPerDay} onChange = {(event) => onChangeHandlerMoney(event)}/></td >
            <td> {(inputValueDays || workedDays) * (inputValueMoney || moneyPerDay)} </td> 
         </tr>
         )
      })
   }





   return ( 
   <div>
      <table id = 'workers'>
      <tbody>
         <tr> {renderTableHeader()} </tr> {renderTableData()} 
      </tbody>
      </table> 
      </div>
   )

}

export default App;