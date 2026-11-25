import { Component, inject, signal, computed } from '@angular/core';
import { SurveyService } from '../../services/survey';
import { CATEGORIES } from '../../models/survey.model';

@Component({
  imports: [],
  selector: 'app-survey-list',
  styleUrl: './survey-list.scss',
  templateUrl: './survey-list.html',
})
export class SurveyList {
  surveyService = inject(SurveyService);

  showActive = signal(true);
  selectedCategory = signal('All');

  filteredSurveys = computed(() =>
    this.surveyService.surveyList()
      .filter((survey) => this.surveyService.isActive(survey) === this.showActive())
      .filter((survey) => this.selectedCategory() === 'All' || survey.category === this.selectedCategory())
  );

  categories = CATEGORIES;
  isDropdownOpen = signal(false);

  /**
 * Opens or closes the category dropdown.
 */
  toggleDropdown(): void {
    this.isDropdownOpen.update((isOpen) => !isOpen);
  }

  /**
   * Sets the selected category and closes the dropdown.
   * @param {string} category - The category to filter by, or 'All'.
   */
  selectCategory(category: string): void {
    this.selectedCategory.set(category);
    this.isDropdownOpen.set(false);
  }

}
