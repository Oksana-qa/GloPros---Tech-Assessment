# AI workflow knowledge

## Purpose

This file gives the Core Agent the project context needed to safely continue the assessment.

## What is implemented

- Playwright + TypeScript vacancy-search happy path.
- BDD documentation in `features/vacancy-search.feature`.
- HTML report and failure diagnostics.
- GitHub Actions workflow in `.github/workflows/playwright.yml`.

## Verified application facts

- Vacancy search URL uses `type=vacancies`.
- The main-title parameter is `main_job_title[0]`.
- Main job title is exposed as the `Main job title` textbox.
- The default distance is the selected `100km` option.
- Vacancy cards link to `/vacancy-profiles/` routes.

## AI-assisted decisions that were verified

Initial locator assumptions were checked against the live review application. Accessibility IDs were not assumed to be Playwright test IDs, and the icon-only search control was not assumed to be a submit button. The current locators reflect the verified DOM and accessibility structure.

## Continuation checklist

1. Read `AGENTS.md` for project rules.
2. Run `npm test` after changing test code.
3. Do not hard-code a result count, vacancy title, or ranking.
4. Update this note when a verified product fact or workflow decision changes.
