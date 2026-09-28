# GloPros QA Automation Assessment

[![Playwright tests](https://github.com/Oksana-qa/GloPros---Tech-Assessment/actions/workflows/playwright.yml/badge.svg)](https://github.com/Oksana-qa/GloPros---Tech-Assessment/actions/workflows/playwright.yml)

End-to-end test automation for the vacancy search journey in the GloPros review environment.

## Planned stack

- Playwright
- TypeScript
- GitHub Actions
- Gherkin/BDD feature files

The project will automate the main vacancy-search flow and document additional scenarios in BDD format.

## Prerequisites

- Node.js and npm
- Internet access to the GloPros review environment

## Install and run

```bash
npm ci
npx playwright install chromium
npm test
```

To watch the test in a visible browser window, run:

```bash
npm run test:headed
```

To open the HTML report from the latest run, run:

```bash
npm run test:report
```

## Automated coverage

The automated happy path covers vacancy search with `Software Engineer` as the Main job title:

- opens the review homepage and navigates to Vacancy search;
- leaves location and dates empty and confirms the default 100 km distance;
- submits the search with the search-icon button;
- verifies `type=vacancies` and `main_job_title[0]` in the URL;
- verifies a non-zero match count;
- verifies that the first rendered vacancy exposes title, location, and match-percentage metadata.

The test intentionally does not assert a fixed match count, result title, or result ranking.

## BDD coverage

The BDD scenarios are in [features/vacancy-search.feature](features/vacancy-search.feature).

Only the happy path is automated. The feature file also documents searches with an empty title, location, dates, a non-default distance, and no results. The assignment does not define the expected product behaviour for those cases, so they are marked pending rather than given invented assertions.

## Reports and diagnostics

Every test run creates an HTML report in `playwright-report/`. On failure, Playwright retains a screenshot, trace, and video in `test-results/`. These generated artifacts are excluded from Git.

## Continuous integration

GitHub Actions runs the [Playwright tests workflow](.github/workflows/playwright.yml) on every push to `main`, pull request to `main`, and manual dispatch.

Each run uses a clean Ubuntu runner and performs:

1. `npm ci`
2. `npx playwright install --with-deps chromium`
3. `npm test`

The HTML report is uploaded as a workflow artifact. On failure, screenshots, video, and trace files are uploaded as a separate diagnostics artifact. The status badge at the top of this README links to the workflow runs in GitHub Actions.

## AI usage

AI was used to help structure the project, draft the BDD documentation, and review/refine test code. The final locator and assertion decisions were validated against the live review application and by five successful repeat runs. Initial assumptions that UI accessibility IDs were Playwright test IDs and that the search button was a submit button were rejected after live verification; the implementation uses the actual accessible labels and DOM relationships instead.

## AI-oriented workflow

The repository includes lightweight context for future AI-assisted work:

- [AGENTS.md](AGENTS.md) - project rules and continuation entry points for coding agents.
- [.ai/knowledge/ai-workflow.md](.ai/knowledge/ai-workflow.md) - verified application facts, decisions, and a continuation checklist.
- [.github/copilot-instructions.md](.github/copilot-instructions.md) - concise GitHub Copilot conventions.
- [.github/skills/vacancy-search-testing.md](.github/skills/vacancy-search-testing.md) - a focused workflow for vacancy-search changes.

These files are intentionally short: they preserve useful context while keeping the project easy to maintain.

## Definition of done

The assignment is complete when the repository contains:

- An automated happy-path test that opens the review app, enters `Software Engineer` in Main job title, leaves location and dates empty, preserves the default 100 km distance, and submits the search.
- Assertions that the resulting URL retains `type=vacancies` and the job-title query parameter, the match count is greater than zero, and at least one vacancy card displays a title, location, and match percentage.
- Assertions that do not depend on a specific result count, vacancy, or ranking.
- BDD/Gherkin documentation for the happy path and additional edge, negative, and alternative scenarios.
- A README with installation, run, coverage, CI, and AI-usage notes.
- A GitHub Actions workflow that runs the test suite successfully on a clean runner.

## Verified search contract

The review application stores the main job title in the `main_job_title[0]` query parameter. The automated test will verify this parameter with `URLSearchParams`, alongside `type=vacancies`, rather than comparing the complete URL string.

## Status

The automated happy path, BDD documentation, local reporting, and GitHub Actions are implemented.
