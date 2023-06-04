
import './Nav.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
export function Nav() {
    return (
        <header className='header'>
            <div className='carrito'>
                <ShoppingCartIcon/>
                <p>3</p>
            </div>
            <nav >
                <ul className='nav-links'>
                    <li><a href="#">Incio</a></li>
                    <li><a href="#">Contacto</a></li>
                    <li><a href="#">About</a></li>
                </ul>
            </nav>
        </header>
    )
}
