'use client'


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { useEffect, useState } from 'react';
import axios from 'axios';
import cls from './styles.module.css'
import { useTranslations } from 'next-intl';


export default function Statistics() {
       
       const t = useTranslations("Landing-Statistics")
       const colorArr = [
              {
                     id: 1,
                     backColor: '#FFF1E0',
                     color: '#FFA63D',
              },
              {
                     id: 2,
                     backColor: '#E3FFE5',
                     color: "#2FCF37",
              },
              {
                     id: 3,
                     backColor: '#F3EDFF',
                     color: '#A97DFF',
              },
              {
                     id: 4,
                     backColor: '#FFE3E3',
                     color: '#FA5C5C',
              },
              {
                     id: 5,
                     backColor: '#FFF1E0',
                     color: '#FFA63D',
              },
              {
                     id: 6,
                     backColor: '#E3FFE5',
                     color: "#2FCF37",
              },
              {
                     id: 7,
                     backColor: '#F3EDFF',
                     color: '#A97DFF',
              },
              {
                     id: 8,
                     backColor: '#FFE3E3',
                     color: '#FA5C5C',
              },
              {
                     id: 9,
                     backColor: '#FFF1E0',
                     color: '#FFA63D',
              },
              {
                     id: 10,
                     backColor: '#E3FFE5',
                     color: "#2FCF37",
              },
              {
                     id: 11,
                     backColor: '#F3EDFF',
                     color: '#A97DFF',
              },
       ]
       const [data, setData] = useState(null)
       useEffect(() => {
              axios.get(`https://tashbus.uz/${document.cookie.slice(12)}/api/statistics/`).then(response => setData(response.data))
       }, [])
       
       if(!data) return []


       return (
              <div className={cls.site_statistics}>
                     <h2 className={cls.statistics_heading}>{t('title')}</h2>

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
                       1200: {
                            slidesPerView: 4,
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
                                   <SwiperSlide key={element?.id}>
                                          <div className={cls.statistics_section}
                                          style={{background: colorArr[index].backColor, color: colorArr[index].color}}>
                                                        <h3 className={cls.statistics_title}>
                                                               {element?.count <= 999 ? element?.count :
                                                               element?.count <= 9999 ? (element?.count + '').slice(0, 1) + '.' + (element?.count + '').slice(1, 2) : 
                                                               element?.count <= 99999 ?  (element?.count + '').slice(0, 2) + "." + (element?.count + '').slice(2, 3) :
                                                               element?.count <= 999999 ?  (element?.count + '').slice(0, 3) + "." + (element?.count + '').slice(3, 4) :
                                                               element?.count <= 9999999 ?  (element?.count + '').slice(0, 1) + "." + (element?.count + '').slice(1, 2) :
                                                               element?.count <= 99999999 ?  (element?.count + '').slice(0, 2) + "." + (element?.count + '').slice(2, 3) :
                                                               'vsd'}
                                                               <span className={cls.statistic_heading_text}>
                                                                      {element?.count <= 999 ? '' :
                                                                      element?.count <= 999999 ? t('text-thousand') :
                                                                      element?.count <= 99999999 ?  t('text-million') :
                                                                      'vsd'}
                                                               </span>
                                                        </h3>
                                                 <p className={cls.statistic_desc}>{element?.title}</p>
                                          </div>
                                   </SwiperSlide>
                            ))}
                     </Swiper>
              </div>
       )
}