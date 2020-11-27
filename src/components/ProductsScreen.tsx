import { store } from "../redux/index"
import { useSelector } from "react-redux"
import { ProductItem } from "../global"
import { addToBasket } from "../redux/basketSlice"
import { FC } from "react"


const ProductsScreen: FC = () => {

    const state = useSelector((state: ProductItem[]) => state)

    return (
        <div className="conatiner">
            <div className="row ">
                {state.map((product: ProductItem) => {
                    return <div key={product.id} className="col s10 m4">
                        <div className="card card-panel hoverable">
                            <div className="card-image">
                                <img style={{ width: "200px", height: "180px" }} src={product.imageUrl} alt="product" />
                            </div>
                            <h5 className="card-title truncate">{product.title}</h5>
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
