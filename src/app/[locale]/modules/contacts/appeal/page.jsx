'use client'

import cls from './styles.module.css'
import NextImg from '../../../../../assets/images/next.svg'
import DocumentImg from '../../../../../assets/images/document.svg'
import { Link } from '../../../../../../navigation'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

export default function Appeal() {

    const t = useTranslations("Contact-Appeal")

    return <div className={cls.appeal}>


        <div className="hero-dinamic-router">
            <Link className='hero-dinamic-route-link' href={'/'}>{t('route1')}</Link>
            <Image className='hero-dinamic-route-images' src={NextImg} alt='next images' />
            <Link className='hero-dinamic-route-link' href={'/modules/contacts/appeal'}>{t('route2')}</Link>
            <Image className='hero-dinamic-route-images' src={NextImg} alt='next images' />
            <Link className='hero-dinamic-route-link' href={'/modules/contacts/appeal'}>{t('route3')}</Link>
        </div>

        <h3 className={cls.appeal_heading}>{t('title')}</h3>

        <div className={cls.appeal_btn_section}>
            <Link className={cls.appeal_btn_link} href={'/modules/contacts/appeal'}>{t('btn-first')}</Link>
            <Link className={cls.appeal_btn_link} href={'/modules/check-application-status'}>{t('btn-second')}</Link>
        </div>

        <form className={cls.appeal_form}>
            <div className={cls.appeal_form_top_sec}>
                <input className={cls.appeal_form_input} type="text" placeholder={t('name-placeholder')} />
                <input className={cls.appeal_form_input} type="text" placeholder={t('phone-placeholder')} />
            </div>

            <div className={cls.appeal_form_top_sec}>
                <input className={cls.appeal_form_input} type="mail" placeholder={t('email-placeholder')} />
                <input className={cls.appeal_form_input} type="text" placeholder={t('address-placeholder')} />
            </div>

            <textarea className={cls.appeal_form_text_input} type="text" placeholder={t('text-placeholder')} />

            <div className={cls.appeal_upload_section}>
                <Image src={DocumentImg} alt='document icon' />
                <p className={cls.appeal_upload_text}>{t('upload-text')}</p>
            </div>

            <button className={cls.appeal_form_btn}>{t('form-btn')}</button>
        </form>

    </div>
}