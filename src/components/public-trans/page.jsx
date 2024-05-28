'use client'

import { useEffect, useState } from 'react'
import { Link } from '../../../navigation'
import cls from './styles.module.css'
import axios from 'axios'
import LineImg from '../../assets/images/line.png'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

export default function PublicTrans() {

       const t = useTranslations("Landing-Public-Trans")

       const [data, setData] = useState(null)
       useEffect(() => {
              axios.get(`https://tashbus.uz/${document.cookie.slice(12)}/api/busses/categories?p=1&page_size=4`).then(response => setData(response.data))
       }, [])
       
       if(!data) return []

       return (
              <>
                     <h2 className={cls.public_trans_heading}>{t('title')}</h2>

                     <ul className={cls.public_trans_list}>
                            {data?.map((element) => (
                                   <li className={cls.public_trans_items} key={element?.slug}>
                                          <Link className={cls.public_trans_link} href={`/modules/public-trans/${element?.slug}`}>
                                                 <span className={cls.public_trans_item_title}>{element?.title}</span>
                                                 <div className={cls.public_trans_img_sec}>
                                                        <img className={cls.public_trans_item_img} src={element?.cover?.src.split('http').join('https')} alt="public trans images" />
                                                 </div>
                                                 <button className={cls.public_trans_btn}>
                                                        Barcha modellar
                                                        <Image className={cls.public_trans_inner_img} src={LineImg} alt="vector img" />
                                                 </button>
                                          </Link>
                                   </li>
                            ))}
                     </ul>
              </>
       )
}