import { useTranslations } from 'next-intl'
import cls from './styles.module.css'

export default function WebsiteUser() {

       const t = useTranslations("About-Us-Website")

       return (
              <div>
                     <div className='container'>
                            <h2 className="page_heading">
                                   {t('title')}
                            </h2>
                     </div>
              </div>
       )
}
