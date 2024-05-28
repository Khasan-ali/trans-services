'use client'

import { useEffect, useState } from 'react'
import cls from './styles.module.css'
import axios from 'axios'

export default function MediaDetail({ params }) {

       const [data, setData] = useState(null)
       useEffect(() => {
              axios.get(`https://tashbus.uz/${document.cookie.slice(12)}/api/post/detail/${params?.id}`).then(response => setData(response.data))
       }, [])
       
       if(!data) return []

       return <div className={cls.media_detail_site}>
              <h3 className={cls.media_detail_heading}>{data?.title}</h3>
              <img className={cls.media_detail_images} src={data?.images[0]?.image?.src.split('http').join('https')} alt="bus images" />
              <p className={cls.media_detail_desc} dangerouslySetInnerHTML={{__html: `<p style={{margin: "none"}}>${data?.body}</p>` }} />
       </div>
}