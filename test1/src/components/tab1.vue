<template>
  <div>
    tab1
    <textarea v-model="textarea"></textarea>
    <button v-on:click="send">Отправить</button>
  </div>
</template>

<script>
import ax from 'axios'

export default {
  name: "tab1",
  data() {
    return {
      textarea: '[{"id":1,"val":10},{"id":2,"val":11},{"id":3,"val":12}]'
    }
  },
  methods: {
    send() {
      ax.post('http://localhost:8000/api/receive',
          JSON.stringify({data: JSON.parse(this.textarea)}),
          {
            headers: {
              'Content-Type': 'application/json'
            }
          }
      ).then(response => {
        if (response.status === 200) {
          this.$store.commit('changeData', response.data)
          console.log(response.data)
        }
          })
          .catch(e => {
        console.log(e)
      })
    }
  }
}


</script>

<style scoped>

</style>