import Image from 'next/image'
import { Link } from '../../../navigation'
import cls from './styles.module.css'
import { useTranslations } from "next-intl"
import Img1 from '../../assets/images/datas1.svg'
import Img2 from '../../assets/images/datas2.svg'
import Img3 from '../../assets/images/datas3.svg'
import Img4 from '../../assets/images/datas4.svg'
import Img5 from '../../assets/images/datas5.svg'
import Img6 from '../../assets/images/datas6.svg'

export default function Datas() {

       const t = useTranslations("Landing-page-Datas")

       return (
              <div className={cls.site_datas}>
                     <h2 className="page_heading">{t('title')}</h2>
                     <ul className={cls.datas_list}>
                            <li className={`${cls.datas_item} ${cls.datas_item_first}`}>
                                   <Link className={cls.datas_list_link} href={'/modules/information/bus-routes'}>
                                          <Image src={Img1} alt='datas img' width='80' height='80' />
                                          <h5 className={cls.datas_list_heading}>{t('first-item-title')}</h5>
                                   </Link>
                            </li>
                            <li className={`${cls.datas_item} ${cls.datas_item_second}`}>
                                   <Link className={cls.datas_list_link} href={'/modules/sale-transport-card'}>
                                          <Image src={Img2} alt='datas img' width='80' height='80' />
                                          <h5 className={cls.datas_list_heading}>{t('second-item-title')}</h5>
                                   </Link>
                            </li>
                            <li className={`${cls.datas_item} ${cls.datas_item_three}`}>
                                   <Link className={cls.datas_list_link} href={'/modules/information/single-transport-card'}>
                                          <Image src={Img3} alt='datas img' width='80' height='80' />
                                          <h5 className={cls.datas_list_heading}>{t('three-item-title')}</h5>
                                   </Link>
                            </li>
                            <li className={`${cls.datas_item} ${cls.datas_item_four}`}>
                                   <Link className={cls.datas_list_link} href={'/modules/open-data'}>
                                          <Image src={Img4} alt='datas img' width='80' height='80' />
                                          <h5 className={cls.datas_list_heading}>{t('four-item-title')}</h5>
                                   </Link>
                            </li>
                            <li className={`${cls.datas_item} ${cls.datas_item_five}`}>
                                   <Link className={cls.datas_list_link} href={'/modules/fare'}>
                                          <Image src={Img5} alt='datas img' width='80' height='80' />
                                          <h5 className={cls.datas_list_heading}>{t('five-item-title')}</h5>
                                   </Link>
                            </li>
                            <li className={`${cls.datas_item} ${cls.datas_item_six}`}>
                                   <Link className={cls.datas_list_link} href={'/modules/free-fare/cheap-department'}>
                                          <Image src={Img6} alt='datas img' width='80' height='80' />
                                          <h5 className={cls.datas_list_heading}>{t('six-item-title')}</h5>
                                   </Link>
                            </li>
                     </ul>
              </div>
       )
}