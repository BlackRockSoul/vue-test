<script setup lang="ts">
import { computed } from 'vue';
import { RouterView, useRoute } from 'vue-router';

const route = useRoute();
const currentRouteName = computed(() => [route.path.split('/')?.[1] || '/']);
</script>

<template>
  <a-layout class="min-h-screen">
    <a-layout-header class="flex items-center justify-between">
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="32" height="32" />

      <a-menu
        v-model:selectedKeys="currentRouteName"
        theme="dark"
        mode="horizontal"
        :style="{ lineHeight: '64px' }"
      >
        <a-menu-item key="/"><router-link to="/">Home</router-link></a-menu-item>
        <a-menu-item key="about"><router-link to="/about">About</router-link></a-menu-item>
      </a-menu>
    </a-layout-header>

    <a-layout-content class="container mx-auto mt-4">
      <RouterView />
    </a-layout-content>
  </a-layout>
</template>
