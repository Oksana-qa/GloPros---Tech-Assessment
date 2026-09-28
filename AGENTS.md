# Project guidance for coding agents

This repository is a Playwright + TypeScript QA assessment for GloPros vacancy search.

## Start here

- Read `.ai/knowledge/ai-workflow.md` when working on test behaviour or project context.
- Read `.github/skills/vacancy-search-testing.md` when changing vacancy-search automation.
- Follow `.github/copilot-instructions.md` for concise automation conventions.

## Working rules

- Keep the happy-path scope aligned with `features/vacancy-search.feature`.
- Prefer verified accessible locators and observable waits.
- Run `npm test` after changing test code or Playwright configuration.
- Do not hard-code dynamic search results.
- Keep generated Playwright artifacts out of commits.
