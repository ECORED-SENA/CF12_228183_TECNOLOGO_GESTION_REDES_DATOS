<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 1
      h1 ¿Qué es la seguridad de la red?
    .bg3
      .row.justify-content-center.align-items-center.p-4.bg2.brad.mb-5.py-3
        .col.my-3
          p.mb-0 La seguridad en la red es un campo especializado que contempla el uso de múltiples herramientas tecnológicas que van desde dispositivos de #[i hardware] y #[i software] que, en principio, evitan el ingreso y propagación de una gran variedad de amenazas y ataques.
        .col-lg-auto.my-3 
          img.img-a.img-t(src='@/assets/curso/temas/3.svg', alt='')

      h4.tb(data-aos="fade-down").mb-4 Las organizaciones, entonces, deben:

      .row.justify-content-center.mb-4           
        .col-lg-4.my-3
          .bgw.text-center.brad.h-100
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/5.png', alt='')
            .p-4
              p(data-aos="fade-down").mb-0 Promulgar políticas y controles de acceso a los recursos de la red.      
        .col-lg-4.my-3
          .bgw.text-center.brad.h-100
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/6.png', alt='')
            .p-4
              p(data-aos="fade-down").mb-0 Permitir verificar e identificar accesos no autorizados.      
        .col-lg-4.my-3
          .bgw.text-center.brad.h-100
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/7.png', alt='')
            .p-4
              p(data-aos="fade-down").mb-0 Hacer búsqueda permanente de vulnerabilidades que pueda tener la red de datos de la organización.  
      p(data-aos="fade-down").mb-5 El siguiente video, explica en detalle las generalidades más destacadas de la seguridad en la red; preste suma atención:
      .row.justify-content-center.align-items-center      
        .col-lg-12(data-aos="fade-left")     
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/1nLP8bbjQrY?si=RRwKl3eJJ2nmrWL3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          figcaption Video. Generalidades de Seguridad en la Red

    Separador 
    #t_1_1.titulo-segundo.color-acento-contenido.mb-3(data-aos="zoom-in-left")
      h2 1.1 Causas de la inseguridad
    .row.bg4.align-items-center.py-4.pb-5
      .col-lg-12.col-12.px-lg-5.px-4                
        .row.justify-content-center.align-items-center.mb-4          
          .col-lg-8.my-3
            p(data-aos="fade-down").mb-0 Las organizaciones apuestan por el uso de sistemas de información que se componen de redes e infraestructuras tecnológicas; estas, a su vez, intercambian, de manera constante, datos valiosos, los cuales son vulnerables y pueden sufrir amenazas y ataques que afecten la confidencialidad, integridad y disponibilidad, tanto de datos como de recursos informáticos que preste la organización. 
          .col-lg-4.my-3
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/8.png', alt='')
        h4.tb(data-aos="fade-down").mb-4 Las siguientes, son las principales vulnerabilidades presentes en un sistema informático:
        .titulo-sexto.color-acento-contenido
          h5 Tabla 1.
          span Familias de vulnerabilidades
        .row.justify-content-center.align-items-center        
          .col-12.up        
            .tabla-a.color-acento-contenido.mb-5(data-aos="fade-left") 
              table 
                tbody
                  tr.bgt1.text-center.text-bold
                    td Ámbitos físicos
                    td Ámbitos organizativos
                    td Ámbitos tecnológicos 
                  tr.bgw
                    td Falta de redundancia y de recursos a nivel de equipo.
                    td Falta de: 
                      ul.lista-ul.fa-ul.mb-0.mt-3
                        li 
                          i.fas.fa-project-diagram.c1
                          | Recursos humanos y personal cualificado.
                        li 
                          i.fas.fa-project-diagram.c1
                          | Comunicaciones.
                    td Fallos en: 
                      ul.lista-ul.fa-ul.mb-0.mt-3
                        li 
                          i.fas.fa-project-diagram.c1
                          | Los servicios y aplicaciones web y las bases de datos.
                        li 
                          i.fas.fa-project-diagram.c1
                          | Recurrencia y falta de supervisión de incidentes.                     
                  tr.bgw
                    td Acceso a salas de informática no seguras.
                    td Falta de: 
                      ul.lista-ul.fa-ul.mb-0.mt-3
                        li 
                          i.fas.fa-project-diagram.c1
                          | Controles periódicos.
                        li 
                          i.fas.fa-project-diagram.c1
                          | Documentos de procedimientos adaptados a la empresa.
                        li 
                          i.fas.fa-project-diagram.c1
                          | Medios relativos a los riesgos.                     
                    td Falta de:
                      ul.lista-ul.fa-ul.mb-0.mt-3
                        li 
                          i.fas.fa-project-diagram.c1
                          | Actualizaciones y parches de los sistemas operativos.
                        li 
                          i.fas.fa-project-diagram.c1
                          | Control suficiente sobre los programas malintencionados. 
                  tr.bgw
                    td Ausencia o mala estrategia de protección de datos.                                        
                    td Complejidad funcional.                                        
                    td Mala utilización del correo.                                        
              figcaption Nota: adaptada de Carpentier (2016).

        p(data-aos="fade-down").mb-4 La inseguridad en los sistemas informáticos incluye el estudio de los activos, las amenazas y los riegos. Para definir y demarcar el concepto de inseguridad informática, tenga en cuenta la especificación de los siguientes elementos:

        .bgw.p-4.brad(data-aos="fade-right") 
          SlyderA(tipo="b")
            .row.justify-content-center
              .col-md-5.my-3
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/10.png', alt='')            
              .col-md-7.my-3
                h4.tb Activos 
                p Pueden estar representados por equipos, #[i hardware], programas informáticos, patentes, procesos y actividades de negocio.   
            .row.justify-content-center
              .col-md-5.my-3
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/11.png', alt='')            
              .col-md-7.my-3
                h4.tb Amenazas 
                p Es alguien o algo que puede explotar una vulnerabilidad para obtener, modificar o impedir el acceso a un activo o comprometerlo. El conocimiento de los diferentes tipos de amenazas puede ayudar en la determinación de su peligrosidad y los controles apropiados para reducir su impacto potencial.
            .row.justify-content-center
              .col-md-5.my-3
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/12.png', alt='')            
              .col-md-7.my-3
                h4.tb Tipos de amenazas 
                ul.lista-ul.fa-ul.mb-0
                  li 
                    i.fas.fa-project-diagram.c1
                    span #[b Amenazas de #[i hardware]:] daño físico a dispositivos de red o a su respectivo cableado y estaciones de trabajo. 
                  li 
                    i.fas.fa-project-diagram.c1
                    span #[b Amenazas ambientales:] extremos de temperatura o extremos de humedad. 
                  li 
                    i.fas.fa-project-diagram.c1
                    span #[b Amenazas eléctricas:] perturbaciones de voltaje, suministro de voltaje insuficiente, y caída total de la alimentación. 
                  li 
                    i.fas.fa-project-diagram.c1
                    span #[b Amenazas de mantenimiento:] descarga electrostática, falta de repuestos críticos, cableado y etiquetado deficientes. 
            .row.justify-content-center
              .col-md-5.my-3
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/13.png', alt='')            
              .col-md-7.my-3
                h4.tb Riesgos 
                p Es cada posibilidad de que un evento crítico aparezca. Su evaluación permite establecer las acciones para reducir y mantener la amenaza a un nivel razonable y aceptable. Estos mismos pueden clasificarse en externos e internos.                

    Separador 
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.2 Clasificación de los ataques 
    .row.bg5.align-items-center.py-4.pb-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center.mb-4           
          .col-lg-8.my-3
            .bg6.p-4.brad.mb-4   
              p.mb-0(data-aos="fade-down") La mayoría de las amenazas en la red se encargan de revelar las vulnerabilidades de la seguridad en la red de datos. Las agresiones a las redes de comunicaciones se pueden determinar cómo acciones deliberadas en aras de corromper o violar su seguridad.
            h5(data-aos="fade-down") El intruso emplea algún tipo de ataque informático a la hora de establecer un acceso no autorizado al sistema y estas agresiones se pueden clasificar en dos grupos, así:
          .col-lg-4.my-3
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/14.png', alt='')            

        .row.justify-content-center.mb-4           
          .col-lg-5.my-3
            .bgw.text-center.brad1.h-100(data-aos="fade-right")
              img.img-w(data-aos="zoom-in")(src='@/assets/curso/temas/15.png', alt='')
              .p-4
                h4.tb(data-aos="fade-down") Ataques pasivos 
                p(data-aos="fade-down").mb-0 Este tipo de ataque consiste en monitorear los canales de comunicación sin alterar información alguna.
          .col-lg-5.my-3
            .bgw.text-center.brad1.h-100(data-aos="fade-left")
              img.img-w(data-aos="zoom-in")(src='@/assets/curso/temas/16.png', alt='')
              .p-4
                h4.tb(data-aos="fade-down") Ataques activos 
                p(data-aos="fade-down").mb-0 Este tipo de ataque engloba alguna modificación del flujo de datos o la creación de datos falsos.

          .col-lg-10.mt-4
            .bgw.p-4.brad.py-3 
              .row.justify-content-center.align-items-center         
                .col-lg-auto.my-3
                  img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/18.svg', alt='')            

                .col.my-3
                  p(data-aos="fade-down").mb-0 Los ataques pasivos están relacionados, principalmente, con el contenido del paquete y con el monitoreo del tráfico en red. El objetivo del ataque es capturar la información que está siendo transmitida, donde su principal objetivo es la vigilancia de la red a fin de descubrir vulnerabilidades a través del mapeo de la red y de los servicios prestados.  
        p(data-aos="fade-down") Este tipo de ataques también pueden ser llamados ataques de reconocimiento, los cuales suelen ser un requisito previo para que otros ataques obtengan acceso no autorizado a la red o interrumpan sus operaciones.  
        h5(data-aos="fade-down") Entre las herramientas de ataque de reconocimiento están las siguientes:
    .row.justify-content-center.mb-4 
      .col-lg-4.my-2
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/19.svg', alt='')
      .col-lg-8.my-2
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg13")
          div(titulo="Búsqueda de información en Internet") Pueden revelar información sobre quién es el dueño de un dominio en particular y qué direcciones han sido asignadas a ese dominio.  
          div(titulo="Barridos de <i>ping</i>") Técnica de escaneo de redes básicas que determina qué rango de direcciones IP corresponde a los #[i hosts] activos.
          div(titulo="Escaneo de puertos") Escaneo de un rango de números de puerto TCP o UDP en un host para detectar servicios abiertos.
          div(titulo="<i>Sniffers</i> de paquetes") Aplicación de #[i software] que utiliza una tarjeta de red en modo promiscuo para capturar todos los paquetes de red que se transmitan a través de una red de área local (LAN).

    .row.bg7.align-items-center.py-4.pb-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-start.mb-3   
          .col-auto(data-aos="flip-down")
            .list
              .list__item
                .list__item__icon
                  img(src='@/assets/curso/temas/icon.svg', alt='')
              .list__txt.bg8.p-0.px-4
                h4.mb-0 Ataques de activos 

        p(data-aos="fade-down") En este tipo de ataque, principalmente, se busca la alteración de los recursos donde se intenta borrar, añadir o modificar los datos que se transmiten en la red; igualmente se afecta la prestación de los servicios de la organización. Un atacante activo amenaza los tres pilares de la seguridad (confidencialidad, integridad y disponibilidad). 

        h5.mb-5(data-aos="fade-down") Los tipos de ataques activos más comunes son: 
        .bgw.p-4.brad
          LineaTiempoC.color-acento-contenido(text-small)
            .row.justify-content-center(titulo="Denegación del servicio ")
              .col-9.order-1.my-3
                h4 Denegación del servicio 
                p.mb-0 Estos envían un número excesivo de solicitudes en una red o en internet, lo que ocasiona que la calidad de funcionamiento del dispositivo de red que gestiona las solicitudes colapse, es así que los usuarios u organización se ven privados del acceso a las aplicaciones y procesos que normalmente se prestan. 
              .col-lg-auto.order-lg-2.my-3 
                img.img-a.img-t(src='@/assets/curso/temas/21.svg', alt='')
            .row.justify-content-center(titulo="<i>Phishing</i>")
              .col-9.order-1.my-3
                h4 Phishing
                p.mb-0 Es la capacidad de duplicar una página web a fin de usurpar la original de ahí el usuario que accede a dicha página se cree que es la auténtica.   
              .col-lg-auto.order-lg-2.my-3 
                img.img-a.img-t(src='@/assets/curso/temas/22.svg', alt='')
            .row.justify-content-center(titulo="<i>Spam</i>")
              .col-9.order-1.my-3
                h4 Spam
                p.mb-0 Envío de correo electrónico que puede ser enviado en forma individual o masivo, estos mensajes pueden contener información variada que no fue solicitada por el destinatario de la información.
              .col-lg-auto.order-lg-2.my-3 
                img.img-a.img-t(src='@/assets/curso/temas/23.svg', alt='')
            .row.justify-content-center(titulo="<i>Spoofing</i>")
              .col-9.order-1.my-3
                h4 Spoofing
                p.mb-0 Es la suplantación de identidad, se aplica la falsificación en una transmisión de datos donde el atacante por medio de agentes maliciosos se hace pasar por una entidad o un usuario a fin de obtener información privada o el uso de credenciales falsas. 
              .col-lg-auto.order-lg-2.my-3 
                img.img-a.img-t(src='@/assets/curso/temas/24.svg', alt='')
            .row.justify-content-center(titulo="<i>Main in the Middle</i>")
              .col-9.order-1.my-3
                h4 Main in the Middle
                p.mb-0 Se basa en la ubicación del atacante en medio de una comunicación entre dos entes, que busca leer o modificar la información transmitida entre las dos partes. 
              .col-lg-auto.order-lg-2.my-3 
                img.img-a.img-t(src='@/assets/curso/temas/25.svg', alt='')
            .row.justify-content-center(titulo="Código malicioso")
              .col-9.order-1.my-3
                h4 Código malicioso
                p.mb-0 Este puede ser representado en #[i hardware], #[i software] o #[i firmware] el cual es alterado intencionalmente con código no autorizado a fin de incorporar virus, troyanos, gusanos, entre otros #[i malware] que permitan vulnerar los sistemas informáticos. 
              .col-lg-auto.order-lg-2.my-3 
                img.img-a.img-t(src='@/assets/curso/temas/26.svg', alt='')
            .row.justify-content-center(titulo="<i>Hoax</i>")
              .col-9.order-1.my-3
                h4 Hoax
                p.mb-0 Estos mensajes principalmente se envían vía correo electrónico que suele pertenecer a una cadena de información que busca ser difundida en la red, su principal finalidad es la obtención de direcciones de correo electrónico, o congestión de la red y de los servidores de correo.
              .col-lg-auto.order-lg-2.my-3 
                img.img-a.img-t(src='@/assets/curso/temas/27.svg', alt='')


    .row.justify-content-start.mb-3.pt-5   
      .col-auto(data-aos="flip-down")
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/icon.svg', alt='')
          .list__txt.bg8.p-0.px-4
            h4.mb-0 Atacantes  

    .row.justify-content-center.align-items-center.mb-4           
      .col-lg-8.my-3
        p(data-aos="fade-down") Soriano (2014), define al atacante como el #[b.tb “Individuo que obtiene, o trata de obtener, permisos o acceso no autorizado al sistema de información”]. Se debe resaltar que no solo existen atacantes externos o intrusos, sino también se deben considerar a los individuos internos a la organización.      
        .bg9.p-4.brad.mb-4
          p.mb-0(data-aos="fade-down") Un atacante interno puede ser representado por cualquier usuario que pertenece a la organización y tiene acceso al sistema de información y a la infraestructura tecnológica de la red.  
        h5.tb(data-aos="fade-down") En relación con los atacantes, tenga en cuenta algunos aspectos destacados como:
      .col-lg-4.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/28.png', alt='') 

    .row.justify-content-center
      .col-lg-4.my-2
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/29.png', alt='')
      .col-lg-8.my-2
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg13")
          div(titulo="Espionaje") Este tipo de atacante principalmente realiza una tarea de espionaje en búsqueda de vulnerabilidades que puedan usar para acceder a datos, recursos y servicios al cual no tiene acceso autorizado poniendo en peligro a la información confidencial de la organización y así mismo, a los servicios que presta.
          div(titulo="Cuando son externos") Por su parte, un atacante externo es generalmente un individuo o sistema de inteligencia artificial que no tiene ninguna relación directa con la empresa, sino que busca principalmente acceder al sistema informático y de la red, violando la seguridad aprovechando las vulnerabilidades que se presenten.
          div(titulo="<i>Hacking</i>") Usualmente se usa el término “#[i hackear]” que según el MinTIC (2021) es “el ingreso ilegal a computadores, páginas y redes sociales con el objetivo de robar información, suplantar la identidad del dueño, beneficiarse económicamente o protestar”, es así como al individuo que realiza dichas actividades usualmente se le denomina #[i hacker].                                              
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
