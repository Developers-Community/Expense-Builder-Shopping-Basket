
import BasketScreen from "components/BasketScreen"
import ProductsScreen from "components/ProductsScreen"

const App = () => {

  return (
    <div className="container">
      Shopping basket
      <ProductsScreen />

      <BasketScreen />
    </div>
  )
}

export default App;
