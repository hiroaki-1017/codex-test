<script setup lang="ts">
definePageMeta({
  layout: 'profile'
});

const socials = [
  {
    label: 'Twitter',
    icon: 'tw',
    href: 'https://twitter.com/'
  },
  {
    label: 'Instagram',
    icon: 'ig',
    href: 'https://www.instagram.com/'
  },
  {
    label: 'Dribbble',
    icon: 'dr',
    href: 'https://dribbble.com/'
  },
  {
    label: 'Behance',
    icon: 'be',
    href: 'https://www.behance.net/'
  }
];

const expertise = ['UI/UXデザイン', 'Webマーケティング', 'モーション作成', 'ブランド開発'];

const interests = ['プロダクトグロース', 'コミュニティデザイン', 'ソーシャルグッド', 'アートディレクション'];

const summaryText =
  '直感的で楽しいプロダクトをつくることが使命です。データドリブンな分析と、ユーザーインサイトから導く発想を両軸に、ビジュアルと言葉の体験を滑らかにつなげることを大切にしています。企画から実装、改善までを横断しながら、ブランドに息を吹き込むような表現を探求しています。';

const talkText =
  '新規事業やサービス改善のアイデアについて、お互いのこだわりや熱量を共有しながら形にしていく時間が好きです。まずはラフな相談からでも大歓迎ですので、気軽に声をかけてください。';

const mottoText = '「たのしいは、伝播する。」ひとりが感じたワクワクが連鎖してチーム全体の推進力になると信じています。まずは自分が楽しむことから。';
</script>

<template>
  <section class="profile-page">
    <div class="profile-card">
      <figure class="profile-card__photo">
        <img src="/profile-hero.svg" alt="プロフィールのビジュアル" />
      </figure>

      <div class="profile-card__identity">
        <div class="profile-card__name">
          <h2>
            山田 飛衣
            <span class="profile-card__roman">(YAMADA HIRAKI)</span>
          </h2>
          <ul class="profile-card__meta" aria-label="プロフィールの基本情報">
            <li>
              <span class="meta-label">Age</span>
              <span class="meta-value">23 <span class="meta-note">[1999/07/17]</span></span>
            </li>
            <li>
              <span class="meta-label">From</span>
              <span class="meta-value">Tokyo, Japan</span>
            </li>
          </ul>
        </div>
        <ul class="profile-card__socials" aria-label="ソーシャルリンク">
          <li v-for="social in socials" :key="social.label">
            <a :href="social.href" target="_blank" rel="noreferrer noopener">
              <span aria-hidden="true">{{ social.icon }}</span>
              <span class="sr-only">{{ social.label }}</span>
            </a>
          </li>
        </ul>
      </div>

      <div class="profile-card__role">
        <span class="chip chip--label">ROLE</span>
        <p>Product Developer</p>
      </div>

      <div class="profile-card__details">
        <section class="info-block info-block--summary">
          <header>
            <span class="chip">サマリー</span>
          </header>
          <p>{{ summaryText }}</p>
        </section>

        <section class="info-block info-block--expertise">
          <header>
            <span class="chip">得意なこと</span>
          </header>
          <ul class="chip-list" aria-label="得意分野">
            <li v-for="item in expertise" :key="item">{{ item }}</li>
          </ul>
        </section>

        <section class="info-block info-block--interests">
          <header>
            <span class="chip">興味があること</span>
          </header>
          <ul class="chip-list" aria-label="興味のあるテーマ">
            <li v-for="item in interests" :key="item">{{ item }}</li>
          </ul>
        </section>

        <section class="info-block info-block--talk">
          <header>
            <span class="chip">お話しましょう</span>
          </header>
          <p>{{ talkText }}</p>
        </section>

        <section class="info-block info-block--motto">
          <header>
            <span class="chip">好きなフレーズ</span>
          </header>
          <p>{{ mottoText }}</p>
        </section>

        <section class="info-block info-block--cta">
          <header>
            <span class="chip">ギャラリー</span>
          </header>
          <p>制作プロセスやラフスケッチはギャラリーページで公開中です。</p>
          <NuxtLink to="/portfolio" class="cta-button">ギャラリーを見る</NuxtLink>
        </section>
      </div>
    </div>
  </section>
</template>

<style scoped>
.profile-page {
  margin: 0;
  max-width: none;
}

.profile-card {
  position: relative;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.95) 0%, rgba(245, 249, 255, 0.95) 100%);
  border-radius: clamp(28px, 4vw, 36px);
  padding: clamp(2rem, 5vw, 3.5rem) clamp(1.75rem, 5vw, 3.5rem) clamp(2.5rem, 6vw, 4rem);
  box-shadow: 0 45px 80px rgba(28, 60, 150, 0.22);
  color: #1a2659;
  overflow: hidden;
}

