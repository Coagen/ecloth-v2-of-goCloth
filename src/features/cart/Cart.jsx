import { useSelector } from "react-redux";
import styles from "./Cart.module.css";
import { Link } from "react-router-dom";
import { getTotalBalance } from "../catalog/cartSlice";
function Cart() {
  const myCart = useSelector((state) => state.cart.cart);
  const userName = useSelector((state) => state.user.userName);
  const balance = useSelector(getTotalBalance);
  return (
    <div className={styles.cart}>
      <h1
        className={styles.cartHeading}
      >{`👋 Welcome ${userName} To You Cart `}</h1>
      <Link to="/catalog" className={styles.cartLink}>
        &larr; Back to Catalog
      </Link>

      <div className={styles.cartOverview}>
        <div className={styles.selectedProducts}>
          {myCart.map((item) => (
            <div className={styles.cartItem} key={item.id}>
              <div className={styles.cartItemImage}>
                <img
                  className={styles.image}
                  src={item.picture.master}
                  alt="Cart Item Image"
                ></img>
                <p
                  className={styles.cartItemColor}
                  style={{ backgroundColor: `${item.colors}` }}
                ></p>
              </div>
              {/*  */}
              <div className={styles.cartItemName}>
                <h2>Product Name</h2>
                <span className={styles.myPurchase}>{item.product}</span>
              </div>
              {/*  */}
              <div className={styles.cartItemPrice}>
                <h2>Product Price</h2>
                <span className={styles.myPurchase}>{item.price}</span>
              </div>
              {/*  */}
              <div className={styles.cartItemQuantity}>
                <h2>Product Quantity</h2>
                <span className={styles.myPurchase}>{item.quantity}</span>
              </div>
              {/*  */}
            </div>
          ))}
        </div>

        <div className={styles.cartValue}>
          <h2 className={styles.cartHeading}>Your Bill</h2>
          <div className={styles.balance}>
            <h1 className={styles.cartHeading}>Total Amount</h1>
            <span className={styles.cartHeading}>{balance}</span>
          </div>
          <button className={styles.checkoutButton}>Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
