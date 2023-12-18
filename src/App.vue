<template>
    <div class="flex">
        <AppMenu />
        <RouterView />
    </div>
</template>

<script>
import AppMenu from "@/components/AppMenu.vue";

export default {
    components: {
        AppMenu
    }
}
</script>

<style>

body {
  margin: 0;
  color: #fff;
  background-color: #0D000B;
}
</style>
