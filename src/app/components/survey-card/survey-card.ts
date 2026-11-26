import { Component, inject, input } from '@angular/core';
import { SurveyService } from '../../services/survey';
import { Survey } from '../../models/survey.model';

@Component({
  imports: [],
  selector: 'app-survey-card',
  styleUrl: './survey-card.scss',
  templateUrl: './survey-card.html',
})
export class SurveyCard {
  surveyService = inject(SurveyService);

  survey = input.required<Survey>();
}
