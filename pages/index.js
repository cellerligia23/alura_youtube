import config from "../config.json"
import Menu from "../src/components/Menu"
import Header from "../src/components/Header"
import Timeline from "../src/components/Timeline"
import { CSSReset } from "../src/components/CSSReset__index";

function HomePage() {
  return (
    <>
      <CSSReset />
      <div>
        <Menu />
        <Header />
        <Timeline playlist={ config.playlists } />
      </div>
    </>
  )
}

export default HomePage;






