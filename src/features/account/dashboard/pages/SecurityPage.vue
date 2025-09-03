<script setup lang="ts">

import Header from "../components/Header.vue";
import Breadcrumb from "../components/Breadcrumb.vue";
import Item from "../components/security/Item.vue";
import {SecurityItems} from "../models/SecurityItem";
</script>

<template>
  <div class="max-w-[600px] w-3/5 mx-auto">
    <Breadcrumb :items="[{title: 'Login & Security', href: '/security'},]"/>
    <Header title="Login & Security"/>
    <div class="container">
      <Item v-for="(item, index) in SecurityItems" :key="index" v-bind="item"
            :className="{'last-item': index === SecurityItems.length - 1}"
      />
    </div>
  </div>
</template>

<style scoped>
.container {
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  overflow: hidden;
}

.last-item {
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
}
</style>