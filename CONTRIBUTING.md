# Contributing to PASHU MITRA

Thank you for your interest in contributing to PASHU MITRA! This document provides guidelines for contributing to the project.

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Git
- A Google Gemini API key

### Development Setup

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/YOUR_USERNAME/pashu-mitra.git
   cd pashu-mitra
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Create environment file:
   ```bash
   cp .env.example .env
   # Add your Gemini API key to .env
   ```

5. Start development server:
   ```bash
   npm run dev
   ```

## Development Guidelines

### Code Style
- Use TypeScript for all new code
- Follow the existing code formatting (Prettier configuration)
- Use meaningful variable and function names
- Add comments for complex logic
- Follow React best practices and hooks guidelines

### Component Structure
- Keep components focused and single-purpose
- Use TypeScript interfaces for props
- Implement proper error handling
- Add loading states for async operations

### Commit Messages
Use conventional commit format:
- `feat:` for new features
- `fix:` for bug fixes
- `docs:` for documentation changes
- `style:` for formatting changes
- `refactor:` for code refactoring
- `test:` for adding tests

Example: `feat: add buffalo breed recognition support`

## Contributing Process

### Reporting Issues
1. Check existing issues first
2. Use the issue template
3. Provide detailed reproduction steps
4. Include screenshots if applicable

### Submitting Changes
1. Create a feature branch: `git checkout -b feature/your-feature-name`
2. Make your changes
3. Test thoroughly
4. Commit with descriptive messages
5. Push to your fork
6. Create a Pull Request

### Pull Request Guidelines
- Fill out the PR template completely
- Link related issues
- Add screenshots for UI changes
- Ensure all tests pass
- Request review from maintainers

## Areas for Contribution

### High Priority
- Additional breed information and accuracy improvements
- Performance optimizations for image processing
- Mobile responsiveness enhancements
- Accessibility improvements

### Medium Priority
- Multi-language support (Hindi, regional languages)
- Offline functionality improvements
- Additional animal types support
- User feedback and rating system

### Low Priority
- Advanced analytics and reporting
- Social sharing features
- Export functionality for breed information

## Breed Database Contributions

When adding new breed information:
1. Ensure accuracy of all data
2. Include reliable sources
3. Follow the existing data structure
4. Add both English and local names if applicable

## Testing

### Manual Testing
- Test camera functionality on different devices
- Verify breed recognition accuracy
- Check responsive design on various screen sizes
- Test offline functionality

### Automated Testing
- Write unit tests for new utilities
- Add integration tests for API calls
- Test component rendering and interactions

## Documentation

- Update README.md for new features
- Add inline code comments
- Update API documentation
- Create user guides for complex features

## Community Guidelines

- Be respectful and inclusive
- Help newcomers get started
- Share knowledge and best practices
- Focus on constructive feedback

## Questions?

- Open an issue for technical questions
- Join discussions in existing issues
- Contact maintainers for urgent matters

Thank you for contributing to PASHU MITRA and helping improve livestock management for farmers! 🐄🐃