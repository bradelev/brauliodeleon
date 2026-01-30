---
name: github-pr
description: GitHub Pull Request best practices and patterns
license: Apache-2.0
metadata:
  author: brauliodeleon
  version: "1.0"
  keywords: github, pull request, pr, git, workflow
---

# GitHub Pull Request Patterns

## When to Use

When creating or managing Pull Requests on GitHub for code review and collaboration.

## Critical Patterns

### PR Title Format

Use conventional commit format:

```
feat(scope): description
fix(scope): description
docs(scope): description
refactor(scope): description
test(scope): description
chore(scope): description
```

Examples:
```
feat(BDW-8): initialize Next.js 14 project with App Router
fix(auth): resolve token expiration handling
docs(api): update authentication endpoints documentation
refactor(components): extract common button logic
```

### PR Body Structure

```markdown
## Summary
Brief description of what this PR accomplishes.

## Changes
- Change 1
- Change 2
- Change 3

## Testing
- [ ] Unit tests pass
- [ ] Integration tests pass
- [ ] Manual testing completed

## Screenshots (if applicable)
[Add screenshots for UI changes]

## Related Issues
Closes #123
Relates to #456
```

### Atomic Commits

One logical change per commit:

```bash
# ✅ GOOD - Each commit is focused
git commit -m "feat(auth): add login endpoint"
git commit -m "feat(auth): add logout endpoint"
git commit -m "test(auth): add authentication tests"

# ❌ BAD - Too many unrelated changes
git commit -m "feat: add auth, fix bugs, update docs"
```

## GitHub CLI Commands

### Create PR

```bash
# Create PR with title and body
gh pr create --title "feat(blog): add MDX support" --body "Adds MDX support for blog posts"

# Create PR interactively
gh pr create

# Create draft PR
gh pr create --draft
```

### List PRs

```bash
# List all open PRs
gh pr list

# List your PRs
gh pr list --author @me

# Filter by label
gh pr list --label "bug"
```

### Review PRs

```bash
# View PR details
gh pr view 123

# Checkout PR locally
gh pr checkout 123

# Review PR
gh pr review 123 --approve
gh pr review 123 --request-changes --body "Please fix XYZ"
gh pr review 123 --comment --body "Looks good overall"
```

### Merge PRs

```bash
# Merge with squash
gh pr merge 123 --squash

# Merge with merge commit
gh pr merge 123 --merge

# Merge with rebase
gh pr merge 123 --rebase

# Delete branch after merge
gh pr merge 123 --squash --delete-branch
```

## Best Practices

### 1. Small, Focused PRs

```
✅ GOOD:
- PR #1: Add user authentication
- PR #2: Add user profile page
- PR #3: Add password reset

❌ BAD:
- PR #1: Complete user management system (500+ files changed)
```

### 2. Descriptive Titles

```
✅ GOOD:
feat(blog): implement MDX support for blog posts
fix(api): handle null values in user response

❌ BAD:
Update files
Fix bug
Changes
```

### 3. Self-Reviewing

Before requesting review:
- [ ] Read your own diff
- [ ] Test all changes locally
- [ ] Run linters and formatters
- [ ] Update documentation
- [ ] Add/update tests

### 4. Respond to Feedback

```
✅ GOOD:
- Acknowledge all comments
- Ask clarifying questions
- Make requested changes
- Mark conversations as resolved

❌ BAD:
- Ignore comments
- Get defensive
- Force push without discussion
```

### 5. Keep PRs Updated

```bash
# Rebase on main before review
git checkout main
git pull
git checkout feature-branch
git rebase main

# Push updates
git push --force-with-lease
```

## Anti-Patterns

### ❌ Vague PR Descriptions

```markdown
BAD:
## Summary
Fixed some stuff

## Changes
- Updates
```

### ❌ Giant PRs

```
BAD: 100+ files changed, 5000+ lines
GOOD: < 20 files changed, < 400 lines
```

### ❌ Mixed Concerns

```
BAD: Single PR with:
- New feature
- Bug fix
- Refactoring
- Documentation updates

GOOD: Separate PR for each concern
```

### ❌ No Tests

```
BAD: Add new feature without tests
GOOD: Add feature + unit tests + integration tests
```

## Quick Reference

### PR Checklist

- [ ] Clear, descriptive title following conventional commits
- [ ] Comprehensive PR description
- [ ] Small, focused changes (< 400 lines if possible)
- [ ] All tests passing
- [ ] Code is self-reviewed
- [ ] Documentation updated
- [ ] No merge conflicts
- [ ] Linked to related issues

### Commit Message Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

Types: feat, fix, docs, style, refactor, test, chore

## Resources

- [GitHub CLI Documentation](https://cli.github.com/manual/)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [GitHub Pull Request Best Practices](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests)
