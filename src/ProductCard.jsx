import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from './CartSlice';
import './ProductList.css'; // Re-using ProductList.css for styling

const ProductCard = ({ plant }) => {
  const [addedToCart, setAddedToCart] = useState(false);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItem(plant));
    setAddedToCart(true);
  };

  return (
    <div className="product-card">
      <img src={plant.image} alt={plant.name} className="product-image" />
      <h3 className="product-title">{plant.name}</h3>
      <p className="product-description">{plant.description}</p>
      <p className="product-price">{plant.cost}</p>
      <button
        className={`product-button ${addedToCart ? 'added-to-cart' : ''}`}
        onClick={handleAddToCart}
        disabled={addedToCart}
      >
        {addedToCart ? 'Added to Cart' : 'Add to Cart'}
      </button>
    </div>
  );
};

export default ProductCard;