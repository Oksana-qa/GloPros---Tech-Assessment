import { expect, test } from '@playwright/test';
import { HomePage } from '../pages/home.page';
import { VacancySearchPage } from '../pages/vacancy-search.page';

test('searches vacancies by main job title', async ({ page }) => {
  const homePage = new HomePage(page);
  const vacancySearchPage = new VacancySearchPage(page);

  await test.step('Open vacancy search', async () => {
    await homePage.open();
    await homePage.openVacancySearch();
    await expect(page).toHaveURL(/\/search\/\?type=vacancies/);
  });

  await test.step('Search by main job title', async () => {
    await vacancySearchPage.expectDefaultDistance();
    await vacancySearchPage.fillMainJobTitle('Software Engineer');
    await vacancySearchPage.submitSearch();

    await expect
      .poll(() => new URL(page.url()).searchParams.get('main_job_title[0]'))
      .toBe('Software Engineer');
  });

  await test.step('Verify search results', async () => {
    const searchParams = new URL(page.url()).searchParams;

    expect(searchParams.get('type')).toBe('vacancies');
    expect(searchParams.get('main_job_title[0]')).toBe('Software Engineer');

    await expect(vacancySearchPage.matchCount).toBeVisible();
    const matchCountText = await vacancySearchPage.matchCount.innerText();
    const matchCount = Number(matchCountText.match(/^\s*(\d+)\s+matches\s*$/)?.[1]);
    expect(matchCount).toBeGreaterThan(0);

    await expect(vacancySearchPage.vacancyCards).not.toHaveCount(0);
    await expect(vacancySearchPage.vacancyCards.first()).toBeVisible();
    const firstCardAccessibility = await vacancySearchPage.getFirstVacancyCardAccessibility();
    const matchPercentage = firstCardAccessibility.match(/\d{1,3}%/);
    const title = firstCardAccessibility.match(/link "(.+?)"/)?.[1]?.trim();
    const location = firstCardAccessibility
      .match(/\b\d{1,3}%\s+(.+?)\s+(?:Full-time|Part-time|Freelance|Contract)/i)?.[1]
      ?.trim();

    expect(title).toBeTruthy();
    expect(location).toBeTruthy();
    expect(matchPercentage).toBeTruthy();
  });
});
