<template>
  <div class="acerca-de">
    <h1>Acerca de Nuestra Ferretería</h1>
    <p>
      En <strong>Esta pagina web</strong>, nos dedicamos a ofrecer productos de alta calidad para todos tus proyectos de construcción, reparación y mantenimiento. 
      Desde herramientas especializadas hasta materiales esenciales, trabajamos para ser tu aliado confiable.  
      Nuestro compromiso es brindarte un servicio personalizado y garantizar que encuentres lo que necesitas para hacer realidad tus ideas.
    </p>
    <p>
      Con años de experiencia en el sector, nos hemos ganado la confianza de nuestros clientes gracias a nuestra amplia selección de productos y atención profesional.
      ¡Gracias por elegirnos como tu ferretería de confianza!
    </p>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .acerca-de {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 2rem;
    background-color: #f4f4f4;
  }
  .acerca-de h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: #333;
  }
  .acerca-de p {
    font-size: 1.2rem;
    line-height: 1.5;
    color: #555;
    max-width: 800px;
  }
}
</style>
