import { Component, inject, signal, computed } from '@angular/core';
import { SurveyService } from '../../services/survey';

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

}
