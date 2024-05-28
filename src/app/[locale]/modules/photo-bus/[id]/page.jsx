'use client'

import { useEffect, useState } from 'react'
import cls from './styles.module.css'
import axios from 'axios'
import { Link } from '../../../../../../navigation'

export default function DetailPhoto({ params }) {

       const [data, setData] = useState(null)
       useEffect(() => {
              axios.get(`https://tashbus.uz/${document.cookie.slice(12)}/api/gallery/photo/${params?.id}`).then(response => setData(response.data))
       }, [])
       
       if(!data) return []


       return <div className={cls.detail_photo}>
              <h3 className={cls.detail_photo_heading}>{data?.name}</h3>

              <ul className={cls.detail_photo_list}>
                     {data?.images?.map((element, index) => (
                            <li className={cls.detail_photo_item} key={index}>
                                   {/* <Link className={cls.detail_photo_link} href={`/modules/`}> */}
                                          <img className={cls.detail_photo_img} src={element?.photo?.src.split('http').join('https')} alt="bus images" />
                                   {/* </Link> */}
                            </li>
                     ))}
              </ul>
       </div>
}