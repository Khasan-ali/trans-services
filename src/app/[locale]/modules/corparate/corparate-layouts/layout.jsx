'use client'


import { useTranslations } from 'next-intl';
import cls from './styles.module.css'
import { Link, usePathname } from '../../../../../../navigation';

export default function CorparateLayout({ children }) {

       const pathname = usePathname()

       const t = useTranslations("Corparate-Layout")
     
       return (
              <div className={cls.management_layouts}>
                     {children}

                     <div className={cls.management_layout_list}>
                            <Link className={pathname == "/modules/corparate/corparate-layouts/internal-documents" ? cls.actives : cls.management_layout_links} href={'/modules/corparate/corparate-layouts/internal-documents'}>{t('first-link')}</Link>
                            <Link className={pathname == "/modules/corparate/corparate-layouts/assesment" ? cls.actives : cls.management_layout_links} href={'/modules/corparate/corparate-layouts/assesment'}>{t('second-link')}</Link>
                            <Link className={pathname == "/modules/corparate/corparate-layouts/performance" ? cls.actives : cls.management_layout_links} href={'/modules/corparate/corparate-layouts/performance'}>{t('three-link')}</Link>
                            <Link className={pathname == "/modules/corparate/corparate-layouts/business-plan" ? cls.actives : cls.management_layout_links} href={'/modules/corparate/corparate-layouts/business-plan'}>{t('four-link')}</Link>
                     </div>
                     

              </div>
       );
}
