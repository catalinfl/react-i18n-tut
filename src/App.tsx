import GermanyImg from "./assets/germany.svg"
import RomaniaImg from "./assets/romania.svg"
import GreatBritImg from "./assets/uk.png"
import Information from "./components/Information"

function App() {

  return (

    <>
      <div className="bg-blue-400 p-3 flex justify-between items-center"> 
        <p className="font-bold"> Current language: test </p>
        <div className="flex flex-row gap-4 ">
          <img className="cursor-pointer" src={GreatBritImg} width="48px" />
          <img className="cursor-pointer" src={GermanyImg} width="64px" />
          <img className="cursor-pointer" src={RomaniaImg} width="64px" />
        </div>
      </div>
      <Information />
    </>
  )
}

export default App
