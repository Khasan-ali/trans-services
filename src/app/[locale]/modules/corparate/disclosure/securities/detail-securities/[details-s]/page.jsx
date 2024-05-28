'use client'

import Image from 'next/image'
import { Link } from '../../../../../../../../../navigation'
import cls from './styles.module.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useTranslations } from 'next-intl'
import NextImg from '../../../../../../../../assets/images/next.svg'
import DocumentImg from '../../../../../../../../assets/images/document.svg'

export default function SecuritiesDetail() {

    const t = useTranslations("Corparate-Disclosure-Securities")


    const [data, setData] = useState(null)
    useEffect(() => {
           axios.get(`https://tashbus.uz/${document.cookie.slice(12)}/api/post/detail/qoshimcha-aksiyalar-chiqarilish-togrisidagi-q-oqoa`).then(response => setData(response.data))
    }, [])
    
    if(!data) return []


    return <div className={cls.detail_securities}>


        <div className="hero-dinamic-router">
            <Link className='hero-dinamic-route-link' href={'/'}>{t('route1')}</Link>
            <Image className='hero-dinamic-route-images' src={NextImg} alt='next images' />
            <Link className='hero-dinamic-route-link' href={`/modules/corparate/disclosure/securities/detail-securities/qoshimcha-aksiyalar-chiqarilish-togrisidagi-q-oqoa`}>{t('route2')}</Link>
            <Image className='hero-dinamic-route-images' src={NextImg} alt='next images' />
            <Link className='hero-dinamic-route-link' href={`/modules/corparate/disclosure/securities/detail-securities/qoshimcha-aksiyalar-chiqarilish-togrisidagi-q-oqoa`}>{t('route3')}</Link>
            <Image className='hero-dinamic-route-images' src={NextImg} alt='next images' />
            <Link className='hero-dinamic-route-link' href={`/modules/corparate/disclosure/securities/detail-securities/qoshimcha-aksiyalar-chiqarilish-togrisidagi-q-oqoa`}>{t('route4')}</Link>
        </div>

        <h3 className={cls.detail_securities_heading}>{t('title')}</h3>


        <img className={cls.detail_securities_img} src={data?.images[0]?.image?.src.split('http').join('https')} alt="detail image" />

        <a className={cls.detail_securities_link} href={data?.file} download={data?.file} target='_blanc'>
            <Image src={DocumentImg} alt='document icon' />
            <p className={cls.detail_securities_link_text}>{t('link-text')}</p>
        </a>

        <h3 className={cls.detail_securities_heading_data}>{data?.title}</h3>
    </div>
}