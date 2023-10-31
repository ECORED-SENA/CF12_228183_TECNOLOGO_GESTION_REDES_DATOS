<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 4
      h1 Seguridad en servicios de red
    .row.justify-content-center.align-items-center.p-4.bg2.brad.mb-5.py-3(data-aos="fade-right") 
      .col.my-3
        p.mb-0 La interconexión de redes presenta una amenaza que requiere de atención a la hora de establecer la seguridad en el ingreso y salida de información a la red interna privada. 
      .col-lg-auto.my-3 
        img.img-a.img-t(src='@/assets/curso/temas/52.svg', alt='')

    h5(data-aos="fade-down") Se pueden aplicar diferentes herramientas de protección, entre las que se encuentran:        
    .row.justify-content-center.align-items-center  
      .col-lg-8.my-3 
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg13")
          .row.justify-content-center(titulo="<i>Router</i> de filtrado")
            .col.order-1.my-3
              p.mb-0 En los dispositivos de red se deben establecer mecanismos de filtrado que permitan llevar a cabo el bloqueo de direcciones IP y, a su vez, la prohibición de transmisión de protocolos de capa de red o de transporte utilizados (UDP, TCP o ICMP).  
            .col-lg-auto.order-lg-2.my-3 
              img.img-a.img-t(src='@/assets/curso/temas/54.png', alt='')  
          .row.justify-content-center(titulo="Traducción de direcciones de red (NAT)")
            .col.order-1.my-3
              p.mb-0 Las grandes empresas pueden utilizar la misma dirección IP en las estaciones de trabajo, en varias redes conectadas. Para permitir la comunicación entre nodos en ambos lados, la referencia del remitente del paquete debe cambiarse para realizar una transmisión confiable sin conflictos.  
            .col-lg-auto.order-lg-2.my-3 
              img.img-a.img-t(src='@/assets/curso/temas/55.png', alt='') 
          .row.justify-content-center(titulo="Protocolo TLS")
            .col.order-1.my-3
              p.mb-0 Es un protocolo estandarizado por la IETF (Internet Engineering Task Force); este proporciona seguridad de las comunicaciones a través de Internet. El objetivo principal de este protocolo es proporcionar confidencialidad e integridad de datos entre dos entidades que se comunican. Un uso importante de TLS es proteger el tráfico de la #[i World Wide Web] permitiendo transacciones seguras de comercio electrónico.  
            .col-lg-auto.order-lg-2.my-3 
              img.img-a.img-t(src='@/assets/curso/temas/56.png', alt='')  
          .row.justify-content-center(titulo="Seguridad en el correo electrónico")
            .col.order-1.my-3
              p.mb-0 Al enviar información a través de correo electrónico es necesario la implementación de técnicas de cifrado para evitar la visualización y modificación del mensaje.  
            .col-lg-auto.order-lg-2.my-3 
              img.img-a.img-t(src='@/assets/curso/temas/57.png', alt='')                                                    
      .col-lg-4.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/53.png', alt='')


</template>

<script>
export default {
  name: 'Tema4',
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
