'use client'

import { useEffect, useState } from 'react'
import cls from './styles.module.css'
import axios from 'axios'
import PhoneImg from '../../../../../assets/images/phone.svg'
import InternetImg from '../../../../../assets/images/internet.svg'
import MailImg from '../../../../../assets/images/mail.svg'
import NextImg from '../../../../../assets/images/next.svg'
import { Link } from '../../../../../../navigation'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

export default function Cooperation() {

    const t = useTranslations("Activity-Cooperation")

    const [data, setData] = useState(null)
    useEffect(() => {
           axios.get(`https://tashbus.uz/${document.cookie.slice(12)}/api/partners/`).then(response => setData(response.data))
    }, [])

    if(!data) return []

    return <div className={cls.cooperation}>

        <div className="hero-dinamic-router">
            <Link className='hero-dinamic-route-link' href={'/'}>{t('route1')}</Link>
            <Image className='hero-dinamic-route-images' src={NextImg} alt='next images' />
            <Link className='hero-dinamic-route-link' href={'/modules/activity/cooperation'}>{t('route2')}</Link>
            <Image className='hero-dinamic-route-images' src={NextImg} alt='next images' />
            <Link className='hero-dinamic-route-link' href={'/modules/activity/cooperation'}>{t('route3')}</Link>
        </div>

        <h3 className={cls.cooperation_heading}>{t('title')}</h3>

        <ul className={cls.cooperation_list}>
            {data?.map((element, index) => (
                <li className={cls.cooperation_item} key={index}>
                    <img className={cls.cooperation_item_img} src={element?.thumbnail?.src.split('http').join('https')} alt={element.title} />
                    <div className={cls.cooperation_item_section}>
                        <h5 className={cls.cooperation_item_heading}>{element?.title}</h5>
                        <p className={cls.cooperation_item_text}>{element?.description}</p>
                        <div className={cls.cooperation_item_inner_sec}>
                            <div className={cls.cooperation_item_section_first}>
                                <Image src={PhoneImg} alt='phone icons' />
                                <div className={cls.cooperation_item_first_text_sec}>
                                    <p className={cls.cooperation_item_first_text_label}>{t('phone-label')}</p>
                                    <p className={cls.cooperation_item_first_text_phonel}>{element?.phone}</p>
                                </div>
                            </div>

                            <div className={cls.cooperation_item_section_first}>
                                <Image src={InternetImg} alt='phone icons' />
                                <div className={cls.cooperation_item_first_text_sec}>
                                    <p className={cls.cooperation_item_first_text_label}>{t('internet-label')}</p>
                                    <p className={cls.cooperation_item_first_text_phonel}>{element?.web_site}</p>
                                </div>
                            </div>

                            <div className={cls.cooperation_item_section_first}>
                                <Image src={MailImg} alt='phone icons' />
                                <div className={cls.cooperation_item_first_text_sec}>
                                    <p className={cls.cooperation_item_first_text_label}>{t('mail-label')}</p>
                                    <p className={cls.cooperation_item_first_text_phonel}>{element?.email}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    </div>
}