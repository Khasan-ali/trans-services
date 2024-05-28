'use client'

import cls from './styles.module.css'
import { Link, usePathname } from '../../../../../../navigation';
import { useTranslations } from 'next-intl';

export default function DisclosureLayout({ children }) {

       const pathname = usePathname()

       const t = useTranslations("Corparate-Disclosure-Layout")
     
       return (
              <div className={cls.disclosure_layouts}>
                     {children}

                     <div className={cls.disclosure_layout_list}>
                            <Link className={pathname == "/modules/corparate/disclosure/securities" ? cls.actives : cls.disclosure_layout_links} href={'/modules/corparate/disclosure/securities'}>{t('first-link')}</Link>
                            <Link className={pathname == "/modules/corparate/disclosure/facts" ? cls.actives : cls.disclosure_layout_links} href={'/modules/corparate/disclosure/facts'}>{t('second-link')}</Link>
                            <Link className={pathname == "/modules/corparate/disclosure/notional-accounting" ? cls.actives : cls.disclosure_layout_links} href={'/modules/corparate/disclosure/notional-accounting'}>{t('three-link')}</Link>
                            <Link className={pathname == "/modules/corparate/disclosure/financial-reporting" ? cls.actives : cls.disclosure_layout_links} href={'/modules/corparate/disclosure/financial-reporting'}>{t('four-link')}</Link>
                            <Link className={pathname == "/modules/corparate/disclosure/audit-summary" ? cls.actives : cls.disclosure_layout_links} href={'/modules/corparate/disclosure/audit-summary'}>{t('five-link')}</Link>
                            <Link className={pathname == "/modules/corparate/disclosure/issuer-reports" ? cls.actives : cls.disclosure_layout_links} href={'/modules/corparate/disclosure/issuer-reports'}>{t('six-link')}</Link>   
                     </div>                         
                     

              </div>
       );
}
