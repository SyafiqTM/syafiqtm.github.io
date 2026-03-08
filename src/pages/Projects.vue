<template>
  <main class="projects-page">
    <section class="projects-hero">
      <div class="projects-shell">
        <p class="hero-kicker">Selected Builds</p>
        <div class="hero-copy">
          <h1 class="hero-title">Projects shipped to production.</h1>
          <p class="hero-text">
            A focused collection of recent frontend and product work, spanning inventory workflows,
            live weather data, and a public health screening platform.
          </p>
        </div>
      </div>
    </section>

    <section class="projects-grid-section">
      <div class="projects-shell">
        <div class="projects-grid">
          <article
            v-for="(project, index) in projects"
            :key="project.name"
            class="project-card"
          >
            <div class="project-preview">
              <iframe
                :src="project.url"
                :title="project.name"
                @load="loaded[index] = true"
                :style="{ opacity: loaded[index] ? 1 : 0, transition: 'opacity 0.4s' }"
                sandbox="allow-scripts allow-same-origin"
                :tabindex="-1"
              />
              <div v-if="!loaded[index]" class="project-fallback">{{ project.emoji }}</div>
            </div>

            <div class="project-card-top">
              <div>
                <p class="project-index">0{{ index + 1 }}</p>
                <h2 class="project-name">{{ project.name }}</h2>
              </div>
              <span class="project-type">{{ project.category }}</span>
            </div>

            <p class="project-summary">{{ project.summary }}</p>

            <div class="project-stack">
              <span
                v-for="item in project.stack"
                :key="item"
                class="project-chip"
              >
                {{ item }}
              </span>
            </div>

            <div class="project-actions">
              <a
                :href="project.url"
                class="project-link primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span class="btn-arrow">↗</span> LIVE DEMO
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue'

const loaded = ref({})

const projects = [
  {
    name: 'Sneaker React CMS',
    category: 'Inventory Manager',
    url: 'https://sneaker-react-cms.vercel.app/',
    emoji: '👟',
    summary:
      'A sneaker inventory management interface with a guided entry flow, built to organize stock and simplify store-side operations.',
    stack: ['React', 'CMS', 'Inventory', 'Dashboard UI'],
  },
  {
    name: 'Weatherio',
    category: 'Weather App',
    url: 'https://weatherio-two.vercel.app/',
    emoji: '🌤️',
    summary:
      'A real-time weather app delivering current conditions, hourly forecasts, and climate details with a sleek, modern interface.',
    stack: ['React', 'Weather API', 'Geolocation', 'Vercel'],
  },
  {
    name: 'ViSEE Kids',
    category: 'EdTech / SaaS',
    url: 'https://visee.vercel.app/landing',
    emoji: '👁️',
    summary:
      'A vision & educational platform for children — gamified learning with interactive content and a parent dashboard.',
    stack: ['React', 'Node.js', 'AWS', 'TypeScript'],
  },
  {
    name: 'Activity Tracker',
    category: 'Productivity',
    url: 'https://activity-tracker-ruby-sigma.vercel.app/',
    emoji: '⏱️',
    summary:
      'A time tracking app to log and monitor daily activities, helping users stay productive and gain insights into how their time is spent.',
    stack: ['React', 'Time Tracking', 'Dashboard', 'Vercel'],
  },
  {
    name: 'Property Malaysia',
    category: 'Real Estate',
    url: 'https://property-malaysia.vercel.app/',
    emoji: '🏡',
    summary:
      'A property agent platform for browsing and listing real estate in Malaysia, with a clean interface for buyers and agents alike.',
    stack: ['React', 'Real Estate', 'Listings', 'Vercel'],
  },
  {
    name: 'Workshop Finder',
    category: 'Directory / Search',
    url: 'https://workshop-finder.vercel.app/',
    emoji: '🔧',
    summary:
      'A workshop discovery platform that helps users find and explore workshops near them, with a clean search and filtering experience.',
    stack: ['React', 'Search', 'Directory', 'Vercel'],
  },
  {
    name: 'Kawaii Chat',
    category: 'Messaging / Social',
    url: 'https://kawaiichat.vercel.app/',
    emoji: '💬',
    summary:
      'A cute and expressive real-time chat application with a kawaii-inspired design, bringing personality and fun to everyday conversations.',
    stack: ['React', 'Real-time', 'Chat', 'Vercel'],
  },
]
</script>

