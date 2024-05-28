'use client'

import { useState } from 'react'
import cls from './styles.module.css'
import axios from 'axios'
import { useTranslations } from 'next-intl'

export default function Information() {

       const t = useTranslations("Information-Form")

       const [name, setName] = useState('')
       const [phone, setPhone] = useState('')
       const [text, setText] = useState('')

       const handleSubmit = (e) => {
              e.preventDefault()

              axios.post(`https://tashbus.uz/${document.cookie.slice(12)}/api/information/contact/create`, 
              {
                     full_name: name,
                     phone: phone,
                     message: text,
              },
              {
                     headers: {
                       "Content-Type": "application/json",
                     },
              }
              )

              
       }

       return <div>
              <form className={cls.press_form} onSubmit={handleSubmit}>
                     <h3 className={cls.press_form_heading}>{t('form-title')}</h3>
                     <div className={cls.press_form_input_sec}>
                            <input className={cls.press_form_input} onChange={(e) => setName(e.target.value)} type="text" placeholder={t('input-first')} required />
                            <input className={cls.press_form_input} onChange={(e) => setPhone(e.target.value)} type="text" placeholder={t('input-second')} required />
                     </div>
                     <input className={cls.press_form_text_input} onChange={(e) => setText(e.target.value)} required type="text" placeholder={t('input-three')} />
                     <button className={cls.press_form_btn}>{t('form-btn')}</button>
              </form>
       </div>
}