import Float from "./components/Float/Float";
import Navbar from "./components/Navbar/Navbar";
import './page.scss'

export default function Home() {
  return (
    <div>
      <div className="containerMain">
        <Navbar/>
        <h1 className="containerText">
          <p>Hi. I&apos;m an <b>architect</b> and <b>web developer</b></p> 
        </h1>
      </div>
      <Float/>
      <Float/>
      <div className="test"> TEST </div>
    </div>
  )
}
