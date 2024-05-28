'use client'

import { useTranslations } from 'next-intl'
import cls from './styles.module.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from '../../../../../../../navigation'
import Image from 'next/image'
import NextImg from '../../../../../../assets/images/next.svg'

export default function AuditService() {

    const t = useTranslations("Corparate-Management-Audit-Service")

    const [data, setData] = useState(null)
    useEffect(() => {
           axios.get(`https://tashbus.uz/${document.cookie.slice(12)}/api/council/ichki_audit`).then(response => setData(response.data))
    }, [])
    
    if(!data) return []


    return <div className={cls.audit_service}>

        <div className="hero-dinamic-router">
            <Link className='hero-dinamic-route-link' href={'/'}>{t('route1')}</Link>
            <Image className='hero-dinamic-route-images' src={NextImg} alt='next images' />
            <Link className='hero-dinamic-route-link' href={'/modules/corparate/management/audit-service'}>{t('route2')}</Link>
            <Image className='hero-dinamic-route-images' src={NextImg} alt='next images' />
            <Link className='hero-dinamic-route-link' href={'/modules/corparate/management/audit-service'}>{t('route3')}</Link>
            <Image className='hero-dinamic-route-images' src={NextImg} alt='next images' />
            <Link className='hero-dinamic-route-link' href={'/modules/corparate/management/audit-service'}>{t('route4')}</Link>
        </div>

        <h3 className={cls.audit_service_heading}>{t('title')}</h3>

        <ul className={cls.audit_service_list}>
            {data?.map((element, index) => (
                <li className={cls.audit_service_item} key={index}>
                    <img className={cls.audit_service_item_img} src={element?.thumbnail?.src.split('http').join('https')} alt="user image" />
                    <h5 className={cls.audit_service_item_heading}>{element?.full_name}</h5>
                    <p className={cls.audit_service_item_text}>{element?.position}</p>
                </li>
            ))}
        </ul>
    </div>
}