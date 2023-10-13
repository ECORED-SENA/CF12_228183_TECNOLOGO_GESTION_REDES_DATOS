<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.bg15
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 3
      h1 Servicios de seguridad y mecanismos de seguridad

    .row.justify-content-center.align-items-center         
      .col-lg-4.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/45.png', alt='')
      .col-lg-8.my-3
        p(data-aos="fade-down") Un servicio de seguridad, es una prestación que avala que todos los procesos que involucran la transferencia de datos e información, tendrán la seguridad apropiada. Esto se logra por medio de políticas establecidas en cuanto a seguridad de la información se refiere.
        h4.mb-5(data-aos="fade-down") Según Dordoigne (2020), dentro de los servicios de seguridad que se deben mantener están:
        .bgw.p-4.brad(data-aos="fade-right") 
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-9.order-1.my-3
                h4.tb Control de acceso al sistema 
                p.mb-0 Consiste, básicamente, en la protección física de los dispositivos de red, los sistemas operativos y otras aplicaciones. Estos deben protegerse mediante la configuración e instalación periódica de parches. Las redes pueden separarse entre sí y las comunicaciones deben filtrarse. El #[i software] antivirus debe instalarse y mantenerse en todas las estaciones de trabajo. 
              .col-lg-auto.order-lg-2.my-3 
                img.img-a.img-t(src='@/assets/curso/temas/46.svg', alt='')  
            .row.justify-content-center.align-items-center
              .col-9.order-1.my-3
                h4.tb Gestión de permisos 
                p.mb-0 Los #[i softwares], especialmente los sistemas operativos, utilizan su propio sistema de habilitación de accesos a los archivos o a los datos. Por ejemplo, Microsoft Windows utiliza los permisos NTFS, nombre tomado del sistema de archivos. Los sistemas Unix/Linux tienen una gestión basada en los accesos de lectura (#[i read]), de escritura (#[i write]) y de ejecución (#[i execute]). 
              .col-lg-auto.order-lg-2.my-3 
                img.img-a.img-t(src='@/assets/curso/temas/47.svg', alt='') 
            .row.justify-content-center.align-items-center
              .col-9.order-1.my-3
                h4.tb Integridad 
                p.mb-0 Verificar la integridad de la transferencia significa asegurarse de que no se realicen cambios entre el remitente y el destinatario. 
              .col-lg-auto.order-lg-2.my-3 
                img.img-a.img-t(src='@/assets/curso/temas/48.svg', alt='')   
            .row.justify-content-center.align-items-center
              .col-9.order-1.my-3
                h4.tb No denegación 
                p.mb-0 Este servicio lo proporciona la firma electrónica, que se puede utilizar en sitios web (validación de procedencia de los datos), en mensajes de correo electrónico, en el interior de un archivo, entre otros. 
              .col-lg-auto.order-lg-2.my-3 
                img.img-a.img-t(src='@/assets/curso/temas/49.svg', alt='')  
            .row.justify-content-center.align-items-center
              .col-9.order-1.my-3
                h4.tb Autenticación 
                p.mb-0 Si un equipo está en red, se requiere de un mecanismo de reconocimiento de identidad o “#[i logueo]” y uno de comprobación de dicha identidad.
              .col-lg-auto.order-lg-2.my-3 
                img.img-a.img-t(src='@/assets/curso/temas/50.svg', alt='') 
            .row.justify-content-center.align-items-center
              .col-9.order-1.my-3
                h4.tb Confidencialidad 
                p.mb-0 Principalmente, se aplica el sistema de criptografía; para esto se realiza una transformación, llamada codificación de la información confidencial, el texto sin protección. El resultado es un texto cifrado o criptograma. El texto original se encuentra normalmente a través de una operación de descifrado. 
              .col-lg-auto.order-lg-2.my-3 
                img.img-a.img-t(src='@/assets/curso/temas/51.svg', alt='')                                                      
</template>

<script>
export default {
  name: 'Tema3',
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
