'use server';

/**
 * @fileOverview Flow for generating personalized movie recommendations based on user viewing history.
 *
 * - getPersonalizedRecommendations - A function that returns movie recommendations.
 * - PersonalizedRecommendationsInput - The input type for the getPersonalizedRecommendations function.
 * - PersonalizedRecommendationsOutput - The return type for the getPersonalizedRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedRecommendationsInputSchema = z.object({
  viewingHistory: z.array(z.string()).describe('List of movie titles the user has watched.'),
  genres: z.array(z.string()).optional().describe('List of user preferred genres.'),
});
export type PersonalizedRecommendationsInput = z.infer<typeof PersonalizedRecommendationsInputSchema>;

const PersonalizedRecommendationsOutputSchema = z.object({
  recommendations: z.array(z.string()).describe('List of recommended movie titles.'),
});
export type PersonalizedRecommendationsOutput = z.infer<typeof PersonalizedRecommendationsOutputSchema>;

export async function getPersonalizedRecommendations(
  input: PersonalizedRecommendationsInput
): Promise<PersonalizedRecommendationsOutput> {
  return personalizedRecommendationsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedRecommendationsPrompt',
  input: {schema: PersonalizedRecommendationsInputSchema},
  output: {schema: PersonalizedRecommendationsOutputSchema},
  prompt: `Based on the user's viewing history and preferred genres, recommend a list of movies the user might enjoy.

  Viewing History: {{#if viewingHistory}}{{#each viewingHistory}}- {{{this}}}{{/each}}{{else}}None{{/if}}
  Preferred Genres: {{#if genres}}{{#each genres}}- {{{this}}}{{/each}}{{else}}Any{{/if}}

  Please return a list of movie recommendations.`,
});

const personalizedRecommendationsFlow = ai.defineFlow(
  {
    name: 'personalizedRecommendationsFlow',
    inputSchema: PersonalizedRecommendationsInputSchema,
    outputSchema: PersonalizedRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
