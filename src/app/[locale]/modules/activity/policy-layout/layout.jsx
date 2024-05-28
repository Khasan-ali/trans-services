'use client'

import { useTranslations } from "next-intl";
import cls from './styles.module.css'
import { Link, usePathname } from "../../../../../../navigation";

export default function ActivityLayout({ children }) {

       const pathname = usePathname()

       const t = useTranslations("Activity-Policy-Layout");

     
       return (
              <div className={cls.bus_layouts}>
                     {children}    

                     <div className={cls.bus_layout_list}>
                     
                            <Link className={pathname == "/modules/activity/policy-layout/news" ? cls.actives : cls.bus_layout_links} href={'/modules/activity/policy-layout/news'}>{t('first-link')}</Link>

                            <Link className={pathname == "/modules/activity/policy-layout/documents" ? cls.actives : cls.bus_layout_links} href={'/modules/activity/policy-layout/documents'}>{t('second-link')}</Link>
                     
                     </div>
              </div>
       );
}
