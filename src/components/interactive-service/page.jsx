import { useTranslations } from 'next-intl'
import cls from './styles.module.css'
import { Link } from '../../../navigation'
import Image from 'next/image'
import HandImg from '../../assets/images/interactive-smartphone.svg'
import BusImg from '../../assets/images/interactive-bus.svg'
import CardImg from '../../assets/images/interactive-card.svg'


export default function InteractiveService() {

       const t = useTranslations("Landing-page-Interactive-Service")

       return (
              <div className={cls.site_interactive}>
                     <h2 className='page_heading'>{t('title')}</h2>
                     <ul className={cls.interactive_list}>
                            <li className={`${cls.interactive_item} ${cls.interactive_first_item}`}>
                                   <Link className={cls.interactive_list_links} href={'/modules/bus/buying-bus'}>
                                          <Image src={HandImg} alt='There is phone img' width={'120'} height={'120'} />
                                          <h3 className={`${cls.interactive_list_heading} ${cls.interactive_list_heading_first}`}>
                                                 {t('first-item-heading')}
                                          </h3>
                                   </Link>
                            </li>
                            <li className={`${cls.interactive_item} ${cls.interactive_second_item}`}>
                                   <Link className={cls.interactive_list_links} href={'/modules/bus/online-routing'}>
                                          <Image src={BusImg} alt='There is phone img' width={'120'} height={'120'} />
                                          <h3 className={`${cls.interactive_list_heading} ${cls.interactive_list_heading_second}`}>
                                                 {t('second-item-heading')}
                                          </h3>
                                   </Link>
                            </li>
                            <li className={`${cls.interactive_item} ${cls.interactive_three_item}`}>
                                   <Link className={cls.interactive_list_links} href={'/modules/sale-transport-card'}>
                                          <Image src={CardImg} alt='There is phone img' width="120" height="auto" />
                                          <h3 className={`${cls.interactive_list_heading} ${cls.interactive_list_heading_three}`}>
                                                 {t('three-item-heading')}
                                          </h3>
                                   </Link>
                            </li>
                     </ul>
              </div>
       )
}
