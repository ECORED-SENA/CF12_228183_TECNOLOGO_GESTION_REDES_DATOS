<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 5
      h1 Seguridad perimetral
    .row.justify-content-center.mb-5(data-aos="fade-right") 
      .col-lg-4.my-3
        .bg16.p-3.h-100
          p.mb-0 Como medida de seguridad perimetral por implementar, está el denominado cortafuegos o #[i firewall], el cual se encarga de convertir las diversas redes a las que se conecta, en independientes. Al contrario que un #[i router], no se conforma con transmitir la petición. Un cortafuegos segmenta los flujos asumiendo él mismo las peticiones. Para esto, establece dos conexiones y puede realizar una acción de autentificación. 
      .col-lg-4.my-3
        img.img-a.img-t(src='@/assets/curso/temas/58.png', alt='')
      .col-lg-4.my-3
        .d-grid.bg17.h-100
          .crd.brad.p-3.px-4(data-aos="fade-down")
            .crd__text
              p.mb-0 El cortafuegos de infraestructura suele ir acompañado de un cortafuegos personal, instalado en los equipos de trabajo. Así, los equipos se protegen de ataques que podrían proceder, incluso, de dentro de la red local. 
              img.mt-3.img-t.fr.d-none.d-lg-block(src='@/assets/curso/temas/59.svg' alt='')  

    .titulo-sexto.color-acento-contenido(data-aos="fade-right")
      h5 Figura 2.
      span Conexión, en red, del firewall
    .bg14.p-4
      img.img-a.img-t.d-block.d-lg-none(data-aos="zoom-in")(src='@/assets/curso/temas/61.svg', alt='Gráfica que muestra la conexión, en red, de un firewall o cortafuegos.')
      img.img-a.img-t.d-none.d-lg-block(data-aos="zoom-in")(src='@/assets/curso/temas/60.svg', alt='Gráfica que muestra la conexión, en red, de un firewall o cortafuegos.') 
    figcaption.mb-5 Nota: adaptado de Dordoigne (2020) 

    p(data-aos="fade-down").mb-4 La primera generación de estos equipos permitía distintos análisis en las cabeceras de los paquetes, de manera equivalente a los #[i routers] filtrantes. El cortafuegos de tabla de estado (#[i #[b.tb State full inspection]]), más reciente, conserva en memoria una tabla de las conexiones establecidas. Así, las comunicaciones entre clientes, autorizadas después de la autentificación, pueden continuar sin problema.

    .row.justify-content-center.align-items-center  
      .col-lg-8.my-3 
        .bg9.p-4.mb-4(data-aos="flip-down")
          p(data-aos="fade-down").mb-0 La nueva generación de cortafuegos, llamada de aplicación, es capaz de analizar algunos cuerpos de paquetes, como los de los protocolos SMTP, HTTP. Este nivel de análisis permite atenuar las nuevas formas de ataque que se aprovechan de los fallos de las aplicaciones estándar.
        p(data-aos="fade-down") Un complemento del cortafuegos es el servidor proxy; se utiliza particularmente en el ámbito del tráfico #[i #[b.tb Hyper Text Transfer Protocol]] (HTTP) o, incluso, con #[i #[b.tb File Transfer Protocol]] (FTP), en la red LAN e Internet. El servidor #[i #[b.tb proxy]] intercepta una petición hacia el exterior, la redirecciona como si fuera suya y, seguidamente, almacena los datos recibidos. Por último, este los envía al solicitante inicial.          
      .col-lg-4.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/62.png', alt='')

</template>

<script>
export default {
  name: 'Tema5',
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
