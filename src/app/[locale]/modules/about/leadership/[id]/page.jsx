'use client'

import { useEffect, useState } from 'react'
import cls from './styles.module.css'
import axios from 'axios'
import { useTranslations } from 'next-intl'
import NextImg from '../../../../../../assets/images/next.svg'
import PhoneImg from '../../../../../../assets/images/phone.svg'
import EmailImg from '../../../../../../assets/images/mail.svg'
import ClockImg from '../../../../../../assets/images/clock.svg'
import { Link } from '../../../../../../../navigation'
import Image from 'next/image'
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'

export default function DetailLeadership({ params }) {

       const t = useTranslations("About-Regulatory-Leadership")
       const paramsData = params.id ? params.id : ''
       const [state, setState] = useState(1)

       const [data, setData] = useState(null)
       useEffect(() => {
              axios.get(`https://tashbus.uz/${document.cookie.slice(12)}/api/leadership/${paramsData}/detail`).then(response => setData(response.data))
       }, [])

       if(!data) return []


       return <div className={cls.detail}>

              <div className="hero-dinamic-router">
                  <Link className='hero-dinamic-route-link' href={'/'}>{t('route1')}</Link>
                  <Image className='hero-dinamic-route-images' src={NextImg} alt='next images' />
                  <Link className='hero-dinamic-route-link' href={'/modules/about/leadership'}>{t('route2')}</Link>
                  <Image className='hero-dinamic-route-images' src={NextImg} alt='next images' />
                  <Link className='hero-dinamic-route-link' href={'/modules/about/leadership'}>{t('route3')}</Link>
              </div>

              <h3 className={cls.detail_heading}>{t('title')}</h3>

              <div className={cls.leadership_item} key={data?.id}>
                     <img className={cls.leadership_item_img} src={data?.thumbnail?.src.split('http').join('https')} alt="person img" />
                     <div className={cls.leadership_item_section}>
                            <h4 className={cls.leadership_item_heading}>{data?.full_name}</h4>
                            <p className={cls.leadership_item_position}>{data?.position}</p>
                            <ul className={cls.leadership_item_list}>
                                   <li className={cls.leadership_item_item}>
                                          <Image src={PhoneImg} alt='phone icon'/>
                                          <div className={cls.leadership_item_item_section}>
                                                 <p className={cls.leadership_item_item_position}>{t('position1')}</p>
                                                 <p className={cls.leadership_item_item_text}>{data?.phone}</p>
                                          </div>
                                   </li>
                                   <li className={cls.leadership_item_item}>
                                          <Image src={PhoneImg} alt='phone icon'/>
                                          <div className={cls.leadership_item_item_section}>
                                                 <p className={cls.leadership_item_item_position}>{t('position2')}</p>
                                                 <p className={cls.leadership_item_item_text}>{data?.fax}</p>
                                          </div>
                                   </li>
                                   <li className={cls.leadership_item_item}>
                                          <Image src={EmailImg} alt='phone icon'/>
                                          <div className={cls.leadership_item_item_section}>
                                                 <p className={cls.leadership_item_item_position}>{t('position3')}</p>
                                                 <p className={cls.leadership_item_item_text}>{data?.email}</p>
                                          </div>
                                   </li>
                                   <li className={cls.leadership_item_item}>
                                          <Image src={ClockImg} alt='phone icon'/>
                                          <div className={cls.leadership_item_item_section}>
                                                 <p className={cls.leadership_item_item_position}>{t('position4')}</p>
                                                 <p className={cls.leadership_item_item_text}>{data?.reception_days}</p>
                                          </div>
                                   </li>
                            </ul>
                     </div>
              </div>

              <div className={cls.detail_tabs}>
              <Tabs variant='unstyled'>
                     <TabList>
                       <Tab
                       className={cls.detail_tab}>{t('btn1')}</Tab>
                       <Tab
                       className={cls.detail_tab}>{t('btn2')}</Tab>
                     </TabList>
                     <TabPanels>
                       <TabPanel>
                            <p dangerouslySetInnerHTML={{__html: `<p>${data?.biography}</p>` }} />
                       </TabPanel>
                       <TabPanel>
                            <p dangerouslySetInnerHTML={{__html: `<p>${data?.obligation}</p>` }} />
                       </TabPanel>
                     </TabPanels>
              </Tabs>
              </div>

       </div>
}