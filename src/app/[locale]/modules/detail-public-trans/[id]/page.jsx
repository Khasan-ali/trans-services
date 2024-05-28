'use client'

import cls from './styles.module.css'
import axios from "axios"
import { useTranslations } from 'next-intl'
import { useEffect, useState } from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Link } from '../../../../../../navigation'
import LineImg from '../../../../../assets/images/line.png'
import Image from 'next/image'


export default function DetailTrans({ params }) {

       const t = useTranslations("Trans-Detail")

       const parentBus = localStorage.getItem('parent-bus')
       localStorage.setItem("data-param-id", params.id)


       const [parentData, setParentData] = useState([])
       const [data, setData] = useState(null)
       useEffect(() => {
              axios.get(`https://tashbus.uz/${document.cookie.slice(12)}/api/busses/${params.id}/detail`).then(response => setData(response.data))
              axios.get(`https://tashbus.uz/${document.cookie.slice(12)}/api/busses/${parentBus}/list?page_size=9`).then(response => setParentData(response.data))
       }, [])


       if(!data) return []
       if(!parentData) return []


       return <div className={cls.trans_detail_site}>
              <h3 className={cls.trans_detail_heading}>{data?.title}</h3>
              <div className={cls.trans_detail_section}>
                     <img className={cls.trans_detail_img} src={data?.cover?.src.split('http').join('https')} alt="detail image trans" />
                     <ul className={cls.trans_detail_list}>
                            <li 
                            className={cls.trans_detail_item}
                            style={{background: "#FFF1E0", color: "#FFA63D"}}>
                                   <span className={cls.trans_detail_item_heading}>{data?.invented}</span>
                                   <p className={cls.trans_detail_item_text}>{t('open-year')}</p>
                            </li>
                            <li
                            className={cls.trans_detail_item}
                            style={{background: "#E3FFE5", color: "#2FCF37"}}>
                                   <span className={cls.trans_detail_item_heading}>{data?.people}</span>
                                   <p className={cls.trans_detail_item_text}>{t('people-size')}</p>
                            </li>
                            <li
                            className={cls.trans_detail_item}
                            style={{background: "#F3EDFF", color: "#A97DFF"}}>
                                   <span className={cls.trans_detail_item_heading}>{data?.chairs}</span>
                                   <p className={cls.trans_detail_item_text}>{t('chairs')}</p>
                            </li>
                            <li
                            className={cls.trans_detail_item}
                            style={{background: "#FFE3E3", color: "#FA5C5C"}}>
                                   <span className={cls.trans_detail_item_heading}>{data?.direction}</span>
                                   <p className={cls.trans_detail_item_text}>{t('description')}</p>
                            </li>
                     </ul>
              </div>
              <p className={cls.trans_detail_desk} dangerouslySetInnerHTML={{__html: `<p>${data?.body}</p>` }} />


              <div className={cls.trans_detail_other_section}>
                     <h3 className={cls.trans_detail_other_title}>Boshqa modellar</h3>
                     <div>
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
                                          element?.slug !== params?.id ? (
                                                 <SwiperSlide className={cls.trans_detail_swip_item} key={element?.slug}>
                                                        <Link className={cls.trans_detail_swip_link} href={`/modules/detail-public-trans/${element?.slug}`}>
                                                               <p className={cls.trans_detail_swip_title}>{element?.title}</p>
                                                               <p className={cls.element_detail_swip_summary}>{element?.summary}</p>
                                                               <img className={cls.element_detail_swip_image} src={element?.cover?.src.split('http').join('https')} alt="bus images" />
                                                               <button className={cls.transid_btn}>
                                                                      Batafsil
                                                                      <Image style={{marginLeft: "4px"}} src={LineImg} alt="vector im   g" />
                                                               </button>
                                                        </Link>
                                                 </SwiperSlide>
                                          ) : '')}
                            </Swiper>
                     </div>
              </div>

       </div>
}