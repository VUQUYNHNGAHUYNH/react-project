import './CartItems.scss'

export default function CartItems({Items}) {
    const {name, quantity, imageUrl, price} = Items
  
  return (
    <div className='cart-item-container'>
        <img src={imageUrl} alt={`${name}`} />
        <div className='item-details '>
            <span className='name'>{name}</span>
            <span>{quantity} x ${price}</span>
        </div>
    </div>
  )
}
