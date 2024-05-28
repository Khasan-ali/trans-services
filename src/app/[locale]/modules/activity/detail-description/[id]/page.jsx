'use client'

import cls from './styles.module.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useTranslations } from 'next-intl'
import { Link } from '../../../../../../../navigation'
import NextImg from '../../../../../../assets/images/next.svg'
import Image from 'next/image'

export default function DetailDescription({ params }) {

    const paramData = params.id ? params.id : ''

       const t = useTranslations("Bus-Routes")

       const [data, setData] = useState(null)
       useEffect(() => {
              axios.get(`https://tashbus.uz/${document.cookie.slice(12)}/api/directions/${paramData}`).then(response => setData(response.data))
       }, [])
       
       if(!data) return []



       return (
            <div className={cls.site_busroutes}>
                <div className="hero-dinamic-router">
                    <Link className='hero-dinamic-route-link' href={'/'}>{t('route1')}</Link>
                    <Image className='hero-dinamic-route-images' src={NextImg} alt='next images' />
                    <Link className='hero-dinamic-route-link' href={`/modules/activity/direction`}>{t('route2')}</Link>
                    <Image className='hero-dinamic-route-images' src={NextImg} alt='next images' />
                    <Link className='hero-dinamic-route-link' href={`/modules/activity/direction`}>{t('route3')}</Link>
                </div>


                     <table className={cls.busroutes_table}>
                            <thead>
                                   <tr className={cls.busroutes_thead_tr}>
                                          <th>#</th>
                                          <th>{t('direction')}</th>
                                          <th>{t('route-name')}</th>
                                          <th>{t('move-time')}</th>
                                          <th>{t('route-duration')}</th>
                                          <th>{t('route-length')}</th>
                                          <th>{t('markami-bus')}</th>
                                          <th>{t('park')}</th>
                                   </tr>
                            </thead>
                            <tbody>
                                   {data[0]?.table?.map((element, index) => (
                                          <tr className={cls.busroutes_tbody_tr} key={index}>
                                                 <td>{index + 1}</td>
                                                 <td>{element?.number_rout}</td>
                                                 <td>{element?.name_rout}</td>
                                                 <td>{element?.movement_time}</td>
                                                 <td>{element?.route_duration}</td>
                                                 <td>{element?.distance}</td>
                                                 <td>{element?.bus_model}</td>
                                                 <td>{element?.auto_park}</td>
                                          </tr>
                                   ))}
                            </tbody>
                     </table>
              </div>
       )
}