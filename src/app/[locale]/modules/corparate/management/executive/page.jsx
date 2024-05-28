'use client'

import Image from 'next/image'
import { Link } from '../../../../../../../navigation'
import cls from './styles.module.css'
import NextImg from '../../../../../../assets/images/next.svg'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useTranslations } from 'next-intl'

export default function Executive() {

    const t = useTranslations("Corparate-Management-Executive")

    const [data, setData] = useState(null)
    useEffect(() => {
           axios.get(`https://tashbus.uz/${document.cookie.slice(12)}/api/council/ijro_organi?p=1&page_size=12`).then(response => setData(response.data))
    }, [])
    
    if(!data) return []

    return <div className={cls.executive}>
        <div className="hero-dinamic-router">
            <Link className='hero-dinamic-route-link' href={'/'}>{t('route1')}</Link>
            <Image className='hero-dinamic-route-images' src={NextImg} alt='next images' />
            <Link className='hero-dinamic-route-link' href={'/modules/corparate/management/executive'}>{t('route2')}</Link>
            <Image className='hero-dinamic-route-images' src={NextImg} alt='next images' />
            <Link className='hero-dinamic-route-link' href={'/modules/corparate/management/executive'}>{t('route3')}</Link>
            <Image className='hero-dinamic-route-images' src={NextImg} alt='next images' />
            <Link className='hero-dinamic-route-link' href={'/modules/corparate/management/executive'}>{t('route4')}</Link>
        </div>

        <h3 className={cls.executive_heading}>{t('title')}</h3>

        <ul className={cls.executive_list}>
            {data?.map((element, index) => (
                <li className={cls.executive_item} key={index}>
                    <img className={cls.executive_item_img} src={element?.thumbnail?.src.split('http').join('https')} alt="user image" />
                    <h5 className={cls.executive_item_heading}>{element?.full_name}</h5>
                    <p className={cls.executive_item_text}>{element?.position}</p>
                </li>
            ))}
        </ul>
    </div>
}