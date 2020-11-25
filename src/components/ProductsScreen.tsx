import { addToBasket, store } from "../redux/index"
import { useSelector } from "react-redux"
import { ProductItem } from "../global"

const ProductsScreen = () => {

    const state = useSelector((state: ProductItem[]) => state)

    return (
        <div className="conatiner">
            <div className="row ">
                {state.map((product: ProductItem) => {
                    return <div key={product.id} className="col s10 m4">
                        <div className="card card-panel hoverable">
                            <div className="card-image">
                                <img style={{ width: "200px", height: "180px" }} src={product.imageUrl} alt="product" />
                                <span className="card-title center-align">{product.title}</span>
                            </div>
                            <h5 className="truncate">${product.price}</h5>

                            <div className="card-content ">
                                <p className="truncate">{product.description}</p>
                            </div>
                            <div className="card-action">
                                <button className="btn btn-block"
                                    onClick={() => store.dispatch(addToBasket(product))}
                                >Add to Basket</button>
                            </div>
                        </div>
                    </div>
                })}

            </div>
        </div >
    )
}

export default ProductsScreen
