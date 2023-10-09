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
          <p>creating physical and digital places</p>
        </h1>
      </div>
      <Float/>
      <div className="test"> TEST </div>
    </div>
  )
}
