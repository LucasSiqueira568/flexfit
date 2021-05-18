import styles from './styles.module.scss'

import React from 'react'

export default function CardProducts() {
    return (
        <div className={styles.cardContext}>
            <div className={styles.cardTitle}>
                <h1>Recomendado para você</h1>
            </div>
                <div className={styles.cardListCategory}>
                    <ul>
                        <li><a href="/">Cama</a></li>
                        <li><a href="/">Luminares</a></li>
                        <li><a href="/">Banho</a></li>
                        <li><a href="/">Todas</a></li>
                    </ul>
                    <div className={styles.cardButton}>
                        <button><i class="fas fa-arrow-left"></i></button>
                        <button><i class="fas fa-arrow-right"></i></button>
                    </div>
                </div>
        </div>
    )
}