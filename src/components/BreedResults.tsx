import React from 'react';
import { BreedResult } from '../types';
import { ArrowLeft, MapPin, Weight, Ruler, Clock, Milk } from 'lucide-react';

interface BreedResultsProps {
  result: BreedResult;
  onBack: () => void;
  imageUrl?: string;
}

const BreedResults: React.FC<BreedResultsProps> = ({ result, onBack, imageUrl }) => {
  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 80) return 'text-green-600 bg-green-100';
    if (confidence >= 60) return 'text-yellow-600 bg-yellow-100';
    return 'text-red-600 bg-red-100';
  };

  const getAnimalTypeIcon = (type: string) => {
    return type === 'cattle' ? '🐄' : '🐃';
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="bg-white rounded-2xl shadow-xl p-6 mb-6">
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors"
          >
            <ArrowLeft size={20} />
            Back
          </button>
          
          <div className={`px-3 py-1 rounded-full text-sm font-medium ${getConfidenceColor(result.confidence)}`}>
            {result.confidence.toFixed(1)}% confidence
          </div>
        </div>

        {imageUrl && (
          <div className="mb-6">
            <img
              src={imageUrl}
              alt="Analyzed animal"
              className="w-full h-48 object-cover rounded-xl"
            />
          </div>
        )}

        <div className="text-center mb-6">
          <div className="text-4xl mb-2">{getAnimalTypeIcon(result.animalType)}</div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">{result.breed}</h1>
          <p className="text-gray-600 capitalize">{result.animalType}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-gray-50 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <MapPin size={18} className="text-green-600" />
              <h3 className="font-semibold text-gray-800">Origin</h3>
            </div>
            <p className="text-gray-600">{result.origin}</p>
          </div>

          <div className="bg-gray-50 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <Weight size={18} className="text-blue-600" />
              <h3 className="font-semibold text-gray-800">Average Weight</h3>
            </div>
            <p className="text-gray-600">{result.avgWeight}</p>
          </div>

          <div className="bg-gray-50 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <Ruler size={18} className="text-purple-600" />
              <h3 className="font-semibold text-gray-800">Average Height</h3>
            </div>
            <p className="text-gray-600">{result.avgHeight}</p>
          </div>

          <div className="bg-gray-50 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <Clock size={18} className="text-orange-600" />
              <h3 className="font-semibold text-gray-800">Lifespan</h3>
            </div>
            <p className="text-gray-600">{result.lifespan}</p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-green-50 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-3">
              <Milk size={18} className="text-green-600" />
              <h3 className="font-semibold text-gray-800">Productivity</h3>
            </div>
            <p className="text-gray-700">{result.productivity}</p>
          </div>

          <div className="bg-blue-50 rounded-xl p-4">
            <h3 className="font-semibold text-gray-800 mb-3">Key Characteristics</h3>
            <ul className="space-y-2">
              {result.characteristics.map((characteristic, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span className="text-gray-700">{characteristic}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-amber-50 rounded-xl p-4">
            <h3 className="font-semibold text-gray-800 mb-3">Care Tips</h3>
            <ul className="space-y-2">
              {result.careTips.map((tip, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-amber-600 mt-1">•</span>
                  <span className="text-gray-700">{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreedResults;