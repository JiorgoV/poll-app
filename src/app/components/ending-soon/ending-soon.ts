import { Component, inject } from '@angular/core';
import { SurveyService } from '../../services/survey';

@Component({
  imports: [],
  selector: 'app-ending-soon',
  styleUrl: './ending-soon.scss',
  templateUrl: './ending-soon.html',
})
export class EndingSoon {
  surveyService = inject(SurveyService)
}
