'use client'


import { useTranslations } from 'next-intl';
import cls from './styles.module.css'
import { Link, usePathname } from '../../../../../../navigation';

export default function NewsLayout({ children }) {

       const pathname = usePathname()

       const t = useTranslations("Corparate-Management-Layout")
     
       return (
              <div className={cls.management_layouts}>
                     {children}

                     <div className={cls.management_layout_list}>
                            <Link className={pathname == "/modules/corparate/management/supervisory" ? cls.actives : cls.management_layout_links} href={'/modules/corparate/management/supervisory'}>{t('first-link')}</Link>
                            <Link className={pathname == "/modules/corparate/management/executive" ? cls.actives : cls.management_layout_links} href={'/modules/corparate/management/executive'}>{t('second-link')}</Link>
                            <Link className={pathname == "/modules/corparate/management/inspection" ? cls.actives : cls.management_layout_links} href={'/modules/corparate/management/inspection'}>{t('three-link')}</Link>
                            <Link className={pathname == "/modules/corparate/management/audit-service" ? cls.actives : cls.management_layout_links} href={'/modules/corparate/management/audit-service'}>{t('four-link')}</Link>
                            <Link className={pathname == "/modules/corparate/management/board-members" ? cls.actives : cls.management_layout_links} href={'/modules/corparate/management/board-members'}>{t('five-link')}</Link>
                     </div>
                     

              </div>
       );
}
