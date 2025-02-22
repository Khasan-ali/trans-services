'use client'

import { useEffect, useState } from 'react'
import cls from './styles.module.css'
import axios from 'axios'
import NextImg from '../../../../../../assets/images/next.svg'
import DocumentImg from '../../../../../../assets/images/document.svg'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Link } from '../../../../../../../navigation'
import Pagination from '@/components/pagination/Pagination'

export default function Dividend() {

    const t = useTranslations("About-Regulatory-Documents")

    const [data, setData] = useState(null)
    useEffect(() => {
           axios.get(`https://tashbus.uz/${document.cookie.slice(12)}/api/document/meyoriy_hujjatlar`).then(response => setData(response.data))
    }, [])


    function handlePageClick(e) {
        axios.get(`https://tashbus.uz/${document.cookie.slice(12)}/api/document/meyoriy_hujjatlar?p=${((e.selected - 0) + 1)}&page_size=6`).then(response => setData(response.data))
 }

//  ${((e.selected - 0) + 1)}

    
    if(!data) return []



    return <div className={cls.facts}>

        <div className="hero-dinamic-router">
            <Link className='hero-dinamic-route-link' href={'/'}>{t('route1')}</Link>
            <Image className='hero-dinamic-route-images' src={NextImg} alt='next images' />
            <Link className='hero-dinamic-route-link' href={'/modules/about/about-layouts/regulatory-documents'}>{t('route2')}</Link>
            <Image className='hero-dinamic-route-images' src={NextImg} alt='next images' />
            <Link className='hero-dinamic-route-link' href={'/modules/about/about-layouts/regulatory-documents'}>{t('route3')}</Link>
        </div>

        <h3 className={cls.facts_heading}>{t('title')}</h3>

        <ul className={cls.facts_list}>
            {data?.results?.map((element, index) => (
               <li className={cls.facts_item} key={index}>
                <h5 className={cls.facts_item_title}>{element?.title}</h5>
                <a className={cls.facts_item_link} href={element?.file} download={element?.file} target='_blanc'>
                    <Image src={DocumentImg} alt='image' />
                    <p className={cls.facts_item_link_text}>{t('link-text')}</p>
                </a>
               </li> 
            ))}
        </ul>


        <div className='pagination_section'>
            <Pagination handlePageClick={handlePageClick} pageCount={3} />
        </div>


    </div>
}