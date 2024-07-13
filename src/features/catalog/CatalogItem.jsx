/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "./CatalogItem.module.css";
import { useDispatch } from "react-redux";
import { addItem } from "./cartSlice";

function CatalogItem({ item }) {
  const [addToCart, setAddToCart] = useState(false);
  const [updateQty, setUpdateQty] = useState(0);
  const [productColor, setProductColor] = useState([]);
  const dispatch = useDispatch();
  const { id, name, product, price, brand, stock, picture } = item;

  function handleCart() {
    const orderItem = {
      picture,
      id,
      name,
      product,
      price,
      brand,
      colors: productColor,
      quantity: updateQty,
      totalAmount: price * updateQty,
    };
    setAddToCart(false);
    dispatch(addItem(orderItem));
    setUpdateQty(0);
  }
  return (
    <li className={styles.catalogItem}>
      <img
        onClick={() => setAddToCart(!addToCart)}
        src={item.picture.master}
        alt={item.name}
        className={`${
          item.stock > 0 ? styles.catalogItemImage : styles.soldout
        }`}
      />
      {/*  */}
      {addToCart && stock > 0 && (
        <div className={styles.buycard}>
          <label className={styles.buylbl}>Name: {name}</label>
          <label className={styles.buylbl}>Price: {price}</label>
          <div className={styles.productcolorplate}>
            {item.colors.map((color, i) => (
              <input
                type="radio"
                name="color"
                value={color}
                onChange={(e) => {
                  setProductColor(e.target.value);
                }}
                style={{
                  accentColor: `${color}`,
                }}
                key={i}
                className={styles.productcolor}
              ></input>
            ))}
          </div>

          <div className={styles.updateQuantity}>
            <button
              className={styles.increaseBtn}
              onClick={() => setUpdateQty(updateQty + 1)}
            >
              +
            </button>
            <span className={styles.quantity}>{updateQty}</span>
            <button
              className={styles.decreaseBtn}
              onClick={() => {
                if (updateQty < 1) return;
                setUpdateQty(updateQty - 1);
              }}
            >
              -
            </button>
          </div>

          <button
            disabled={productColor.length === 0 || updateQty <= 0}
            className={styles.placeOrderBtn}
            onClick={handleCart}
          >
            Add To Cart
          </button>
          <button
            className={styles.placeOrderBtn}
            onClick={() => setAddToCart(false)}
          >
            Cancel
          </button>
        </div>
      )}
      {/*  */}

      {!addToCart && (
        <div className={styles.catalogItemInfo}>
          {item.stock > 0 ? (
            <>
              <p>{item.name}</p>
              <p>{item.product}</p>
              <span>{item.price}</span>
            </>
          ) : (
            <label>SOLDOUT</label>
          )}
        </div>
      )}
    </li>
  );
}

export default CatalogItem;
