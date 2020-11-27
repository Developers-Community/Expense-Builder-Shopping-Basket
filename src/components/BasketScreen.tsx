import { store } from "../redux/index"
import { ProductItem } from "global"
import { useSelector } from "react-redux"
import { removeToBasket } from "../redux/basketSlice"
import { FC } from "react"

const BasketScreen: FC = () => {


    const state = useSelector((state: ProductItem[]) => state)

    const data = state.filter(product => product.added)
    console.log(data)
    return (
        <div className="card-panel center-align hoverable">
            <h4><i className="fa fa-shopping-basket" aria-hidden="true"></i> Your Basket has
            ({data.length}) Products  </h4>
            <br />
            {state.filter(product => product.added)
                .map((item: ProductItem) => {
                    return <div key={item.id} className="row">
                        <div className="col s12">
                            <img className="col s4" style={{ width: "100px" }} src={item.imageUrl} alt="product" />
                            <div className="col s3 truncate">{item.title}</div>
                            <div className="col s3">${(item.price)}</div>
                            <button className="col s2 btn btn-block"
                                onClick={() => store.dispatch(removeToBasket({ id: item.id }))}
                            > Remove   </button>


                            {/* <span className="card-image">
                            </span> */}
                        </div>
                        {/* <i className="fa fa-shopping-bag" aria-hidden="true"></i> */}
                    </div>
                })}
            <h4 className="right-align">
                Total : ${(
                    state
                        .filter(product => product.added)
                        .reduce((acc, current) => (acc += current.price), 0)
                )}
            </h4>

        </div>
    )
}

export default BasketScreen
