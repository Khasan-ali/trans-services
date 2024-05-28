'use client'


import { useTranslations } from 'next-intl';
import cls from './styles.module.css'
import { Link, usePathname } from '../../../../../navigation';

export default function NewsLayout({ children }) {

       const pathname = usePathname()

       const t = useTranslations("Contacts-Layout")
     
       return (
              <div className={cls.contacts_layouts}>
                     {children}

                     <div className={cls.contacts_layout_list}>
                            <Link className={pathname == "/modules/contacts/office" ? cls.actives : cls.contacts_layout_links} href={'/modules/contacts/office'}>{t('first-link')}</Link>
                            <Link className={pathname == "/modules/contacts/cooperation" ? cls.actives : cls.contacts_layout_links} href={'/modules/contacts/cooperation'}>{t('second-link')}</Link>
                            <Link className={pathname == "/modules/contacts/hotline" ? cls.actives : cls.contacts_layout_links} href={'/modules/contacts/hotline'}>{t('three-link')}</Link>
                            <Link className={pathname == "/modules/contacts/feedback" ? cls.actives : cls.contacts_layout_links} href={'/modules/contacts/feedback'}>{t('four-link')}</Link>
                            <Link className={pathname == "/modules/contacts/appeal" ? cls.actives : cls.contacts_layout_links} href={'/modules/contacts/appeal'}>{t('five-link')}</Link>
                            <Link className={pathname == "/modules/contacts/citizin" ? cls.actives : cls.contacts_layout_links} href={'/modules/contacts/citizin'}>{t('six-link')}</Link>   
                     </div>
                     

              </div>
       );
}
