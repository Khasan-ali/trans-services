'use client'

import cls from './styles.module.css'
import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "../../../../../../navigation"
import LineImg from '../../../../../assets/images/line.png'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

export default function PublicTransId({ params }) {

       // console.log(params);
       const t = useTranslations("Public-Trans_Id")

       const paramData = params ? params : 'elektrobus'
       

       localStorage.setItem('parent-bus', params.id)

       const [data, setData] = useState(null)
       useEffect(() => {
              axios.get(`https://tashbus.uz/${document.cookie.slice(12)}/api/busses/${paramData.id}/list?p=1&page_size=10`).then(response => setData(response.data))
       }, [])
       
       if(!data) return []
       // localStorage.setItem("trans-data", JSON.stringify(data?.results))


       return <div className={cls.transid_site}>
              <h3 className={cls.transid_heading}>{t('title')}</h3>

              <ul className={cls.transid_list}>
                     {data?.results?.map((element, index) => (
                            <li className={cls.transid_item} key={index}>
                                   <span className={cls.transid_year}>{element?.used}</span>
                                   <Link className={cls.transid_link} href={`/modules/detail-public-trans/${element?.slug}`}>
                                          <h4 className={cls.transid_item_title}>{element?.title}</h4>
                                          <p className={cls.transid_sumary}>{element?.summary}</p>
                                          <div className={cls.transid_img_sec}>
                                                 <img className={cls.transid_img} src={element?.cover?.src?.split('http').join('https')} width={300}  height={300} alt="bus images" />
                                          </div>
                                          <button className={cls.transid_btn}>
                                                 {t('btn-title')}
                                                 <Image style={{marginLeft: "4px"}} src={LineImg} alt="vector im   g" />
                                          </button>
                                   </Link>
                            </li>
                     ))}
              </ul>
       </div>
}
