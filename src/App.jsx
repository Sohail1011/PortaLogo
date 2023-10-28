import { BarLogo } from "./components/BarLogo"
import { Header } from "./components/Header"
import { Navbar } from "./components/Navbar"
import { Skills } from "./components/Skills"
import { Tester } from "./components/Tester"
import { Work } from "./components/Work"

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <BarLogo />
      <Skills />
      <Work />
      <Tester />
    </>
  )
}

export default App