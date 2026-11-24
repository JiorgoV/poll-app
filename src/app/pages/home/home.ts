import { Component, inject, OnInit } from '@angular/core';
import { SurveyService } from '../../services/survey';
import { Hero } from '../../components/hero/hero';

@Component({
  selector: 'app-home',
  imports: [Hero],
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
