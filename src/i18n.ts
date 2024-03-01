import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import germanJSON from "./locales/de/german.json"
import englishJSON from "./locales/en/english.json"
import romanianJSON from "./locales/ro/romanian.json"

i18n.use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: englishJSON,
                exampleNamespace: {
                    testKey: "testKey {{name}}"
                },
                exampleNamespace2: {
                    testKey: "testKey 2"
                }
            },
            de: {
                translation: germanJSON
            },
            ro: {
                translation: romanianJSON
            }
        },
        lng: "en",
        fallbackLng: "ro"
    })

export default i18n