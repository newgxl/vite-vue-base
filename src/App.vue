<script setup lang="ts">
import { RouterView } from "vue-router";
// import { text } from "@/api/login/login"
// text().then((res) => {
//   console.log("res", res)
// })
</script>
<template>
  <RouterView v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </RouterView>
</template>
<style lang="scss" scoped></style>
