'use client'


import { useTranslations } from 'next-intl';
import { Link, usePathname } from '../../../../../navigation';
import cls from './styles.module.css'

export default function NewsLayout({ children }) {

       const pathname = usePathname()
       const t = useTranslations("Press-center-Layout")
     
       return (
              <div className={cls.news_layouts}>
                     {children}    

                     <div className={cls.new_layout_list}>
                            
                                   <Link className={pathname == "/modules/press-center/news" ? cls.actives : cls.new_layout_links} href={'/modules/press-center/news'}>{t('first-link')}</Link>
                                   <Link className={pathname == "/modules/press-center/media" ? cls.actives : cls.new_layout_links} href={'/modules/press-center/media'}>{t('second-link')}</Link>
                                   <Link className={pathname == "/modules/press-center/photo-info" ? cls.actives : cls.new_layout_links} href={'/modules/press-center/photo-info'}>{t('three-link')}</Link>
                                   <Link className={pathname == "/modules/press-center/video-info" ? cls.actives : cls.new_layout_links} href={'/modules/press-center/video-info'}>{t('four-link')}</Link>
                            
                                   <Link className={pathname == "/modules/press-service" ? cls.actives : cls.new_layout_links} href={'/modules/press-service'}>{t('five-link')}</Link>
                     
                     </div>
              </div>
       );
}
