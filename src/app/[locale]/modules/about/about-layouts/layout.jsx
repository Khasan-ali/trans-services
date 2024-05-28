'use client'

import { useTranslations } from "next-intl";
import cls from './styles.module.css'
import { Link, usePathname } from "../../../../../../navigation";

export default function ActivityLayout({ children }) {

       const pathname = usePathname()

       const t = useTranslations("About-Layout");

     
       return (
              <div className={cls.bus_layouts}>
                     {children}    

                     <div className={cls.bus_layout_list}>
                     
                            <Link className={pathname == "/modules/about/about-us" ? cls.actives : cls.bus_layout_links} href={'/modules/about/about-us'}>{t('link1')}</Link>

                            <Link className={pathname == "/modules/about/leadership" ? cls.actives : cls.bus_layout_links} href={'/modules/about/leadership'}>{t('link2')}</Link>

                            <Link className={pathname == "/modules/about/structure" ? cls.actives : cls.bus_layout_links} href={'/modules/about/structure'}>{t('link3')}</Link>

                            <Link className={pathname == "/modules/about/department-service" ? cls.actives : cls.bus_layout_links} href={'/modules/about/department-service'}>{t('link4')}</Link>

                            <Link className={pathname == "/modules/about/structural-enterprises" ? cls.actives : cls.bus_layout_links} href={'/modules/about/structural-enterprises'}>{t('link5')}</Link>

                            <Link className={pathname == "/modules/about/about-layouts/regulatory-documents" ? cls.actives : cls.bus_layout_links} href={'/modules/about/about-layouts/regulatory-documents'}>{t('link6')}</Link>

                            <Link className={pathname == "/modules/about/about-layouts/legal-documents" ? cls.actives : cls.bus_layout_links} href={'/modules/about/about-layouts/legal-documents'}>{t('link7')}</Link>

                            <Link className={pathname == "/modules/about/vacancies" ? cls.actives : cls.bus_layout_links} href={'/modules/about/vacancies'}>{t('link8')}</Link>

                            <Link className={pathname == "/modules/about/faq" ? cls.actives : cls.bus_layout_links} href={'/modules/about/faq'}>{t('link9')}</Link>

                            <Link className={pathname == "/modules/about/about-layouts/society" ? cls.actives : cls.bus_layout_links} href={'/modules/about/about-layouts/society'}>{t('link10')}</Link>

                            <Link className={pathname == "/modules/about/community" ? cls.actives : cls.bus_layout_links} href={'/modules/about/community'}>{t('link11')}</Link>

                            <Link className={pathname == "/modules/about/about-layouts/website-user" ? cls.actives : cls.bus_layout_links} href={'/modules/about/about-layouts/website-user'}>{t('link12')}</Link>
                     
                     </div>
              </div>
       );
}
