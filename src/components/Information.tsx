import { useTranslation } from "react-i18next"

const Information = () => {

  const { t, i18n } = useTranslation()

  return (
    <div className="max-w-6xl flex flex-col gap-4 mx-auto mt-3 min-h-[700px] p-3 bg-blue-600 rounded-md text-white">
        <h1 className="font-bold text-xl justify-center flex"> {t("Test Key")} </h1>
        <p className="font-bold"> {t("title1")} </p>
        <p> {t("description1")} </p>
        <p className="font-bold"> {t("title2")} </p>
        <p> {t("description2")} </p>
        <p className="font-bold"> {t("title3")} </p>
        <p> {t("description3")} </p>
        <p className="font-bold text-end"> {t("author", { author: "Mike" })} </p>
        <p className="font-bold text-end"> {t("date", { date: "Today"})} </p>
        <p> {t("exampleNamespace:testKey")}</p>
    </div>
  )
}

export default Information