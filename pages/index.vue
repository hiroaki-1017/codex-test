<script setup lang="ts">
const router = useRouter();
const heroLines = [
  'クリエイティブを形にし',
  'ストーリーを届ける',
  'ポートフォリオへようこそ'
];
let redirectTimer: ReturnType<typeof setTimeout> | null = null;

useHead({
  title: 'Top | Portfolio Site'
});

onMounted(() => {
  redirectTimer = setTimeout(() => {
    router.push('/profile');
  }, 4500);
});

onBeforeUnmount(() => {
  if (redirectTimer) {
    clearTimeout(redirectTimer);
  }
});
</script>

<template>
  <section class="hero">
    <div class="hero__content">
      <p class="eyebrow">Welcome</p>
      <h1 class="headline">
        <span
          v-for="(line, index) in heroLines"
          :key="line"
          class="headline__line"
          :style="{ animationDelay: `${index * 0.75}s` }"
        >
          {{ line }}
        </span>
      </h1>
      <p class="subcopy">
        数秒後にプロフィールページへ遷移します。スクロールやナビゲーションで他のページにもアクセスできます。
      </p>
    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: calc(100vh - 140px);
  display: grid;
  place-items: center;
  text-align: center;
}

.hero__content {
  backdrop-filter: blur(16px);
  background: rgba(15, 23, 42, 0.55);
  padding: 3.5rem 3rem;
  border-radius: 24px;
  border: 1px solid rgba(148, 163, 184, 0.25);
  box-shadow: 0 25px 55px rgba(15, 23, 42, 0.55);
}

.eyebrow {
  letter-spacing: 0.42em;
  text-transform: uppercase;
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: rgba(148, 163, 184, 0.9);
}

.headline {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  margin: 0 0 1.5rem;
  font-size: clamp(2.3rem, 6vw, 3.75rem);
  line-height: 1.15;
}

.headline__line {
  opacity: 0;
  transform: translateY(25px);
  animation: rise-and-glow 0.85s ease forwards;
}

.subcopy {
  margin: 0;
  color: rgba(226, 232, 240, 0.8);
}

@keyframes rise-and-glow {
  0% {
    opacity: 0;
    transform: translateY(25px);
  }
  60% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 1;
    text-shadow: 0 0 25px rgba(56, 189, 248, 0.45);
  }
}

@media (max-width: 600px) {
  .hero {
    padding: 2rem 1rem;
  }

  .hero__content {
    padding: 2.5rem 1.75rem;
  }
}
</style>
