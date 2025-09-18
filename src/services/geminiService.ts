import { GoogleGenerativeAI } from '@google/generative-ai';
import { BreedResult } from '../types';

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

if (!API_KEY) {
  console.warn('Gemini API key not found. Please add VITE_GEMINI_API_KEY to your .env file.');
}

const genAI = new GoogleGenerativeAI(API_KEY || 'demo-key');

export class GeminiService {
  private model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

  async analyzeImage(imageFile: File): Promise<BreedResult> {
    try {
      const imageData = await this.fileToGenerativePart(imageFile);
      
      const prompt = `Analyze this image of a cattle or buffalo and identify the breed. Provide the response in the following JSON format:
{
  "breed": "exact breed name",
  "confidence": confidence_score_0_to_100,
  "animalType": "cattle" or "buffalo",
  "characteristics": ["list", "of", "key", "characteristics"],
  "productivity": "productivity information",
  "careTips": ["care", "tip", "1", "care tip 2"],
  "origin": "origin location/region",
  "avgWeight": "average weight range",
  "avgHeight": "average height range",
  "lifespan": "typical lifespan"
}

Focus on Indian cattle and buffalo breeds. If the image doesn't contain a clear cattle or buffalo, return an error message in the breed field.`;

      const result = await this.model.generateContent([prompt, imageData]);
      const response = await result.response;
      const text = response.text();
      
      // Extract JSON from response
      const jsonMatch = text.match(/\{[\s\S]*\}/);
      if (!jsonMatch) {
        throw new Error('Invalid response format from AI model');
      }
      
      const breedData = JSON.parse(jsonMatch[0]);
      
      if (breedData.breed.toLowerCase().includes('error') || breedData.breed.toLowerCase().includes('not found')) {
        throw new Error('Could not identify breed from the image');
      }
      
      return breedData;
    } catch (error) {
      console.error('Error analyzing image:', error);
      throw new Error('Failed to analyze image. Please try again with a clearer photo.');
    }
  }

  private async fileToGenerativePart(file: File): Promise<any> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const base64Data = (reader.result as string).split(',')[1];
        resolve({
          inlineData: {
            data: base64Data,
            mimeType: file.type,
          },
        });
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }
}

export const geminiService = new GeminiService();