import Image from 'next/image'
import { Link } from '../../../../../navigation'
import cls from './styles.module.css'
import NextImg from '../../../../assets/images/next.svg'
import { useTranslations } from 'next-intl'

export default function ApplicationStatus() {

    const t = useTranslations("Controls-Application")

    return <div className={cls.application}>

        <div className="hero-dinamic-router">
            <Link className='hero-dinamic-route-link' href={'/'}>{t('route1')}</Link>
            <Image className='hero-dinamic-route-images' src={NextImg} alt='next images' />
            <Link className='hero-dinamic-route-link' href={'/modules/check-application-status'}>{t('route2')}</Link>
        </div>


        <div className={cls.application_btn_section}>
            <Link className={cls.application_btn_link} href={'/modules/contacts/appeal'}>{t('btn-first')}</Link>
            <Link className={cls.application_btn_link} href={'/modules/check-application-status'}>{t('btn-second')}</Link>
        </div>

        <form className={cls.application_form}>
            <div className={cls.application_form_section}>
                <input className={cls.application_form_input} type="text" placeholder={t('number-placeholder')} />
                <input className={cls.application_form_input} type="text" placeholder={t('verification-placeholder')} />
            </div>
            <button className={cls.application_form_btn}>{t('form-btn')}</button>
        </form>
    </div>
}