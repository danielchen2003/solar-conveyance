import { Routes, Route } from "react-router";
import { Header } from "./components";
import { Home, Launches, LaunchDetails, NasaEpic} from "./pages";
//import CountDown from "./components/CountDown"

function App() {
  return (
    <div className="min-h-screen bg-dark">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/launches" element={<Launches />} />
        <Route path="/launches/:id" element={<LaunchDetails />} />
        <Route path="/epic" element={<NasaEpic />} />
        {/* <Route path="/countdown" element={<CountDown />} /> */}
      </Routes>
    </div>
  )
}

export default App
