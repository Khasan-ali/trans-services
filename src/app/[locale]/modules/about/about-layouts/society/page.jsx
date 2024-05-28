'use client'

import Image from 'next/image'
import NextImg from '../../../../.././../assets/images/next.svg'
import DocumentImg from '../../../../../../assets/images/document.svg'
import cls from './styles.module.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useTranslations } from 'next-intl'
import { format } from 'date-fns'
import { Link } from '../../../../../../../navigation'

export default function Investment() {

    const t = useTranslations("About-Us-Society")

    const [data, setData] = useState(null)
    useEffect(() => {
           axios.get(`https://tashbus.uz/${document.cookie.slice(12)}/api/post/jamiyat_raqamlashtirish?p=1&page_size=12`).then(response => setData(response.data))
    }, [])

    if(!data) return []

    return <div className={cls.investment}>

        <div className="hero-dinamic-router">
            <Link className='hero-dinamic-route-link' href={'/'}>{t('route1')}</Link>
            <Image className='hero-dinamic-route-images' src={NextImg} alt='next images' />
            <Link className='hero-dinamic-route-link' href={'/modules/about/about-layouts/society'}>{t('route2')}</Link>
            <Image className='hero-dinamic-route-images' src={NextImg} alt='next images' />
            <Link className='hero-dinamic-route-link' href={'/modules/about/about-layouts/society'}>{t('route3')}</Link>
        </div>

        <h3 className={cls.investment_heading}>{t('title')}</h3>

        <ul className={cls.investment_list}>
            {data?.results?.map((element) => (
                <li className={cls.investment_item} key={element?.slug}>
                    <Link className={cls.investment_item_link}
                    href={`/modules/about/about-layouts/society/${element?.slug}`}>
                        <img className={cls.investment_item_img} src={element?.image?.src.split('http').join('https')} alt="data images" />
                        <p className={cls.investment_item_date}>
                            {format(new Date(`${element?.pub_date}`), 'dd/MM/yyyy').replaceAll("/", ".")}
                        </p>
                        <h5 className={cls.investment_item_heading}>{element?.title}</h5>
                    </Link>
                </li>
            ))}
        </ul>
    </div>
}