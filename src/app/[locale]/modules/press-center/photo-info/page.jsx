'use client'

import { useEffect, useState } from 'react'
import cls from './styles.module.css'
import axios from 'axios'
import { Link } from '../../../../../../navigation'
import { useTranslations } from 'next-intl'

export default function PhotoInfo() {

       const t = useTranslations("News-Media-Detail")

       const [data, setData] = useState(null)
       useEffect(() => {
              axios.get(`https://tashbus.uz/${document.cookie.slice(12)}/api/gallery/photo/`).then(response => setData(response.data))
       }, [])
       
       if(!data) return []


       return <div className={cls.site_photo_info}>
              <h3 className={cls.photo_info_heading}>{t('title')}</h3>

              <ul className={cls.photo_info_list}>
                     {data?.results?.map((element, index) => (
                            <li className={cls.photo_info_item} key={element?.id}>
                                   <Link className={cls.photo_info_link} href={`/modules/photo-bus/${element?.id}`}>
                                          <div className={cls.photo_info_img_sec}>
                                                 <img className={cls.photo_info_images} src={element?.thumbnail?.src.split('http').join('https')} alt="bus images" />
                                          </div>
                                          <p className={cls.photo_info_title}>{element?.name}</p>
                                   </Link>
                            </li>
                     ))}
              </ul>
       </div>
}