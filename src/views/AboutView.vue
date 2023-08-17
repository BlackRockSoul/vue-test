<script lang="ts" setup>
import { useCounterStore } from '@/stores/counter';
import { storeToRefs } from 'pinia';
import { computed, ref } from 'vue';

const store = useCounterStore();

const { count, doubleCount } = storeToRefs(store);
const { increment } = store;

const oneMoreCounter = ref<number>(0);
const increment2 = () => {
  oneMoreCounter.value++;
};
const oneMoreCounter2 = computed(() => oneMoreCounter.value * 2);
</script>

<template>
  <div class="about flex flex-col items-start text-start justify-center">
    <h1>This is an about page</h1>

    <div>
      <h2>{{ count }}</h2>

      <h2>{{ doubleCount }}</h2>

      <a-button @click="increment">Increment</a-button>
    </div>

    <div>
      <h2>{{ oneMoreCounter }}</h2>

      <h2>{{ oneMoreCounter2 }}</h2>

      <a-button @click="increment2">Increment</a-button>
    </div>
  </div>
</template>
