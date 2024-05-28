'use client'

import { useTranslations } from 'next-intl'
import cls from './styles.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import LineImg from '../../../../../assets/images/line.png'
import NextImg from '../../../../../assets/images/next.svg'
import Image from 'next/image'
import { Link } from '../../../../../../navigation';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Statistics from '../../../../../components/statistics/page'

export default function AboutUs() {

       const t = useTranslations("About-Us-About-us")

       const parentBus = localStorage.getItem('parent-bus')

       const paramId = localStorage.getItem("data-param-id")


       const [parentData, setParentData] = useState([])
       const [data, setData] = useState(null)
       useEffect(() => {
              axios.get(`https://tashbus.uz/${document.cookie.slice(12)}/api/about/`).then(response => setData(response.data))
              axios.get(`https://tashbus.uz/${document.cookie.slice(12)}/api/busses/${parentBus}/list?page_size=9`).then(response => setParentData(response.data))
       }, [])


       if(!parentData) return []
       if(!data) return []



       return (
              <div>
                     <div className='container'>
                            <div className="hero-dinamic-router">
                                <Link className='hero-dinamic-route-link' href={'/'}>{t('route1')}</Link>
                                <Image className='hero-dinamic-route-images' src={NextImg} alt='next images' />
                                <Link className='hero-dinamic-route-link' href={'/modules/about/about-us'}>{t('route2')}</Link>
                            </div>

                            <h2 className="about_heading">
                                   {t('title')}
                            </h2>

                            <img className={cls.about_us_image} src={data[0].cover.src.split('http').join('https')} alt="about image" />

                            <p className={cls.about_us_text} dangerouslySetInnerHTML={{__html: `<p>${data[0].about_body}</p>` }} />

                            <div className={cls.about_us_bottom_section}>
                                   <p className={cls.about_us_text_second} dangerouslySetInnerHTML={{__html: `<p>${data[0].history_body.slice(0, 700)}</p>` }} />
                                   <img className={cls.about_us_center_img} src={data[0].history_image.src.split('http').join('https')} alt="about center image" />
                            </div>
                            <p className={cls.about_us_text_second} dangerouslySetInnerHTML={{__html: `<p>${data[0].history_body.slice(718)}</p>` }} />



                            <h4 className={cls.about_us_bus_heading}>{t('bus-heading')}</h4>
                            <Swiper
                                   slidesPerView={2}
                                   spaceBetween={30}
                                   breakpoints={{
                                          440: {
                                                 slidesPerView: 1,
                                                 spaceBetween: 20,
                                          },
                                          640: {
                                            slidesPerView: 2,
                                            spaceBetween: 30,
                                          },
                                          1024: {
                                            slidesPerView: 3,
                                            spaceBetween: 30,
                                          },
                                   }}
                                   navigation={true}
                                   modules={[Navigation]}
                                   className="mySwiper" >
                                          {parentData?.results?.map((element) => 
                                          element?.slug !== paramId ? (
                                                 <SwiperSlide className={cls.trans_detail_swip_item} key={element?.slug}>
                                                        <Link className={cls.trans_detail_swip_link} href={`/modules/detail-public-trans/${element?.slug}`}>
                                                               <p className={cls.trans_detail_swip_title}>{element?.title}</p>
                                                               <p className={cls.element_detail_swip_summary}>{element?.summary}</p>
                                                               <img className={cls.element_detail_swip_image} src={element?.cover?.src.split('http').join('https')} alt="bus images" />
                                                               <button className={cls.transid_btn}>
                                                                      {t('link-title')}
                                                                      <Image style={{marginLeft: "4px"}} src={LineImg} alt="vector im   g" />
                                                               </button>
                                                        </Link>
                                                 </SwiperSlide>
                                          ) : '')}
                            </Swiper>

                            <Statistics/>
                     </div>
              </div>
       )
}
