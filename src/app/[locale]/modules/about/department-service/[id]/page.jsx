'use client'

import cls from './styles.module.css'
import NextImg from '../../../../../../assets/images/next.svg'
import PhoneImg from '../../../../../../assets/images/phone.svg'
import EmailImg from '../../../../../../assets/images/mail.svg'
import { Link } from '../../../../../../../navigation'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function DetailDepartment({ params }) {

       const t = useTranslations("About-Us-Department")

       const paramData = params.id ? params.id : ''
       
       const [data, setData] = useState(null)
       useEffect(() => {
              axios.get(`https://tashbus.uz/${document.cookie.slice(12)}/api/departments/${paramData}`).then(response => setData(response.data))
       }, [])

       if(!data) return []

       return <div className={cls.detail}>

              <div className="hero-dinamic-router">
                  <Link className='hero-dinamic-route-link' href={'/'}>{t('route1')}</Link>
                  <Image className='hero-dinamic-route-images' src={NextImg} alt='next images' />
                  <Link className='hero-dinamic-route-link' href={'/modules/about/department-service'}>{t('route2')}</Link>
                  <Image className='hero-dinamic-route-images' src={NextImg} alt='next images' />
                  <Link className='hero-dinamic-route-link' href={'/modules/about/department-service'}>{t('route3')}</Link>
              </div>

              <h3 className={cls.department_heading}>{data?.title}</h3>

              <div className={cls.leadership_item}>
                     <img className={cls.leadership_item_img} src={data?.thumbnail?.src.split('http').join('https')} alt="person img" />
                     <div className={cls.leadership_item_section}>
                            <h4 className={cls.leadership_item_heading}>{data?.full_name}</h4>
                            <p className={cls.leadership_item_position}>{data?.position}</p>
                            <ul className={cls.leadership_item_list}>
                                   <li className={cls.leadership_item_item}>
                                          <Image src={EmailImg} alt='phone icon'/>
                                          <div className={cls.leadership_item_item_section}>
                                                 <p className={cls.leadership_item_item_position}>{t('position3')}</p>
                                                 <p className={cls.leadership_item_item_text}>{data?.email}</p>
                                          </div>
                                   </li>
                                   <li className={cls.leadership_item_item}>
                                          <Image src={PhoneImg} alt='phone icon'/>
                                          <div className={cls.leadership_item_item_section}>
                                                 <p className={cls.leadership_item_item_position}>{t('position1')}</p>
                                                 <p className={cls.leadership_item_item_text}>{data?.phone}</p>
                                          </div>
                                   </li>
                            </ul>
                     </div>
              </div>

              <p dangerouslySetInnerHTML={{__html: `<p>${data?.body}</p>` }} />
       </div>
}