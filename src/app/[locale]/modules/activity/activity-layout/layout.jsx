'use client'

import { useTranslations } from "next-intl";
import cls from './styles.module.css'
import { Link, usePathname } from "../../../../../../navigation";

export default function ActivityLayout({ children }) {

       const pathname = usePathname()

       const t = useTranslations("Activity-Layout");

     
       return (
              <div className={cls.bus_layouts}>
                     {children}    

                     <div className={cls.bus_layout_list}>
                            
                                   <Link className={pathname == "/modules/activity/direction" ? cls.actives : cls.bus_layout_links} href={'/modules/activity/direction'}>{t('first-link')}</Link>

                                   <Link className={pathname == "/modules/activity/activity-layout/measures" ? cls.actives : cls.bus_layout_links} href={'/modules/activity/activity-layout/measures'}>{t('second-link')}</Link>
                            
                                   <Link className={pathname == "/modules/activity/activity-layout/reports" ? cls.actives : cls.bus_layout_links} href={'/modules/activity/activity-layout/reports'}>{t('three-link')}</Link>
                            
                                   <Link className={pathname == "/modules/activity/activity-layout/government" ? cls.actives : cls.bus_layout_links} href={'/modules/activity/activity-layout/government'}>{t('four-link')}</Link>

                                   <Link className={pathname == "/modules/activity/cooperation" ? cls.actives : cls.bus_layout_links} href={'/modules/activity/cooperation'}>{t('five-link')}</Link>

                                   <Link className={pathname == "/modules/activity/activity-layout/service" ? cls.actives : cls.bus_layout_links} href={'/modules/activity/activity-layout/service'}>{t('six-link')}</Link>
                     
                     </div>
              </div>
       );
}
