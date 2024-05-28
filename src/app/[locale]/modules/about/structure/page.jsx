
import cls from './styles.module.css'
import { useTranslations } from "next-intl"
import StructureImg from '../../../../../assets/images/structure.svg'
import Image from "next/image"

export default function Structure() {

       const t = useTranslations("About-Us-Structure")

       return (
              <div>
                     <div className={cls.structure}>
                            <Image src={StructureImg} alt="struckture images" />
                     </div>
              </div>
       )
}