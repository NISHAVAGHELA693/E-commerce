const CartItems=(props)=>{
    const{id,price,title,thumbnail,DiscountPercentage,Description}=props
    return(
        <div>
        <p >{title}</p>
        <img src={thumbnail}></img>
        <h5>price : ₹{price}</h5>
        <p>DiscountPercentage : {DiscountPercentage}%</p>
        <p>{Description.substring(0, 40)}...</p> 
        </div>
    )
}
export default CartItems;