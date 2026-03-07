<template>
  <!-- ─── Hero ─── -->
  <section class="hero" id="hero">
    <div class="hero-wrap">
      <div class="hero-left">
        <div class="avail-badge">
          <span class="avail-dot"></span>
          AVAILABLE FOR WORK
        </div>
        <h1 class="hero-title">
          Hello, I'm<br>
          <span class="hero-name">Syafiq</span>
        </h1>
        <p class="hero-bio">
          Full-stack developer &amp; cloud engineer based in Malaysia.
          I build scalable microservices, modern web apps, and cloud-native systems
          with 8+ years turning ideas into production.
        </p>
        <div class="hero-btns">
          <router-link to="/projects" class="btn-fill">VIEW PROJECTS →</router-link>
          <div class="dropdown-wrap" ref="dropdownRef">
            <button class="btn-ghost" @click="toggleDropdown">
              GET IN TOUCH
              <svg class="chevron" :class="{ open: dropdownOpen }" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 9l6 6 6-6"/></svg>
            </button>
            <Transition name="drop">
              <div v-if="dropdownOpen" class="dropdown-menu">
                <a href="https://wa.me/601XXXXXXXX" class="dropdown-item" target="_blank" rel="noopener noreferrer">
                  <span class="di-icon" style="background:rgba(37,211,102,0.12)">
                    <svg viewBox="0 0 24 24" fill="#25d366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  </span>
                  WhatsApp
                </a>
                <!-- <a href="https://t.me/syafiqtm" class="dropdown-item" target="_blank" rel="noopener noreferrer">
                  <span class="di-icon" style="background:rgba(0,136,204,0.12)">
                    <svg viewBox="0 0 24 24" fill="#0088cc"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
                  </span>
                  Telegram
                </a>
                <a href="https://instagram.com/syafiqtm" class="dropdown-item" target="_blank" rel="noopener noreferrer">
                  <span class="di-icon" style="background:rgba(228,64,95,0.12)">
                    <svg viewBox="0 0 24 24" fill="#e4405f"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  </span>
                  Instagram
                </a> -->
                <div class="dropdown-divider"></div>
                <button class="dropdown-item" @click="copyLink">
                  <span class="di-icon" style="background:rgba(255,255,255,0.06)">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>
                  </span>
                  {{ linkCopied ? 'Copied!' : 'Copy link' }}
                </button>
              </div>
            </Transition>
          </div>
        </div>
      </div>
      <div class="hero-right">
        <div class="photo-ring">
          <img :src="profileSrc" alt="Syafiq" class="photo-img" @error="onImgError" />
          <div v-if="imgBroken" class="photo-fallback">SY</div>
        </div>
        <span class="status-dot"></span>
      </div>
    </div>
  </section>

  <!-- ─── Stats ─── -->
  <div class="stats-bar">
    <div class="stats-wrap">
      <div class="stat-item">
        <span class="stat-val">8+</span>
        <span class="stat-lbl">YEARS EXPERIENCE</span>
      </div>
      <div class="stat-divider"></div>
      <div class="stat-item">
        <span class="stat-val">30+</span>
        <span class="stat-lbl">PROJECTS DELIVERED</span>
      </div>
      <div class="stat-divider"></div>
      <div class="stat-item">
        <span class="stat-val">7</span>
        <span class="stat-lbl">COMPANIES</span>
      </div>
      <div class="stat-divider"></div>
      <div class="stat-item">
        <span class="stat-val">20+</span>
        <span class="stat-lbl">TECHNOLOGIES</span>
      </div>
    </div>
  </div>

  <!-- ─── Main content ─── -->
  <main class="port-main">
    <div class="port-container">

      <!-- About Me -->
      <section class="port-section" id="about">
        <h2 class="port-heading">
          <span class="port-num">01.</span>
          About Me
          <span class="port-line"></span>
        </h2>
        <div class="about-grid">
          <div class="about-text">
            <p>I'm <strong>Syafiq</strong>, a full-stack developer and cloud engineer with over <strong>8 years</strong> building scalable systems, microservices, and cloud infrastructure across Malaysia.</p>
            <p>Currently at <strong>Maxis Broadband</strong>, I architect distributed systems, lead AWS migrations, and deliver secure identity platforms. I thrive at the intersection of <strong>backend engineering and cloud DevOps</strong>.</p>
            <p>I've shipped everything from government portals and e-commerce platforms to mobile apps and AI-powered chatbots — always focused on clean architecture and lasting impact.</p>
          </div>
          <div class="about-cards d-none">
            <!-- <div class="role-card">
              <span class="role-label">PORTAL DEVELOPER / SPECIALIST</span>
              <p class="role-company">Maxis Broadband Sdn. Bhd.</p>
              <p class="role-period">Oct 2022 — Present</p>
            </div> -->
            <!-- <div class="role-card">
              <span class="role-label">WEB TECH LEAD</span>
              <p class="role-company">AxelCloud Technologies Sdn. Bhd.</p>
              <p class="role-period">Mar 2022 — Aug 2022</p>
            </div> -->
          </div>
        </div>
      </section>

      <!-- Work Experience -->
      <section class="port-section" id="experience">
        <h2 class="port-heading">
          <span class="port-num">02.</span>
          Work Experience
          <span class="port-line"></span>
        </h2>
        <div class="exp-list">
          <div class="exp-card">
            <div class="exp-card-header">
              <div>
                <h3 class="exp-title">Portal Developer / Specialist</h3>
                <p class="exp-company">Maxis Broadband Sdn Bhd</p>
              </div>
              <span class="exp-period">Oct 2022 - Present</span>
            </div>
            <ul class="exp-bullets">
              <li>Developed and maintained scalable microservices using Node.js, Express, TypeScript, and modern frontend frameworks (Angular, React, Vue)</li>
              <li>Built and implemented RESTful APIs, event-driven architectures, and distributed systems</li>
              <li>Containerized applications using Docker, created multi-stage Dockerfiles, and automated AWS deployments via TeamCity CI/CD and Terraform</li>
              <li>Migrated and developed microservices with GitLab CI/CD, enabling automated build, test, and deployment pipelines</li>
              <li>Hands-on with AWS services including ALB/NLB, API Gateway, Lambda, ECS (Fargate/EC2), Secrets Manager, RDS, S3, DynamoDB, CloudWatch, IAM, VPC</li>
              <li>Configured Nginx reverse proxy, security hardening, and production optimizations</li>
              <li>Integrated Google Cloud Run with Firestore and used Vertex AI for chatbot development</li>
              <li>Implemented OAuth2 authentication for Maxis Identity, delivering secure customer login and seamless identity verification</li>
            </ul>
            <div class="exp-achievements">
              <p class="exp-achieve-title">Key Achievements:</p>
              <ul class="exp-achieve-list">
                <li>🏆 Awarded Team Award: GitLab Migration Project (Q4 2024)</li>
                <li>🏆 Awarded Team Award: Maxis Enterprise Device Portal (Q4 2024)</li>
                <li>💰 Key role in AWS region migration (Singapore → Malaysia), reducing cloud cost by 30% and improving latency</li>
              </ul>
            </div>
          </div>

          <div class="exp-card">
            <div class="exp-card-header">
              <div>
                <h3 class="exp-title">Web Tech Lead</h3>
                <p class="exp-company">AxelCloud Technologies Sdn Bhd</p>
              </div>
              <span class="exp-period">Mar 2022 - Aug 2022</span>
            </div>
            <ul class="exp-bullets">
              <li>Deployed live clinic/hospital information system using AWS resources</li>
              <li>Built company and CURAX websites using Docker + AWS</li>
              <li>Developed a government system for Malaysia Productivity Corporation (MPC) launched by YB Dato' Seri Mohamed Azmin Ali</li>
              <li>Setup mail servers and broadcast systems for Academy in Factory (AiF)</li>
              <li>Provided workshops, training, and end-user support for MPC projects</li>
            </ul>
          </div>

          <div class="exp-card">
            <div class="exp-card-header">
              <div>
                <h3 class="exp-title">Full-Stack Developer</h3>
                <p class="exp-company">Digital Venus Sdn Bhd</p>
              </div>
              <span class="exp-period">Jun 2021 - Feb 2022</span>
            </div>
            <ul class="exp-bullets">
              <li>Developed mobile apps using Ionic v5</li>
              <li>Built APIs via Node.js LoopBack (TypeScript) with PostgreSQL</li>
              <li>Deployed backend services on AWS Elastic Beanstalk</li>
              <li>Developed website integrated with iPay88 payment gateway</li>
              <li>Wrote Angular unit tests for Ionic components</li>
            </ul>
          </div>

          <div class="exp-card">
            <div class="exp-card-header">
              <div>
                <h3 class="exp-title">Web / Back-End Developer</h3>
                <p class="exp-company">Poplook Sdn Bhd</p>
              </div>
              <span class="exp-period">Aug 2018 - May 2021</span>
            </div>
            <ul class="exp-bullets">
              <li>Oversaw product backlog, database backups, and e-commerce enhancements</li>
              <li>Maintained Poplook Prestashop e-commerce platform and integrated multiple plugins</li>
              <li>Deployed POS systems for new branches</li>
              <li>Implemented split payment feature similar to SPayLater</li>
              <li>Managed product syncing through NetSuite, enabling store availability visibility</li>
            </ul>
          </div>

          <div class="exp-card">
            <div class="exp-card-header">
              <div>
                <h3 class="exp-title">Network Engineer Trainee</h3>
                <p class="exp-company">Telekom Malaysia Berhad</p>
              </div>
              <span class="exp-period">Aug 2017 - Aug 2018</span>
            </div>
            <ul class="exp-bullets">
              <li>Documented meetings for server/rack installation in major data centers</li>
              <li>Assisted in port configuration, cabling, and hardware mounting</li>
              <li>Supported server and NetApp storage installation</li>
              <li>Developed internal document directory portal</li>
            </ul>
          </div>

          <div class="exp-card">
            <div class="exp-card-header">
              <div>
                <h3 class="exp-title">Freelance Developer</h3>
                <p class="exp-company">Self-Employed</p>
              </div>
              <span class="exp-period">Jul 2017 - Jul 2018</span>
            </div>
            <ul class="exp-bullets">
              <li>Delivered bespoke systems for ProOffice, Rocket Integration Technology, and HS Management Services</li>
              <li>Built UiTM apps: bus tracking, home rental, autism emotion recognition, library scanner</li>
              <li>Developed KKM patient system and government-linked applications</li>
            </ul>
          </div>

          <div class="exp-card">
            <div class="exp-card-header">
              <div>
                <h3 class="exp-title">Junior Web Developer</h3>
                <p class="exp-company">Vialing Sdn Bhd</p>
              </div>
              <span class="exp-period">Feb 2017 - Jul 2017</span>
            </div>
            <ul class="exp-bullets">
              <li>Maintained and enhanced Campus Management System</li>
              <li>Upgraded system from CodeIgniter to Laravel 5</li>
              <li>Supported deployment for Xiamen University</li>
              <li>Handled bug fixes and support tickets</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Skills -->
      <section class="port-section" id="skills">
        <h2 class="port-heading">
          <span class="port-num">03.</span>
          Technical Skills
          <span class="port-line"></span>
        </h2>
        <div class="skills-grid">
          <article
            v-for="(card, index) in skillsCards"
            :key="card.title"
            class="skill-card"
          >
            <div class="skill-card-header">
              <div class="skill-icon" :class="`skill-icon-${card.icon}`" aria-hidden="true">
                <svg v-if="card.icon === 'frontend'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 3 7 13h4l-1 8 7-12h-4l2-6Z" />
                </svg>
                <svg v-else-if="card.icon === 'backend'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M14 6a4 4 0 1 0-3.87 5h3.74A4 4 0 1 0 18 6" />
                  <path d="m9 11 6 6" />
                  <path d="m15 11-6 6" />
                </svg>
                <svg v-else-if="card.icon === 'cloud'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M7 18a4 4 0 1 1 .6-7.96A5.5 5.5 0 0 1 18 12a3.5 3.5 0 1 1-.5 6Z" />
                </svg>
                <svg v-else-if="card.icon === 'security'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="4" y="11" width="16" height="10" rx="2" />
                  <path d="M8 11V8a4 4 0 1 1 8 0v3" />
                  <circle cx="12" cy="16" r="1.2" />
                </svg>
                <svg v-else-if="card.icon === 'database'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                  <ellipse cx="12" cy="6" rx="6.5" ry="2.5" />
                  <path d="M5.5 6v6c0 1.38 2.91 2.5 6.5 2.5s6.5-1.12 6.5-2.5V6" />
                  <path d="M5.5 12v6c0 1.38 2.91 2.5 6.5 2.5s6.5-1.12 6.5-2.5v-6" />
                </svg>
                <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="4" y="5" width="16" height="14" rx="4" />
                  <path d="M9 9h.01M15 9h.01" />
                  <path d="M8 14c1.2 1 2.53 1.5 4 1.5s2.8-.5 4-1.5" />
                  <path d="M9 5 7.5 2.5M15 5l1.5-2.5" />
                </svg>
              </div>
              <span class="skill-index">0{{ index + 1 }}</span>
            </div>
            <div class="skill-card-body">
              <p class="skill-card-kicker">{{ card.label }}</p>
              <h3 class="skill-card-title">{{ card.title }}</h3>
              <p class="skill-card-copy">{{ card.description }}</p>
            </div>
            <div class="skill-stack">
              <span
                v-for="item in card.items"
                :key="item"
                class="skill-stack-item"
              >
                {{ item }}
              </span>
            </div>
          </article>
        </div>
      </section>

      <!-- Contact -->
      <section class="port-section" id="contact">
        <h2 class="port-heading">
          <span class="port-num">05.</span>
          Contact
          <span class="port-line"></span>
        </h2>
        <div class="contact-layout">
          <div class="contact-cta">
            <h3 class="contact-big">Let's build<br>something<br><span class="contact-accent">great.</span></h3>
            <p class="contact-desc">Open to freelance projects, collaborations, and exciting opportunities. Drop me a message!</p>
            <a href="mailto:syafiq@example.com" class="contact-email-btn">SEND ME AN EMAIL →</a>
          </div>
          <div class="contact-links">
            <!-- Website -->
            <a href="https://syafiqtm.github.io" class="contact-link-card" target="_blank" rel="noopener noreferrer">
              <div class="contact-link-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
              </div>
              <div class="contact-link-info">
                <span class="contact-link-label">WEBSITE</span>
                <span class="contact-link-value">syafiqtm.github.io</span>
              </div>
            </a>
            <!-- GitHub -->
            <a href="https://github.com/SyafiqTM" class="contact-link-card" target="_blank" rel="noopener noreferrer">
              <div class="contact-link-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
              </div>
              <div class="contact-link-info">
                <span class="contact-link-label">GITHUB</span>
                <span class="contact-link-value">github.com/syafiqtm</span>
              </div>
            </a>
            <!-- LinkedIn -->
            <a href="https://linkedin.com/in/syafiq-zahir" class="contact-link-card" target="_blank" rel="noopener noreferrer">
              <div class="contact-link-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
              </div>
              <div class="contact-link-info">
                <span class="contact-link-label">LINKEDIN</span>
                <span class="contact-link-value">linkedin.com/in/syafiqtm</span>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  </main>

  <footer class="port-footer">
    <div class="port-container">
      <p>&copy; 2024 Syafiq. All rights reserved.</p>
    </div>
  </footer>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import profileImg from '../assets/profile.jpg'

