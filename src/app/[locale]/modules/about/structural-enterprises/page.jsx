'use client'

import Image from 'next/image'
import { Link } from '../../../../../../navigation'
import cls from './styles.module.css'
import { useTranslations } from "next-intl"
import NextImg from '../../../../../assets/images/next.svg'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function StructuralEnterprises() {

       const t = useTranslations("About-Us-Structural-Enterprises")

       
       const [data, setData] = useState(null)
       useEffect(() => {
              axios.get(`https://tashbus.uz/${document.cookie.slice(12)}/api/enterprise/`).then(response => setData(response.data))
       }, [])

       if(!data) return []

       return (
              <div className={cls.enterprises}>
                     <div className="hero-dinamic-router">
                         <Link className='hero-dinamic-route-link' href={'/'}>{t('route1')}</Link>
                         <Image className='hero-dinamic-route-images' src={NextImg} alt='next images' />
                         <Link className='hero-dinamic-route-link' href={'/modules/about/structural-enterprises'}>{t('route2')}</Link>
                         <Image className='hero-dinamic-route-images' src={NextImg} alt='next images' />
                         <Link className='hero-dinamic-route-link' href={'/modules/about/structural-enterprises'}>{t('route3')}</Link>
                     </div>

                     <h3 className={cls.enterprises_heading}>{t('title')}</h3>

                     <p className={cls.enterprises_text}>{t('text')}</p>

                     <ul className={cls.enterprises_list}>
                            {data?.map((element) => (
                                   <li className={cls.enterprises_item} key={element?.slug}>
                                          <Link className={cls.enterprises_link} href={`/modules/about/structural-enterprises/${element?.slug}`}>
                                                 <h5 className={cls.enterprises_item_heading}>{element?.name}</h5>
                                                 <div className={cls.enterprises_item_section}>
                                                        <p className={cls.enterprises_item_label}>{t('label1')}:</p>
                                                        <p className={cls.enterprises_item_text}>{element?.full_name}</p>
                                                 </div>

                                                 <div className={cls.enterprises_item_section}>
                                                        <p className={cls.enterprises_item_label}>{t('label2')}:</p>
                                                        <p className={cls.enterprises_item_text}>{element?.address}</p>
                                                 </div>

                                                 <div className={cls.enterprises_item_section}>
                                                        <p className={cls.enterprises_item_label}>{t('label3')}:</p>
                                                        <p className={cls.enterprises_item_text}>{element?.phone}</p>
                                                 </div>
                                          </Link>
                                   </li>
                            ))}
                     </ul>
              </div>
       )
}