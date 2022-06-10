import React, { useState } from 'react';
import './App.css';
import PricesList  from './components/pricesList/pricesList';
import PurchaseList from './components/purchaseList/purchaseList';


const inventory = [  
                    {name: "Apple", value: "2.00"},
                    {name: "Banana", value: "4.00"},
                    {name: "Strawberry", value: "5.00"}
                  ]

const purchase_list = [
                    {name: "Apple", weight: "400"},
                    {name: "Strawberry", weight: "200"},
                    {name: "Banana", weight: "500"},
                    {name: "Apple", weight: "300"},
                    {name: "Strawberry", weight: "1000"},
                    {name: "Banana", weight: "500"}
                    ]

const package_tax = 1;
var actual_package = [];
var global_package = [];
var actualW = 0.0
var actualA = 0.0

function App() {
  const [quantity, setQuantity] = useState()
  const [selectProduct, setSelectProduct] = useState("Apple")
  const [automatic, setAutomatic] = useState(false)

  // actual package
  const [actualAmount, setActualAmount] = useState(0.0)
  const [actualWeight, setActualWeight] = useState(0.0)

  // global package
  const [globalPackage, setGlobalPackage] = useState([])

  function calculate(product, localQuantity) {
    if(localQuantity <= 1000){
      var auxV = []
      let calculateWeight = parseFloat(actualW) + parseFloat(localQuantity)
      let cost = inventory.filter( p => p.name === product )
      console.log(cost)
      if(cost.length === 0){
        alert(product + " prodcut has no inventory.")
      }
      else{
        let calculateAmount = parseFloat(actualA) + parseFloat(cost[0].value) * parseFloat(localQuantity / 1000)
        let data = {
          product: product,
          value:   parseFloat(cost[0].value) * parseFloat(localQuantity / 1000).toFixed(2),
          weight: parseFloat(localQuantity)
        }
        actual_package.push(data)

        if(localQuantity === 1000){
          if(actual_package.length === 1){
            actualA = data.value
            closePackage()
            initializerValues()
            calculateWeight = 0
            calculateAmount = 0
          }else{
            auxV = actual_package.pop()
            closePackage()
            initializerValues()
            calculateWeight = 0
            calculateAmount = 0
            calculate(auxV.product, auxV.weight)
          }
        }
        else if(calculateWeight > 1000)
        {
          auxV = actual_package.pop()
          closePackage()
          actual_package.push(auxV)
          actualW = actual_package[0].weight
          actualA = actual_package[0].value
          setActualWeight(actual_package[0].weight)
          setActualAmount(actual_package[0].value)

        }
        else if(calculateWeight === 1000){
          actualA = actualA + data.value
          closePackage()
          initializerValues()
        }else{
          actualW = calculateWeight
          actualA = calculateAmount
          setActualWeight(calculateWeight)
          setActualAmount(calculateAmount)
        }
        
        clearParams()
      }
    }else{
      alert("Add values less than 1000 g.")
      clearParams()
    }
  }

  function initializerValues(){
    actualW = 0
    actualA = 0
    setActualWeight(0.0)
    setActualAmount(0.0)
  }

  function initializerManuallyMode() {
    setAutomatic(false)
    initializerValues()
    setGlobalPackage([])
    actual_package = []
    global_package = []
  }

  function pack() {
    setAutomatic(true)
    global_package = []
    actualA = 0.0
    actualW = 0.0
    purchase_list.map((p) => {
      calculate(p.name, p.weight)
    })
    closePackage("end")
  }


  function clearParams(val) {
    setQuantity("")
    setSelectProduct("Apple")
    if(val === "end"){
      setActualAmount(0.0)
      setActualWeight(0.0)
    }
  }

  function closePackage(val) {
    var data = {
      products: actual_package,
      price : (parseFloat(actualA) + package_tax).toFixed(2),
    }
    global_package.push(data)
    setGlobalPackage(global_package)
    actual_package = []
    initializerValues()
    clearParams(val)
  }

  return (
    <div className="App">
      <PricesList
        inventory={inventory}
        packageTax={package_tax}
      />
      <div>
        <input placeholder='Enter Quantity' disabled={automatic} value={quantity} onChange={e => setQuantity(e.target.value)} type={'number'}></input> g
        <select className='Separated' value={selectProduct} onChange={e => setSelectProduct(e.target.value)}>
          {inventory.map( p => {
            return(
              <option>
                {p.name}
              </option>
            )
          })}
        </select>
        <button className='Separated' disabled={!quantity} onClick={ () => calculate(selectProduct, quantity) }>Add</button>
        <button className='Separated' style={{color:"red"}} disabled={!actualWeight} onClick={ () => closePackage("end") }>Close Package</button>
        <button className='Separated' onClick={() => pack()}>Pack Automatically</button>
        <button className='Separated' onClick={() => initializerManuallyMode()}>Pack Manually</button>
      </div>
      <div>
        <p>Price: {actualAmount.toFixed(2)}</p>
        <p>Weight: {actualWeight} g.</p>
      </div>
      
      {automatic &&
      <div>
        <p>Preloaded Purchase List</p>
        {purchase_list.map(pl => {
          return (
            <li>{pl.name} - {pl.weight} g.</li>
          )
        })
        }
      </div>
      }
      
      <PurchaseList
        packages={globalPackage}
        packageTax={package_tax}
      />
      
    </div>
  );
}

export default App;
