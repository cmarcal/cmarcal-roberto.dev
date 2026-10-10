---
title: "Home"
---

I'm a frontend engineer with experience building and evolving digital products at scale, combining technical depth, product thinking and attention to user experience. My work runs from architecture and design systems to performance, observability and quality, focused on solutions that are robust, measurable and sustainable. My core tools are React, Vue, TypeScript and Node.js.

I've been leading the adoption of AI in software development, going beyond using tools to design the systems, workflows, guardrails and validation that let agents work in real codebases with autonomy, consistency and safety. My focus is turning what AI makes possible into sustainable software engineering: expanding what teams can do without giving up strong fundamentals, quality and human accountability for the result.

<details class="collapsible" open>
<summary><h3>Frontend, in depth</h3></summary>

- **Frameworks and migrations:** React and Vue day to day, with a long track record in AngularJS, Backbone and jQuery. I've migrated legacy systems to React and Vue, and helped kick off the rebuild of the Viva Real portal with React and Clean Architecture.
- **Architecture and design systems:** frontend architecture, component libraries in Storybook and design system maintenance.
- **Performance and SEO:** continuous performance work guided by Core Web Vitals, plus SEO improvements and static pages for sitemaps.
- **Quality:** unit, integration and end-to-end tests with Jest and Cypress, and CI/CD pipelines in GitHub Actions.
- **Product work at scale:** search results and listing grouping on the large real estate marketplaces Zap Imóveis and Viva Real, payment integrations (Apple, Google Play, Adyen), paywalls and page limits, and referral and rewards features.

</details>

<details class="collapsible" open>
<summary><h3>AI-driven development</h3></summary>

I led this shift across the frontend projects and supported backend teams on their own AI workflows. The system around the agents has three parts:

- **Skills layer:** team conventions and workflows written as reusable agent skills, so every agent works the way the team works.
- **Harness:** the context, tools, permissions and guardrails that keep agent output inside the boundaries of the architecture and the standards.
- **Development loop:** spec-driven development (SDD) and TDD define what "done" means, validation happens by running the application, and every change gets human review.

</details>

<details class="collapsible">
<summary><h3>Hefesto, an AI agent</h3></summary>

Hefesto takes a Jira or GitHub Projects task all the way to an open pull request:

<ol class="loop">
<li><strong>Task</strong><span>A Jira or GitHub Projects task is the starting point.</span></li>
<li><strong>Plan</strong><span>A human-validated plan, written with spec-driven development.</span></li>
<li><strong>Implement</strong><span>A fresh agent builds it with TDD, in an isolated git worktree.</span></li>
<li><strong>Verify</strong><span>A sensor runs the app (Playwright, curl) and feeds failures back to the implementation, until it works.</span></li>
<li><strong>Pull request</strong><span>An open PR, ready for human review.</span></li>
</ol>

Agents accelerate the work, people stay accountable for it.

</details>

<details class="collapsible">
<summary><h3>Observability</h3></summary>

I built Grafana (Prometheus, Loki) and Datadog dashboards and alerts covering latency, error rates, logs and Core Web Vitals (LCP, TTFB, CLS). They also cover Kubernetes pods (memory, replicas, CPU usage vs. requests), the Node.js event loop and heap, Kafka health, and third-party integrations such as reCAPTCHA.

</details>

<details class="collapsible">
<summary><h3>Data-driven culture</h3></summary>

I introduced a data-driven culture through event tracking and product analytics, and led the frontend team in building Metabase dashboards to monitor A/B experiments (Unleash, GrowthBook) and measure feature impact.

</details>
