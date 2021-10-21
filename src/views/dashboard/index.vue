<template>
  <div class="dashboard-container">
    <div class="dashboard-text">account: {{ account }}</div>
    <div class="dashboard-text">roles: {{ roles }}</div>
    <div class="dashboard-text">Id: {{ Id }}</div>
    <div class="dashboard-text">account: {{ account }}</div>
    <div class="dashboard-text">token: {{ token }}</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters([
      'account',
      'roles',
      'Id',
      'token'
    ])
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
