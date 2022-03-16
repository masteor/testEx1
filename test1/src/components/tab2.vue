<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>val</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(items, i) in textarea" :key="i">
          <td>{{items.id}}</td>
          <td>{{items.val}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<!--<li v-for="item in textarea" :key="item.id">
{{ item.val }}
</li>-->

<script>
export default {
  name: "tab2",
  data() {
    return {
      textarea: []
    }
  },

  created() {
    this.$data.textarea = this.$store.state.data
  }
}
</script>

<style scoped>

</style>