const profileSrc = ref(profileImg)
const imgBroken = ref(false)

const skillsCards = [
  {
    icon: 'frontend',
    label: 'UI Engineering',
    title: 'Frontend',
    description: 'Building responsive interfaces and application shells that stay fast, maintainable, and production-ready.',
    items: ['React', 'Angular', 'Vue.js', 'TypeScript', 'JavaScript', 'Ionic'],
  },
  {
    icon: 'backend',
    label: 'Service Design',
    title: 'Backend',
    description: 'Designing APIs and event-driven services with clean contracts, resilient architecture, and practical scalability.',
    items: ['Node.js', 'Express', 'LoopBack', 'REST APIs', 'Microservices', 'Event-Driven'],
  },
  {
    icon: 'cloud',
    label: 'Delivery Platform',
    title: 'Cloud & DevOps',
    description: 'Operating workloads across AWS with containerization, infrastructure automation, and dependable deployment pipelines.',
    items: ['AWS', 'ECS/Fargate', 'Lambda', 'Docker', 'Terraform', 'GitLab CI/CD'],
  },
  {
    icon: 'security',
    label: 'Identity Layer',
    title: 'Security & Auth',
    description: 'Implementing secure authentication flows, gateway controls, secrets handling, and production hardening.',
    items: ['OAuth2', 'JWT', 'IAM', 'API Gateway', 'Secrets Manager', 'Nginx'],
  },
  {
    icon: 'database',
    label: 'Data Systems',
    title: 'Databases',
    description: 'Working across relational and NoSQL stores for transactional systems, internal platforms, and cloud services.',
    items: ['PostgreSQL', 'MySQL', 'DynamoDB', 'Firestore', 'MongoDB', 'RDS'],
  },
  {
    icon: 'ai',
    label: 'Observability',
    title: 'AI & Monitoring',
    description: 'Integrating AI tooling and observability platforms to support chatbot workflows, telemetry, and operations insight.',
    items: ['Vertex AI', 'Cloud Run', 'OpenSearch', 'Kibana', 'CloudWatch', 'Google Cloud'],
  },
]

