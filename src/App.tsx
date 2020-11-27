
import Axios from "axios";
import BasketScreen from "components/BasketScreen"
import ProductsScreen from "components/ProductsScreen"
import { FC } from "react";
import { BrowserRouter, Route } from "react-router-dom";



const App: FC = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <h2 className="center">Shopping basket</h2>
        <Route path="/" component={ProductsScreen} />
        <Route path="/" component={BasketScreen} />
      </div>
    </BrowserRouter>
  )
}

export default App;
