import styles from './styles.module.scss'

import React from 'react'

export default function CardCategory() {
    return(
        <div className={styles.categoryIcons}>
            <div className={styles.cardIcons}>
                <div><i class="fas fa-chair"></i></div>
                <h2>Sala de Jantar</h2>
                <p>200 Produtos</p>
            </div>
            <div className={styles.cardLiving}>
                <div><i class="fas fa-couch"></i></div>
                <h2>Sala de Estar</h2>
                <p>200 Produtos</p>
            </div>
            <div className={styles.cardBed}>
                <div><i class="fas fa-bed"></i></div>
                <h2>Quarto</h2>
                <p>200 Produtos</p>
            </div>
            <div className={styles.cardWorking}>
                <div><i class="fas fa-shower"></i></div>
                <h2>Banheiro</h2>
                <p>200 Produtos</p>
            </div>
            <div className={styles.cardVamfast}>
                <div><i class="fas fa-drumstick-bite"></i></div>
                <h2>Cozinha</h2>
                <p>200 Produtos</p>
            </div>
            <div className={styles.cardLighting}>
                <div><i class="far fa-lightbulb"></i></div>
                <h2>Iluminação</h2>
                <p>200 Produtos</p>
            </div>
            <div className={styles.cardTableware}>
                <div><i class="fas fa-utensils"></i></div>
                <h2>Talheres</h2>
                <p>200 Produtos</p>
            </div>
        </div>
    )
}