<script setup lang="ts">
interface ProjectSummary {
  title: string;
  description: string;
  role: string;
  tags: string[];
}

const projects: ProjectSummary[] = [
  {
    title: 'ブランドサイト リニューアル',
    description:
      'コンセプト設計からUIデザイン、フロントエンド実装までを担当。滑らかなアニメーションとレスポンシブ対応でブランド価値を訴求。',
    role: 'Lead Designer & Frontend',
    tags: ['Nuxt 3', 'GSAP', 'Design System']
  },
  {
    title: 'モバイルアプリ LP',
    description:
      'アプリのコア体験を短時間で伝えるランディングページを制作。ヒーローアニメーションと実際の画面モックアップで理解を促進。',
    role: 'UI Designer',
    tags: ['Vue', 'Motion Design', 'Copywriting']
  },
  {
    title: 'グローバルイベント サイト',
    description:
      '世界各地の参加者向けに多言語対応したイベントサイトを構築。CMSと連携し、運用チームがコンテンツを素早く更新できる仕組みを実装。',
    role: 'Frontend Engineer',
    tags: ['Nuxt', 'i18n', 'Headless CMS']
  }
];

useHead({
  title: 'Portfolio | Portfolio Site'
});
</script>

<template>
  <section class="portfolio">
    <header class="portfolio__intro">
      <h1>Portfolio</h1>
      <p>
        実績の一例です。実際の制作物やスクリーンショット、成果指標などを追加して魅力的なショーケースに仕上げてください。
      </p>
    </header>

    <div class="portfolio__list">
      <article v-for="project in projects" :key="project.title" class="project-card">
        <div class="project-card__header">
          <h2>{{ project.title }}</h2>
          <span class="project-card__role">{{ project.role }}</span>
        </div>
        <p>{{ project.description }}</p>
        <ul class="project-card__tags">
          <li v-for="tag in project.tags" :key="tag">{{ tag }}</li>
        </ul>
      </article>
    </div>
  </section>
</template>

<style scoped>
.portfolio {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.portfolio__intro {
  max-width: 680px;
}

.portfolio__list {
  display: grid;
  gap: 1.75rem;
}

.project-card {
  background: rgba(15, 23, 42, 0.6);
  border: 1px solid rgba(148, 163, 184, 0.25);
  border-radius: 20px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  box-shadow: 0 20px 40px rgba(15, 23, 42, 0.4);
}

.project-card__header {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 0.75rem;
  justify-content: space-between;
}

.project-card__role {
  font-size: 0.875rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(148, 163, 184, 0.9);
}

.project-card__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.project-card__tags li {
  background: rgba(56, 189, 248, 0.15);
  border: 1px solid rgba(56, 189, 248, 0.4);
  color: #bae6fd;
  padding: 0.35rem 0.65rem;
  border-radius: 999px;
  font-size: 0.75rem;
  letter-spacing: 0.04em;
}
</style>
