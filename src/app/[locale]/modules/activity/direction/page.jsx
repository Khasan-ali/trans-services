'use client'

import { useTranslations } from 'next-intl'
import cls from './styles.module.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from '../../../../../../navigation'
import NextImg from '../../../../../assets/images/next.svg'
import Image from 'next/image'

export default function Direction() {

       const t = useTranslations("Activity-Direction")

       const [data, setData] = useState(null)
       useEffect(() => {
              axios.get(`https://tashbus.uz/${document.cookie.slice(12)}/api/directions/`).then(response => setData(response.data))
       }, [])

       if(!data) return []

       return (
              <div>
                     <div className={cls.site_direction}>


        <div className="hero-dinamic-router">
            <Link className='hero-dinamic-route-link' href={'/'}>{t('route1')}</Link>
            <Image className='hero-dinamic-route-images' src={NextImg} alt='next images' />
            <Link className='hero-dinamic-route-link' href={`/modules/activity/direction`}>{t('route2')}</Link>
            <Image className='hero-dinamic-route-images' src={NextImg} alt='next images' />
            <Link className='hero-dinamic-route-link' href={`/modules/activity/direction`}>{t('route3')}</Link>
        </div>

                            <h2 className={cls.direction_heading}>
                                   {t('title')}
                            </h2>

                            <ul className={cls.direction_list}>
                                   {data?.map((element) => (
                                          <li className={cls.direction_item} key={element?.slug}>
                                                 <Link className={cls.direction_item_link} href={`/modules/activity/detail-description/${element.slug}`}>
                                                        <p className={cls.direction_item_text}>{element?.title}</p>
                                                 </Link>
                                          </li>
                                   ))}
                            </ul>
                     </div>
              </div>
       )
}