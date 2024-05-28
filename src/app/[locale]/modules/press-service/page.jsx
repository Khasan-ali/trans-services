'use client'

import { useTranslations } from 'next-intl'
import { Link } from '../../../../../navigation'
import cls from './styles.module.css'
import Image from 'next/image'
import NextImg from '../../../../assets/images/next.svg'
import MailImg from '../../../../assets/images/mail.svg'
import PhoneImg from '../../../../assets/images/phone.svg'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Information from '../../../../components/information/page'

export default function PressService() {

       const t = useTranslations("New-Press-Service")

       
       const [data, setData] = useState(null)
       useEffect(() => {
              axios.get(`https://tashbus.uz/${document.cookie.slice(12)}/api/leadership/matbuot_xizmati`).then(response => setData(response.data))
       }, [])


       if(!data) return []

       return <div className={cls.press_section}>

              <div className="hero-dinamic-router">
                     <Link className='hero-dinamic-route-link' href={'/'}>{t('route1')}</Link>
                     <Image className='hero-dinamic-route-images' src={NextImg} alt='next images' />
                     <Link className='hero-dinamic-route-link' href={'/modules/press-service'}>{t('route2')}</Link>
                     <Image className='hero-dinamic-route-images' src={NextImg} alt='next images' />
                     <Link className='hero-dinamic-route-link' href={'/modules/press-service'}>{t('route3')}</Link>
              </div>

              <h3 className={cls.press_section_heading}>{t('title')}</h3>

              <div className={cls.press_hero_section}>
                     <img className={cls.press_hero_img} src={data?.thumbnail?.src.split('http').join('https')} alt="imges" />
                     <div className={cls.press_hero_right}>
                            <h4 className={cls.press_hero_title}>{data?.full_name}</h4>
                            <p className={cls.press_hero_text}>{data?.position}</p>


                            <div className={cls.press_hero_main_sec}>
                            <div className={cls.press_hero_mail_sec}>
                                   <Image src={MailImg} alt='mail image'/>
                                   <div className={cls.press_hero_mail_inner_sec}>
                                          <p className={cls.press_hero_mail_text}>{t('email-title')}</p>
                                          <p className={cls.press_hero_main}>{data?.email}</p>
                                   </div>
                            </div>

                            <div className={cls.press_hero_mail_sec}>
                                   <Image src={PhoneImg} alt='mail image'/>
                                   <div className={cls.press_hero_mail_inner_sec}>
                                          <p className={cls.press_hero_mail_text}>{t('phone-title')}</p>
                                          <p className={cls.press_hero_main}>{data?.phone}</p>
                                   </div>
                            </div>
                            </div>
                     </div>
              </div>

              <p className={cls.press_text} dangerouslySetInnerHTML={{__html: `<p>${data?.body}</p>` }} />

              <Information/>
       </div>
}