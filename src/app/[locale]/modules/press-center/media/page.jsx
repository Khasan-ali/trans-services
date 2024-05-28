'use client'

import { useEffect, useState } from 'react'
import cls from './styles.module.css'
import axios from 'axios'
import { Link } from '../../../../../../navigation'
import { format } from 'date-fns'
import { useTranslations } from 'next-intl'

export default function Media() {

       const t = useTranslations("News-Media")

       const [data, setData] = useState(null)
       useEffect(() => {
              axios.get(`https://tashbus.uz/${document.cookie.slice(12)}/api/post/press_konferensiya?p=1&page_size=12`).then(response => setData(response.data))
       }, [])
       
       if(!data) return []

       return <div className={cls.site_media}>
              <h2 className={cls.media_heading}>{t('title')}</h2>

              <ul className={cls.media_list}>
                     {data?.results?.map((element, index) => (
                            <li className={cls.media_item} key={element?.slug}>
                                   <Link className={cls.media_link} href={`/modules/press-center/media-detail/${element?.slug}`}>
                                          <div className={cls.media_img_sec}>
                                                 <img className={cls.media_img} src={element?.image?.src.split('http').join('https')} alt="bus images" />
                                          </div>
                                          <span className={cls.media_item_date}>
                                                 {format(new Date(`${element?.pub_date}`), 'dd/MM/yyyy').replaceAll("/", ".")}
                                          </span>
                                          <p className={cls.media_title}>{element?.title}</p>
                                   </Link>
                            </li>
                     ))}
              </ul>
       </div>
}