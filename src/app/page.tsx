import Float from "./components/Float";
import './page.scss'

export default function Home() {
  return (
    <div>
      <div className="container">
        <div className="strike">-</div>
        <h1>Hi, I'm Pedro.</h1>
        <h2>an architect and web developer creating physical and digital places</h2>
        <div className="arrow">↓</div>
      </div>
      <Float/>
      <div className="test"> TEST </div>
    </div>
  )
}
