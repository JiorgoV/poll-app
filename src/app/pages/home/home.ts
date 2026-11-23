import { Component, inject, OnInit } from '@angular/core';
import { SurveyService } from '../../services/survey';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  surveyService = inject(SurveyService);

  /**
   * Loads all surveys when the component is initialized.
   */
  ngOnInit(): void {
    this.surveyService.loadSurveys();
  }
}
