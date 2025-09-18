export interface BreedResult {
  breed: string;
  confidence: number;
  animalType: 'cattle' | 'buffalo';
  characteristics: string[];
  productivity: string;
  careTips: string[];
  origin: string;
  avgWeight: string;
  avgHeight: string;
  lifespan: string;
}

export interface ApiResponse {
  success: boolean;
  result?: BreedResult;
  error?: string;
}

export interface BreedInfo {
  name: string;
  animalType: 'cattle' | 'buffalo';
  characteristics: string[];
  productivity: string;
  careTips: string[];
  origin: string;
  avgWeight: string;
  avgHeight: string;
  lifespan: string;
  description: string;
}