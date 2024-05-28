'use client'

import { useTranslations } from "next-intl"
import cls from './styles.module.css'
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import axios from "axios"

export default function Vacancies() {

       const t = useTranslations("About-Us-Vacancies")

       const [data, setData] = useState(null)
       useEffect(() => {
              axios.get(`https://tashbus.uz/${document.cookie.slice(12)}/api/vacancy/ijtimoiy_apparat`).then(response => setData(response.data))
       }, [])

       if(!data) return []


       return (
              <div className={cls.vacancies}>
                     <h3 className={cls.vacancies_heading}>{t('title')}</h3>

                     <Tabs variant='unstyled'>
                            <TabList className={cls.vacancies_tablist}>
                                          <Tab className={cls.vacancies_tab}
                                          _selected={{ color: '#0065C1', bg: '#D4EBFF' }}>
                                                 Ijro apparati
                                          </Tab>
                                          <Tab className={cls.vacancies_tab}
                                          _selected={{ color: '#0065C1', bg: '#D4EBFF' }}>
                                                 Mutaxassislar
                                          </Tab>
                                          <Tab className={cls.vacancies_tab}
                                          _selected={{ color: '#0065C1', bg: '#D4EBFF' }}>
                                                 Texnik xodimlar
                                          </Tab>
                                          <Tab className={cls.vacancies_tab}
                                          _selected={{ color: '#0065C1', bg: '#D4EBFF' }}>
                                                 Yordamchi xodimlar
                                          </Tab>
                            </TabList>
                            <TabPanels>
                                   {data?.map((element) => (
                                          <TabPanel key={element?.id}>
                                                 <h5>{element?.name}</h5>
                                          </TabPanel>
                                   ))}
                            </TabPanels>
                     </Tabs>
              </div>
       )
}