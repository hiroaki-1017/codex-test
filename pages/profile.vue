<script setup lang="ts">
const skills = [
  'UI/UXデザイン',
  'Webフロントエンド開発',
  'アニメーション実装',
  'ブランドコミュニケーション'
];

useHead({
  title: 'Profile | Portfolio Site'
});
</script>

<template>
  <section class="profile">
    <h1>Profile</h1>
    <p>
      ここに自己紹介文が入ります。経歴や得意分野、制作におけるこだわりなどを自由に加筆してポートフォリオの核となる情報を伝えましょう。
    </p>

    <div class="profile__grid">
      <article class="profile__card">
        <h2>About</h2>
        <p>
          デザインと開発の両面から体験設計を行うフロントエンドエンジニアです。ビジュアルと使いやすさのバランスを大切に、ブランドストーリーを魅力的に伝えるUIを設計します。
        </p>
      </article>
      <article class="profile__card">
        <h2>Skills</h2>
        <ul>
          <li v-for="skill in skills" :key="skill">{{ skill }}</li>
        </ul>
      </article>
      <article class="profile__card">
        <h2>Values</h2>
        <p>
          ユーザー視点で課題を捉え、素早いプロトタイピングと継続的な改善で最適解を導きます。チームとのコミュニケーションを重視し、共通のビジョンを形にすることがモットーです。
        </p>
      </article>
    </div>
  </section>
</template>

<style scoped>
.profile {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.profile__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
}

.profile__card {
  background: rgba(15, 23, 42, 0.6);
  border: 1px solid rgba(148, 163, 184, 0.25);
  border-radius: 20px;
  padding: 1.75rem;
  box-shadow: 0 15px 35px rgba(15, 23, 42, 0.45);
}

.profile__card h2 {
  margin-bottom: 0.75rem;
}

.profile__card ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.profile__card li::before {
  content: '•';
  color: var(--color-accent);
  margin-right: 0.5rem;
}
</style>
