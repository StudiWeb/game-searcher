<template>
  <div class="banner p-6">
      <div class="text-center">
          <div class="text-6xl text-primary font-bold mb-4">Game searcher</div>
          <p class="mt-0 mb-4 line-height-3 text-center mx-auto text-white" style="max-width: 500px">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua.
          </p>
          <span class="p-input-icon-left">
              <i class="pi pi-search" />
              <InputText v-model="title" placeholder="Search" class="w-30rem" />
          </span>
          <div class="flex justify-content-center align-items-center mt-4">
              <a href="https://www.apple.com" class="text-white mr-3"
              ><i class="pi pi-apple text-2xl"></i></a
              ><a href="https://play.google.com" class="text-white mr-3"
          ><i class="pi pi-android text-2xl"></i></a
          ><a href="https://www.facebook.com" class="text-white"
          ><i class="pi pi-facebook text-2xl"></i
          ></a>
          </div>
      </div>
  </div>
</template>

<script>
import {useGameListStore} from "@/stores/gameList";
import { mapActions } from 'pinia'
export default {
    data() {
        return {
            title: null
        }
    },

    watch: {
        title(value) {
            this.searchGamesByTitle(value)
        }
    },

    methods: {
        ...mapActions(useGameListStore, ['searchGamesByTitle']),
    }
}
</script>