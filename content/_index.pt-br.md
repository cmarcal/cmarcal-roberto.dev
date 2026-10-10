---
title: "Início"
---

Sou Frontend Engineer e tenho muita experiência criando aplicações web para públicos B2B e B2C, da arquitetura e dos design systems à performance e aos testes. Minhas principais tecnologias são React, Vue, TypeScript e Node.js, com a AWS na infraestrutura.

<details class="collapsible" open>
<summary><h3>Frontend a fundo</h3></summary>

- **Frameworks e migrações:** React e Vue no dia a dia, com bastante bagagem em AngularJS, Backbone e jQuery. Migrei sistemas legados para React e Vue e ajudei a dar o pontapé inicial na reconstrução do portal Viva Real com React e Clean Architecture.
- **Arquitetura e design systems:** arquitetura de frontend, bibliotecas de componentes no Storybook e manutenção de design system.
- **Performance e SEO:** trabalho contínuo de performance guiado pelos Core Web Vitals, além de melhorias de SEO e páginas estáticas para o sitemap.
- **Qualidade:** testes unitários, de integração e end-to-end com Jest e Cypress, e pipelines de CI/CD no GitHub Actions.
- **Produto em escala:** resultados de busca e agrupamento de anúncios nos grandes marketplaces imobiliários Zap Imóveis e Viva Real, integrações de pagamento (Apple, Google Play, Adyen), paywalls e limite de páginas, e funcionalidades de indicação e recompensas.

</details>

<details class="collapsible" open>
<summary><h3>Desenvolvimento com IA</h3></summary>

Liderei a adoção do desenvolvimento com IA nos projetos de frontend e apoiei os times de backend nos fluxos deles. Não me limito a usar ferramentas de IA: eu desenho o sistema ao redor delas, para que os agentes consigam contribuir com segurança em uma base de código real:

- **Camada de skills:** as convenções e os fluxos do time escritos como skills reutilizáveis, para que cada agente trabalhe do jeito que o time trabalha.
- **Harness:** o contexto, as ferramentas, as permissões e os guardrails que mantêm o que os agentes produzem dentro da arquitetura e dos padrões do projeto.
- **Ciclo de desenvolvimento:** spec-driven development (SDD) e TDD definem o que significa "pronto", a validação é feita rodando a aplicação e toda mudança passa por revisão humana.

</details>

<details class="collapsible">
<summary><h3>Hefesto, um agente de IA</h3></summary>

O Hefesto leva uma tarefa do Jira ou do GitHub Projects até um pull request aberto:

1. **Um plano validado por uma pessoa**, escrito a partir da tarefa com spec-driven development.
2. **Um agente novo implementa o plano** com TDD, em um git worktree isolado.
3. **Um sensor roda a aplicação** (Playwright, curl) e devolve as falhas para o ciclo, até funcionar.

Os agentes aceleram o trabalho, mas quem responde pelo resultado são as pessoas.

</details>

<details class="collapsible">
<summary><h3>Observabilidade</h3></summary>

Criei dashboards e alertas no Grafana (Prometheus, Loki) e no Datadog para acompanhar latência, taxa de erro, logs e Core Web Vitals (LCP, TTFB, CLS). Eles também cobrem os pods do Kubernetes (memória, réplicas, uso de CPU vs. requests), o event loop e o heap do Node.js, a saúde do Kafka e integrações de terceiros, como o reCAPTCHA.

</details>

<details class="collapsible">
<summary><h3>Cultura de dados</h3></summary>

Levei uma cultura orientada a dados para o time, com rastreamento de eventos e analytics de produto, e liderei o time de frontend na criação de dashboards no Metabase para acompanhar experimentos A/B (Unleash, GrowthBook) e medir o impacto das funcionalidades.

</details>
