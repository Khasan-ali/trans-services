import { useTranslations } from "next-intl";
import cls from './styles.module.css'
import Image from "next/image";
import Logo from '../../assets/images/footer-logo.svg'
import InputBtn from '../../assets/images/footer-input.svg'
import FooterCenterImg from '../../assets/images/footer-center-img.svg'
import { Link } from "../../../navigation";

export default function Footer() {

       const t = useTranslations('Footers')

       return (
              <footer className={"footer"}>
                     <div className={cls.footer_container}>
                            <div className={cls.footer_top}>
                                   <Link href={'/'}>
                                          <Image className={cls.footer_logo} src={Logo} alt="Footer has logo" />
                                   </Link>
                                   <div className={cls.footer_top_center}>
                                          <p className={cls.footer_top_center_phone}>+998 (71) 233-89-21</p>
                                          <p className={cls.footer_top_center_text}>{t('top-center')}</p>
                                   </div>
                                   <div>
                                          <label className={cls.footer_top_label} htmlFor="footer-id">
                                                 {t('top-right')}
                                                 <div className={cls.footer_top_input_section}>
                                                        <input className={cls.footer_top_input}
                                                               id="footer-id"
                                                         type="email"
                                                         placeholder="E-mail" />
                                                         <button className={cls.footer_top_input_btn}>
                                                               <Image src={InputBtn} alt="Input img" />
                                                         </button>
                                                 </div>
                                          </label>
                                   </div>
                            </div>
                            <div className={cls.footer_center}>
                                   <div className={cls.footer_center_left_section}>
                                          <p className={cls.footer_center_left}>{t('center-left-top')}</p>
                                          <p className={cls.footer_center_left}>{t('center-left-bottom')}</p>
                                   </div>
                                   <Image className={cls.footer_center_img} src={FooterCenterImg} alt="footer center img" />
                                   <p className={cls.footer_center_right}>{t('center-right')}</p>
                            </div>
                            <div className={cls.footer_bottom}>
                                   <p className={cls.footer_bottom_left}>Copyright © 2022 “Toshshahartransxizmat” AJ</p>
                                   <div className={cls.footer_right}>
                                          <a className={cls.footer_right_link} href={'https://technocorp.uz/'}>TECHNOCORP</a>
                                          <p className={cls.footer_right_text}>{t('bottom-right')}</p>
                                   </div>
                            </div>
                     </div>
              </footer>
       )
}