.profile-card__photo {
  margin: 0;
  border-radius: clamp(22px, 3vw, 28px);
  overflow: hidden;
  box-shadow: inset 0 0 0 1px rgba(26, 38, 89, 0.08);
}

.profile-card__photo img {
  display: block;
  width: 100%;
  height: auto;
}

.profile-card__identity {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: clamp(1.5rem, 4vw, 3rem);
  margin-top: clamp(1.75rem, 4vw, 2.75rem);
  flex-wrap: wrap;
}

.profile-card__name {
  flex: 1;
  min-width: 260px;
}

.profile-card__name h2 {
  font-size: clamp(1.8rem, 4.2vw, 2.4rem);
  margin: 0 0 0.75rem;
  font-weight: 700;
  letter-spacing: 0.06em;
}

.profile-card__roman {
  font-size: clamp(0.9rem, 2.1vw, 1.1rem);
  font-weight: 500;
  margin-left: 0.65rem;
  color: rgba(26, 38, 89, 0.6);
  letter-spacing: 0.08em;
}

.profile-card__meta {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: clamp(0.75rem, 2vw, 1.5rem);
  margin: 0;
  padding: 0;
}

.profile-card__meta li {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  font-size: 0.95rem;
  letter-spacing: 0.05em;
}

.meta-label {
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: rgba(26, 38, 89, 0.45);
}

.meta-value {
  font-weight: 600;
}

.meta-note {
  font-size: 0.75em;
  color: rgba(26, 38, 89, 0.55);
  margin-left: 0.35em;
}

.profile-card__socials {
  list-style: none;
  display: flex;
  gap: 0.75rem;
  margin: 0;
  padding: 0;
}

.profile-card__socials a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: #e4edff;
  color: #315ed9;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  box-shadow: inset 0 0 0 1px rgba(49, 94, 217, 0.12);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.profile-card__socials a:hover,
.profile-card__socials a:focus-visible {
  transform: translateY(-2px);
  box-shadow: inset 0 0 0 1px rgba(49, 94, 217, 0.45), 0 12px 18px rgba(49, 94, 217, 0.25);
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.profile-card__role {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: clamp(2rem, 5vw, 3rem);
  margin-bottom: clamp(1.5rem, 4vw, 2.5rem);
  font-size: clamp(1.05rem, 2.4vw, 1.25rem);
  letter-spacing: 0.04em;
}

.profile-card__role p {
  margin: 0;
  font-weight: 600;
}

.chip {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.35rem 0.9rem;
  border-radius: 999px;
  background: #e7edff;
  color: #2543a5;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.32em;
  text-transform: uppercase;
}

.chip--label {
  background: #2543a5;
  color: #ffffff;
  letter-spacing: 0.4em;
}

.profile-card__details {
  display: grid;
  grid-template-columns: minmax(0, 1.9fr) minmax(0, 1fr);
  gap: clamp(1.75rem, 4vw, 2.75rem) clamp(1.5rem, 4vw, 2.75rem);
}

.info-block {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-size: 0.98rem;
  line-height: 1.8;
  letter-spacing: 0.04em;
}

.info-block--summary {
  grid-row: span 2;
}

.info-block--talk {
  grid-column: 1 / 2;
}

.info-block--motto {
  grid-column: 1 / -1;
  border-top: 1px solid rgba(37, 67, 165, 0.1);
  padding-top: clamp(1.5rem, 4vw, 2.25rem);
}

.info-block--cta {
  grid-column: 2 / 3;
  align-items: flex-start;
  gap: 1.25rem;
}

.chip-list {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin: 0;
  padding: 0;
}

.chip-list li {
  padding: 0.4rem 0.85rem;
  border-radius: 999px;
  background: rgba(39, 84, 210, 0.08);
  color: #2543a5;
  font-weight: 600;
  font-size: 0.85rem;
  letter-spacing: 0.05em;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(130deg, #5a8fff, #6bd2ff);
  color: #ffffff;
  border-radius: 999px;
  padding: 0.75rem 2.1rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  box-shadow: 0 18px 28px rgba(66, 126, 242, 0.35);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.cta-button::after {
  content: '\2192';
  font-size: 1.1rem;
}

.cta-button:hover,
.cta-button:focus-visible {
  transform: translateY(-2px);
  box-shadow: 0 22px 34px rgba(66, 126, 242, 0.42);
}

@media (max-width: 960px) {
  .profile-card__details {
    grid-template-columns: 1fr;
  }

  .info-block--summary {
    grid-row: auto;
  }

  .info-block--cta {
    grid-column: auto;
  }

  .info-block--motto {
    grid-column: auto;
  }
}

@media (max-width: 640px) {
  .profile-card__socials {
    width: 100%;
    justify-content: flex-start;
  }

  .profile-card__identity {
    flex-direction: column;
  }

  .profile-card__role {
    flex-direction: column;
    align-items: flex-start;
  }

  .chip {
    letter-spacing: 0.24em;
  }
}
</style>
