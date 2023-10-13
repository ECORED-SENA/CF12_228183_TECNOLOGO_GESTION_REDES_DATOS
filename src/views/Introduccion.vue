<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .bg2.p-4.px-5(data-aos="zoom-in")
      .row.justify-content-center.align-items-center.p-4.bgw.py-3           
        .col-lg-auto.my-3 
          img.img-a.img-t(src='@/assets/curso/temas/2.svg', alt='')
        .col.my-3
          p.mb-0 Tenga una cordial bienvenida al estudio de este componente denominado #[b.tb Seguridad en la red]. Comience explorando el video que se propone enseguida, en el cual usted podrá tener una visión general de los temas que se desarrollarán. #[b.tb ¡Adelante!]  
    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. 
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
