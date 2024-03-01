import { useTranslation } from "react-i18next"
import GermanyImg from "./assets/germany.svg"
import RomaniaImg from "./assets/romania.svg"
import GreatBritImg from "./assets/uk.png"
import Information from "./components/Information"

type Language = "english" | "romanian" | "german"

function App() {

  const { i18n, t } = useTranslation()

  console.log(i18n.language)

  const changeLanguage = (language: Language) => {
    switch(language) {
      case "english":
        i18n.changeLanguage("en")
        break;
      case "german":
        i18n.changeLanguage("de")
        break;
      case "romanian":
        i18n.changeLanguage("ro")
        break;
      default:
        break;
    }
  }

  return (

    <>
      <div className="bg-blue-400 p-3 flex justify-between items-center"> 
        <p className="font-bold"> Current language: {i18n.language} </p>
        <div className="flex flex-row gap-4 ">
          <img className="cursor-pointer" src={GreatBritImg} width="48px" onClick={() => changeLanguage("english")} />
          <img className="cursor-pointer" src={GermanyImg} width="64px" onClick={() => changeLanguage("german")}/>
          <img className="cursor-pointer" src={RomaniaImg} width="64px" onClick={() => changeLanguage("romanian")}/>
        </div>
      </div>
      <Information />
    </>
  )
}

export default App
