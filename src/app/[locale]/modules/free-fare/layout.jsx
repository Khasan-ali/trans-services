import { Link } from '../../../../../navigation';
import cls from './styles.module.css'

export default function FreeLayouts({ children }) {

       return (
              <div className={cls.free_layouts}>
                     {children}    

                     <div className={cls.free_layout_list}>
                            
                                   <Link className={cls.free_layout_links} href={'/modules/information/bus-routes'}>Avtobus yo‘nalishlar ro‘yxati</Link>
                            
                                   <Link className={cls.free_layout_links} href={'/modules/fare'}>Yo‘lkira narxlari</Link>
                            
                                   <Link className={cls.free_layout_links} href={'/modules/free-fare/cheap-department'}>Bepul foydalanish huquqi</Link>
                     
                     </div>
              </div>
       );
}