function onImgError() {
  imgBroken.value = true
  profileSrc.value = ''
}

// Dropdown
const dropdownOpen = ref(false)
const dropdownRef = ref(null)
const linkCopied = ref(false)

function toggleDropdown() {
  dropdownOpen.value = !dropdownOpen.value
}

function copyLink() {
  navigator.clipboard.writeText(window.location.href)
  linkCopied.value = true
  setTimeout(() => { linkCopied.value = false; dropdownOpen.value = false }, 1500)
}

function handleOutsideClick(e) {
  if (dropdownRef.value && !dropdownRef.value.contains(e.target)) {
    dropdownOpen.value = false
  }
}

onMounted(() => document.addEventListener('mousedown', handleOutsideClick))
onUnmounted(() => document.removeEventListener('mousedown', handleOutsideClick))
</script>

<style scoped>
/* ─── Hero ─── */
.hero {
  min-height: 100vh;
  background-color: #0d1117;
  display: flex;
  align-items: center;
  padding-top: 4rem;
}

.hero-wrap {
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4rem;
  width: 100%;
}

.hero-left {
  flex: 1;
  max-width: 560px;
}

.avail-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  border: 1px solid rgba(63, 255, 180, 0.35);
  border-radius: 100px;
  padding: 0.375rem 1rem;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: #3fffc0;
  margin-bottom: 1.75rem;
  background: rgba(63, 255, 180, 0.04);
}

