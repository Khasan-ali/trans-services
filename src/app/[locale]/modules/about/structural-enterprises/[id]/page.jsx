'use client'

import { useEffect, useState } from 'react'
import cls from './styles.module.css'
import axios from 'axios'
import { Link } from '../../../../../../../navigation'
import NextImg from '../../../../../../assets/images/next.svg'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

export default function Detail({ params }) {
       const t = useTranslations("About-Us-Structural-Enterprises")

       const paramData = params.id ? params.id : ''
       
       const [data, setData] = useState(null)
       useEffect(() => {
              axios.get(`https://tashbus.uz/${document.cookie.slice(12)}/api/enterprise/${paramData}`).then(response => setData(response.data))
       }, [])

       if(!data) return []

       return <div className={cls.detail}>

              <div className="hero-dinamic-router">
                  <Link className='hero-dinamic-route-link' href={'/'}>{t('route1')}</Link>
                  <Image className='hero-dinamic-route-images' src={NextImg} alt='next images' />
                  <Link className='hero-dinamic-route-link' href={'/modules/about/structural-enterprises'}>{t('route2')}</Link>
                  <Image className='hero-dinamic-route-images' src={NextImg} alt='next images' />
                  <Link className='hero-dinamic-route-link' href={'/modules/about/structural-enterprises'}>{t('route3')}</Link>
              </div>

              <h3 className={cls.detail_heading}>{t('title')}</h3>

              <div className={cls.enterprises_item}>
                     <h5 className={cls.enterprises_item_heading}>{data?.name}</h5>
                     <div className={cls.enterprises_item_section}>
                            <p className={cls.enterprises_item_label}>{t('label1')}:</p>
                            <p className={cls.enterprises_item_text}>{data?.full_name}</p>
                     </div>

                     <div className={cls.enterprises_item_section}>
                            <p className={cls.enterprises_item_label}>{t('label2')}:</p>
                            <p className={cls.enterprises_item_text}>{data?.address}</p>
                     </div>

                     <div className={cls.enterprises_item_section}>
                            <p className={cls.enterprises_item_label}>{t('label3')}:</p>
                            <p className={cls.enterprises_item_text}>{data?.phone}</p>
                     </div>
              </div>

              <div className={cls.detail_body} dangerouslySetInnerHTML={{__html: `<p>${data?.body}</p>` }} />

              
       </div>
}