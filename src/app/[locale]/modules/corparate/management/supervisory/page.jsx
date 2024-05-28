'use client'

import { useEffect, useState } from 'react'
import cls from './styles.module.css'
import axios from 'axios'
import NextImg from '../../../../../../assets/images/next.svg'
import UserImg from '../../../../../../assets/images/user.png'
import { Link } from '../../../../../../../navigation'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

export default function Supervisory() {

    const t = useTranslations("Corparate-Management-Supervisory")

    const [data, setData] = useState(null)
    useEffect(() => {
           axios.get(`https://tashbus.uz/${document.cookie.slice(12)}/api/council/kuzatuv_kengashi?p=1&page_size=12`).then(response => setData(response.data))
    }, [])
    
    if(!data) return []



    return <div className={cls.supervisory}>

        <div className="hero-dinamic-router">
            <Link className='hero-dinamic-route-link' href={'/'}>{t('route1')}</Link>
            <Image className='hero-dinamic-route-images' src={NextImg} alt='next images' />
            <Link className='hero-dinamic-route-link' href={'/modules/corparate/management/supervisory'}>{t('route2')}</Link>
            <Image className='hero-dinamic-route-images' src={NextImg} alt='next images' />
            <Link className='hero-dinamic-route-link' href={'/modules/corparate/management/supervisory'}>{t('route3')}</Link>
            <Image className='hero-dinamic-route-images' src={NextImg} alt='next images' />
            <Link className='hero-dinamic-route-link' href={'/modules/corparate/management/supervisory'}>{t('route4')}</Link>
        </div>


        <h3 className={cls.supervisory_heading}>{t('title')}</h3>

        <ul className={cls.supervisory_list}>
            {data?.map((element, index) => (
                <li className={cls.supervisory_item} key={index}>
                    <Image className={cls.supervisory_item_img} src={UserImg} alt='user img' />
                    <h5 className={cls.supervisory_item_heading}>{element?.full_name}</h5>
                    <p className={cls.supervisory_item_text}>{element?.position}</p>
                </li>
            ))}
        </ul>
    </div>
}