.avail-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background-color: #22c55e;
  animation: blink 2s infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}

.hero-title {
  font-size: clamp(3rem, 5vw, 4.75rem);
  font-weight: 800;
  line-height: 1.1;
  color: #fff;
  margin-bottom: 1.5rem;
  font-family: 'Georgia', 'Times New Roman', serif;
}

.hero-name {
  background: linear-gradient(110deg, #3fffc0 20%, #a78bfa 80%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-bio {
  color: #9ca3af;
  font-size: 1.0625rem;
  line-height: 1.8;
  margin-bottom: 2.5rem;
}

.hero-btns {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.btn-fill {
  background-color: #3fffc0;
  color: #0d1117;
  font-weight: 700;
  font-size: 0.8125rem;
  letter-spacing: 0.07em;
  padding: 0.875rem 1.75rem;
  border-radius: 6px;
  text-decoration: none;
  transition: background 0.2s;
}

.btn-fill:hover {
  background-color: #22e5ab;
}

.btn-ghost {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  border: 1.5px solid rgba(255, 255, 255, 0.25);
  color: #fff;
  font-weight: 600;
  font-size: 0.8125rem;
  letter-spacing: 0.07em;
  padding: 0.875rem 1.75rem;
  border-radius: 6px;
  text-decoration: none;
  background: transparent;
  cursor: pointer;
  transition: border-color 0.2s, background 0.2s;
}

.chevron {
  width: 14px;
  height: 14px;
  transition: transform 0.2s;
}

.chevron.open {
  transform: rotate(180deg);
}

.btn-ghost:hover {
  border-color: rgba(255, 255, 255, 0.55);
  background: rgba(255, 255, 255, 0.04);
}

/* ─── Dropdown ─── */
.dropdown-wrap {
  position: relative;
}

.dropdown-menu {
  position: absolute;
  top: calc(100% + 10px);
  left: 0;
  min-width: 200px;
  background: #1a2030;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 14px;
  padding: 0.5rem;
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.5);
  z-index: 100;
}

.dropdown-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  width: 100%;
  padding: 0.625rem 0.75rem;
  border-radius: 8px;
  border: none;
  background: transparent;
  color: #e5e7eb;
  font-size: 0.9375rem;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  transition: background 0.15s;
  text-align: left;
}

