import Navbar from "./scenes/Navbar"
import { useState } from "react";
import UseMediaQurey from "./hooks/useMediaQurey";
function App(){
  const [selectedPage, setSelectedPage] = useState('home');
  const isAboveMediumScreens = UseMediaQurey("(min-width: 1060px)")
  return(
    <div className="App bg-deep-blue">
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>

    </div>
  )
}
export default App;