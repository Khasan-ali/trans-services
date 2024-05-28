'use client'

import { useEffect, useState } from 'react'
import cls from './styles.module.css'
import axios from 'axios'
import { Link } from '../../../../../../../navigation'
import Image from 'next/image'
import NextImg from '../../../../../../assets/images/next.svg'
import BusImg from '../../../../../../assets/images/bus.svg'
import { useTranslations } from 'next-intl'

export default function Service() {
    
    const t = useTranslations("Activity-Service")

    const [data, setData] = useState(null)
    useEffect(() => {
           axios.get(`https://tashbus.uz/${document.cookie.slice(12)}/api/services/`).then(response => setData(response.data))
    }, [])

    if(!data) return []

    return <div className={cls.service}>

        <div className="hero-dinamic-router">
            <Link className='hero-dinamic-route-link' href={'/'}>{t('route1')}</Link>
            <Image className='hero-dinamic-route-images' src={NextImg} alt='next images' />
            <Link className='hero-dinamic-route-link' href={'/modules/activity/activity-layout/service'}>{t('route2')}</Link>
            <Image className='hero-dinamic-route-images' src={NextImg} alt='next images' />
            <Link className='hero-dinamic-route-link' href={'/modules/activity/activity-layout/service'}>{t('route3')}</Link>
        </div>

        <h3 className={cls.service_heading}>{t('title')}</h3>

        <ul className={cls.service_list}>
            {data?.map((element, index) => (
                <li className={cls.service_item} key={index}>
                    <div className={cls.service_item_heading_section}>
                        <Image src={BusImg} alt='bus image' />
                        <h5 className={cls.service_item_heading_img}>
                            {element?.title}
                        </h5>
                    </div>

                    <p className={cls.service_body} dangerouslySetInnerHTML={{__html: `<p>${element?.body}</p>` }} />

                    <div className={cls.service_item_bottom_sec}>
                        <p className={cls.service_item_bottom_label}>
                            {t('text-label')}:
                        </p>
                        <p className={cls.service_item_bottom_text}>
                            {element?.type}
                        </p>
                    </div>
                </li>
            ))}
        </ul>
    </div>
}