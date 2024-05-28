'use client'

import { useEffect, useState } from 'react'
import cls from './styles.module.css'
import axios from 'axios'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { Link } from '../../../../../../navigation'
import FacebookImg from '../../../../../assets/images/facebooks.svg'
import InstagramImg from '../../../../../assets/images/instagram.svg'
import TelegramImg from '../../../../../assets/images/telegrams.svg'
import NextImg from '../../../../../assets/images/next.svg'



export default function Cooperation() {

    const t = useTranslations("Contact-Cooperation")

    const [data, setData] = useState(null)
    useEffect(() => {
           axios.get(`https://tashbus.uz/${document.cookie.slice(12)}/api/information/info/xalqaro_hamkorlik`).then(response => setData(response.data))
    }, [])
    
    if(!data) return []

    return <div className={cls.cooperation}>

        <div className="hero-dinamic-router">
            <Link className='hero-dinamic-route-link' href={'/'}>{t('route1')}</Link>
            <Image className='hero-dinamic-route-images' src={NextImg} alt='next images' />
            <Link className='hero-dinamic-route-link' href={'/modules/contacts/cooperation'}>{t('route2')}</Link>
            <Image className='hero-dinamic-route-images' src={NextImg} alt='next images' />
            <Link className='hero-dinamic-route-link' href={'/modules/contacts/cooperation'}>{t('route3')}</Link>
        </div>

        <h3 className={cls.cooperation_heading}>{t('title')}</h3>

        <div className={cls.cooperation_section}>
            <div className={cls.cooperation_first_sec}>
                   <p className={cls.cooperation_sec_name}>{t('phone')}</p>
                   <p className={cls.cooperation_sec_data}>{data[0].phone}</p>
            </div>
            <div className={cls.cooperation_first_sec}>
                   <p className={cls.cooperation_sec_name}>{t('email')}</p>
                   <p className={cls.cooperation_sec_data}>{data[0].email} {data[0].email1}</p>
            </div>
            <div className={cls.cooperation_first_sec}>
                   <p className={cls.cooperation_sec_name}>{t('address')}</p>
                   <p className={cls.cooperation_sec_data}>{data[0].address}</p>
            </div>
            <div className={cls.cooperation_first_sec}>
                   <p className={cls.cooperation_sec_name}>{t('work-time')}</p>
                   <p className={cls.cooperation_sec_data}>{data[0].work_time}</p>
            </div>
            <div className={cls.cooperation_first_sec}>
                   <p className={cls.cooperation_sec_name}>{t('networking')}</p>
                   <div className={cls.cooperation_inner_sec}>
                          <a className={cls.cooperation_inner_sec_link} 
                          href={data[0].facebook} target='_blanc'>
                                 <Image src={FacebookImg} alt='facebook' />
                          </a>
                          <a className={cls.cooperation_inner_sec_link} 
                          href={data[0].instagram} target='_blanc'>
                                 <Image src={InstagramImg} alt='facebook' />
                          </a>
                          <a className={cls.cooperation_inner_sec_link} 
                          href={data[0].telegram} target='_blanc'>
                                 <Image src={TelegramImg} alt='facebook' />
                          </a>
                   </div>
            </div>
        </div>

    </div>
}