# Skill: vacancy search testing

Use this guide when changing vacancy-search automation.

1. Review the matching scenario in `features/vacancy-search.feature`.
2. Reuse the page objects in `pages/` before adding selectors to a spec.
3. Verify new selectors against the live review environment.
4. Assert stable business outcomes: URL parameters, non-zero matches, and vacancy metadata.
5. Run `npm test` and review failure artifacts if the test fails.
