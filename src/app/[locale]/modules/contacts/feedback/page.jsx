'use client'

import cls from './styles.module.css'
import NextImg from '../../../../../assets/images/next.svg'
import { Link } from '../../../../../../navigation'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import Information from '../../../../../components/information/page'

export default function Feedback() {

       const t = useTranslations("Contacts-Feedback")

       return <div className={cls.feedback}>

              <div className="hero-dinamic-router">
                     <Link className='hero-dinamic-route-link' href={'/'}>{t('route1')}</Link>
                     <Image className='hero-dinamic-route-images' src={NextImg} alt='next images' />
                     <Link className='hero-dinamic-route-link' href={'/modules/contacts/feedback'}>{t('route2')}</Link>
                     <Image className='hero-dinamic-route-images' src={NextImg} alt='next images' />
                     <Link className='hero-dinamic-route-link' href={'/modules/contacts/feedback'}>{t('route3')}</Link>
              </div>

              <div className={cls.feedback_section}>
                     <Information/>
              </div>
       </div>
}