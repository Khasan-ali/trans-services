import { useTranslations } from 'next-intl'
import cls from './styles.module.css'

export default function SingleTransportCard() {

       const t = useTranslations('Single-Transport-Cards')
       return (
              <div className={cls.single_transport_card}>
                     <h3 className={cls.stc_heading}>{t('title')}</h3>

                     <form className={cls.stc_form}>
                            <label className={cls.stc_label} htmlFor="location-card">Tuman</label>
                            <select className={cls.stc_select} id="location-card"></select>
                     </form>
              </div>
       )
}