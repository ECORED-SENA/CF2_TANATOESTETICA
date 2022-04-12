<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Químicos en tanatopraxia

    .row.align-items-center.mb-5
      .col-lg-8
        p <b>Los químicos que se emplean para embalsamar,</b> llamados fluidos de embalsamamiento <b><span class="cp">están compuestos por diferentes sustancias químicas que en diferentes concentraciones logran efectos diferentes.</span></b> Se habla que <b>cada componente químico individual tiene su función específica, el cual reacciona según su concentración, distribución, difusión y actividad individual.</b> La mayoría de las <b><span class="cac">sustancias químicas</span> para el embalsamamiento se basan en el formaldehído y metanol como materia prima principal.</b>
        .cajon.color-secundario.p-4
          p.mb-0 Tradicionalmente <b>en Colombia se ha utilizado el formol como preservante, en algunos sitios utilizándolo puro, mezclado con agua y/u otros químicos.</b> De cualquier manera, <b><span class="cp">se debe seguir algún criterio profesional para prever posibles reacciones en el proceso de embalsamamiento, pero nunca se debe utilizar libremente.</span></b> Todo lo anterior es llamado <b><span class="cac">tanatoquímica,</span></b> para conocer todo lo relacionado con esta es necesario preguntarse qué es la bioquímica.
      .col-lg-4.order-first.order-lg-last
        figure
          img(src='@/assets/curso/t4/f1.png' alt='Químicos para embalsamar')

    .bloque-texto-a.color-secundario.p-4.p-md-5.mb-5
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
          figure(data-aos="fade-right")
            img(src='@/assets/curso/t4/f2.svg' alt='imagen relacionada')
        .col-lg-8
          .bloque-texto-a__texto.p-4
            p.mb-0 <b>La bioquímica es el estudio de los procesos químicos relacionados con los organismos vivos.</b> Su enfoque principal es <b><span class="cp">la comprensión de cómo las diferentes moléculas biológicas dan lugar a los procesos que ocurren dentro de las células vivas.</span></b> Si el tanatopractor logra entender la naturaleza de las moléculas biológicas en el cuerpo humano tendrá una mejor comprensión de las reacciones enzimáticas, <b>la influencia de los conservantes y demás productos químicos en el cuerpo.</b>

    .row.align-items-center.mb-4
      .col-lg-7
        p Comprendido lo anterior, podrá iniciar con <b>la comprensión del proceso de descomposición desde el momento de la muerte; este proceso comienza con el rompimiento de carbohidratos, continuando la ruptura de las proteínas a través de un curso descrito como putrefacción.</b> A medida que ocurre esto, los lípidos y las grasas se descomponen también en pequeñas subunidades. Este proceso no se puede detener, pero ciertamente puede ser disuadido el tiempo suficiente con productos químicos de embalsamamiento para que el cuerpo pueda verse después de la muerte. <b>Las soluciones de embalsamamiento se componen de una variedad de preservantes (comúnmente aldehídos), productos sanitizadores, desinfectantes y otros aditivos que se inyectan en el cuerpo para detener temporalmente la descomposición que comenzó en el momento de la muerte <span class="cp">(Damon de la Cruz & Robert Holmes, 2018).</span></b>
      .col-lg-5
        figure(data-aos="fade-right")
          img(src='@/assets/curso/t4/f3.png' alt='Proceso de descomposición')
    p Definida la bioquímica, es necesario que entienda una sustancia química como los elementos y compuestos químicos y sus mezclas, ya sean naturales o sintéticas, tales como los obtenidos a través de los procesos de producción
      b.cp (Convenio de la Organización Internacional del Trabajo, 1990).
      b Los químicos se dividen en dos grupos,
      b.cp el primer grupo son los productos químicos orgánicos,
      b que son aquellos que contienen carbono, por ejemplo, el alcohol, etanol, acetatos, aminas, nitrilos, sulfatos, ésteres y fosfatos.
    .row.align-items-center.mb-4
      .col-lg-4
        figure(data-aos="fade-right")
          img(src='@/assets/curso/t4/f4.svg' alt='Productos químicos inorgánicos')
      .col-lg-8
        p
          b.cp El segundo grupo son los productos químicos inorgánicos,
          b que hacen referencia a todos los demás elementos de la tabla periódica y sus compuestos, por ejemplo, el ácido sulfúrico y el amoniaco.
          | Estas sustancias químicas peligrosas
          b.cac representan riesgos para el personal que las maneja, en este caso el tanatopractor.
          b Las principales características de las sustancias químicas peligrosas son: su toxicidad, inflamabilidad y explosividad, reactividad violenta y radioactividad,
          | y el grado de riesgo depende de factores como:
        ol.lista-ol--cuadro.lista-ol--separador
                  li
                    .lista-ol--cuadro__vineta.fcp
                      span 1
                    | Estado físico de las sustancias.
                  li
                    .lista-ol--cuadro__vineta.fcp
                      span 2
                    | Concentración de la sustancia.
                  li
                    .lista-ol--cuadro__vineta.fcp
                      span 3
                    | Condiciones del puesto y área de trabajo.
                  li
                    .lista-ol--cuadro__vineta.fcp
                      span 4
                    | Susceptibilidad del trabajador, en este caso del tanatopractor.
                  li
                    .lista-ol--cuadro__vineta.fcp
                      span 5
                    | Vías de ingreso de las sustancias químicas al cuerpo humano. Ellas pueden ser en vía respiratoria, dérmica, digestiva o parenteral (a través de heridas, llagas, etc.).
    .cajon.color-secundario.p-4.mb-5
      p.mb-0 Por todo lo anterior, es importante realizar un manejo adecuado y seguro de las sustancias químicas, haciendo uso de los sistemas de información, normas de rotulado y señalización, que ayudarán al tanatopractor a realizar la identificación de los riesgos bajo el conocimiento de la naturaleza química de estas y así tomar las medidas de prevención y protección necesarias, tales como, identificación del producto y su producto, estado físico y su concentración.


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

<style lang="sass" scoped></style>
