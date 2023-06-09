
import './Nav.css'
import '../CartWidget/CartWidget'
import { CartWidget } from '../CartWidget/CartWidget.jsx';
export function Nav() {
    return (
        <header className='header'>
            <div className='logo'>
                <img src="../public/Logo_nike_principal.jpg" alt="" />
            </div>
            <article className='carrito'>
            <CartWidget/>
            </article>
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
