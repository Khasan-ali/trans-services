'use client'

import { useEffect, useState } from 'react'
import cls from './styles.module.css'
import axios from 'axios'
import NextImg from '../../../../../../assets/images/next.svg'
import { Link } from '../../../../../../../navigation'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

export default function Securities() {

    const t = useTranslations("Corparate-Disclosure-Securities")

    const [data, setData] = useState(null)
    useEffect(() => {
           axios.get(`https://tashbus.uz/${document.cookie.slice(12)}/api/post/qimmatbaho_qogozlar?p=1&page_size=12`).then(response => setData(response.data))
    }, [])
    
    if(!data) return []



    return <div className={cls.securities}>

        <div className="hero-dinamic-router">
            <Link className='hero-dinamic-route-link' href={'/'}>{t('route1')}</Link>
            <Image className='hero-dinamic-route-images' src={NextImg} alt='next images' />
            <Link className='hero-dinamic-route-link' href={'/modules/corparate/disclosure/securities'}>{t('route2')}</Link>
            <Image className='hero-dinamic-route-images' src={NextImg} alt='next images' />
            <Link className='hero-dinamic-route-link' href={'/modules/corparate/disclosure/securities'}>{t('route3')}</Link>
            <Image className='hero-dinamic-route-images' src={NextImg} alt='next images' />
            <Link className='hero-dinamic-route-link' href={'/modules/corparate/disclosure/securities'}>{t('route4')}</Link>
        </div>

        <h3 className={cls.securities_heading}>{t('title')}</h3>

        <ul className={cls.securities_list}>
            {data?.results?.map((element) => (
                <li className={cls.securities_item} key={element?.slug}>
                    <Link className={cls.securities_link} href={`/modules/corparate/disclosure/securities/detail-securities/${element?.slug}`}>
                        <img className={cls.securities_item_img} src={element?.image?.src.split('http').join('https')} alt="securities img" />
                        <p className={cls.securities_item_date}>{element?.pub_date}</p>
                        <h4 className={cls.securities_item_heading}>{element?.title}</h4>
                    </Link>
                </li>
            ))}
        </ul>
    </div>
}
