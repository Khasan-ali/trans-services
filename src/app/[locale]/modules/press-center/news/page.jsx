'use client'

import { useTranslations } from 'next-intl'
import cls from './style.module.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from '../../../../../../navigation'
import { format } from 'date-fns'
import Pagination from '@/components/pagination/Pagination'

export default function News() {

       const t = useTranslations("Press-Center-News")


       const [data, setData] = useState(null)
       useEffect(() => {
              axios.get(`https://tashbus.uz/${document.cookie.slice(12)}/api/post/yangiliklar?p=2&page_size=12`).then(response => setData(response.data))
       }, [])

       if (!data) return []

       // console.log(data?.results);

       function handlePageClick(e) {

              console.log(((e.selected - 0) + 1));
              axios.get(`https://tashbus.uz/${document.cookie.slice(12)}/api/post/yangiliklar?p=${((e.selected - 0) + 1)}&page_size=12`).then(response => setData(response.data))

              // console.log(e.selected);
       }

       return <div className={cls.news_section}>
              <h3 className={cls.press_news_heading}>{t('title')}</h3>

              <ul className={cls.news_list}>
                     {data?.results?.map((element) => (
                            <li className={cls.news_item} key={element?.slug}>
                                   <Link className={cls.news_item_link} href={`/modules/press-center/news-detail/${element?.slug}`}>
                                          <div className={cls.news_img_sec}>
                                                 <img className={cls.news_img} src={element?.image?.src.split('http').join('https')} alt="news element images" />
                                          </div>
                                          <span className={cls.news_item_date}>
                                                 {format(new Date(`${element?.pub_date}`), 'dd/MM/yyyy').replaceAll("/", ".")}
                                          </span>
                                          <h4 className={cls.news_item_heading}>{element?.title}</h4>
                                   </Link>
                            </li>
                     ))}
              </ul>

              <div className='pagination_section'>
                     <Pagination handlePageClick={handlePageClick} pageCount={46} />
              </div>


       </div>
}
