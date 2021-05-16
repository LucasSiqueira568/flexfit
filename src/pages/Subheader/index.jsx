import styles from './styles.module.scss'
import React from 'react'

export default function Subheader()  {
    return(
        <div className={styles.containerItems}>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">Shop</a></li>
                <li><a href="/">Modelos de Templates</a></li>
                <li><a href="/">Arquitetos</a></li>
                <li><a href="/">Fornecedores</a></li>
                <li><a href="/">Contratos</a></li>
            </ul>
        </div>
    )
}

