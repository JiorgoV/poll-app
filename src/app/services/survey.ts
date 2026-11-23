import { Service, signal } from '@angular/core';
import { createClient } from '@supabase/supabase-js';
import { environment } from '../../environments/environment';
import { Survey } from '../models/survey.model';

@Service()
export class SurveyService {

    supabase = createClient(environment.supabaseUrl, environment.supabaseKey);

    surveyList = signal<Survey[]>([]);

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

    constructor() {

    }

}



