'use client'

import { useEffect, useState } from 'react'
import cls from './styles.module.css'
import axios from 'axios'
import DateImg from '../../../../../../assets/images/bx.png'
import EyeImg from '../../../../../../assets/images/eye.png'
import Facebook from '../../../../../../assets/images/facebook.svg'
import Insta from '../../../../../../assets/images/insta.svg'
import Telegram from '../../../../../../assets/images/telegram.svg'
import Image from 'next/image'
import { format } from 'date-fns'


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';


export default function DetailId({ params }) {

       const [data, setData] = useState(null)
       useEffect(() => {
              axios.get(`https://tashbus.uz/${document.cookie.slice(12)}/api/post/detail/${params?.id}`).then(response => setData(response.data))
       }, [])
       
       if(!data) return []
       // console.log(data);

       return <div className={cls.site_news_detail}>
              <h3 className={cls.news_detail_heading}>{data?.title}</h3>
              <div className={cls.news_detail_section}>
                     <div className={cls.news_detail_left_sec}>
                            <div className={cls.news_detail_date_sec}>
                                   <Image src={DateImg} alt='date icons' />
                                   <span className={cls.news_detail_date}>
                                                 {format(new Date(`${data?.pub_date}`), 'dd/MM/yyyy').replaceAll("/", ".")}
                                   </span>
                            </div>
                            <div className={cls.news_detail_eye_sec}>
                                   <Image src={EyeImg} alt='eye images' />
                                   <p className={cls.news_detail_eye_text}>{data?.view_count}</p>
                            </div>
                     </div>

                     <div className={cls.news_detail_right_sec}>
                            <a href='https://www.facebook.com/login.php?skip_api_login=1&api_key=966242223397117&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fsharer.php%3Fsrc%3Dsp%26u%3Dhttps%253A%252F%252Ftashbus.uz%252Fnews%252F&cancel_url=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Fclose_window%2F%3Fapp_id%3D966242223397117%26connect%3D0%23_%3D_&display=popup&locale=ru_RU#/yangiliklar/prezident-shavkat-mirziyoyev-temir-yol-sohasidagi-'>
                                   <Image src={Facebook} alt='facebook images' />
                            </a>
                            <a href="#">
                                   <Image src={Insta} alt='insta images' />
                            </a>
                            <a href="https://t.me/share/url?url=https://tashbus.uz/news/#/yangiliklar/prezident-shavkat-mirziyoyev-temir-yol-sohasidagi-">
                                   <Image src={Telegram} alt='telegram images' />
                            </a>
                     </div>
              </div>

              <div>
                     <Swiper style={{marginTop: "20px"}} navigation={true} modules={[Navigation]} className="mySwiper">
                            {data?.images?.map((row, index) => (
                                   <SwiperSlide className={cls.news_detail_swiper} key={index}>
                                          <img className={cls.news_detail_swiper_img} src={row?.image?.src.split('http').join('https')} alt="images" />
                                   </SwiperSlide>
                            ))}
                     </Swiper>
              </div>

              <p style={{textDecoration: "none"}} dangerouslySetInnerHTML={{__html: `<p>${data?.body}</p>` }} />

       </div>
}