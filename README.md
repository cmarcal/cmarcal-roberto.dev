# cmarcal-roberto.dev

Personal portfolio and articles of Roberto Marçal, a frontend engineer. Live at **[cmarcal-roberto.dev](https://cmarcal-roberto.dev)**.

The site has a home page (about, areas of expertise, stack, experience) and a section of articles on frontend, performance and working with AI. Everything is available in English and Portuguese (pt-br).

## Stack

- [Hugo](https://gohugo.io/) (extended), static site, no JavaScript framework
- Plain CSS and a little vanilla JavaScript for the interactive parts of the articles
- GitHub Pages, deployed by GitHub Actions

## Run it locally

```sh
hugo server
```

Then open http://localhost:1313. Hugo extended is needed; the version used in CI is set in [`.github/workflows/hugo.yaml`](.github/workflows/hugo.yaml).

## How it is organized

| Path | What lives there |
|---|---|
| `content/` | Pages and articles, one file per language (`*.en.*` and `*.pt-br.*`) |
| `data/` | Structured content for the home page (stack, experience, areas), per language |
| `i18n/` | Interface strings in English and Portuguese |
| `layouts/` | Hugo templates |
| `assets/` | CSS and JavaScript, plus the styles and scripts of each article |
| `static/` | Favicon, icons and the custom domain (`CNAME`) |

## Deploy

Every push to `main` builds the site with Hugo and publishes it to GitHub Pages.

## Contributing to the site

Changes follow the workflow in [`CLAUDE.md`](CLAUDE.md): one change per worktree, one pull request per change, squash-merged into `main`. Every visible text must exist in both languages.