.dropdown-item:hover {
  background: rgba(255, 255, 255, 0.06);
}

.di-icon {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.di-icon svg {
  width: 17px;
  height: 17px;
}

.dropdown-divider {
  height: 1px;
  background: rgba(255, 255, 255, 0.07);
  margin: 0.375rem 0.5rem;
}

/* Transition */
.drop-enter-active,
.drop-leave-active {
  transition: opacity 0.15s ease, transform 0.15s ease;
}
.drop-enter-from,
.drop-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}

.hero-right {
  position: relative;
  flex-shrink: 0;
}

.photo-ring {
  width: 320px;
  height: 320px;
  border-radius: 50%;
  padding: 4px;
  background: linear-gradient(135deg, #3fffc0, #a78bfa);
  overflow: hidden;
  position: relative;
}

.photo-img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  object-position: top;
  display: block;
  background: #1a2030;
}

.photo-fallback {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3.5rem;
  font-weight: 800;
  color: #3fffc0;
  background: linear-gradient(135deg, #1a2030, #0d1117);
  border-radius: 50%;
}

.status-dot {
  position: absolute;
  bottom: 14px;
  right: 14px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: #22c55e;
  border: 3px solid #0d1117;
  display: block;
}

/* ─── Stats ─── */
.stats-bar {
  background-color: #111827;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.stats-wrap {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2.25rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.stat-item {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.stat-val {
  font-size: 2.25rem;
  font-weight: 700;
  color: #3fffc0;
  line-height: 1;
}

.stat-lbl {
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.13em;
  color: #6b7280;
}

.stat-divider {
  width: 1px;
  height: 42px;
  background: rgba(255, 255, 255, 0.08);
}

/* ─── Main ─── */
.port-main {
  background-color: #0d1117;
  padding: 5rem 0 4rem;
}

.port-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.port-section {
  margin-bottom: 6rem;
}

.port-heading {
  font-size: 2.5rem;
  font-weight: 800;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 3rem;
}

.port-num {
  font-family: 'Courier New', monospace;
  font-size: 1rem;
  font-weight: 600;
  color: #3fffc0;
}

.port-line {
  flex: 1;
  height: 1px;
  background: rgba(255, 255, 255, 0.1);
}

/* ─── About ─── */
.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
}

