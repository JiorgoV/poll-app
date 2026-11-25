export interface Survey {
    id: number;
    title: string;
    description?: string;
    category: string;
    endDate?: string;
}

export interface Question {
    id: number;
    surveyId: number;
    text: string;
    allowMultiple: boolean;
}

export interface Answer {
    id: number;
    questionId: number;
    text: string;
    votes: number;
}

export const CATEGORIES = [
    'Team Activities',
    'Health & Wellness',
    'Gaming & Entertainment',
    'Education & Learning',
    'Lifestyle & Preferences',
    'Technology & Innovation',
];