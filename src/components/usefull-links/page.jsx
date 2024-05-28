'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { useEffect, useState } from 'react';
import axios from 'axios';
import cls from './styles.module.css'
import { useTranslations } from 'next-intl';



export default function UsefulLinks() {
       const t = useTranslations("Landing-Useful-Links")

       const [data, setData] = useState(null)
       useEffect(() => {
              axios.get(`https://tashbus.uz/${document.cookie.slice(12)}/api/useful-links/`).then(response => setData(response.data))
       }, [])

       if(!data) return []



       return (
              <div className={cls.useful_links}>
                     <h2 className={cls.useful_link_heading}>{t('title')}</h2>
                     <Swiper
                     loop={true}
                     slidesPerView={1}
                     spaceBetween={10}
                     breakpoints={{
                       640: {
                         slidesPerView: 1,
                         spaceBetween: 20,
                       },
                       768: {
                         slidesPerView: 2,
                         spaceBetween: 40,
                       },
                       1024: {
                         slidesPerView: 3,
                         spaceBetween: 50,
                       },
                     }}
                     autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                     }}
                     modules={[ Autoplay ]}
                     className="mySwiper">
                            {data?.map((element, index) => (
                                   <SwiperSlide key={index}>
                                          <a className={cls.useful_link_site} href={element?.link} target='_blank'>
                                                 <div className={cls.useful_link_images_section}>
                                                        <img src={element?.thumbnail?.src.split('http').join('https')} alt="has link img" />
                                                 </div>
                                                 <div className={cls.useful_link_section}>
                                                        <h3 className={cls.useful_link_title}>
                                                               {element?.title}
                                                        </h3>
                                                        <p className={cls.useful_link_text}>
                                                               {element?.link.slice(8)}
                                                        </p>
                                                 </div>
                                          </a>
                                   </SwiperSlide>
                            ))}
                     </Swiper>
              </div>
       )
}