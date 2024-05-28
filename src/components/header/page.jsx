'use client'

import { usePathname, useRouter } from '../../../navigation'
import Image from 'next/image'
import { Link } from '../../../navigation'
import cls from './styles.module.css'
import { useState } from 'react'
import DropDown from '../DropDown/page'
import Logo from '../../assets/images/site-logo.svg'
import Hamburger from '../../assets/images/hamburger.png'

const Header = ({ locale }) => {

       const router = useRouter()
       const pathname = usePathname()
       const [state, setState] = useState(false)

       const handleChange = (e) => {
              router.push(pathname, { locale: e.target.value });
       };





       return (
              <div className={state ? 'header_open' : ''}>
                     <div className={cls.header_site}>
                            <Link href={'/'}>
                                   <Image src={Logo} alt='header logo' />
                            </Link>
                            <div className={cls.header_section}>
                                   <DropDown setState={setState}/>

                                   <select className={cls.header_select} value={locale} onChange={handleChange}>
                                          <option value="uz">O'ZB</option>
                                          <option value="uzb">ЎЗБ</option>
                                          <option value="ru">РУС</option>
                                          <option value="en">ENG</option>
                                   </select>

                                   <button className={cls.header_btn} onClick={() => setState(true)}>
                                          <Image src={Hamburger} alt="has hamburger img" width={'22'} height={'22'} />
                                   </button>
                            </div>
                     </div>
              </div>
       )
}


export default Header