import { Footer } from './components/layout/Footer'
import { Header } from './components/layout/Header'
import { Faq } from './components/sections/Faq'
import { Founder } from './components/sections/Founder'
import { GetStarted } from './components/sections/GetStarted'
import { Hero } from './components/sections/Hero'
import { QuoteBand } from './components/sections/QuoteBand'
import { Services } from './components/sections/Services'
import { States } from './components/sections/States'
import { Testimonials } from './components/sections/Testimonials'
import { TreatmentFocus } from './components/sections/TreatmentFocus'
import { WhyChoose } from './components/sections/WhyChoose'

function App() {
  return (
    <div id="top" className="overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Founder />
        <TreatmentFocus />
        <QuoteBand />
        <Services />
        <WhyChoose />
        <Testimonials />
        <GetStarted />
        <States />
        <Faq />
      </main>
      <Footer />
    </div>
  )
}

export default App
