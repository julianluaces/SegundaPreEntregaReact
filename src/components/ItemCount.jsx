import './styles.css'
import { useState } from 'react'
import { Button } from '@chakra-ui/react'

const ItemCount = ({stock, initial, onAdd}) => {

  const [quantity, setQuantity] = useState(initial);

  const increment = () => {

    if (quantity < stock)  {
      setQuantity (quantity+1)
    }

  }

  const decrement = () => {
    if (quantity > 1) {
      setQuantity (quantity-1)
    }
  }

  return (

    <div className='item-count'>

      <div>
       <Button className='button' onClick={decrement}>-</Button> 
       <Button className='button' onClick={increment}>+</Button> 
       
       </div>

       <div>
        <h4 className='numeroCarrito'>{quantity}</h4>
       </div>

      <div>
        <Button className="button" onClick={ () => onAdd (quantity)} disabled={!stock}>Agregar al Carrito</Button>
      </div>
      


    </div>

  )
}


export default ItemCount 