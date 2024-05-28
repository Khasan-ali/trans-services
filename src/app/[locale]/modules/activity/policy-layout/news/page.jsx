'use client'

import { useEffect, useState } from 'react'
import cls from './styles.module.css'
import axios from 'axios'
import NextImg from '../../../../../../assets/images/next.svg'
import { useTranslations } from 'next-intl'
import { Link } from '../../../../../../../navigation'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

export default function News() {

    const t = useTranslations("Activity-Policy-News")

    const [data, setData] = useState(null)
    useEffect(() => {
           axios.get(`https://tashbus.uz/${document.cookie.slice(12)}/api/post/detail/toshshahartransxizmat-ajning-yoshlarga-oid-da-5a2k`).then(response => setData(response.data))
    }, [])

    if(!data) return []

    return <div className={cls.news}>

        <div className="hero-dinamic-router">
            <Link className='hero-dinamic-route-link' href={'/'}>{t('route1')}</Link>
            <Image className='hero-dinamic-route-images' src={NextImg} alt='next images' />
            <Link className='hero-dinamic-route-link' href={`/modules/activity/policy-layout/news`}>{t('route2')}</Link>
            <Image className='hero-dinamic-route-images' src={NextImg} alt='next images' />
            <Link className='hero-dinamic-route-link' href={`/modules/activity/policy-layout/news`}>{t('route3')}</Link>
            <Image className='hero-dinamic-route-images' src={NextImg} alt='next images' />
            <Link className='hero-dinamic-route-link' href={`/modules/activity/policy-layout/news`}>{t('route4')}</Link>
        </div>

        <h3 className={cls.news_heading}>{t('title')}</h3>

        <Swiper navigation={true} modules={[Navigation]} className={`mySwiper ${cls.news_swiper}`}>
            {data?.images.map((element, index) => (
                <SwiperSlide>
                    <img className={cls.news_swiper_img} src={element?.image?.src.split("http").join("https")} alt="swiper images" />
                </SwiperSlide>
            ))}
        </Swiper>

        <p  className={cls.news_body} dangerouslySetInnerHTML={{__html: `<p>${data?.body}</p>` }} />
    </div>
}
