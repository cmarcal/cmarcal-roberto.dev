---
title: "Início"
---

Sou Frontend Engineer com experiência na construção e evolução de produtos digitais em escala, combinando profundidade técnica, visão de produto e atenção à experiência do usuário. Minha atuação vai da arquitetura e dos design systems à performance, observabilidade e qualidade, com foco em soluções robustas, mensuráveis e sustentáveis. Minhas principais tecnologias são React, Vue, TypeScript e Node.js.

Tenho liderado a adoção de IA no desenvolvimento de software, indo além do uso de ferramentas para projetar os sistemas, os fluxos, os guardrails e a validação que permitem aos agentes atuar em bases de código reais com autonomia, consistência e segurança. Meu foco é transformar o que a IA torna possível em engenharia de software sustentável: ampliar a capacidade dos times sem abrir mão de bons fundamentos técnicos, da qualidade e da responsabilidade humana sobre o resultado.

<details class="collapsible" open>
<summary><h3>Frontend a fundo</h3></summary>

- **Frameworks e migrações:** React e Vue no dia a dia, com bastante bagagem em AngularJS, Backbone e jQuery. Migrei sistemas legados para React e Vue e ajudei a dar o pontapé inicial na reconstrução do portal Viva Real com React e Clean Architecture.
- **Arquitetura e design systems:** arquitetura de frontend, bibliotecas de componentes no Storybook e manutenção de design system.
- **Performance e SEO:** trabalho contínuo de performance guiado pelos Core Web Vitals, além de melhorias de SEO e páginas estáticas para o sitemap.
- **Qualidade:** testes unitários, de integração e end-to-end com Jest e Cypress, e pipelines de CI/CD no GitHub Actions.
- **Produto em escala:** resultados de busca e agrupamento de anúncios nos grandes marketplaces imobiliários Zap Imóveis e Viva Real, integrações de pagamento (Apple, Google Play, Adyen), paywalls e limite de páginas, e funcionalidades de indicação e recompensas.

</details>

<details class="collapsible" open>
<summary><h3>Engenharia de software com IA</h3></summary>

Liderei a adoção da engenharia de software com IA nos projetos de frontend e apoiei os times de backend na evolução de seus próprios fluxos. O ambiente de engenharia em que os agentes operam tem três partes:

- **Skills e convenções:** transformo padrões, práticas e fluxos de trabalho do time em skills reutilizáveis, dando aos agentes instruções consistentes sobre como desenvolver dentro do projeto.
- **Harness de engenharia:** estruturo o contexto, as ferramentas, as permissões e os guardrails que delimitam a atuação dos agentes e integram seu trabalho à arquitetura e aos padrões existentes.
- **Desenvolvimento e validação:** combino spec-driven development (SDD) e TDD para orientar a implementação e definir critérios verificáveis de conclusão. A validação inclui a execução da aplicação, e toda mudança passa por revisão humana.

</details>

<details class="collapsible">
<summary><h3>Hefesto, um agente de IA</h3></summary>

O Hefesto leva uma tarefa do Jira ou do GitHub Projects até um pull request aberto:

<ol class="loop">
<li><strong>Tarefa</strong><span>Uma tarefa do Jira ou do GitHub Projects é o ponto de partida.</span></li>
<li><strong>Plano</strong><span>Um plano validado por uma pessoa, escrito com spec-driven development.</span></li>
<li><strong>Implementar</strong><span>Um agente novo constrói com TDD, em um git worktree isolado.</span></li>
<li><strong>Verificar</strong><span>Um sensor roda a aplicação (Playwright, curl) e devolve as falhas para a implementação, até funcionar.</span></li>
<li><strong>Pull request</strong><span>Um PR aberto, pronto para revisão humana.</span></li>
</ol>

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
