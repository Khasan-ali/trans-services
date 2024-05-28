'use client'

import cls from './styles.module.css'
import { Link, usePathname } from '../../../../../../navigation';
import { useTranslations } from 'next-intl';

export default function Projects({ children }) {

       const pathname = usePathname()

       const t = useTranslations("Corparate-Projects-Layout")
     
       return (
              <div className={cls.disclosure_layouts}>
                     {children}

                     <div className={cls.disclosure_layout_list}>
                            <Link className={pathname == "/modules/corparate/projects/investment" ? cls.actives : cls.disclosure_layout_links} href={'/modules/corparate/projects/investment'}>{t('first-link')}</Link>
                            <Link className={pathname == "/modules/corparate/projects/tenders" ? cls.actives : cls.disclosure_layout_links} href={'/modules/corparate/projects/tenders'}>{t('second-link')}</Link>
                            <Link className={pathname == "/modules/corparate/projects/purchaches" ? cls.actives : cls.disclosure_layout_links} href={'/modules/corparate/projects/purchaches'}>{t('three-link')}</Link>
                            <Link className={pathname == "/modules/corparate/projects/partnership" ? cls.actives : cls.disclosure_layout_links} href={'/modules/corparate/projects/partnership'}>{t('four-link')}</Link>
                            <Link className={pathname == "/modules/corparate/projects/events" ? cls.actives : cls.disclosure_layout_links} href={'/modules/corparate/projects/events'}>{t('five-link')}</Link>
                     </div>                         
                     

              </div>
       );
}
