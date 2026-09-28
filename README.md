# GloPros QA Automation Assessment

End-to-end test automation for the vacancy search journey in the GloPros review environment.

## Planned stack

- Playwright
- TypeScript
- GitHub Actions
- Gherkin/BDD feature files

The project will automate the main vacancy-search flow and document additional scenarios in BDD format.

## Definition of done

The assignment is complete when the repository contains:

- An automated happy-path test that opens the review app, enters `Software Engineer` in Main job title, leaves location and dates empty, preserves the default 100 km distance, and submits the search.
- Assertions that the resulting URL retains `type=vacancies` and the job-title query parameter, the match count is greater than zero, and at least one vacancy card displays a title, location, and match percentage.
- Assertions that do not depend on a specific result count, vacancy, or ranking.
- BDD/Gherkin documentation for the happy path and additional edge, negative, and alternative scenarios.
- A README with installation, run, coverage, CI, and AI-usage notes.
- A GitHub Actions workflow that runs the test suite successfully on a clean runner.

## Open points to verify in the application

- Stable UI selectors for the search controls, match count, and vacancy-card metadata.

## Verified search contract

The review application stores the main job title in the `main_job_title[0]` query parameter. The automated test will verify this parameter with `URLSearchParams`, alongside `type=vacancies`, rather than comparing the complete URL string.

## Status

Project setup in progress.
