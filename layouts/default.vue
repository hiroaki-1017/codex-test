<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>

<template>
  <div class="app-shell">
    <header class="site-header">
      <NuxtLink to="/" class="brand">My Portfolio</NuxtLink>
      <nav class="site-nav">
        <NuxtLink to="/profile">Profile</NuxtLink>
        <NuxtLink to="/portfolio">Portfolio</NuxtLink>
        <NuxtLink to="/contact">Contact</NuxtLink>
      </nav>
    </header>

    <main>
      <slot />
    </main>

    <footer class="site-footer">
      <small>&copy; {{ currentYear }} My Portfolio. All rights reserved.</small>
    </footer>
  </div>
</template>

<style scoped>
.app-shell {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 1.5rem;
  background: rgba(15, 23, 42, 0.85);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(148, 163, 184, 0.2);
}

.brand {
  font-size: 1.125rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.site-nav {
  display: flex;
  gap: 1.25rem;
  font-weight: 600;
}

.site-nav :deep(a) {
  color: var(--color-text);
  position: relative;
  transition: color 0.2s ease;
}

.site-nav :deep(a)::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -0.35rem;
  width: 100%;
  height: 2px;
  background: var(--color-accent);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.2s ease;
}

.site-nav :deep(a):hover::after,
.site-nav :deep(.router-link-active)::after {
  transform: scaleX(1);
}

main {
  flex: 1;
}

.site-footer {
  margin-top: auto;
  padding: 2rem 1.5rem 3rem;
  text-align: center;
  color: rgba(226, 232, 240, 0.7);
}

@media (max-width: 640px) {
  .site-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem;
  }

  .site-nav {
    width: 100%;
    justify-content: space-between;
  }
}
</style>
