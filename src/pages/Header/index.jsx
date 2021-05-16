import styles from "./styles.module.scss";
import React from "react";

export default function Header(props) {
  return (
    <div className={styles.header}>
      <h1>flexfit</h1>
      <div className={styles.containerItems}>
        <div className={styles.searchProducts}>
            <input type="search" name="" id="" placeholder="Search for products" />
            <button type="submit"><i class="fas fa-search"></i> Search</button>
        </div>
        <div className={styles.iconsHeader}>
            <a href="/"><i class="far fa-user"></i></a>
            <a href="/"><i class="far fa-heart"></i></a>
            <a href="/"><i class="fas fa-shopping-bag"></i></a>
        </div>

      </div>
    </div>
  );
}
