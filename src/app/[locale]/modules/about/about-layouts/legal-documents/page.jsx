import { useTranslations } from "next-intl"

export default function LegalDocuments() {

       const t = useTranslations("About-Us-Legal")

       return (
              <div>
                     <div className="container">
                            <h2 className="page_title">{t("title")}</h2>
                     </div>
              </div>
       )
}