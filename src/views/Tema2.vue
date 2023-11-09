<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 2
      h1 #[i Software] malicioso

    p(data-aos="fade-down") Mantener la seguridad de la red y de la información que comparten los usuarios, requiere de vigilancia por parte de los profesionales responsables de la seguridad en redes, donde es de vital importancia estar atentos a los diferentes ataques y evolución de las amenazas.
    .row.bg10.align-items-center.py-4.pb-5
      .col-lg-12.col-12.px-lg-5.px-4    
        .row.justify-content-center.align-items-center.mb-4         
          .col-lg-4.my-3
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/30.png', alt='')
          .col-lg-8.my-3      
            .row.justify-content-center.align-items-center         
              .col-lg-auto.my-3.d-none.d-lg-block
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/31.svg', alt='')
              .col.my-3
                p(data-aos="fade-down").mb-0 El estudio de las diferentes vulnerabilidades de los dispositivos de red y sus correspondientes aplicaciones requieren una atención especial a fin de estar preparados de los posibles ataques que provengan desde el exterior, así como el interior de las organizaciones, captando errores y falencias en las conexiones en la red. 

            .bloque-texto-b.color-secundario.p-4(data-aos="fade-left")
              .bloque-texto-b__texto
                i.fas.fa-quote-left
                h4.mb-2 Las principales vulnerabilidades de los dispositivos finales son los ataques de virus, gusanos y troyanos 
                span - Ariganello (2020) (p. 291). 
                i.fas.fa-quote-right
        .bgw.p-4.brad 
          .row.justify-content-center.align-items-center
            .col.my-3.order-1            
              h4(data-aos="fade-down") Tenga en cuenta:
              ul.lista-ul.fa-ul.mb-0.mt-4.ps-3(data-aos="fade-down")
                li 
                  i.fas.fa-project-diagram.c1
                  | Estos programas maliciosos son solo una pequeña gota en el inmenso océano de amenazas a una red de información. 
                li 
                  i.fas.fa-project-diagram.c1
                  | Se hace necesario entonces la implementación de todo tipo de mecanismo de seguridad de acceso a la red. 
                li 
                  i.fas.fa-project-diagram.c1
                  span Los piratas informáticos solo requieren de un computador y #[i software] especializado para inmiscuirse en la red de información. 
                li 
                  i.fas.fa-project-diagram.c1
                  | No es necesario ningún contacto físico en ella. 
                li 
                  i.fas.fa-project-diagram.c1
                  span El #[i malware] o #[i software] malicioso se refiere a todos aquellos programas cuyo único propósito es realizar tareas dañinas afectando el #[i software] del sistema y averiando el correcto uso del #[i hardware].
                li 
                  i.fas.fa-project-diagram.c1
                  span El #[i malware] o #[i software] malicioso se instala en la máquina objetivo sin consentimiento del usuario. 
                li 
                  i.fas.fa-project-diagram.c1
                  span Cuando un #[i malware] se ejecuta puede alterar algunas prestaciones de la máquina infectada como lo puede ser la velocidad, las tareas que el usuario desea realizar y obtener información crítica del sistema.                
            .col-lg-auto.my-3.order-lg-2
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/33.svg', alt='')

    Separador 
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 2.1 Clasificación de #[i malware] 
    p(data-aos="fade-down").mb-4 Para realizar una categorización del #[i malware] y de la proliferación de las amenazas presentes en la red, es necesario conocerlos, estos son:

    .bg11.mb-5
      .row.justify-content-center.align-items-center        
        .col-lg-4
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/35.svg', alt='')
        .col-lg-8.my-3    
          SlyderF.text-center.px-3(columnas="col-lg-6")(data-aos="fade-left")
            .tarjeta.color-acento-botones.bg12.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img.img-a.img-t(src='@/assets/curso/temas/36.svg' alt='')
              h2 Código malicioso 
              p.mb-0 Son aplicaciones que pueden ejecutar dos funciones: primero, la posibilidad de replicarse o reproducirse y, segundo, la posibilidad de ataque mediante una carga nociva. Al código malicioso normalmente se le discrimina con el nombre de virus.  
            .tarjeta.color-acento-botones.bg12.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img.img-a.img-t(src='@/assets/curso/temas/37.svg' alt='')
              h2 Virus 
              p.mb-0 Bloque de código que se introduce en un huésped para propagarse, pero hay que ejecutarlo para que se active. Es diferente del gusano (#[i worm]), que se propaga por el correo electrónico o por fallos de la red. El gusano no contiene, necesariamente, una carga nociva.  
            .tarjeta.color-acento-botones.bg12.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img.img-a.img-t(src='@/assets/curso/temas/38.svg' alt='')
              h2 Troyanos 
              p.mb-0 Hay algunos programas furtivos dentro de los cuales se encuentran, principalmente, el troyano o “caballo de troya”. Se hacen pasar por archivos legítimos para engañar a víctimas para que, al clicarlos, se activen o instalen. 
            .tarjeta.color-acento-botones.bg12.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img.img-a.img-t(src='@/assets/curso/temas/39.svg' alt='')
              h2.fst-italic Spyware 
              p.mb-0 Es una subcategoría del troyano; es un #[i software] que se instala sin que el usuario reciba una constancia de tal acción. Suele recopilar información y compartirla con terceros.  
            .tarjeta.color-acento-botones.bg12.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img.img-a.img-t(src='@/assets/curso/temas/40.svg' alt='')
              h2.fst-italic Ransomware  
              p.mb-0 Tipo de #[i malware] que basa su funcionamiento en el robo o secuestro de información por la que se suele cobrar un rescate y, así, restaurar el acceso a los datos y evitar posibles daños posteriores. 
    Separador 
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 2.2 Ciclo de vida de un virus 

    .row.justify-content-center.align-items-center.mb-4         
      .col-lg-auto.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/41.svg', alt='')
      .col.my-3
        p(data-aos="fade-down").mb-0 Con la proliferación de diversidad de virus informáticos, la seguridad del sistema se ha vuelto prioritaria. Los virus tienden a ser destructivos y se propagan a través de las redes haciendo copias de sí mismo, cuando llegan a un dispositivo, los virus normalmente empiezan a infectar y replicarse en el equipo destino del ataque o puede permanecer inactivo a la espera de que el usuario ejecute el programa infectado. 
    p(data-aos="fade-down") Estas son las fases por las que puede pasar un virus informático:       
    .titulo-sexto.color-acento-contenido(data-aos="fade-right")
      h5 Figura 1.
      span Fases del virus informático
    .bg14.p-4.mb-4
      img.img-a.img-t.d-block.d-lg-none(data-aos="zoom-in")(src='@/assets/curso/temas/43.svg', alt='Esquema gráfico que da cuenta de las fases de un virus informático.')
      img.img-a.img-t.d-none.d-lg-block(data-aos="zoom-in")(src='@/assets/curso/temas/42.svg', alt='Esquema gráfico que da cuenta de las fases de un virus informático.')      


    p(data-aos="fade-down").mt-5 Conozca otros aspectos clave sobre los virus informáticos, consultando el video que, a continuación, se propone:

    .row.justify-content-center.align-items-center       
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/x56FT_OVARQ?si=Iw90gfpqp8CL-65S" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)  
        figcaption Video. Ataques a la seguridad de la red
</template>

<script>
export default {
  name: 'Tema2',
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
