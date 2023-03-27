import './App.css';
import Header from "./components/header";
import Navigation from "./components/navigation";
import Leftcontent from "./components/left-content";
import Rightcontent from "./components/right-content";
import Footer from "./components/footer";
//fontAWesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas, fab)

function App() {
  return (
    <div className="App centered">
      <Header />
      <Navigation />
      <div className="flex-between main-content">
        <Leftcontent />
        <Rightcontent />
      </div>
      <Footer />
      
    </div>
  );
}

export default App;
