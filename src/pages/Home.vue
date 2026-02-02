<template>
  <header class="header">
    <div class="container">
      <div class="profile">
        <div class="profile-info">
          <h1 class="name">Mohammad Syafiq</h1>
          <p class="title">Full-Stack & Cloud Developer</p>
          <p class="bio">
            Experienced Full Stack & Cloud Developer with 7+ years of expertise in building scalable microservices, cloud-native applications, and enterprise platforms. Strong proficiency in Node.js, TypeScript, Angular/React, AWS, Docker, CI/CD, and system architecture.
          </p>
        </div>
      </div>
    </div>
  </header>

  <main class="main">
    <div class="container">
      <section class="section work-experience">
        <h2 class="section-title">Work Experience</h2>
        <div class="timeline">
          <div class="experience-card">
            <div class="experience-header">
              <div class="experience-title-group">
                <h3 class="experience-title">Portal Developer / Specialist</h3>
                <p class="company">Maxis Broadband Sdn Bhd</p>
              </div>
              <span class="period">Oct 2022 - Present</span>
            </div>
            <ul class="experience-details">
              <li>Developed and maintained scalable microservices using Node.js, Express, TypeScript, and modern frontend frameworks (Angular, React, Vue)</li>
              <li>Built and implemented RESTful APIs, event-driven architectures, and distributed systems</li>
              <li>Containerized applications using Docker, created multi-stage Dockerfiles, and automated AWS deployments via TeamCity CI/CD and Terraform</li>
              <li>Migrated and developed microservices with GitLab CI/CD, enabling automated build, test, and deployment pipelines</li>
              <li>Hands-on with AWS services including ALB/NLB, API Gateway, Lambda, ECS (Fargate/EC2), Secrets Manager, RDS, S3, DynamoDB, CloudWatch, IAM, VPC</li>
              <li>Configured Nginx reverse proxy, security hardening, and production optimizations</li>
              <li>Integrated Google Cloud Run with Firestore and used Vertex AI for chatbot development</li>
              <li>Implemented OAuth2 authentication for Maxis Identity, delivering secure customer login and seamless identity verification</li>
            </ul>
            <div class="mt-4 p-4 bg-green-50 border-l-4 border-green-500 rounded">
              <p class="text-sm font-semibold text-green-800 mb-1">Key Achievements:</p>
              <ul class="text-sm text-green-700 space-y-1">
                <li>🏆 Awarded Team Award: GitLab Migration Project (Q4 2024)</li>
                <li>🏆 Awarded Team Award: Maxis Enterprise Device Portal (Q4 2024)</li>
                <li>💰 Key role in AWS region migration (Singapore → Malaysia), reducing cloud cost by 30% and improving latency</li>
              </ul>
            </div>
          </div>

          <div class="experience-card">
            <div class="experience-header">
              <div class="experience-title-group">
                <h3 class="experience-title">Web Tech Lead</h3>
                <p class="company">AxelCloud Technologies Sdn Bhd</p>
              </div>
              <span class="period">Mar 2022 - Aug 2022</span>
            </div>
            <ul class="experience-details">
              <li>Deployed live clinic/hospital information system using AWS resources</li>
              <li>Built company and CURAX websites using Docker + AWS</li>
              <li>Developed a government system for Malaysia Productivity Corporation (MPC) launched by YB Dato' Seri Mohamed Azmin Ali</li>
              <li>Setup mail servers and broadcast systems for Academy in Factory (AiF)</li>
              <li>Provided workshops, training, and end-user support for MPC projects</li>
            </ul>
          </div>

          <div class="experience-card">
            <div class="experience-header">
              <div class="experience-title-group">
                <h3 class="experience-title">Full-Stack Developer</h3>
                <p class="company">Digital Venus Sdn Bhd</p>
              </div>
              <span class="period">Jun 2021 - Feb 2022</span>
            </div>
            <ul class="experience-details">
              <li>Developed mobile apps using Ionic v5</li>
              <li>Built APIs via Node.js LoopBack (TypeScript) with PostgreSQL</li>
              <li>Deployed backend services on AWS Elastic Beanstalk</li>
              <li>Developed website integrated with iPay88 payment gateway</li>
              <li>Wrote Angular unit tests for Ionic components</li>
            </ul>
          </div>

          <div class="experience-card">
            <div class="experience-header">
              <div class="experience-title-group">
                <h3 class="experience-title">Web / Back-End Developer</h3>
                <p class="company">Poplook Sdn Bhd</p>
              </div>
              <span class="period">Aug 2018 - May 2021</span>
            </div>
            <ul class="experience-details">
              <li>Oversaw product backlog, database backups, and e-commerce enhancements</li>
              <li>Maintained Poplook Prestashop e-commerce platform and integrated multiple plugins</li>
              <li>Deployed POS systems for new branches</li>
              <li>Implemented split payment feature similar to SPayLater</li>
              <li>Managed product syncing through NetSuite, enabling store availability visibility</li>
            </ul>
          </div>

          <div class="experience-card">
            <div class="experience-header">
              <div class="experience-title-group">
                <h3 class="experience-title">Network Engineer Trainee</h3>
                <p class="company">Telekom Malaysia Berhad</p>
              </div>
              <span class="period">Aug 2017 - Aug 2018</span>
            </div>
            <ul class="experience-details">
              <li>Documented meetings for server/rack installation in major data centers</li>
              <li>Assisted in port configuration, cabling, and hardware mounting</li>
              <li>Supported server and NetApp storage installation</li>
              <li>Developed internal document directory portal</li>
            </ul>
          </div>

          <div class="experience-card">
            <div class="experience-header">
              <div class="experience-title-group">
                <h3 class="experience-title">Freelance Developer</h3>
                <p class="company">Self-Employed</p>
              </div>
              <span class="period">Jul 2017 - Jul 2018</span>
            </div>
            <ul class="experience-details">
              <li>Delivered bespoke systems for ProOffice, Rocket Integration Technology, and HS Management Services</li>
              <li>Built UiTM apps: bus tracking, home rental, autism emotion recognition, library scanner</li>
              <li>Developed KKM patient system and government-linked applications</li>
            </ul>
          </div>

          <div class="experience-card">
            <div class="experience-header">
              <div class="experience-title-group">
                <h3 class="experience-title">Junior Web Developer</h3>
                <p class="company">Vialing Sdn Bhd</p>
              </div>
              <span class="period">Feb 2017 - Jul 2017</span>
            </div>
            <ul class="experience-details">
              <li>Maintained and enhanced Campus Management System</li>
              <li>Upgraded system from CodeIgniter to Laravel 5</li>
              <li>Supported deployment for Xiamen University</li>
              <li>Handled bug fixes and support tickets</li>
            </ul>
          </div>
        </div>
      </section>

      <section class="section skills">
        <h2 class="section-title">Technical Skills</h2>
        <div class="skills-grid">
          <div class="skill-category">
            <h3 class="skill-category-title">Frontend</h3>
            <div class="skill-tags">
              <span class="skill-tag">Angular</span>
              <span class="skill-tag">React</span>
              <span class="skill-tag">Vue.js</span>
              <span class="skill-tag">TypeScript</span>
              <span class="skill-tag">JavaScript</span>
              <span class="skill-tag">Ionic</span>
            </div>
          </div>
          <div class="skill-category">
            <h3 class="skill-category-title">Backend</h3>
            <div class="skill-tags">
              <span class="skill-tag">Node.js</span>
              <span class="skill-tag">Express</span>
              <span class="skill-tag">TypeScript</span>
              <span class="skill-tag">LoopBack</span>
              <span class="skill-tag">PostgreSQL</span>
              <span class="skill-tag">DynamoDB</span>
              <span class="skill-tag">RDS</span>
            </div>
          </div>
          <div class="skill-category">
            <h3 class="skill-category-title">Cloud &amp; DevOps</h3>
            <div class="skill-tags">
              <span class="skill-tag">AWS</span>
              <span class="skill-tag">ECS/Fargate</span>
              <span class="skill-tag">Lambda</span>
              <span class="skill-tag">API Gateway</span>
              <span class="skill-tag">Docker</span>
              <span class="skill-tag">Terraform</span>
              <span class="skill-tag">GitLab CI/CD</span>
              <span class="skill-tag">TeamCity</span>
            </div>
          </div>
          <div class="skill-category">
            <h3 class="skill-category-title">Tools &amp; Others</h3>
            <div class="skill-tags">
              <span class="skill-tag">Git</span>
              <span class="skill-tag">Nginx</span>
              <span class="skill-tag">OAuth2</span>
              <span class="skill-tag">Kibana</span>
              <span class="skill-tag">OpenSearch</span>
              <span class="skill-tag">CloudWatch</span>
              <span class="skill-tag">Google Cloud</span>
              <span class="skill-tag">Vertex AI</span>
            </div>
          </div>
        </div>
      </section>

      <section class="section contact">
         <h2 class="section-title-github">Get In Touch</h2>
        <div class="contact-links">
          <a
            href="https://github.com/SyafiqTM"
            class="contact-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg class="icon" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
              />
            </svg>
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/syafiq-zahir"
            class="contact-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg class="icon" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
              />
            </svg>
            LinkedIn
          </a>
          <a href="mailto:syafiq@example.com" class="contact-link">
            <svg class="icon" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"
              />
            </svg>
            Email
          </a>
        </div>
      </section>
    </div>
  </main>

  <footer class="footer">
    <div class="container">
      <p>&copy; 2024 Syafiq. All rights reserved.</p>
    </div>
  </footer>
</template>

<script setup>
// Portfolio page
</script>
