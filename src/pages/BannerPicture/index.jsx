import styles from './styles.module.scss'
import React from 'react'
import BannerFrirst from '../../images/sala-sofa.jpg'
import BannerLast from '../../images/poltrona-reale.png'

export default function BannerPicture() {
    return(
        <div className={styles.contextBanner}>
            <img src={BannerFrirst} alt="" />
            <div className={styles.bannerCard}>
                <img src={BannerLast} alt="" />
            </div>
        </div>
    )
}