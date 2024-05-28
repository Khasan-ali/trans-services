'use client'


import cls from './styles.module.css'
import { Link } from '../../../../../../../navigation'
import NextImg from '../../../../../../assets/images/next.svg'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

export default function Resident() {

    const t = useTranslations("Corparate-shareholders-Resident")


    return <div className={cls.fund}>

        <div className="hero-dinamic-router">
            <Link className='hero-dinamic-route-link' href={'/'}>{t('route1')}</Link>
            <Image className='hero-dinamic-route-images' src={NextImg} alt='next images' />
            <Link className='hero-dinamic-route-link' href={'/modules/corparate/shareholders/resident'}>{t('route2')}</Link>
            <Image className='hero-dinamic-route-images' src={NextImg} alt='next images' />
            <Link className='hero-dinamic-route-link' href={'/modules/corparate/shareholders/resident'}>{t('route3')}</Link>
            <Image className='hero-dinamic-route-images' src={NextImg} alt='next images' />
            <Link className='hero-dinamic-route-link' href={'/modules/corparate/shareholders/resident'}>{t('route4')}</Link>
        </div>

        <h3 className={cls.fund_heading}>{t('title')}</h3>
    </div>
}