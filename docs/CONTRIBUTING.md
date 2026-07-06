# Contributing to Foursight

First off, thank you for considering contributing to Foursight! It's people like you that make Foursight such a great tool.

## Code of Conduct

This project and everyone participating in it is governed by our [Code of Conduct](./CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the issue list as you might find out that you don't need to create one. When you are creating a bug report, please include as many details as possible:

* **Use a clear and descriptive title**
* **Describe the exact steps which reproduce the problem**
* **Provide specific examples to demonstrate the steps**
* **Describe the behavior you observed after following the steps**
* **Explain which behavior you expected to see instead and why**
* **Include screenshots and animated GIFs if possible**
* **Include your environment details** (OS, browser, Node version, etc.)

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, please include:

* **Use a clear and descriptive title**
* **Provide a step-by-step description of the suggested enhancement**
* **Provide specific examples to demonstrate the steps**
* **Describe the current behavior and the expected behavior**
* **Explain why this enhancement would be useful**

### Pull Requests

* Fill in the required template
* Follow the TypeScript / JavaScript styleguides
* Include appropriate test cases
* End all files with a newline
* Avoid platform-dependent code

## Development Setup

### Prerequisites
- Node.js 18+
- Bun 1.0+ or npm 9+
- Git

### Setup Steps

```bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/Improving-Stock-Prediction-Accuracy.git
cd Improving-Stock-Prediction-Accuracy

# Add upstream
git remote add upstream https://github.com/vishnuprasad3004/Improving-Stock-Prediction-Accuracy.git

# Install dependencies
bun install

# Create your feature branch
git checkout -b feature/your-feature-name
```

### Running Tests

```bash
# Run all tests
bun run test

# Run tests in watch mode
bun run test:watch

# Run tests with coverage
bun run test:coverage
```

### Code Style

We use ESLint and Prettier to maintain code quality:

```bash
# Lint code
bun run lint

# Fix linting issues
bun run lint:fix

# Format code
bun run format
```

## Styleguides

### Git Commit Messages

* Use the present tense ("Add feature" not "Added feature")
* Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
* Limit the first line to 72 characters or less
* Reference issues and pull requests liberally after the first line
* Consider starting the commit message with an applicable emoji:
  - 🎨 `:art:` when improving the format/structure of the code
  - ⚡ `:zap:` when improving performance
  - 🔒 `:lock:` when dealing with security
  - 🐛 `:bug:` when fixing a bug
  - ✨ `:sparkles:` when adding a feature
  - 📝 `:memo:` when writing docs
  - 🧪 `:test_tube:` when adding tests
  - 🚀 `:rocket:` when deploying stuff
  - 💄 `:lipstick:` when updating the UI/style files

Example:
```
✨ Add stock comparison feature

Allows users to compare multiple stocks side by side with custom metrics
Closes #123
```

### TypeScript Styleguide

* Use semicolons
* Use single quotes (not double quotes)
* Use camelCase for variables, functions, and properties
* Use PascalCase for classes and interfaces
* Use UPPER_CASE for constants
* Always provide explicit return types for functions

```typescript
// Good
interface Stock {
  symbol: string;
  price: number;
  lastUpdated: Date;
}

const CACHE_DURATION_MS = 5 * 60 * 1000;

function fetchStockPrice(symbol: string): Promise<number> {
  // implementation
}

// Bad
interface stock {
  symbol,
  price,
  lastUpdated
}

const cacheDuration = 5 * 60 * 1000;

async function fetchStockPrice(symbol) {
  // implementation
}
```

### React/Next.js Styleguide

* Use functional components with hooks
* Extract reusable components to separate files
* Use TypeScript for all components
* Prop types should be defined using interfaces
* Use meaningful component names

```typescript
// Good
interface CardProps {
  title: string;
  description: string;
  onClick: () => void;
}

export function StockCard({ title, description, onClick }: CardProps) {
  return (
    <div onClick={onClick}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

// Bad
export function Card(props: any) {
  return (
    <div onClick={props.click}>
      <h3>{props.t}</h3>
      <p>{props.d}</p>
    </div>
  );
}
```

## Pull Request Process

1. Update the README.md with details of changes if applicable
2. Update the docs if you're adding new features
3. Add tests for any new functionality
4. Ensure all tests pass: `bun run test`
5. Ensure linting passes: `bun run lint`
6. Ensure code is formatted: `bun run format`
7. Request review from maintainers

## Additional Notes

### Issue and Pull Request Labels

This section lists the labels we use to help organize and categorize issues and pull requests.

* `bug` - Something isn't working
* `enhancement` - New feature or request
* `documentation` - Improvements or additions to documentation
* `good first issue` - Good for newcomers
* `help wanted` - Extra attention is needed
* `question` - Further information is requested
* `wontfix` - This will not be worked on
* `in progress` - Currently being worked on
* `ready for review` - Ready for code review

## Recognition

Contributors will be recognized in:
- README contributors section
- Release notes
- Project website

Thank you for contributing! 🎉
