<script setup lang="ts">
const contactInfo = [
  { label: 'Email', value: 'hello@example.com' },
  { label: 'Location', value: 'Tokyo, Japan' },
  { label: 'Availability', value: 'Open for freelance and full-time roles' }
];

useHead({
  title: 'Contact | Portfolio Site'
});
</script>

<template>
  <section class="contact">
    <h1>Contact</h1>
    <p>
      お仕事のご依頼やご相談は下記フォーム、またはメールアドレスからお気軽にご連絡ください。
    </p>

    <div class="contact__grid">
      <aside class="contact__info">
        <h2>Info</h2>
        <dl>
          <template v-for="item in contactInfo" :key="item.label">
            <dt>{{ item.label }}</dt>
            <dd>{{ item.value }}</dd>
          </template>
        </dl>
      </aside>

      <form class="contact__form">
        <label>
          お名前
          <input type="text" name="name" placeholder="山田 太郎" required />
        </label>
        <label>
          メールアドレス
          <input type="email" name="email" placeholder="you@example.com" required />
        </label>
        <label>
          メッセージ
          <textarea name="message" rows="5" placeholder="お問い合わせ内容をご記入ください" required></textarea>
        </label>
        <button type="submit">Send Message</button>
      </form>
    </div>
  </section>
</template>

<style scoped>
.contact {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.contact__grid {
  display: grid;
  grid-template-columns: minmax(220px, 280px) 1fr;
  gap: 2rem;
}

.contact__info {
  background: rgba(15, 23, 42, 0.6);
  border: 1px solid rgba(148, 163, 184, 0.25);
  border-radius: 20px;
  padding: 1.75rem;
}

.contact__info dl {
  margin: 0;
  display: grid;
  gap: 1rem;
}

.contact__info dt {
  font-size: 0.85rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(148, 163, 184, 0.9);
}

.contact__info dd {
  margin: 0;
  font-size: 1rem;
}

.contact__form {
  display: grid;
  gap: 1.25rem;
  background: rgba(15, 23, 42, 0.6);
  border: 1px solid rgba(148, 163, 184, 0.25);
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 20px 40px rgba(15, 23, 42, 0.35);
}

.contact__form label {
  display: grid;
  gap: 0.5rem;
  font-weight: 600;
}

.contact__form input,
.contact__form textarea {
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: 12px;
  border: 1px solid rgba(148, 163, 184, 0.35);
  background: rgba(15, 23, 42, 0.9);
  color: var(--color-text);
}

.contact__form input:focus,
.contact__form textarea:focus {
  outline: none;
  border-color: rgba(56, 189, 248, 0.75);
  box-shadow: 0 0 0 3px rgba(56, 189, 248, 0.25);
}

.contact__form button {
  justify-self: start;
  padding: 0.75rem 1.75rem;
  border-radius: 999px;
  border: none;
  background: linear-gradient(135deg, rgba(56, 189, 248, 0.9), rgba(14, 165, 233, 0.9));
  color: #0f172a;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.contact__form button:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 25px rgba(56, 189, 248, 0.35);
}

@media (max-width: 860px) {
  .contact__grid {
    grid-template-columns: 1fr;
  }
}
</style>
