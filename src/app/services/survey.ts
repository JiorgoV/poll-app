import { Service, signal, computed } from '@angular/core';
import { createClient } from '@supabase/supabase-js';
import { environment } from '../../environments/environment';
import { Survey } from '../models/survey.model';

@Service()
export class SurveyService {

    supabase = createClient(environment.supabaseUrl, environment.supabaseKey);

    surveyList = signal<Survey[]>([]);

    endingSoonSurveys = computed(() =>
        this.surveyList()
            .filter((survey) => survey.endDate && this.isActive(survey))
            .sort((a, b) => new Date(a.endDate!).getTime() - new Date(b.endDate!).getTime())
            .slice(0, 3)
    )

    /**
    * Loads all surveys from Supabase and stores them in the surveyList signal.
    * @returns {Promise<void>}
    */
    async loadSurveys(): Promise<void> {
        const { data, error } = await this.supabase
            .from('surveys')
            .select('id, title, description, category, endDate:end_date');
        if (error) {
            console.error('Error loading surveys:', error.message);
            return;
        }
        this.surveyList.set(data ?? []);
    }

    /**
    * Checks if a survey is still running.
    * @param {Survey} survey - The survey to check.
    * @returns {boolean} True if the survey has no end date or ends in the future.
    */
    isActive(survey: Survey): boolean {
        if (!survey.endDate) {
            return true;
        }
        return new Date(survey.endDate) > new Date();
    }

    /**
    * Calculates the number of days until a survey ends.
    * @param {string} endDate - The end date of the survey.
    * @returns {number} The remaining days, rounded up.
    */
    getDaysLeft(endDate: string): number {
        const msPerDay = 1000 * 60 * 60 * 24;
        const diff = new Date(endDate).getTime() - new Date().getTime();
        return Math.ceil(diff / msPerDay);
    }

    constructor() {

    }

}



