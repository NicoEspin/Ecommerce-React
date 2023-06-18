
import './Nav.css'
import '../CartWidget/CartWidget'
import { CartWidget } from '../CartWidget/CartWidget.jsx';
import { Link } from 'react-router-dom';

export function Nav() {
    return (

        <header className='header'>
            <div className='logo'>
                <img src="../public/logo_ecommerce.jpg" alt="" />
            </div>
            <article className='carrito'>
                <CartWidget />
            </article>
            <nav >
                <ul className='nav-links'>
                    <Link className='li' to='/'>Inicio</Link>
                    <Link className='li' to='/contact'>Contacto</Link>
                    <Link className='li' to='/about'>About</Link>
                </ul>
            </nav>

        </header>



    )
}
