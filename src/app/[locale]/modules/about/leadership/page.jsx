'use client'

import Image from 'next/image'
import { Link } from '../../../../../../navigation'
import cls from './styles.module.css'
import { useTranslations } from "next-intl"
import NextImg from '../../../../../assets/images/next.svg'
import PhoneImg from '../../../../../assets/images/phone.svg'
import EmailImg from '../../../../../assets/images/mail.svg'
import ClockImg from '../../../../../assets/images/clock.svg'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Leadership() {

       const t = useTranslations("About-Regulatory-Leadership")

       const [data, setData] = useState(null)
       useEffect(() => {
              axios.get(`https://tashbus.uz/${document.cookie.slice(12)}/api/leadership/`).then(response => setData(response.data))
       }, [])

       if(!data) return []


       return (
              <div className={cls.leadership}>
                     <div className="hero-dinamic-router">
                         <Link className='hero-dinamic-route-link' href={'/'}>{t('route1')}</Link>
                         <Image className='hero-dinamic-route-images' src={NextImg} alt='next images' />
                         <Link className='hero-dinamic-route-link' href={'/modules/about/leadership'}>{t('route2')}</Link>
                         <Image className='hero-dinamic-route-images' src={NextImg} alt='next images' />
                         <Link className='hero-dinamic-route-link' href={'/modules/about/leadership'}>{t('route3')}</Link>
                     </div>

                     <h2 className={cls.leadership_heading}>{t("title")}</h2>

                     <ul className={cls.leadership_list}>
                            {data?.map((element) => (
                                   <li className={cls.leadership_item} key={element?.id}>
                                          <Link className={cls.leadership_link} href={`/modules/about/leadership/${element?.id}`}>
                                                 <img className={cls.leadership_item_img} src={element?.thumbnail?.src.split('http').join('https')} alt="person img" />
                                                 <div className={cls.leadership_item_section}>
                                                        <h4 className={cls.leadership_item_heading}>{element?.full_name}</h4>
                                                        <p className={cls.leadership_item_position}>{element?.position}</p>
                                                        <ul className={cls.leadership_item_list}>
                                                               <li className={cls.leadership_item_item}>
                                                                      <Image src={PhoneImg} alt='phone icon'/>
                                                                      <div className={cls.leadership_item_item_section}>
                                                                             <p className={cls.leadership_item_item_position}>{t('position1')}</p>
                                                                             <p className={cls.leadership_item_item_text}>{element?.phone}</p>
                                                                      </div>
                                                               </li>
                                                               <li className={cls.leadership_item_item}>
                                                                      <Image src={PhoneImg} alt='phone icon'/>
                                                                      <div className={cls.leadership_item_item_section}>
                                                                             <p className={cls.leadership_item_item_position}>{t('position2')}</p>
                                                                             <p className={cls.leadership_item_item_text}>{element?.fax}</p>
                                                                      </div>
                                                               </li>
                                                               <li className={cls.leadership_item_item}>
                                                                      <Image src={EmailImg} alt='phone icon'/>
                                                                      <div className={cls.leadership_item_item_section}>
                                                                             <p className={cls.leadership_item_item_position}>{t('position3')}</p>
                                                                             <p className={cls.leadership_item_item_text}>{element?.email}</p>
                                                                      </div>
                                                               </li>
                                                               <li className={cls.leadership_item_item}>
                                                                      <Image src={ClockImg} alt='phone icon'/>
                                                                      <div className={cls.leadership_item_item_section}>
                                                                             <p className={cls.leadership_item_item_position}>{t('position4')}</p>
                                                                             <p className={cls.leadership_item_item_text}>{element?.reception_days}</p>
                                                                      </div>
                                                               </li>
                                                        </ul>
                                                 </div>
                                          </Link>
                                   </li>
                            ))}
                     </ul>
              </div>
       )
}