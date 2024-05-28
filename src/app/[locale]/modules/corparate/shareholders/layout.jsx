'use client'

import cls from './styles.module.css'
import { Link, usePathname } from '../../../../../../navigation';
import { useTranslations } from 'next-intl';

export default function Shareholders({ children }) {

       const pathname = usePathname()

       const t = useTranslations("Corparate-Shareholder-Layout")
     
       return (
              <div className={cls.disclosure_layouts}>
                     {children}

                     <div className={cls.disclosure_layout_list}>
                            <Link className={pathname == "/modules/corparate/shareholders/fund" ? cls.actives : cls.disclosure_layout_links} href={'/modules/corparate/shareholders/fund'}>{t('first-link')}</Link>
                            <Link className={pathname == "/modules/corparate/shareholders/affiliates" ? cls.actives : cls.disclosure_layout_links} href={'/modules/corparate/shareholders/affiliates'}>{t('second-link')}</Link>
                            <Link className={pathname == "/modules/corparate/shareholders/share-holders" ? cls.actives : cls.disclosure_layout_links} href={'/modules/corparate/shareholders/share-holders'}>{t('three-link')}</Link>
                            <Link className={pathname == "/modules/corparate/shareholders/resident" ? cls.actives : cls.disclosure_layout_links} href={'/modules/corparate/shareholders/resident'}>{t('four-link')}</Link>
                            <Link className={pathname == "/modules/corparate/shareholders/dividend" ? cls.actives : cls.disclosure_layout_links} href={'/modules/corparate/shareholders/dividend'}>{t('five-link')}</Link>
                     </div>                         
                     

              </div>
       );
}
