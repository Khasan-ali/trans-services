'use client'

import axios from 'axios'
import cls from './styles.module.css'
import React, { useState } from 'react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

import Card1 from '../../../../assets/images/cards-1.png'
import Card2 from '../../../../assets/images/cards-2.png'
import Card3 from '../../../../assets/images/cards-3.png'
import Card4 from '../../../../assets/images/cards-4.png'

export default function SaleTransportCard() {
       const t = useTranslations("Bus-Card-Sale")
       const [data, setData] = useState(null)



       React.useEffect(() => {
              axios.get(`https://tashbus.uz/${document.cookie.slice(12)}/api/cards`).then(response => setData(response.data))
       }, [])

       if(!data) return []


       return <>
       <div className={'container'}>
              <h2>{t('title')}</h2>

              <ul className={cls.list}>
                     {data?.map((element, index) => (
                            <li className={cls.card_item} key={index}>
                                   <Image
                                   src={index === 0 ? Card1 : index === 1 ? Card2 : index === 2 ? Card3 : Card4}
                                   alt="card images"
                                   width={'100%'}
                                   height={335}
                                   priority
                                    />
                                   
                                   <div className={cls.card_section}>
                                          <h3 className={cls.card_section_title}>
                                                 {element?.name}
                                          </h3>
                                          <ul className={cls.card_inner_list}>
                                                 {element?.types?.map((row, indexRow) => (
                                                        <li className={cls.card_inner_item} key={indexRow}>
                                                               <div className={cls.card_inner_heading_section}>
                                                                      <p style={index === 0 ? {background: "#0065C1"} :
                                                                       index === 1 ? {background: "#FDEC1C"} :
                                                                       index === 2 ? {background: "#E0292D"} :
                                                                       {background: "#17A456"}} 
                                                                       className={cls.cards_title_heading}>
                                                                             {row?.name.length - 0 > 10 ? 'AVM' : "AV"}
                                                                      </p>
                                                                      <h5 className={cls.card_inner_list_title}>
                                                                             {row?.name}
                                                                      </h5>
                                                               </div>
                                                               <ul className={cls.cards_price_list}>
                                                                      {row?.plan?.map((childRow, childIndex) => (
                                                                             <li className={cls.cards_price_item} key={childIndex}>
                                                                                    <span className={cls.card_price_span}>{childRow?.days} {t('list-days')}</span>
                                                                                    <span className={cls.card_price_span}>{childRow?.price} {t('list-soum')}</span>
                                                                             </li>
                                                                      ))}
                                                               </ul>
                                                        </li>
                                                 ))}
                                          </ul>
                                   </div>
                            </li>
                     ))}
              </ul>
       </div>
       </>
}