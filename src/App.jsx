import getExchange from './Components/ConectApi/api';
import { useState, useEffect } from "react";
import { formatter } from './Components';

function App() {
  const [todaydolar, setTodaydolar] = useState([]);
  
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
  if (inputData.tax == 0)
    {inputData.tax = 0.17}
  else
    {inputData.tax}
    const productValue = inputData.price / todaydolar.bid
    if (productValue <= 50){
    // Menor que 50dol => Valor do produto  / (1-aliquota) * aliquota
  }
  else
  {
    // const taxValue = ((inputData.price / (1-inputData.tax)) * inputData.tax)
  }
  }
console.log(typeof(handleSubmit))
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

          <div className="showResults">
          <p>Valor em Dólar: </p>
          </div>

          {/* <div className="form-group">
            <label htmlFor="dol-amount">Valor em Dólar: </label>
            <input
              type="text"
              className="form-control"
              id="dol-amount"
              disabled
            />  
          </div>

          <div className="form-group">
            <label htmlFor="tax-amount">Valor do Imposto ICMS: </label>
            <input
              type="text"
              className="form-control"
              id="tax-amount"
              disabled
            />
          </div>

          <div className="form-group">
            <label htmlFor="amount">Valor da a ser pago: </label>
            <input type="text" 
            className="form-control" 
            id="amount" disabled />
          </div> */}

          <button type="submit" className="btn btn-primary" 
          onClick={handleSubmit}>
            Calcular
          </button>
        </form>
      </div>

    </>
  );
}

export default App;
