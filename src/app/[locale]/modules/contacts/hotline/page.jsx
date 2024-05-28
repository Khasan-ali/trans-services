'use client'

import Image from 'next/image'
import { Link } from '../../../../../../navigation'
import cls from './styles.module.css'
import NextImg from '../../../../../assets/images/next.svg'
import PhoneImg from '../../../../../assets/images/phones.svg'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useTranslations } from 'next-intl'

export default function Hotline() {

    const t = useTranslations("Contact-Hotline")

    const [data, setData] = useState(null)
    useEffect(() => {
           axios.get(`https://tashbus.uz/${document.cookie.slice(12)}/api/information/hotline`).then(response => setData(response.data))
    }, [])
    
    if(!data) return []

    return <div className={cls.hotline}>

<       div className="hero-dinamic-router">
            <Link className='hero-dinamic-route-link' href={'/'}>{t('route1')}</Link>
            <Image className='hero-dinamic-route-images' src={NextImg} alt='next images' />
            <Link className='hero-dinamic-route-link' href={'/modules/contacts/hotline'}>{t('route2')}</Link>
            <Image className='hero-dinamic-route-images' src={NextImg} alt='next images' />
            <Link className='hero-dinamic-route-link' href={'/modules/contacts/hotline'}>{t('route3')}</Link>
        </div>
 
        <h3 className={cls.hotline_heading}>{t('title')}</h3>

        <p className={cls.hotline_text}>{t('text')}</p>

        <div className={cls.hotline_link_section}>
            <p className={cls.hotline_link_label}>{t('details')}:</p>
            <Link className={cls.hotline_route_link} href={'/modules/corparate/internal-documents'}>{t('link-title')}</Link>
        </div>

        <div className={cls.hotline_bottom_sec}>
            <div className={cls.hotline_bottom_inner_sec}>
                <Image src={PhoneImg} alt='phone' />
                <div className={cls.hotlinebottom_text_sec}>
                    <p className={cls.hotline_bottom_text_name}>{t('phone-text')}</p>
                    <p className={cls.hotline_bottom_text_title}>{data[0].phone}</p>
                </div>
            </div>

            <div className={cls.hotline_bottom_inner_sec}>
                <Image src={PhoneImg} alt='phone' />
                <div className={cls.hotlinebottom_text_sec}>
                    <p className={cls.hotline_bottom_text_name}>{t('phone-text-second')}</p>
                    <p className={cls.hotline_bottom_text_title}></p>
                </div>
            </div>
        </div>
    </div>
}