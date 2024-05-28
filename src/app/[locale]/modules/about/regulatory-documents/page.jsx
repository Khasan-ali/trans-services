import { useTranslations } from "next-intl"

export default function Regulatory() {

       const t = useTranslations("About-Us-Regulatory")

       return (
              <div>
                     <div className="container">
                            <h2 className="page_title">{t("title")}</h2>
                     </div>
              </div>
       )
}