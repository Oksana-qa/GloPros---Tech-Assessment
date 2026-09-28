import { expect, type Locator, type Page } from '@playwright/test';

export class VacancySearchPage {
  readonly mainJobTitleInput: Locator;
  readonly searchButton: Locator;
  readonly defaultDistanceOption: Locator;
  readonly matchCount: Locator;
  readonly vacancyCards: Locator;

  constructor(private readonly page: Page) {
    this.mainJobTitleInput = page.getByRole('textbox', {
      name: 'Main job title',
      exact: true,
    });
    this.searchButton = page
      .getByRole('combobox')
      .last()
      .locator('xpath=following::button[1]');
    this.defaultDistanceOption = page.getByRole('option', {
      name: '100km',
      exact: true,
      selected: true,
    });
    this.matchCount = page.getByRole('heading', { name: /^\d+ matches$/ });
    this.vacancyCards = page.locator('a[href^="/vacancy-profiles/"]');
  }

  async fillMainJobTitle(title: string): Promise<void> {
    await this.mainJobTitleInput.fill(title);
  }

  async submitSearch(): Promise<void> {
    await expect(this.searchButton).toBeVisible();
    await this.searchButton.click();
  }

  async expectDefaultDistance(): Promise<void> {
    await expect(this.defaultDistanceOption).toHaveCount(1);
    await expect(this.defaultDistanceOption).toHaveJSProperty('selected', true);
  }

  async getFirstVacancyCardAccessibility(): Promise<string> {
    return this.vacancyCards.first().ariaSnapshot();
  }
}
