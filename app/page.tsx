import React from 'react'
import Header from './componentes/header'
import Video from './componentes/video'
import Flayer from './componentes/promo'
import Sobre from './componentes/sobre'
import Faq from './componentes/faq'
import Formulario from './componentes/formulario'
import Footer from './componentes/footer'

function page() {
  return (
    <div>
    <Header />
    <Video />
    <Flayer />
    <Sobre />
    <Faq />
    <Formulario />
    <Footer />
    </div>
  )
}

export default page
