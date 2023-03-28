import Maincontent from "./components/main-content";

import Footer from "./components/footer";
//fontAWesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas, fab)

function App() {
  return (

    <div className="App centered">
      <Maincontent/>     
      <Footer />   
    </div>

  );
}

export default App;
