# Contributing to GrantScope

Thank you for your interest in contributing to GrantScope! This document provides guidelines and instructions for contributing.

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone <your-fork-url>`
3. Create a new branch: `git checkout -b feature/your-feature-name`
4. Make your changes
5. Test your changes thoroughly
6. Commit your changes: `git commit -m "Add: your feature description"`
7. Push to your fork: `git push origin feature/your-feature-name`
8. Create a Pull Request

## Development Setup

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables (see README.md)

3. Run the development server:
```bash
npm run dev
```

4. Initialize the database:
```
Visit http://localhost:3000/api/init-db
```

## Code Style

- Use TypeScript for all new code
- Follow the existing code style
- Use meaningful variable and function names
- Add comments for complex logic
- Keep functions small and focused

## Commit Messages

Use clear and descriptive commit messages:

- `Add: new feature description`
- `Fix: bug description`
- `Update: what was updated`
- `Refactor: what was refactored`
- `Docs: documentation changes`
- `Style: formatting, missing semicolons, etc.`
- `Test: adding tests`

## Pull Request Process

1. Update the README.md with details of changes if needed
2. Update the DEPLOYMENT.md if deployment steps change
3. Ensure all tests pass and there are no linting errors
4. Request review from maintainers
5. Address any feedback from code review
6. Once approved, your PR will be merged

## Areas for Contribution

### High Priority
- User authentication system
- Server-side cart persistence
- Email notifications for deadlines
- Advanced filtering options
- Performance optimizations

### Medium Priority
- Saved searches functionality
- Grant recommendations algorithm
- Calendar view for deadlines
- Mobile app version
- Accessibility improvements

### Low Priority
- Dark mode support
- Additional export formats
- Social sharing features
- Analytics dashboard
- Internationalization

## Testing

Before submitting a PR:

1. Test the search functionality
2. Test opportunity detail pages
3. Test cart operations (add, remove, export)
4. Test on different screen sizes
5. Check for console errors
6. Verify API caching works correctly

## Reporting Bugs

When reporting bugs, please include:

- Description of the bug
- Steps to reproduce
- Expected behavior
- Actual behavior
- Screenshots (if applicable)
- Browser/OS information
- Error messages or console logs

## Suggesting Features

When suggesting features:

- Describe the feature clearly
- Explain the use case
- Provide examples if possible
- Consider implementation complexity
- Think about user experience

## Code Review Process

All submissions require review. We use GitHub pull requests for this purpose.

Reviewers will check for:
- Code quality and style
- Test coverage
- Documentation
- Performance impact
- Security considerations

## Questions?

Feel free to open an issue for:
- Questions about the codebase
- Clarification on contribution guidelines
- Discussion of new features
- Help with setup or development

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

## Code of Conduct

- Be respectful and inclusive
- Welcome newcomers
- Focus on constructive feedback
- Assume good intentions
- Help others learn and grow

Thank you for contributing to GrantScope! 🎉