.about-text {
  color: #9ca3af;
  font-size: 1.0625rem;
  line-height: 1.85;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.about-text strong {
  color: #e5e7eb;
  font-weight: 600;
}

.about-cards {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.role-card {
  background: #111827;
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-left: 3px solid #3fffc0;
  border-radius: 8px;
  padding: 1.25rem 1.5rem;
  transition: border-left-color 0.2s;
}

.role-card:hover {
  border-left-color: #a78bfa;
}

.role-label {
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  color: #3fffc0;
  display: block;
  margin-bottom: 0.5rem;
}

.role-company {
  font-size: 1rem;
  font-weight: 600;
  color: #e5e7eb;
  margin-bottom: 0.25rem;
}

.role-period {
  font-size: 0.875rem;
  color: #6b7280;
}

/* ─── Experience ─── */
.exp-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.exp-card {
  background: #111827;
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 12px;
  padding: 2rem;
  position: relative;
  overflow: hidden;
  transition: transform 0.2s, box-shadow 0.2s;
}

.exp-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 3px;
  height: 100%;
  background: linear-gradient(to bottom, #3fffc0, #a78bfa);
  transform: scaleY(0);
  transform-origin: top;
  transition: transform 0.3s ease;
}

.exp-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
}

.exp-card:hover::before {
  transform: scaleY(1);
}

.exp-card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1.25rem;
}

