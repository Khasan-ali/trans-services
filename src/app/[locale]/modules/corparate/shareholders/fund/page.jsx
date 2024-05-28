'use client'

import { useEffect, useState } from 'react'
import cls from './styles.module.css'
import axios from 'axios'
import { Link } from '../../../../../../../navigation'
import NextImg from '../../../../../../assets/images/next.svg'
import DocumentImg from '../../../../../../assets/images/document.svg'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

export default function Fund() {

    const t = useTranslations("Corparate-shareholders-Fund")

    const [data, setData] = useState(null)
    useEffect(() => {
           axios.get(`https://tashbus.uz/${document.cookie.slice(12)}/api/post/ustav_fondi`).then(response => setData(response.data))
    }, [])

    if(!data) return []




    return <div className={cls.fund}>

        <div className="hero-dinamic-router">
            <Link className='hero-dinamic-route-link' href={'/'}>{t('route1')}</Link>
            <Image className='hero-dinamic-route-images' src={NextImg} alt='next images' />
            <Link className='hero-dinamic-route-link' href={'/modules/corparate/shareholders/fund'}>{t('route2')}</Link>
            <Image className='hero-dinamic-route-images' src={NextImg} alt='next images' />
            <Link className='hero-dinamic-route-link' href={'/modules/corparate/shareholders/fund'}>{t('route3')}</Link>
            <Image className='hero-dinamic-route-images' src={NextImg} alt='next images' />
            <Link className='hero-dinamic-route-link' href={'/modules/corparate/shareholders/fund'}>{t('route4')}</Link>
        </div>

        <h3 className={cls.fund_heading}>{t('title')}</h3>

        <a className={cls.fund_link} href="" download={''} target='_blanc'>
            <Image src={DocumentImg} alt='document icon' />
            <p className={cls.fund_link_text}>{t('link-text')}</p>
        </a>

        <h4 className={cls.fund_data_text}>{data?.results[0]?.title}</h4>
    </div>
}