<style scoped>
.projects-page {
  min-height: 100vh;
  padding-top: 4rem;
  background:
    radial-gradient(circle at top left, rgba(63, 255, 192, 0.08), transparent 32%),
    radial-gradient(circle at top right, rgba(167, 139, 250, 0.12), transparent 28%),
    #0d1117;
}

.projects-shell {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.projects-hero {
  padding: 5rem 0 2.5rem;
}

.hero-kicker {
  margin: 0 0 1rem;
  font-size: 0.76rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #72f5cd;
}

.hero-copy {
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(280px, 0.8fr);
  gap: 2rem;
  align-items: end;
}

.hero-title {
  margin: 0;
  max-width: 10ch;
  font-size: clamp(3rem, 6vw, 5rem);
  line-height: 0.98;
  font-weight: 800;
  color: #f8fafc;
  font-family: 'Georgia', 'Times New Roman', serif;
}

.hero-text {
  margin: 0;
  max-width: 36ch;
  font-size: 1rem;
  line-height: 1.8;
  color: rgba(226, 232, 240, 0.72);
}

.projects-grid-section {
  padding: 1rem 0 5rem;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.5rem;
}

.project-card {
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  min-height: 100%;
  padding: 0;
  border: 1px solid rgba(255, 255, 255, 0.09);
  border-radius: 24px;
  background:
    linear-gradient(180deg, rgba(17, 24, 39, 0.94), rgba(12, 18, 31, 0.94)),
    radial-gradient(circle at top, rgba(63, 255, 192, 0.1), transparent 34%);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.24);
  overflow: hidden;
}

.project-preview {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.04);
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
}

.project-preview iframe {
  width: 300%;
  height: 300%;
  border: none;
  display: block;
  transform: scale(0.333);
  transform-origin: top left;
  pointer-events: none;
  transition: opacity 0.4s;
}

.project-fallback {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  background: rgba(255, 255, 255, 0.03);
}

.project-card-top,
.project-summary,
.project-stack,
.project-actions {
  padding-left: 1.6rem;
  padding-right: 1.6rem;
}

.project-card-top {
  padding-top: 1.6rem;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
}

.project-index {
  margin: 0 0 0.75rem;
  font-size: 0.78rem;
  letter-spacing: 0.16em;
  color: rgba(148, 163, 184, 0.62);
}

.project-name {
  margin: 0;
  font-size: 1.4rem;
  line-height: 1.15;
  color: #f8fafc;
}

.project-type {
  flex-shrink: 0;
  padding: 0.45rem 0.8rem;
  border-radius: 999px;
  background: rgba(63, 255, 192, 0.08);
  border: 1px solid rgba(63, 255, 192, 0.18);
  color: #72f5cd;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.project-summary {
  margin: 0;
  font-size: 0.875rem;
  color: rgba(226, 232, 240, 0.72);
  line-height: 1.7;
}

.project-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
}

.project-chip {
  display: inline-flex;
  align-items: center;
  min-height: 32px;
  padding: 0.4rem 0.8rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.09);
  color: #dbe4f0;
  font-size: 0.8rem;
}

.project-actions {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin-top: auto;
  padding-top: 0.4rem;
  padding-bottom: 1.6rem;
}

.project-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  padding: 0.8rem 1rem;
  border-radius: 12px;
  text-decoration: none;
  font-size: 0.88rem;
  font-weight: 700;
  letter-spacing: 0.04em;
}

.project-link.primary {
  background: transparent;
  color: #3fffc0;
  border: 1.5px solid rgba(63, 255, 192, 0.55);
}

.project-link.primary:hover {
  background: rgba(63, 255, 192, 0.07);
  border-color: #3fffc0;
}

.btn-arrow {
  display: inline-block;
}

.project-link.primary:hover .btn-arrow {
  animation: arrowXY 0.7s ease-in-out infinite;
}

@keyframes arrowXY {
  0%   { transform: translate(0, 0); }
  50%  { transform: translate(4px, -4px); }
  100% { transform: translate(0, 0); }
}

.project-url {
  color: rgba(148, 163, 184, 0.82);
  font-size: 0.82rem;
}

@media (max-width: 1024px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }

  .hero-copy {
    grid-template-columns: 1fr;
  }

  .hero-title {
    max-width: none;
  }
}

@media (max-width: 640px) {
  .projects-shell {
    padding: 0 1.25rem;
  }

  .projects-hero {
    padding-top: 4rem;
  }

  .project-card-top {
    flex-direction: column;
  }
}
</style>