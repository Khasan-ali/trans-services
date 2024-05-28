'use client'

import { useTranslations } from 'next-intl'
import cls from './styles.module.css'
import { Link } from '../../../../../navigation'
import Image from 'next/image'
import NextImg from '../../../../assets/images/next.svg'
import DocumentImg from '../../../../assets/images/document.svg'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Information from '../../../../components/information/page'

export default function ComplaensControl() {

       const t = useTranslations("Compleans-Control")

       const [data, setData] = useState(null)
       const [infoData, setInfoData] = useState([])
       useEffect(() => {
              axios.get(`https://tashbus.uz/${document.cookie.slice(12)}/api/document/korrupsiyaga?p=3&page_size=6`).then(response => setData(response.data))
              axios.get(`https://tashbus.uz/${document.cookie.slice(12)}/api/information/corruption/info`).then(response => setInfoData(response.data))
       }, [])


       if(!data) return []
       if(!infoData) return []
        
       return <div className={cls.control}>
              <div className="hero-dinamic-router">
                     <Link className='hero-dinamic-route-link' href={'/'}>{t('route1')}</Link>
                     <Image className='hero-dinamic-route-images' src={NextImg} alt='next images' />
                     <Link className='hero-dinamic-route-link' href={'/modules/compleans-control'}>{t('route2')}</Link>
              </div>

              <h3 className={cls.control_heading}>{t('title')}</h3>

              <ul className={cls.control_list}>
                     {data?.results?.map((element, index) => (
                            <li className={cls.control_item} key={index}>
                                   <p className={cls.document_item_text}>{element?.title}</p>
                                   <a className={cls.control_item_link} href={element?.file} target='_blank'>
                                          <Image className={cls.control_item_icon} src={DocumentImg} alt='document icon'/>
                                          Ko'chirib olish
                                   </a>
                            </li>
                     ))}
              </ul>

              <div className={cls.control_info}>
                     <div className={cls.control_info_section}>
                            <p className={cls.control_info_left_text}>Raxbar:</p>
                            <p className={cls.control_info_right_text}>{infoData[0]?.leader}</p>
                     </div>
                     <div className={cls.control_info_section}>
                            <p className={cls.control_info_left_text}>Манзил:</p>
                            <p className={cls.control_info_right_text}>{infoData[0]?.address}</p>
                     </div>
                     <div className={cls.control_info_section}>
                            <p className={cls.control_info_left_text}>Телефон:</p>
                            <p className={cls.control_info_right_text}>{infoData[0]?.phone}</p>
                     </div>
                     <div className={cls.control_info_section}>
                            <p className={cls.control_info_left_text}>Электрон манзил:</p>
                            <p className={cls.control_info_right_text}>{infoData[0]?.email}</p>
                     </div>
              </div>

              <Information/>
       </div>
}