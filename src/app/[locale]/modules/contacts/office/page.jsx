'use client'

import { useEffect, useState } from 'react'
import cls from './styles.module.css'
import axios from 'axios'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { Link } from '../../../../../../navigation'
import FacebookImg from '../../../../../assets/images/facebooks.svg'
import InstagramImg from '../../../../../assets/images/instagram.svg'
import TelegramImg from '../../../../../assets/images/telegrams.svg'
import NextImg from '../../../../../assets/images/next.svg'


export default function Office() {

       const t = useTranslations("Contact-Office")

       const [data, setData] = useState(null)
       useEffect(() => {
              axios.get(`https://tashbus.uz/${document.cookie.slice(12)}/api/information/info/devonxona`).then(response => setData(response.data))
       }, [])
       
       if(!data) return []



       return <div className={cls.office}>

              <div className="hero-dinamic-router">
                     <Link className='hero-dinamic-route-link' href={'/'}>{t('route1')}</Link>
                     <Image className='hero-dinamic-route-images' src={NextImg} alt='next images' />
                     <Link className='hero-dinamic-route-link' href={'/modules/contacts/office'}>{t('route2')}</Link>
                     <Image className='hero-dinamic-route-images' src={NextImg} alt='next images' />
                     <Link className='hero-dinamic-route-link' href={'/modules/contacts/office'}>{t('route3')}</Link>
              </div>

              <h2 className={cls.office_heading}>{t('title')}</h2>

              <div className={cls.office_section}>
                     <div className={cls.office_first_sec}>
                            <p className={cls.office_sec_name}>{t('phone')}</p>
                            <p className={cls.office_sec_data}>{data[0].phone}</p>
                     </div>
                     <div className={cls.office_first_sec}>
                            <p className={cls.office_sec_name}>{t('first-email')}</p>
                            <p className={cls.office_sec_data}>{data[0].email}</p>
                     </div>
                     <div className={cls.office_first_sec}>
                            <p className={cls.office_sec_name}>{t('second-email')}</p>
                            <p className={cls.office_sec_data}>{data[0].email1}</p>
                     </div>
                     <div className={cls.office_first_sec}>
                            <p className={cls.office_sec_name}>{t('address')}</p>
                            <p className={cls.office_sec_data}>{data[0].address}</p>
                     </div>
                     <div className={cls.office_first_sec}>
                            <p className={cls.office_sec_name}>{t('work-time')}</p>
                            <p className={cls.office_sec_data}>{data[0].work_time}</p>
                     </div>
                     <div className={cls.office_first_sec}>
                            <p className={cls.office_sec_name}>{t('networking')}</p>
                            <div className={cls.office_inner_sec}>
                                   <a className={cls.office_inner_sec_link} 
                                   href={data[0].facebook} target='_blanc'>
                                          <Image src={FacebookImg} alt='facebook' />
                                   </a>
                                   <a className={cls.office_inner_sec_link} 
                                   href={data[0].instagram} target='_blanc'>
                                          <Image src={InstagramImg} alt='facebook' />
                                   </a>
                                   <a className={cls.office_inner_sec_link} 
                                   href={data[0].telegram} target='_blanc'>
                                          <Image src={TelegramImg} alt='facebook' />
                                   </a>
                            </div>
                     </div>
              </div>

              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14255.954728421188!2d69.27290148952395!3d41.310056112347844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b320acee12b%3A0x9118e5a6aaa50b48!2s%D0%90%D0%9A%20ToshShahartransXizmat!5e0!3m2!1sru!2s!4v1716527112957!5m2!1sru!2s" width="100%" height="600" style={{marginTop: '24px', border: '0', borderRadius: '24px'}} loading="lazy"></iframe>

       </div>
}
