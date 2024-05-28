'use client'

import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide, } from 'swiper/react';
import { Autoplay, Mousewheel, Keyboard } from 'swiper/modules';
import 'swiper/css';
import axios from 'axios';
import cls from './styles.module.css'
import { useTranslations } from 'next-intl';
import { Link } from '../../../navigation';


export default function AboutUs() {

       const [data, setData] = useState(null)
       useEffect(() => {
              axios.get(`https://tashbus.uz/${document.cookie.slice(12)}/api/about/images`).then(response => setData(response.data))
       }, [])


       const t = useTranslations("Landing-About-Us")

       
       if(!data) return []

       return (
              <div>
                     <Swiper
                             loop={true}
                             cssMode={false}   
                            //  mousewheel={false}
                            //  keyboard={true}
                            spaceBetween={30}
                            centeredSlides={true}
                            autoplay={{
                              delay: 3000,
                              disableOnInteraction: false,
                            }}
                            modules={[Autoplay]}
                            className="mySwiper">
                                   <SwiperSlide>
                                          <div className={cls.about_us_section}>
                                                 <h1 className={cls.about_us_title}>{t('title')}</h1>
                                                 <Link className={cls.about_us_btn} href={'/modules/about/about-us'}>{t('title-btn')}</Link>
                                          </div>
                                   </SwiperSlide>
                                   <SwiperSlide>
                                          <div className={cls.about_us_section_second}>
                                                 <h1 className={cls.about_us_title}>{t('title')}</h1>
                                                 <Link className={cls.about_us_btn} href={'/modules/about/about-us'}>{t('title-btn')}</Link>
                                          </div>
                                   </SwiperSlide>
       
                     </Swiper>
                     {/* src={element?.thumbnail?.src?.replace('http', 'https')} */}
                     {/* <img src={data[1].photo.src?.split('http').join('https')} alt={'logos'}
                     width={500} height={500} /> */}


                     
              </div>
       )
}
