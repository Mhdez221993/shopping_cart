import classNames from "classnames";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Cart.module.css";
import { checkoutCart, getTotalPrice, removeFromCart, updateQuantity } from "./cartSlice";

export function Cart() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const items = useSelector((state) => state.cart.items);
  const totalPrice = useSelector(getTotalPrice);
  const checkoutState = useSelector((state) => state.cart.checkoutState);
  const errorMessage = useSelector((state) => state.cart.erroMessage);

  function onQuantityChanged(e, id){
    const quantity = Number(e.target.value) || 0;
    dispatch(updateQuantity({id, quantity}));
  }

  function onCheckout(e){
    e.preventDefault()
    dispatch(checkoutCart())
  }

  const tableClasses = classNames({
    [styles.table]: true,
    [styles.checkoutError]: checkoutState === "ERROR",
    [styles.checkoutLoading]: checkoutState === "LOADING",
  })

  return (
    <main className="page">
      <h1>Shopping Cart</h1>
      <table className={tableClasses}>
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(items).map(([id, quantity]) => (
            <tr key={id}>
              <td>{products[id].name}</td>
              <td>
                <input
                  type="text"
                  className={styles.input}
                  defaultValue={quantity}
                  onBlur={(e) => onQuantityChanged(e, id)}
                   />
              </td>
              <td>{products[id].price}</td>
              <td>
                <button
                aria-label={`Remove ${products[id].name} from Shopping Cart`}
                onClick={() => dispatch(removeFromCart(id))}>
                  X
                </button>
              </td>
            </tr>
          ))}

        </tbody>
        <tfoot>
          <tr>
            <td>Total</td>
            <td></td>
            <td className={styles.total}>${totalPrice}</td>
            <td></td>
          </tr>
        </tfoot>
      </table>
      <form onSubmit={onCheckout}>
        {checkoutState === "ERROR" && errorMessage ? (<p className={styles.errorBox}>{errorMessage}</p>) : null}
        <button className={styles.button} type="submit">
          Checkout
        </button>
      </form>
    </main>
  );
}
