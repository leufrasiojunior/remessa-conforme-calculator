import getExchange from './Components/ConectApi/api';
import { useState, useEffect } from "react";
import { formatter, exchangeDolar } from './Components';


function App() {
  const [todaydolar, setTodaydolar] = useState([]);
  const [results, setResults] = useState(false);
  
  const exchange = async () => {
    await getExchange
    .get("/json/last/USD-BRL")
    .then(
      (response) => setTodaydolar(response.data.USDBRL)
      )
      .catch((err) => {
        console.log("Erro ao carregar" + err);
      });
    };
    
    useEffect(() => {
      exchange();
    }, []);
    
    const dataCalc = {
      price:'',
      shippingvalue:'',
      discount:'',
      tax:'',
      }

const [inputData, setInputData] = useState(dataCalc);

const handleData = (e) => {
  setInputData({ ...inputData, [e.target.name]: e.target.value })
}


const handleSubmit = (e) =>{
  e.preventDefault()
  setResults(true)
  CalcPrice()
}
const CalcPrice = () =>{
  //adjust Values
  const realPrice = Number(inputData.price)
  const realTax = Number(inputData.tax)
  const taxImport = 60
  priceTaxAmount = 0
  //Preço em Dolar
  if (inputData.tax.length === 0){
    inputData.tax = 17
  }
  const priceValue = (inputData.price) / (todaydolar.bid)
  
  if (priceValue <50 ){
    //Valor em Dólar priceValue
    var icmsCalc = (realPrice) / ((1-(realTax/100)))*((realTax)/100)
    var finalValue = (realPrice + icmsCalc)
    console.log(priceTaxAmount)

  }
  else
  {
    var priceTaxAmount = realPrice * (taxImport)/100
    var priceWithTax = priceTaxAmount + realPrice
    var icmsCalc = (priceWithTax) / ((1-(realTax/100)))*((realTax)/100)
    var finalValue = (priceWithTax + icmsCalc)
  }


  return (
    <>
    <p>Valor em Dólar: {exchangeDolar.format(parseFloat(priceValue))}</p>
    {priceTaxAmount ? <p>Valor do Valor da Taxa de Importação: {formatter.format(parseFloat(priceTaxAmount))}</p> : null}
    <p>Valor do ICMS: {formatter.format(parseFloat(icmsCalc))}</p>
    <p>Valor total: {formatter.format(parseFloat(finalValue))}</p>
    </>
  )
}

  return (
    <>
      <h1>Tax-Calculator! Sua calculadora Aliexpress, Shein, Banggood...</h1>
      <div className="container">
        <form>
        <div className="form-group">
            <label htmlFor="dolvalue">Valor do Dolar: </label>
            <input
              type="text"
              className="form-control"
              id="dolvalue" 
              placeholder={formatter.format(parseFloat(todaydolar.bid))}
            />
            <small>O valor é identificado altomaticamente.</small>
          </div>

          <div className="form-group">
            <label htmlFor="price">Digite o preço do produto</label>
            <input
              type="number"
              className="form-control"
              name="price"
              id="price"
              value={inputData.price}
              onChange={handleData}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="shipping">
              Digite o Valor do Frete
            </label>
            <input
              type="number"
              className="form-control"
              name="shippingvalue"
              id="shippingvalue"
              value={inputData.shippingvalue}
              onChange={handleData}
            />
            <small>Deixe em branco para Gratuito</small>
          </div>

          <div className="form-group">
            <label htmlFor="discount">Valor do desconto</label>
            <input
              type="number"
              className="form-control"
              name="discount"
              id="discount"
              value={inputData.discount}
              onChange={handleData}
            />
            <small>Atualmente, nas compras do Aliexpress o imposto é de acordo com o valor total pago.</small>
          </div>

          <div className="form-group">
            <label htmlFor="tax">Digite a taxa</label>
            <input type="number" 
            className="form-control" 
            name="tax"
            id="tax" 
            value={inputData.tax}
            onChange={handleData}
            />
          <small>Deixe em branco para o padrão de 17%</small>
          </div>
          <button type="submit" className="btn btn-primary" 
          onClick={handleSubmit}>
            Calcular
          </button>
        </form>
        
        <div className="showResults">
          {results ? <CalcPrice/> : null}
          </div>
      </div>

    </>
  );
}

export default App;
