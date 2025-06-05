// Confetti.vue
<script setup lang="ts">
import { onMounted } from 'vue';

/* 纸屑 */
onMounted(() => {
  import('canvas-confetti').then(module => {
    const confetti = module.default;
    confetti({
      particleCount: 100,
      spread: 170,
      origin: { y: 0.6 },
    });
  });
});
</script>
