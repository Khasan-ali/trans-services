'use client'

import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box } from "@chakra-ui/react"
import axios from "axios"
import { useTranslations } from "next-intl"
import { useEffect, useState } from "react"
import cls from './styles.module.css'
import { Link } from "../../../../../../navigation"
import NextImg from '../../../../../assets/images/next.svg'
import Image from "next/image"
import { AddIcon } from "@chakra-ui/icons"

export default function Faq() {

       const t = useTranslations("About-Us-FAQ")

       
       const [data, setData] = useState(null)
       useEffect(() => {
              axios.get(`https://tashbus.uz/${document.cookie.slice(12)}/api/questions/questions-and-answers`).then(response => setData(response.data))
       }, [])

       if(!data) return []

       return (
              <div className={cls.faq}>

                     <div className="hero-dinamic-router">
                            <Link className='hero-dinamic-route-link' href={'/'}>{t('route1')}</Link>
                            <Image className='hero-dinamic-route-images' src={NextImg} alt='next images' />
                            <Link className='hero-dinamic-route-link' href={'/modules/about/faq'}>{t('route2')}</Link>
                            <Image className='hero-dinamic-route-images' src={NextImg} alt='next images' />
                            <Link className='hero-dinamic-route-link' href={'/modules/about/faq'}>{t('route3')}</Link>
                     </div>
                     <h3 className={cls.faq_heading}></h3>

                     <Accordion allowToggle className={cls.faq_accordion}>
                            {data?.map((element) => (
                                   <AccordionItem key={element?.id}>
                                          <h2>
                                                 <AccordionButton className={cls.faq_btn}>
                                                        <Box as='span' flex='1' textAlign='left'>
                                                               {element?.question}
                                                        </Box>
                                                        <AddIcon />
                                                 </AccordionButton>
                                          </h2>
                                          <AccordionPanel className={cls.faq_panel} pb={4}>
                                                 {element?.answer}
                                          </AccordionPanel>
                                   </AccordionItem>
                            ))}

                     </Accordion>

              </div>
       )
}