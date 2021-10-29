import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./CartLink.module.css";
import { getMemoizedNumItems } from "./cartSlice";

export function CartLink() {
  const numItems = useSelector(getMemoizedNumItems);
  return (
    <Link to="/cart" className={styles.link}>
      <span className={styles.text}>🛒&nbsp;&nbsp;{numItems ? numItems : "Cart"}</span>
    </Link>
  );
}
