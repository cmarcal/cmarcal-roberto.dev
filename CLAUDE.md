# Portfolio site (Hugo on GitHub Pages)

## Every change gets its own worktree

- Start each change in a new worktree (`EnterWorktree`, which creates `.claude/worktrees/<name>` on branch `worktree-<name>`). Edit, build and commit there; keep the primary checkout's `main` untouched.
- One worktree is one change is one PR. Several can be in flight at once, and each one reverts cleanly on its own.
- Preview with `hugo server --port <port>`. Give every worktree its own port (1313, 1314, ...) so parallel previews coexist, and stop the server when the check is done.
- Done means the user validated the preview. After their go-ahead: push the branch, open the PR into `main`, squash-merge it, delete the branch, then confirm the deploy run succeeded and the live pages answer 200. The squash leaves one commit per change, so `git revert <sha>` undoes exactly that change.
- Wait for the user's go-ahead before pushing, opening the PR, merging or deploying.

## Site rules

- Mobile first. Interactions work by touch and scroll; motion respects `prefers-reduced-motion`.
- Every visible text exists in English and Portuguese (pt-br): `content/*.en.*` and `*.pt-br.*`, `data/*/en.yaml` and `pt-br.yaml`, `i18n/en.toml` and `pt-br.toml`, language params in `hugo.toml`.
- Portuguese reads as written in Portuguese, not translated. Tech terms and job titles stay in English (deploy, merge, bucket, Senior Software Engineer). Wording is gender-neutral.
- Experience dates give no duration ("Apr 2025 – Present"), so nothing goes stale.

## Environment gotchas

- Push over HTTPS: `git -c "credential.helper=!gh auth git-credential" push`. The SSH key's permissions are too open.
- `gh pr create` takes the body from a file (`--body-file`). Multi-line `--body` breaks in PowerShell 5.1.
- A fresh shell lacks `hugo` on PATH until you reload it: `$env:Path = [Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [Environment]::GetEnvironmentVariable("Path","User")`.
- Write files as UTF-8 without BOM (`[System.IO.File]::WriteAllText(path, text, (New-Object System.Text.UTF8Encoding($false)))`). Other writers turn `·` into `Â·`.
- `R` is a PowerShell alias for `Invoke-History`; name helper functions something else.
