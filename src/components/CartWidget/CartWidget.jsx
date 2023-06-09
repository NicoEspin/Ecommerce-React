import './CartWidget.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export function CartWidget (){

    return(
        <article>
            <div className='carrito'>
            <ShoppingCartIcon/>
            </div>
            <p>3</p>
        </article>
    )
}
