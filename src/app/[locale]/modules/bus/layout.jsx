'use client'

import { useTranslations } from "next-intl";
import { Link, usePathname } from "../../../../../navigation";
import cls from './styles.module.css'

export default function BusLayout({ children }) {

       const pathname = usePathname()

       const t = useTranslations("Bus-Layouts");

     
       return (
              <div className={cls.bus_layouts}>
                     {children}    

                     <div className={cls.bus_layout_list}>
                            
                                   <Link className={pathname == "/modules/bus/buying-bus" ? cls.actives : cls.bus_layout_links} href={'/modules/bus/buying-bus'}>{t('link-title-first')}</Link>
                            
                                   <Link className={pathname == "/modules/bus/online-routing" ? cls.actives : cls.bus_layout_links} href={'/modules/bus/online-routing'}>{t('link-title-second')}</Link>
                            
                                   <Link className={pathname == "/modules/sale-transport-card" ? cls.actives : cls.bus_layout_links} href={'/modules/sale-transport-card'}>{t('link-title-three')}</Link>
                     
                     </div>
              </div>
       );
}
