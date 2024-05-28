'use client'

import { useEffect, useState } from 'react'
import cls from './styles.module.css'
import axios from 'axios'

export default function FreeFare() {

       const [data, setData] = useState(null)
       useEffect(() => {
              axios.get(`https://tashbus.uz/${document.cookie.slice(12)}/api/post/detail/shahar-yolovchilar-transportidan-bepul-foydalanish`).then(response => setData(response.data))
       }, [])
       
       if(!data) return []


       return (
              <div className={cls.freefare_site}>
                     <h3 className={cls.freefare_heading}>Bepul foydalanish huquqi</h3>

                     <p className={cls.freefare_text} dangerouslySetInnerHTML={{__html: data.body }}></p>
              </div>
       )
}