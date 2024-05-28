'use client'

import Image from 'next/image'
import { Link } from '../../../../../../../navigation'
import cls from './styles.module.css'
import NextImg from '../../../../../../assets/images/next.svg'
import DocumentImg from '../../../../../../assets/images/document.svg'
import { useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function BoardMembers() {

    const t = useTranslations("Corparate-Management-Board-members")


    const [data, setData] = useState(null)
    useEffect(() => {
           axios.get(`https://tashbus.uz/${document.cookie.slice(12)}/api/post/detail/toshshaxartransxizmat-aj-ning-aksiyadorlik-jamiyat`).then(response => setData(response.data))
    }, [])
    
    if(!data) return []

    return <div className={cls.board_members}>

        <div className="hero-dinamic-router">
            <Link className='hero-dinamic-route-link' href={'/'}>{t('route1')}</Link>
            <Image className='hero-dinamic-route-images' src={NextImg} alt='next images' />
            <Link className='hero-dinamic-route-link' href={'/modules/corparate/management/board-members'}>{t('route2')}</Link>
            <Image className='hero-dinamic-route-images' src={NextImg} alt='next images' />
            <Link className='hero-dinamic-route-link' href={'/modules/corparate/management/board-members'}>{t('route3')}</Link>
            <Image className='hero-dinamic-route-images' src={NextImg} alt='next images' />
            <Link className='hero-dinamic-route-link' href={'/modules/corparate/management/board-members'}>{t('route4')}</Link>
        </div>

        <h3 className={cls.board_members_heading}>{t('title')}</h3>

        <img className={cls.board_members_img} src={data?.images[0].image?.src.split('http').join('https')} alt="images" />
        <a className={cls.board_members_link_section} href={data?.file} download={data?.file} target='_blanc'>
            <Image src={DocumentImg} alt='document icon' />
            <p className={cls.board_members_link_text}>{t('download-title')}</p>
        </a>

        <h4 className={cls.board_members_title}>{data?.title}</h4>

        

    </div>
}