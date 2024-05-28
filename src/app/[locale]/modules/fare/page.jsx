'use client'

import { useEffect, useState } from 'react'
import cls from './styles.module.css'
import axios from 'axios'
import { useTranslations } from 'next-intl'

export default function Fare() {

       const t = useTranslations("Datas-Fare")
       const [data, setData] = useState(null)
       useEffect(() => {
              axios.get(`https://tashbus.uz/${document.cookie.slice(12)}/api/prices/`).then(response => setData(response.data))
       }, [])

       const arrayColor = [
              {
                     back: "#FFF1E0",
                     color: "#FFA63D",
              },
              {
                     back: "#E3FFE5",
                     color: "#2FCF37",
              },
              {
                     back: "#F3EDFF",
                     color: "#A97DFF",
              },
       ]
       
       if(!data) return []

       return (
              <div className={cls.site_fare}>
                     <h3 className={cls.fare_heading}>{t('title')}</h3>

                     <ul className={cls.fare_list}>
                            {data?.map((element, index) => (
                                   <li className={cls.fare_item} key={index}
                                   style={{background: arrayColor[index].back, color: arrayColor[index].color}}>
                                          <h4 className={cls.fare_price}>{element?.price}</h4>
                                          <h5 className={cls.fare_location}>{element?.title}</h5>
                                   </li>
                            ))}
                     </ul>
              </div>
       )
}