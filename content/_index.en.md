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
<summary><h3>Software engineering with AI</h3></summary>

I led the adoption of AI in software engineering across the frontend projects and supported backend teams in evolving their own workflows. The engineering environment the agents work in has three parts:

- **Skills and conventions:** I turn the team's standards, practices and workflows into reusable skills, giving agents consistent instructions on how to develop within the project.
- **Engineering harness:** I structure the context, tools, permissions and guardrails that bound what agents can do and tie their work into the existing architecture and standards.
- **Development and validation:** I combine spec-driven development (SDD) and TDD to guide implementation and define verifiable completion criteria. Validation includes running the application, and every change gets human review.

</details>

<details class="collapsible">
<summary><h3>Hefesto, an AI agent</h3></summary>

Hefesto takes a Jira or GitHub Projects task to an open pull request. The point isn't connecting an agent to a task tracker: it's structuring the flow so the AI's implementation can be verified before it reaches human review. An open PR doesn't mean the change is correct.

<ol class="loop">
<li><strong>Task</strong><span>A Jira or GitHub Projects task is the starting point.</span></li>
<li><strong>Plan</strong><span>A plan written with spec-driven development and validated by a person before any code exists. It defines what "done" means as verifiable criteria.</span></li>
<li><strong>Implement</strong><span>A fresh agent builds against the plan with TDD, in an isolated git worktree.</span></li>
<li><strong>Verify</strong><span>A sensor runs the application (Playwright, curl) and feeds failures back to the implementation. The loop ends when the plan's criteria are met, not when the agent says it's done.</span></li>
<li><strong>Pull request</strong><span>An open PR whose change has already been verified, ready for human review.</span></li>
</ol>

The control points: a person validates the plan before any code is written, the work stays isolated, the running application judges the result, and a person reviews the PR. Agents accelerate the work, people stay accountable for it.

</details>

<details class="collapsible">
<summary><h3>Observability</h3></summary>

I built Grafana (Prometheus, Loki) and Datadog dashboards and alerts covering latency, error rates, logs and Core Web Vitals (LCP, TTFB, CLS). They also cover Kubernetes pods (memory, replicas, CPU usage vs. requests), the Node.js event loop and heap, Kafka health, and third-party integrations such as reCAPTCHA.

</details>

<details class="collapsible">
<summary><h3>Data-driven culture</h3></summary>

I introduced a data-driven culture through event tracking and product analytics, and led the frontend team in building Metabase dashboards to monitor A/B experiments (Unleash, GrowthBook) and measure feature impact.

</details>
