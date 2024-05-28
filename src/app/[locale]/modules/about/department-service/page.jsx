'use client'

import { useTranslations } from 'next-intl'
import cls from './styles.module.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from '../../../../../../navigation'
import Image from 'next/image'
import NextImg from '../../../../../assets/images/next.svg'
import ForeImg from '../../../../../assets/images/fore.svg'
import Fore2Img from '../../../../../assets/images/fore2.svg'

export default function Department() {

       const t = useTranslations("About-Us-Department")
       
       const [data, setData] = useState(null)
       useEffect(() => {
              axios.get(`https://tashbus.uz/${document.cookie.slice(12)}/api/departments/`).then(response => setData(response.data))
       }, [])

       if(!data) return []

       return (
              <div className={cls.department}>
                     <div className="hero-dinamic-router">
                         <Link className='hero-dinamic-route-link' href={'/'}>{t('route1')}</Link>
                         <Image className='hero-dinamic-route-images' src={NextImg} alt='next images' />
                         <Link className='hero-dinamic-route-link' href={'/modules/about/department-service'}>{t('route2')}</Link>
                         <Image className='hero-dinamic-route-images' src={NextImg} alt='next images' />
                         <Link className='hero-dinamic-route-link' href={'/modules/about/department-service'}>{t('route3')}</Link>
                     </div>

                     <h2 className={cls.department_heading}>{t('title')}</h2>

                     <ul className={cls.department_list}>
                            {data?.map((element) => (
                                   <li className={cls.department_item} key={element?.slug}> 
                                          <p className={cls.department_item_heading}>{element?.title}</p>
                                          <Link className={cls.department_item_link} href={`/modules/about/department-service/${element?.slug}`}>
                                                 {t('btn')}
                                                 <Image className={cls.department_link_img} src={ForeImg} alt='fore icon' />
                                                 <Image className={cls.department_link_img2} src={Fore2Img} alt='fore icon' />
                                          </Link>
                                   </li>
                            ))}
                     </ul>
              </div>
       )
}
