'use server';

import { getPersonalizedRecommendations } from '@/ai/flows/personalized-recommendations';
import type { PersonalizedRecommendationsOutput } from '@/ai/flows/personalized-recommendations';

export async function generateRecommendationsAction(
  viewingHistory: string[]
): Promise<PersonalizedRecommendationsOutput> {
  try {
    const recommendations = await getPersonalizedRecommendations({ viewingHistory });
    return recommendations;
  } catch (error) {
    console.error('Error generating recommendations:', error);
    // In a real app, you'd want more robust error handling
    return { recommendations: [] };
  }
}
