import config from "../../config.json"
import { StyledHeader } from "./styles/StyledHeader"

export default function Header() {
  return (
    <StyledHeader>
      {/* <img src="foto_banner" alt="foto_banner" /> */}

      <section className="user-info">
        <img src={`https://github.com/${config.github}.png`} alt="foto_perfil" />
        
        <div>
          <h3>{ config.name }</h3>
          <p>{ config.job }</p>
        </div>
        </section>
      
    </StyledHeader>
  )
}
