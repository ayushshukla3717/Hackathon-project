# PASHU MITRA - Cattle & Buffalo Breed Recognition Web App

A comprehensive web application for identifying cattle and buffalo breeds using AI-powered image analysis. Built for Indian farmers and livestock enthusiasts.

## Features

- **Real-time Camera Capture**: Take photos directly from your device's camera
- **Image Upload**: Upload existing images for analysis
- **AI-Powered Recognition**: Uses Google Gemini AI for accurate breed identification
- **Comprehensive Breed Information**: Detailed characteristics, care tips, and productivity data
- **Responsive Design**: Works seamlessly on mobile and desktop devices
- **Offline Breed Database**: Local storage of breed information for quick reference

## Setup Instructions

### 1. Prerequisites
- Node.js (v16 or higher)
- A Google Gemini API key

### 2. Installation

```bash
# Clone the repository
git clone <repository-url>
cd pashu-mitra

# Install dependencies
npm install
```

### 3. Environment Setup

1. Copy the environment example file:
```bash
cp .env.example .env
```

2. Get your Gemini API key:
   - Go to [Google AI Studio](https://aistudio.google.com/)
   - Create a new API key
   - Copy the API key

3. Add your API key to the `.env` file:
```
VITE_GEMINI_API_KEY=your_gemini_api_key_here
```

### 4. Running the Application

```bash
# Start the development server
npm run dev
```

The application will be available at `http://localhost:5173`

## Usage

1. **Open the Application**: Navigate to the web app in your browser
2. **Capture/Upload Image**: Either use your camera to take a photo or upload an existing image
3. **Wait for Analysis**: The AI will process the image and identify the breed
4. **View Results**: See detailed breed information including characteristics, care tips, and productivity data

## Supported Breeds

The application can identify various Indian and international cattle and buffalo breeds including:

### Cattle Breeds
- Gir
- Holstein Friesian
- Sahiwal
- Red Sindhi
- Jersey
- And many more...

### Buffalo Breeds
- Murrah
- Surti
- Nili-Ravi
- Bhadawari
- And many more...

## Technical Architecture

### Frontend
- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **Lucide React** for icons
- **Vite** for build tooling

### AI Integration
- **Google Gemini AI** for image analysis
- **Real-time processing** with confidence scores
- **Structured data extraction** for breed information

### Key Components

1. **CameraCapture**: Handles camera access and image capture
2. **BreedResults**: Displays analysis results and breed information
3. **LoadingSpinner**: Shows progress during AI analysis
4. **GeminiService**: Manages API calls to Google Gemini

## Development

### Project Structure
```
src/
├── components/          # React components
│   ├── CameraCapture.tsx
│   ├── BreedResults.tsx
│   ├── LoadingSpinner.tsx
│   ├── Header.tsx
│   └── Footer.tsx
├── services/           # API services
│   └── geminiService.ts
├── data/              # Local data storage
│   └── breedDatabase.ts
├── types/             # TypeScript definitions
│   └── index.ts
└── App.tsx            # Main application component
```

### Adding New Breeds

To add new breed information to the local database:

1. Open `src/data/breedDatabase.ts`
2. Add a new `BreedInfo` object to the `breedDatabase` array
3. Include all required fields: name, animalType, characteristics, etc.

### Customizing AI Analysis

The AI analysis prompt can be customized in `src/services/geminiService.ts`:
- Modify the prompt for different analysis focus
- Adjust the expected JSON response format
- Add additional data fields as needed

## Deployment

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

The built files will be in the `dist` directory and can be deployed to any static hosting service.

## Browser Compatibility

- **Modern browsers** with ES2020 support
- **Camera API** support required for camera functionality
- **File API** support for image uploads
- **WebRTC** support for camera access

## Troubleshooting

### Camera Access Issues
- Ensure the browser has camera permissions
- Use HTTPS for camera access (required by browsers)
- Check if camera is being used by another application

### API Key Issues
- Verify the API key is correctly set in `.env`
- Check API key permissions in Google Cloud Console
- Ensure billing is enabled for the Google AI project

### Performance Issues
- Large images may take longer to process
- Consider resizing images before upload for faster processing
- Monitor API usage to avoid rate limits

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Support

For support and questions:
- Create an issue on GitHub
- Check the troubleshooting section above
- Refer to the Google Gemini API documentation

## Acknowledgments

- Google Gemini AI for powerful image analysis capabilities
- Indian Council of Agricultural Research (ICAR) for breed information
- The farming community for inspiration and feedback