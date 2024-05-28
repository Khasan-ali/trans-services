'use client'

import { useTranslations } from 'next-intl'
import cls from './styles.module.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Mers1 from '../../../../../assets/images/mers1.jpg'
import Mers2 from '../../../../../assets/images/mers2.jpg'
import Li1 from '../../../../../assets/images/le1.jpg'
import Li2 from '../../../../../assets/images/le2.jpg'
import Bens1 from '../../../../../assets/images/bens1.jpg'
import Bens2 from '../../../../../assets/images/bens2.jpg'
import Man1 from '../../../../../assets/images/man1.jpg'

export default function SaleTransportCard() {

       const t = useTranslations("Bus-Buying-Bus")

       const [data, setData] = useState(null)
       const [state, setState] = useState(1)
       const [state1, setState1] = useState(1)
       const [state2, setState2] = useState(1)

       useEffect(() => {
              axios.get(`https://tashbus.uz/${document.cookie.slice(12)}/api/bus-orders/`).then(response => setData(response.data))
       }, [])

       if(!data) return []



       const rowArr = [
              {
                     id: 1,
                     images: [Mers1, Mers2],
              },
              {
                     id: 2,
                     images: [Li1, Li2]
              },
              {
                     id: 3,
                     images: [Bens1, Bens2]
              },
              {
                     id: 4,
                     images: [Man1]
              }
       ]

       return (
              <div className={cls.busbuy_section}>
                     <h2 className={cls.busbuy_heading}>{t('title')}</h2>


                     <ul className={cls.busbuy_list}>
                                   <li className={cls.buybus_item} key={data.results[0].id}>
                                          <h3 className={cls.buybus_bus_name}>{data.results[0].model}</h3>
                                          <div className={cls.buybus_item_section}>
                                                 <div className={cls.buybus_btn_img_section}>
                                                        <button
                                                        className={cls.buybus_btn_img}
                                                        onClick={() => setState(0)}>
                                                               <Image
                                                               className={cls.buybus_image}
                                                               src={rowArr[0].images[0]}
                                                               alt='btn img' /> 
                                                        </button>
                                                        <button
                                                        className={cls.buybus_btn_img}
                                                        onClick={() => setState(1)}>
                                                               <Image
                                                               className={cls.buybus_image}
                                                               src={rowArr[0].images[1]}
                                                               alt='btn img' />
                                                        </button>
                                                 </div>
                                                 <Image
                                                 className={cls.buybus_center_img}
                                                 src={rowArr[0].images[state]} alt='buybus image' />
                                                 <div className={cls.buybus_info_section}>
                                                        <div className={cls.buybus_info_first}>
                                                               <p className={cls.buybus_info_people}>{data.results[0].people}</p>
                                                               <p className={cls.buybus_info_people_text}>{t('numbers-title')}</p>
                                                        </div>
                                                        <div className={cls.buybus_info_second}>
                                                               <p className={cls.buybus_info_price}>{data.results[0].price}</p>
                                                               <p className={cls.buybus_info_price_text}>{t('price-title')}</p>
                                                        </div>
                                                 </div>
                                          </div>
                                   </li>

                                   <li className={cls.buybus_item} key={data.results[1].id}>
                                          <h3 className={cls.buybus_bus_name}>{data.results[1].model}</h3>
                                          <div className={cls.buybus_item_section}>
                                                 <div className={cls.buybus_btn_img_section}>
                                                        <button
                                                        className={cls.buybus_btn_img}
                                                        onClick={() => setState1(0)}>
                                                               <Image
                                                               src={rowArr[1].images[0]}
                                                               alt='btn img'
                                                               className={cls.buybus_image} />
                                                        </button>
                                                        <button
                                                        className={cls.buybus_btn_img}
                                                        onClick={() => setState1(1)}>
                                                               <Image
                                                               src={rowArr[1].images[1]}
                                                               alt='btn img'
                                                               className={cls.buybus_image} />
                                                        </button>
                                                 </div>
                                                 <Image src={rowArr[1].images[state1]} alt='buybus image'
                                                 className={cls.buybus_center_img} />
                                                 <div className={cls.buybus_info_section}>
                                                        <div className={cls.buybus_info_first}>
                                                               <p className={cls.buybus_info_people}>{data.results[1].people}</p>
                                                               <p className={cls.buybus_info_people_text}>{t('numbers-title')}</p>
                                                        </div>
                                                        <div className={cls.buybus_info_second}>
                                                               <p className={cls.buybus_info_price}>{data.results[1].price}</p>
                                                               <p className={cls.buybus_info_price_text}>{t('price-title')}</p>
                                                        </div>
                                                 </div>
                                          </div>
                                   </li>

                                   <li className={cls.buybus_item} key={data.results[3].id}>
                                          <h3 className={cls.buybus_bus_name}>{data.results[3].model}</h3>
                                          <div className={cls.buybus_item_section}>
                                                 <div className={cls.buybus_btn_img_section}>
                                                        <button
                                                        className={cls.buybus_btn_img}
                                                        onClick={() => setState(0)}>
                                                               <Image
                                                               src={rowArr[3].images[0]}
                                                               alt='btn img'
                                                               className={cls.buybus_image} />
                                                        </button>
                                                 </div>
                                                 <Image src={rowArr[3].images[0]} alt='buybus image'
                                                 className={cls.buybus_center_img} />
                                                 <div className={cls.buybus_info_section}>
                                                        <div className={cls.buybus_info_first}>
                                                               <p className={cls.buybus_info_people}>{data.results[3].people}</p>
                                                               <p className={cls.buybus_info_people_text}>{t('numbers-title')}</p>
                                                        </div>
                                                        <div className={cls.buybus_info_second}>
                                                               <p className={cls.buybus_info_price}>{data.results[3].price}</p>
                                                               <p className={cls.buybus_info_price_text}>{t('price-title')}</p>
                                                        </div>
                                                 </div>
                                          </div>
                                   </li>

                                   <li className={cls.buybus_item} key={data.results[2].id}>
                                          <h3 className={cls.buybus_bus_name}>{data.results[2].model}</h3>
                                          <div className={cls.buybus_item_section}>
                                                 <div className={cls.buybus_btn_img_section}>
                                                        <button
                                                        className={cls.buybus_btn_img}
                                                        onClick={() => setState2(0)}>
                                                               <Image
                                                               src={rowArr[2].images[0]}
                                                               alt='btn img'
                                                               className={cls.buybus_image} />
                                                        </button>
                                                        <button
                                                        className={cls.buybus_btn_img}
                                                        onClick={() => setState2(1)}>
                                                               <Image
                                                               src={rowArr[2].images[1]}
                                                               alt='btn img'
                                                               className={cls.buybus_image} />
                                                        </button>
                                                 </div>
                                                 <Image src={rowArr[2].images[state2]} alt='buybus image'
                                                 className={cls.buybus_center_img} />
                                                 <div className={cls.buybus_info_section}>
                                                        <div className={cls.buybus_info_first}>
                                                               <p className={cls.buybus_info_people}>{data.results[2].people}</p>
                                                               <p className={cls.buybus_info_people_text}>{t('numbers-title')}</p>
                                                        </div>
                                                        <div className={cls.buybus_info_second}>
                                                               <p className={cls.buybus_info_price}>{data.results[2].price}</p>
                                                               <p className={cls.buybus_info_price_text}>{t('price-title')}</p>
                                                        </div>
                                                 </div>
                                          </div>
                                   </li>

                                   
                     </ul>
              </div>
       )
}
