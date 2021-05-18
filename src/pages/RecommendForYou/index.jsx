import styles from './styles.module.scss'
import Racker from '../../images/racker.png'
import GuardaRoupa from '../../images/guarda-roupa.png'
import Lustre from '../../images/lustre.png'
import Abajur from '../../images/abajur.png'
import Mesa from '../../images/mesa.png'
import Cama from '../../images/cama.png'

import React, { useState } from 'react'

export default function Recommend() {

    const productsName = [
        {id: 1, name: "Cama", preco: 2500},
        {id: 2, name: "Raker", preco: 1690},
        {id: 3, name: "Raker", preco: 1690},
        {id: 4, name: "Lustre", preco: 1690},
        {id: 5, name: "Guarda Roupa", preco: 1690},
        {id: 6, name: "Abajur", preco: 1690},
        {id: 7, name: "Mesa de Cozimha", preco: 1690},
    ]

    const [favorit, setFavorit ] = useState();

    
  

    return (
        <div className={styles.cardContext}>
            <div>
            <p >
                <i  className="far fa-heart" id="item"></i>
            </p>

                <img src={Cama} alt="Cama" />
            </div>
            <p>{productsName.map((name)=> {
                <li key={name.id}>{name.name}</li>
            })}</p>
            <div>
                <p onClick={() => setFavorit()}>
                </p>

                <img src={Racker} alt="Racker" />
            </div>
            <div>
                <i onClick={ () => setFavorit(
                   
             
                    document.getElementById('item').classList.toggle('far') 
                     ? document.getElementById('item').classList.toggle('fas') :
                    document.getElementById('item').classList.add('fas') 

                )} className="far fa-heart" id="item"></i>

                <img src={Lustre} alt="Lustre" />
            </div>
            <div>
                <p><i onClick={ () => setFavorit(
                   
             
                    document.getElementById('item').classList.toggle('far') 
                     ? document.getElementById('item').classList.toggle('fas') :
                    document.getElementById('item').classList.add('fas') 

                )} className="far fa-heart" id="item"></i></p>

                <img src={GuardaRoupa} alt="Guarda Roupa" />
            </div>
            <div>
                <p><i onClick={ () => setFavorit(
                   
             
                    document.getElementById('item').classList.toggle('far') 
                     ? document.getElementById('item').classList.toggle('fas') :
                    document.getElementById('item').classList.add('fas') 

                )} className="far fa-heart" id="item"></i></p>

                <img src={Abajur} alt="Abajur" />
            </div>
            <div>
                <p><i onClick={ () => setFavorit(
                   
             
                    document.getElementById('item').classList.toggle('far') 
                     ? document.getElementById('item').classList.toggle('fas') :
                    document.getElementById('item').classList.add('fas') 

                )} className="far fa-heart" id="item"></i></p>

                <img src={Mesa} alt="Mesa de Cozinha" />
            </div>
            
        </div>
    )
}