.exp-title {
  font-size: 1.375rem;
  font-weight: 700;
  color: #e5e7eb;
  margin-bottom: 0.25rem;
}

.exp-company {
  font-size: 1rem;
  color: #3fffc0;
  font-weight: 500;
}

.exp-period {
  font-size: 0.875rem;
  color: #6b7280;
  font-weight: 500;
  white-space: nowrap;
  padding: 0.375rem 0.875rem;
  background: #1a2030;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.exp-bullets {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
}

.exp-bullets li {
  position: relative;
  padding-left: 1.5rem;
  color: #9ca3af;
  line-height: 1.65;
  font-size: 0.9375rem;
}

.exp-bullets li::before {
  content: '▸';
  position: absolute;
  left: 0;
  color: #3fffc0;
  font-weight: 600;
}

.exp-achievements {
  margin-top: 1.25rem;
  padding: 1rem 1.25rem;
  background: rgba(63, 255, 192, 0.05);
  border-left: 3px solid #3fffc0;
  border-radius: 4px;
}

.exp-achieve-title {
  font-size: 0.8125rem;
  font-weight: 700;
  color: #3fffc0;
  margin-bottom: 0.5rem;
}

.exp-achieve-list {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
}

.exp-achieve-list li {
  font-size: 0.875rem;
  color: #86efac;
}

/* ─── Skills ─── */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0;
  border: 1px solid rgba(110, 127, 255, 0.15);
  border-radius: 24px;
  overflow: hidden;
  background:
    linear-gradient(180deg, rgba(11, 15, 33, 0.95), rgba(9, 12, 26, 0.88)),
    radial-gradient(circle at top right, rgba(54, 111, 255, 0.14), transparent 42%);
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.28);
}

.skill-card {
  position: relative;
  min-height: 280px;
  padding: 1.9rem 1.95rem 1.75rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.5rem;
  background:
    linear-gradient(135deg, rgba(18, 24, 51, 0.88), rgba(11, 15, 31, 0.7)),
    radial-gradient(circle at top left, rgba(63, 255, 192, 0.08), transparent 40%);
  border-right: 1px solid rgba(110, 127, 255, 0.14);
  border-bottom: 1px solid rgba(110, 127, 255, 0.14);
  transition: transform 0.25s ease, background 0.25s ease, box-shadow 0.25s ease;
}

.skill-card:nth-child(2n) {
  border-right: none;
}

.skill-card:nth-last-child(-n + 2) {
  border-bottom: none;
}

.skill-card:hover {
  transform: translateY(-4px);
  background:
    linear-gradient(135deg, rgba(22, 29, 59, 0.96), rgba(11, 16, 35, 0.84)),
    radial-gradient(circle at top left, rgba(63, 255, 192, 0.14), transparent 42%);
  box-shadow: inset 0 0 0 1px rgba(63, 255, 192, 0.08);
}

.skill-card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.skill-icon {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(63, 255, 192, 0.18);
  background: linear-gradient(180deg, rgba(63, 255, 192, 0.12), rgba(255, 255, 255, 0.04));
  color: #e8edf9;
  box-shadow: 0 10px 30px rgba(4, 10, 30, 0.28);
}

.skill-icon svg {
  width: 20px;
  height: 20px;
}

.skill-icon-frontend {
  color: #ff8851;
}

.skill-icon-backend {
  color: #cfc5ff;
}

.skill-icon-cloud {
  color: #f1f5f9;
}

