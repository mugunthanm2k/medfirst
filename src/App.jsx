import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Why from './components/Why'
import Process from './components/Process'
import Contact from './components/Contact'
import Location from './components/Location'
import Footer from './components/Footer'
import Floating from './components/Floating'
import Reviews from './components/Reviews'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Why />
        <Process />
        <Reviews />
        <Contact />
        <Location />
      </main>
      <Footer />
      <Floating />
    </>
  )
}
