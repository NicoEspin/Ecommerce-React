import "./itemDetail.css"
import { useParams } from 'react-router-dom';
import { products } from "../mocks/products.json";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export const ItemDetailContainer = () => {
  const { id } = useParams();
  const product = products.find((product) => product.id.toString() === id);

  if (!product) {
    return (
      <div>
        <h3>Producto no encontrado</h3>
      </div>
    );
  }

  return (
    <div className='product'>
      <h3>{product.title}</h3>  $USD {product.price}
      <img
        src={product.thumbnail}
        alt={product.title} />
      <p>{product.description}</p>
      <button><AddShoppingCartIcon /></button>
    </div >
  );
}