.skill-icon-security {
  color: #ffd166;
}

.skill-icon-database {
  color: #9be7b1;
}

.skill-icon-ai {
  color: #ff9fcb;
}

.skill-index {
  font-size: 0.75rem;
  letter-spacing: 0.16em;
  color: rgba(181, 196, 230, 0.5);
}

.skill-card-body {
  display: grid;
  gap: 0.75rem;
}

.skill-card-kicker {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #72f5cd;
}

.skill-card-title {
  margin: 0;
  font-size: 1.35rem;
  font-weight: 700;
  color: #f4f7fb;
}

.skill-card-copy {
  margin: 0;
  max-width: 31ch;
  font-size: 0.97rem;
  line-height: 1.8;
  color: rgba(209, 218, 235, 0.7);
}

.skill-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
}

.skill-stack-item {
  display: inline-flex;
  align-items: center;
  min-height: 32px;
  padding: 0.45rem 0.82rem;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.09);
  background: rgba(255, 255, 255, 0.04);
  color: rgba(236, 242, 255, 0.82);
  font-size: 0.8rem;
  font-weight: 500;
}

/* ─── Contact ─── */
.contact-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.contact-cta {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.contact-big {
  font-size: clamp(2.25rem, 3.5vw, 3.25rem);
  font-weight: 800;
  line-height: 1.15;
  color: #fff;
  font-family: 'Georgia', 'Times New Roman', serif;
}

.contact-accent {
  color: #3fffc0;
}

.contact-desc {
  color: #9ca3af;
  font-size: 1rem;
  line-height: 1.75;
  max-width: 380px;
}

.contact-email-btn {
  display: inline-flex;
  align-items: center;
  background-color: #3fffc0;
  color: #0d1117;
  font-weight: 700;
  font-size: 0.8125rem;
  letter-spacing: 0.07em;
  padding: 0.875rem 1.75rem;
  border-radius: 6px;
  text-decoration: none;
  transition: background 0.2s;
  align-self: flex-start;
}

.contact-email-btn:hover {
  background-color: #22e5ab;
}

.contact-links {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contact-link-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.25rem 1.5rem;
  background: #111827;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  text-decoration: none;
  transition: border-color 0.2s, transform 0.2s;
}

.contact-link-card:hover {
  border-color: rgba(63, 255, 192, 0.3);
  transform: translateX(4px);
}

.contact-link-icon {
  width: 44px;
  height: 44px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.06);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: #9ca3af;
}

.contact-link-icon svg {
  width: 20px;
  height: 20px;
}

.contact-link-info {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.contact-link-label {
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  color: #3fffc0;
}

.contact-link-value {
  font-size: 0.9375rem;
  color: #e5e7eb;
  font-weight: 500;
}

/* ─── Footer ─── */
.port-footer {
  background-color: #111827;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  padding: 2rem 0;
  text-align: center;
  color: #6b7280;
  font-size: 0.875rem;
}

/* ─── Responsive ─── */
@media (max-width: 768px) {
  .hero-wrap {
    flex-direction: column-reverse;
    text-align: center;
    gap: 2.5rem;
    padding: 6rem 1.5rem 3rem;
  }

  .hero-left {
    max-width: 100%;
  }

  .hero-btns {
    justify-content: center;
  }

  .photo-ring {
    width: 220px;
    height: 220px;
  }

  .stats-wrap {
    flex-wrap: wrap;
    gap: 1.5rem;
    justify-content: center;
  }

  .stat-divider {
    display: none;
  }

  .about-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .port-heading {
    font-size: 1.75rem;
  }

  .skills-grid {
    grid-template-columns: 1fr;
  }

  .skill-card {
    min-height: auto;
    border-right: none;
    border-bottom: 1px solid rgba(110, 127, 255, 0.14);
  }

  .skill-card:nth-last-child(-n + 2) {
    border-bottom: 1px solid rgba(110, 127, 255, 0.14);
  }

  .skill-card:last-child {
    border-bottom: none;
  }

  .exp-card-header {
    flex-direction: column;
  }

  .contact-layout {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
}
</style>
