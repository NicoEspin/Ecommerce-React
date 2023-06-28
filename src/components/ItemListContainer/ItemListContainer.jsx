import './ItemListContainer.css'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link } from 'react-router-dom';

export function ItemListContainer({ products }) {
    return (
        <>
            <main className='products'>
                <ul>
                    {
                        products.map(product => (
                            
                                <li key={product.id}>
                                    <Link to={`item/${product.id}`}>
                                    <img
                                        src={product.thumbnail}
                                        alt={product.title} />

                                    <div>
                                        <strong>{product.title}</strong> -$USD {product.price}
                                    </div> 
                                    </Link>
                                    <button>
                                        <AddShoppingCartIcon />
                                    </button>

                                </li>
                           
                        ))
                    }
                </ul>
            </main>
        </>
    )
}