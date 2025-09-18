import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import CameraCapture from './components/CameraCapture';
import BreedResults from './components/BreedResults';
import LoadingSpinner from './components/LoadingSpinner';
import { geminiService } from './services/geminiService';
import { BreedResult } from './types';
import { AlertCircle, Info } from 'lucide-react';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<BreedResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [capturedImageUrl, setCapturedImageUrl] = useState<string | null>(null);

  const handleImageCapture = async (file: File) => {
    setIsLoading(true);
    setError(null);
    setResult(null);

    // Create preview URL
    const imageUrl = URL.createObjectURL(file);
    setCapturedImageUrl(imageUrl);

    try {
      const breedResult = await geminiService.analyzeImage(file);
      setResult(breedResult);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred while analyzing the image');
      URL.revokeObjectURL(imageUrl);
      setCapturedImageUrl(null);
    } finally {
      setIsLoading(false);
    }
  };

  const handleBack = () => {
    setResult(null);
    setError(null);
    if (capturedImageUrl) {
      URL.revokeObjectURL(capturedImageUrl);
      setCapturedImageUrl(null);
    }
  };

  const ApiKeyWarning = () => {
    if (import.meta.env.VITE_GEMINI_API_KEY) return null;
    
    return (
      <div className="max-w-4xl mx-auto mb-6 px-4">
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
          <div className="flex items-start gap-3">
            <AlertCircle className="text-amber-600 mt-0.5" size={20} />
            <div>
              <h3 className="font-semibold text-amber-800 mb-1">API Key Required</h3>
              <p className="text-amber-700 text-sm">
                To use the breed recognition feature, please add your Gemini API key to the .env file.
                Copy .env.example to .env and add your API key.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex flex-col">
      <Header />
      
      <main className="flex-1 py-8">
        <ApiKeyWarning />
        
        {!result && !error && (
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-8">
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6 max-w-2xl mx-auto">
                <div className="flex items-start gap-3">
                  <Info className="text-blue-600 mt-0.5" size={20} />
                  <div className="text-left">
                    <h3 className="font-semibold text-blue-800 mb-1">How to Use</h3>
                    <ul className="text-blue-700 text-sm space-y-1">
                      <li>• Take a clear photo of the cattle or buffalo</li>
                      <li>• Ensure good lighting and the animal is clearly visible</li>
                      <li>• The AI will identify the breed and provide detailed information</li>
                      <li>• Works best with side or front-facing animal photos</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <CameraCapture 
              onImageCapture={handleImageCapture} 
              isLoading={isLoading} 
            />
          </div>
        )}

        {error && (
          <div className="max-w-2xl mx-auto px-4">
            <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-center">
              <AlertCircle className="text-red-600 mx-auto mb-3" size={48} />
              <h3 className="text-lg font-semibold text-red-800 mb-2">Analysis Failed</h3>
              <p className="text-red-700 mb-4">{error}</p>
              <button
                onClick={handleBack}
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg transition-colors"
              >
                Try Again
              </button>
            </div>
          </div>
        )}

        {result && (
          <div className="px-4">
            <BreedResults 
              result={result} 
              onBack={handleBack}
              imageUrl={capturedImageUrl || undefined}
            />
          </div>
        )}
      </main>

      <Footer />
      
      {isLoading && <LoadingSpinner />}
    </div>
  );
}

export default App;