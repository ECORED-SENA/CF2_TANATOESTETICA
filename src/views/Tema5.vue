<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Laboratorio de tanatopraxia

    .row.justify-content-center.mb-2
      .col-lg-8.mb-4
        p.mb-4 Es el lugar más sagrado de la funeraria, porque allí se dan los últimos cuidados físicos de las personas fallecidas que las familias han puesto en su custodia. Este espacio arquitectónico está dotado con equipos, instalaciones e insumos especializados para iniciar y finalizar un proceso de preservación del cuerpo de un fallecido.
        .cajon.color-secundario.p-4.mb-0
          p.mb-0 El
            b laboratorio de tanatopraxia es un área restringida de la funeraria,
            b-none  solo está permitido el acceso a este espacio arquitectónico al personal autorizado y avalado, según lineamientos técnicos y sanitarios, es decir, el laboratorio, también llamado sala de embalsamamiento,
            b está amueblado con equipos especializados, que están sujetos a verificación y uso de los tanatopráctores y personal autorizado de la funeraria.
      .col-lg-4.mb-4.align-self-center
        figure
          img.mx-auto(src='@/assets/curso/t5/img1.jpg', alt='Laboratorio de tanatopraxia', style='width:380px')


    p.mb-4 Ahora, con lo mencionado hasta el momento, es importante que, como aprendiz, continúe con la lectura de este componente, para la identificación de los implementos necesarios que en cualquier momento utilizará en una sesión de tanatopraxia o tanatoestética. Adelante con su exploración y aprendizaje.

    Separador

    #t_5_1.titulo-segundo
      h2 5.1 Insumos y elementos usados en tanatopraxia y tanatoestética

    .bloque-texto-a.color-secundario.p-4.p-md-5.mb-5
      .row.m-0.align-items-center.justify-content-center
        .col-lg-3.mb-4.mb-lg-0
          figure
            img(src='@/assets/curso/t5/img2.svg', alt='imagen ambiental', style='width:335px;').mx-auto
        .col-lg-9
          .bloque-texto-a__texto.p-4
            p.mb-4 Los insumos que se usan en
              b  tanatopraxia
              b-none  son, en su mayoría, fabricados en acero y enchapados en níquel o cromo, para protegerlos de la oxidación y agentes químicos. Están hechos para resistir el calor y tienen una larga vida útil.  Se recomienda que observe el siguiente recurso educativo para que identifique las
              b  características de los insumos y elementos en el momento de una sesión de tanatopraxia o tanatoestética.
            .llamado-pdf
              .row.justify-content-end
                .col-lg-10
                  a.anexo.mb-4(:href="obtenerLink('/downloads/insumosyelementos.pdf')" target="_blank")
                    .anexo__icono
                      img(src="@/assets/template/icono-pdf.svg")
                    .anexo__texto
                      p.mb-0
                        b.color-texto Anexo.
                        b-none.color-texto Insumos y elementos usados en tanatopraxia y tanatoestética.

</template>
<script>
import VueCompareImage from 'vue-compare-image'
export default {
  name: 'Tema5',
  components: {
    VueCompareImage,
  },
  data: () => ({}),
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

<style lang="sass" scoped></style>
