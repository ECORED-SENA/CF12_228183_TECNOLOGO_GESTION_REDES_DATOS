<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 6
      h1 Políticas de seguridad
    .row.justify-content-center.mb-5(data-aos="fade-right") 
      .col-lg-4.my-3
        .bg17.p-3.h-100
          p.mb-0 La organización debe integrar a sus mecanismos de seguridad, las políticas que rigen el correcto uso de los recursos de red, el uso de la información y el intercambio de la misma. Los usuarios de los equipos (estaciones de trabajo, servidores, centros de datos, entre otros) deben hacerse cargo y responsabilizarse de sus actividades en el marco de la utilización de herramientas informáticas.
      .col-lg-4.my-3
        img.img-a.img-t(src='@/assets/curso/temas/63.png', alt='')
      .col-lg-4.my-3
        .bg16.p-3.h-100
          p.mb-0 El establecimiento de las políticas de seguridad de la información se encuentra ampliamente contemplado en la norma ISO 27001 que permite el aseguramiento, la confidencialidad e integridad de los datos y de la información, así como de los sistemas que la procesan. La misma, le permite a las organizaciones que adopten e implementen la evaluación del riesgo y la aplicación de los controles necesarios para mitigarlos o eliminarlos.

    p(data-aos="fade-down").mb-5 Las fases de la metodología expuesta por el #[b.tb Sistema de Gestión de La Seguridad de la Información (SGSI)] de la norma ISO 27001, se pueden resumir así: 

    .titulo-sexto.color-acento-contenido(data-aos="fade-right")
      h5 Figura 3.
      span Método de evaluación y tratamiento de riesgos
    .bg14.p-4.mb-5
      img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/64.svg', alt='Esquema que muestra el método de evaluación y tratamiento de riesgos para redes informáticas de una compañía.')

    p(data-aos="fade-down").mb-5 Para definir una política robusta, eficiente y práctica, es necesario involucrar a todos aquellos usuarios que hacen uso de la red de datos, pues son ellos los que se enfrentarán a los posibles inconvenientes que puedan surgir. 

    .row.justify-content-center.align-items-center.p-4.bg2.brad.py-3(data-aos="fade-right")
      .col-lg-auto.my-3 
        img.img-a.img-t(src='@/assets/curso/temas/65.svg', alt='')       
      .col.my-3
        p.mb-0 Así mismo, estas políticas o indicaciones deben ser afines a las diligencias que realice la empresa y deben ser indicadas en un lenguaje que pueda ser interpretado o entendido por los usuarios de la malla. 
           
</template>

<script>
export default {
  name: 'Tema6',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
