'use client'

import { useTranslations } from 'next-intl'
import cls from './styles.module.css'
import { Link } from '../../../../../../../../navigation'
import Image from 'next/image'
import NextImg from '../../../../../../../assets/images/next.svg'
import DateImg from '../../../../../../../assets/images/date.png'
import EyeImg from '../../../../../../../assets/images/eye.png'
import FacebookImg from '../../../../../../../assets/images/facebook.svg'
import TelegramImg from '../../../../../../../assets/images/telegram.svg'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { format } from 'date-fns'

export default function DetailInvestment({ params }) {

    const t = useTranslations("Corparate-Projects-Investment")

    const paramData = params.id ? params.id : ''

    const [data, setData] = useState(null)
    useEffect(() => {
           axios.get(`https://tashbus.uz/${document.cookie.slice(12)}/api/post/detail/${paramData}`).then(response => setData(response.data))
    }, [])

    if(!data) return []

    return <div className={cls.detail}>

        <div className="hero-dinamic-router">
            <Link className='hero-dinamic-route-link' href={'/'}>{t('route1')}</Link>
            <Image className='hero-dinamic-route-images' src={NextImg} alt='next images' />
            <Link className='hero-dinamic-route-link' href={`/modules/corparate/projects/investment`}>{t('route2')}</Link>
            <Image className='hero-dinamic-route-images' src={NextImg} alt='next images' />
            <Link className='hero-dinamic-route-link' href={`/modules/corparate/projects/investment`}>{t('route3')}</Link>
            <Image className='hero-dinamic-route-images' src={NextImg} alt='next images' />
            <Link className='hero-dinamic-route-link' href={`/modules/corparate/projects/investment`}>{t('route4')}</Link>
        </div>

        <h3 className={cls.dateail_heading}>{data?.title}</h3>

        <div className={cls.detail_section}>
            <div className={cls.detail_section_inner}>
                <div className={cls.investment_item_date_sec}>
                    <Image className={cls.detail_date_icon} src={DateImg} alt='date icon' />
                    <p className={cls.investment_item_date}>
                        {format(new Date(`${data?.pub_date}`), 'dd/MM/yyyy').replaceAll("/", ".")}
                    </p>
                </div>
                <div className={cls.detail_view_section}>
                    <Image className={cls.detail_date_icon} src={EyeImg} alt='date icon' />
                    <p className={cls.detail_view_text}>{data?.view_count}</p>
                </div>
            </div>
            <div className={cls.detail_sotiol}>
                <a href="https://www.facebook.com/login.php?skip_api_login=1&api_key=966242223397117&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fsharer.php%3Fsrc%3Dsp%26u%3Dhttps%253A%252F%252Ftashbus.uz%252Fnews%252F&cancel_url=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Fclose_window%2F%3Fapp_id%3D966242223397117%26connect%3D0%23_%3D_&display=popup&locale=ru_RU#/investitsion/2023-2025-iillarda-toshshakhartranskhizmat-azh-kha" target='_blanc'>
                    <Image className={cls.detail_share_icon} src={FacebookImg} alt='facebook icon' />
                </a>
                <a href="https://t.me/share/url?url=https://tashbus.uz/news/#/investitsion/2023-2025-iillarda-toshshakhartranskhizmat-azh-kha" target='_blanc'>
                    <Image src={TelegramImg} alt='telegram icon' />
                </a>
            </div>
        </div>

        <p className={cls.detail_body_text} dangerouslySetInnerHTML={{__html: `<p>${data?.body}</p>` }} />
    </div>
}