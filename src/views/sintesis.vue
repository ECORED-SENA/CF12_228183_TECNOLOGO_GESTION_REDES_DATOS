<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .row.justify-content-center
      .col-lg-10(data-aos="zoom-in")
        .row.justify-content-center.align-items-center.mb-5.p-4.bg1.brad.py-3           
          .col-lg-auto.my-3 
            img.img-a.img-t(src='@/assets/curso/temas/1.svg', alt='')
          .col.my-3
            p.mb-0 Usted ha finalizado el estudio de los temas de este componente formativo. En este punto, haga un análisis del mapa conceptual que se muestra enseguida y realice su propia síntesis de los contenidos. #[b ¡Adelante!]

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="Esquema general de las temáticas de este componente formativo. Tema principal: seguridad en la red. Temas integradores: generalidades de la seguridad, software malicioso y virus, servicios de seguridad, seguridad perimetral, políticas de seguridad.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
