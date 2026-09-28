import { expect, type Page } from '@playwright/test';

export class HomePage {
  readonly vacancySearchLink;

  constructor(private readonly page: Page) {
    this.vacancySearchLink = page.getByRole('link', {
      name: 'Vacancy search',
      exact: true,
    });
  }

  async open(): Promise<void> {
    await this.page.goto('/');
  }

  async openVacancySearch(): Promise<void> {
    await expect(this.vacancySearchLink).toBeVisible();
    await this.vacancySearchLink.click();
  }
}
