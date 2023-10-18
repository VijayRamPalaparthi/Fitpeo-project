import "./index.css"

const ProductItem=(props) => {
    const{img, about, desc,stock, price, sales}=props.item
    return(
        <li className="p-details-container">
            <div className="p-name-container">
                <img src={img} className="pr-image" alt="product-img" />
                <div className="name-container">
                    <h1 className="p-about">{about}</h1>
                    <p className="p-desc">{desc}</p>
                </div>
            </div>
            <p className="p-stock">{stock} in stock</p>
            <p className="p-price">$ {price}</p>
            <p className="p-sales">{sales}</p>
        </li>
    )
    

}
export default ProductItem