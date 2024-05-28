'use client'

import { useEffect, useState } from 'react'
import cls from './styles.module.css'
import axios from 'axios'
import { Link } from '../../../../../../../navigation'
import NextImg from '../../../../../../assets/images/next.svg'
import UserImg from '../../../../../../assets/images/user.png'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

export default function Inspection() {

    const t = useTranslations("Corparate-Management-Inspection")

    const [data, setData] = useState(null)
    useEffect(() => {
           axios.get(`https://tashbus.uz/${document.cookie.slice(12)}/api/council/taftish_komissiya`).then(response => setData(response.data))
    }, [])
    
    if(!data) return []


    return <div className={cls.inspection}>

        <div className="hero-dinamic-router">
            <Link className='hero-dinamic-route-link' href={'/'}>{t('route1')}</Link>
            <Image className='hero-dinamic-route-images' src={NextImg} alt='next images' />
            <Link className='hero-dinamic-route-link' href={'/modules/corparate/management/inspection'}>{t('route2')}</Link>
            <Image className='hero-dinamic-route-images' src={NextImg} alt='next images' />
            <Link className='hero-dinamic-route-link' href={'/modules/corparate/management/inspection'}>{t('route3')}</Link>
            <Image className='hero-dinamic-route-images' src={NextImg} alt='next images' />
            <Link className='hero-dinamic-route-link' href={'/modules/corparate/management/inspection'}>{t('route4')}</Link>
        </div>

        <h3 className={cls.inspection_heading}>{t('title')}</h3>

        <ul className={cls.inspection_list}>
            {data?.map((element, index) => (
                <li className={cls.inspection_item} key={index}>
                    <Image className={cls.inspection_item_img} src={UserImg} alt="user image" />
                    <h5 className={cls.inspection_item_heading}>{element?.full_name}</h5>
                    <p className={cls.inspection_item_text}>{element?.position}</p>
                </li>
            ))}
        </ul>
    </div>
}