# GitHub Copilot instructions

- Use TypeScript and Playwright for UI automation.
- Prefer roles, labels, and verified DOM relationships over brittle CSS selectors.
- Do not use fixed sleeps; wait for observable UI state instead.
- Do not assert a fixed vacancy count, result title, or ranking.
- Keep the happy-path test aligned with `features/vacancy-search.feature`.
- Run `npm test` after changing automation code.
- Keep generated reports, videos, and traces out of commits.
