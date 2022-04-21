<template lang="pug">
.linea-tiempo-b.py-5
  .linea-tiempo-b__line-row.row
    .col-5.d-none.d-md-block
    .col-3.col-md-2
      .linea-tiempo-b__line
    .col-9.col-md-5
  
  .linea-tiempo-b__line-row.row
    .col-5.d-none.d-md-block
    .col-3.col-md-2
      .linea-tiempo-b__line
    .col-9.col-md-5

  .linea-tiempo-b__row.row.align-items-center(
    v-for="(item,index)  in computedData"
    :ref="'linea-tiempo-item-'+index"
  )
    .col-5.d-none.d-md-block
    .col-3.col-md-2
      .linea-tiempo-b__icon
        img(:src="item.icono")

    .col-9.col-md-5
      .linea-tiempo-b__content
        h3.mb-2(v-html="item.titulo")
        span(v-html="item.texto")
        a.anexo.mb-4.mt-5(
          :href="item.linkurl"
          target="_blank"
        )
          div.anexo__icono
            img(:src="item.iconlink")
          div.anexo__texto
            p(v-html="item.textlink")

</template>

<script>
export default {
  name: 'LineaTiempoE',
  props: {
    datos: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    computedData() {
      const data = this.datos
      return data.map(item => {
        let linkurl = item.descarga ? this.obtenerLink(item.link) : item.link
        return {
          titulo: item.titulo,
          texto: item.texto,
          icono: item.icono,
          iconlink: item.iconlink,
          textlink: item.textlink,
          linkurl: linkurl,
        }
      })
    },
  },
}
</script>

<style lang="sass"></style>
