'use client'

import { useTranslations } from 'next-intl'
import cls from './styles.module.css'
import { Link } from '../../../navigation'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { format } from 'date-fns'
import Image from 'next/image'
import DateImg from '../../assets/images/date.png'

export default function News() {

       const t = useTranslations('Landing-News')

       const [data, setData] = useState(null)
       useEffect(() => {
              axios.get(`https://tashbus.uz/${document.cookie.slice(12)}/api/post/yangiliklar?p=1&page_size=5`).then(response => setData(response.data))
       }, [])
       
       if(!data) return []

       return <div className={cls.site_news}>
              <div className={cls.news_top_section}>
                     <h2 className={cls.news_heading}>{t('title')}</h2>
                     <Link className={cls.news_top_links} href={'/modules/press-center/news'}>{t('link-title')}</Link>
              </div>

              <div className={cls.news_list_section}>
                     <Link className={cls.news_item_first} href={`/modules/press-center/news-detail/${data?.results[0]?.slug}`}>
                            <img className={cls.news_main_images} src={data?.results[0]?.image?.src.split('http').join('https')} alt="back images" />
                            <div className={cls.news_item_first_back}>
                                   <span className={cls.news_item_date}>
                                          <Image className={cls.news_item_date_img} src={DateImg} alt='date images' />
                                          {format(new Date(`${data?.results[0]?.pub_date}`), 'dd/MM/yyyy').replaceAll("/", ".")}</span>
                                   <h3 className={cls.news_item_first_heading}>{data?.results[0].title}</h3>
                            </div>
                     </Link>

                     <ul className={cls.news_list}>
                     <li className={cls.news_item_second}>
                            <Link className={cls.news_item_image_sec} href={`/modules/press-center/news-detail/${data?.results[1]?.slug}`}>
                                   <div className={cls.news_item_imagess_sec}>
                                          <img className={cls.news_item_image} src={data?.results[1]?.image?.src.split('http').join('https')} alt="first img" />
                                   </div>
                                   <span className={cls.news_item_date_span}>
                                          {format(new Date(`${data?.results[1]?.pub_date}`), 'dd/MM/yyyy').replaceAll("/", ".")}
                                   </span>
                                   <h3 className={cls.new_item_title}>{data?.results[1].title}</h3>
                            </Link>
                     </li>
                     <li className={cls.news_item_second}>
                            <Link className={cls.news_item_image_sec} href={`/modules/press-center/news-detail/${data?.results[2]?.slug}`}>
                                   <div className={cls.news_item_imagess_sec}>
                                          <img className={cls.news_item_image} src={data?.results[2]?.image?.src.split('http').join('https')} alt="first img" />
                                   </div>
                                   <span className={cls.news_item_date_span}>
                                          {format(new Date(`${data?.results[2]?.pub_date}`), 'dd/MM/yyyy').replaceAll("/", ".")}
                                   </span>
                                   <h3 className={cls.new_item_title}>{data?.results[2].title}</h3>
                            </Link>
                     </li>
                     <li className={cls.news_item_second}>
                            <Link className={cls.news_item_image_sec} href={`/modules/press-center/news-detail/${data?.results[3]?.slug}`}>
                                   <div className={cls.news_item_imagess_sec}>
                                          <img className={cls.news_item_image} src={data?.results[3]?.image?.src.split('http').join('https')} alt="first img" />
                                   </div>
                                   <span className={cls.news_item_date_span}>
                                          {format(new Date(`${data?.results[3]?.pub_date}`), 'dd/MM/yyyy').replaceAll("/", ".")}
                                   </span>
                                   <h3 className={cls.new_item_title}>{data?.results[3].title}</h3>
                            </Link>
                     </li>
                     <li className={cls.news_item_second}>
                            <Link className={cls.news_item_image_sec} href={`/modules/press-center/news-detail/${data?.results[4]?.slug}`}>
                                   <div className={cls.news_item_imagess_sec}>
                                          <img className={cls.news_item_image} src={data?.results[4]?.image?.src.split('http').join('https')} alt="first img" />
                                   </div>
                                   <span className={cls.news_item_date_span}>
                                          {format(new Date(`${data?.results[4]?.pub_date}`), 'dd/MM/yyyy').replaceAll("/", ".")}
                                   </span>
                                   <h4 className={cls.new_item_title}>{data?.results[4].title}</h4>
                            </Link>
                     </li>
                     </ul>
              </div>

       </div>
}

