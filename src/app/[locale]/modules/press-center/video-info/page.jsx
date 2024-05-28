'use client'

import Image from 'next/image'
import { Link } from '../../../../../../navigation'
import cls from './styles.module.css'
import NextImg from '../../../../../assets/images/next.svg'
import { useEffect, useState } from 'react'
import axios from 'axios'
import VideoPlay from '../../../../../assets/images/video-play.png'
import { useTranslations } from 'next-intl'

export default function VideoInfo() {

       const t = useTranslations("New-Video-Page")

       const [data, setData] = useState(null)
       useEffect(() => {
              axios.get(`https://tashbus.uz/${document.cookie.slice(12)}/api/gallery/video/`).then(response => setData(response.data))
       }, [])
       
       if(!data) return []


       return <div className={cls.video}>

              <div className="hero-dinamic-router">
                     <Link className='hero-dinamic-route-link' href={'/'}>{t('route1')}</Link>
                     <Image className='hero-dinamic-route-images' src={NextImg} alt='next images' />
                     <Link className='hero-dinamic-route-link' href={'/modules/press-center/video-info'}>{t('route2')}</Link>
                     <Image className='hero-dinamic-route-images' src={NextImg} alt='next images' />
                     <Link className='hero-dinamic-route-link' href={'/modules/press-center/video-info'}>{t('route3')}</Link>
              </div>
              <h2 className={cls.video_heading}>{t('title')}</h2>

              <ul className={cls.video_list}>
                     {data?.results?.map((element) => (
                            <li className={cls.video_item} key={element?.id}>
                                   <div className={cls.video_img_sec}>
                                          <img className={cls.video_img} src={element?.thumbnail?.src.split('http').join('https')} alt="video image" />
                                          <Image className={cls.video_play_img} src={VideoPlay} alt='video image' width={56} height={56}/>
                                   </div>
                                   <h3 className={cls.video_item_title}>{element?.name}</h3>
                            </li>
                     ))}
              </ul>

       </div>
}
