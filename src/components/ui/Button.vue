<template>
  <button class="px-4 py-2 rounded-md bg-sky-600 text-white hover:bg-sky-700" v-bind="$attrs" @click="$emit('click')">
    <slot>Button</slot>
  </button>
</template>
