<script setup lang="ts">
const route = useRoute();

const menuItems = [
  { label: 'Profile', to: '/profile' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Contact', to: '/contact' }
];
</script>

<template>
  <div class="profile-layout">
    <div class="profile-layout__glow profile-layout__glow--one" aria-hidden="true"></div>
    <div class="profile-layout__glow profile-layout__glow--two" aria-hidden="true"></div>

    <header class="profile-layout__header">
      <p class="profile-layout__subtitle">I am</p>
      <h1 class="profile-layout__title">PIKICHAN.</h1>
    </header>

    <main class="profile-layout__main">
      <slot />
    </main>

    <nav class="profile-layout__menu" aria-label="Main navigation">
      <span class="profile-layout__menu-line" aria-hidden="true"></span>
      <ul>
        <li v-for="item in menuItems" :key="item.to">
          <NuxtLink :to="item.to" :class="{ active: route.path === item.to }">
            <span>{{ item.label }}</span>
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style scoped>
.profile-layout {
  position: relative;
  min-height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: clamp(2.5rem, 6vw, 4.5rem) clamp(1.5rem, 6vw, 4.5rem) clamp(3rem, 8vw, 5.5rem);
  background: radial-gradient(140% 95% at 10% 5%, rgba(255, 255, 255, 0.25) 0%, rgba(56, 119, 255, 0.2) 38%, rgba(19, 40, 112, 0.85) 100%),
    linear-gradient(140deg, #7fb3ff 0%, #4679f5 48%, #1c2d80 100%);
  color: #f8fbff;
}

.profile-layout::before,
.profile-layout::after {
  content: '';
  position: absolute;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.45);
  opacity: 0.6;
  pointer-events: none;
}

.profile-layout::before {
  width: clamp(360px, 50vw, 520px);
  height: clamp(360px, 50vw, 520px);
  left: clamp(-220px, -14vw, -120px);
  top: clamp(40px, 12vh, 120px);
  border-bottom-color: transparent;
  border-right-color: transparent;
  transform: rotate(-15deg);
}

.profile-layout::after {
  width: clamp(220px, 38vw, 360px);
  height: clamp(220px, 38vw, 360px);
  left: clamp(-120px, -10vw, -60px);
  top: clamp(320px, 26vh, 380px);
  border-left-color: transparent;
  border-top-color: transparent;
  transform: rotate(-30deg);
}

.profile-layout__glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(120px);
  opacity: 0.45;
  pointer-events: none;
}

.profile-layout__glow--one {
  width: clamp(280px, 40vw, 520px);
  height: clamp(280px, 40vw, 520px);
  top: clamp(-120px, -8vw, -40px);
  right: clamp(-120px, -10vw, -40px);
  background: rgba(135, 200, 255, 0.5);
}

.profile-layout__glow--two {
  width: clamp(320px, 55vw, 640px);
  height: clamp(320px, 55vw, 640px);
  bottom: clamp(-220px, -12vw, -80px);
  right: clamp(-200px, -16vw, -60px);
  background: rgba(54, 119, 255, 0.35);
}

.profile-layout__header {
  text-align: center;
  margin-bottom: clamp(2rem, 5vw, 3.5rem);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  z-index: 1;
}

.profile-layout__subtitle {
  font-size: clamp(1rem, 2.4vw, 1.5rem);
  margin: 0 0 0.25rem;
  font-weight: 500;
  opacity: 0.85;
}

.profile-layout__title {
  font-size: clamp(2.5rem, 6vw, 3.75rem);
  margin: 0;
  font-weight: 700;
  letter-spacing: 0.16em;
}

.profile-layout__main {
  width: min(980px, 100%);
  z-index: 1;
}

.profile-layout__menu {
  position: absolute;
  top: 50%;
  right: clamp(0.5rem, 4vw, 3.5rem);
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  gap: 1.25rem;
  z-index: 1;
}

.profile-layout__menu-line {
  display: block;
  width: 1px;
  height: clamp(160px, 32vh, 240px);
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.8) 48%, rgba(255, 255, 255, 0) 100%);
}

.profile-layout__menu ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.profile-layout__menu a {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.7);
  letter-spacing: 0.35em;
  text-transform: uppercase;
  font-size: 0.82rem;
  transition: color 0.2s ease;
  transform: rotate(90deg);
}

.profile-layout__menu a::after {
  content: '';
  position: absolute;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.6);
  bottom: -18px;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  transition: opacity 0.2s ease;
}

.profile-layout__menu a:hover,
.profile-layout__menu a:focus-visible,
.profile-layout__menu a.active {
  color: #ffffff;
}

.profile-layout__menu a.active::after,
.profile-layout__menu a:hover::after,
.profile-layout__menu a:focus-visible::after {
  opacity: 1;
}

@media (max-width: 900px) {
  .profile-layout__menu {
    position: static;
    transform: none;
    margin-top: clamp(3rem, 9vw, 4.5rem);
  }

  .profile-layout__menu-line {
    display: none;
  }

  .profile-layout__menu a {
    transform: none;
    letter-spacing: 0.08em;
  }

  .profile-layout__menu ul {
    flex-direction: row;
    gap: 1.25rem;
  }
}

@media (max-width: 640px) {
  .profile-layout {
    padding: 2.5rem 1.25rem 3.5rem;
  }

  .profile-layout__title {
    letter-spacing: 0.1em;
  }
}
</style>
