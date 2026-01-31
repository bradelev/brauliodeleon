---
title: "Feature Flags in Production: Lessons from an Enterprise Team"
date: "2026-01-28"
excerpt: "A practical guide to feature flags in enterprise B2B products: when to use them, how to handle flag dependencies, iteration strategies, and avoiding flag debt."
author: "Braulio De Leon"
tags: ["feature-flags", "devops", "release-management", "best-practices", "enterprise"]
---

# Feature Flags in Production: Lessons from an Enterprise Team

A few years ago, a seemingly harmless deploy took down a critical feature in production. The fix took hours between detecting the issue, preparing the hotfix, going through QA, and deploying again. Since then, feature flags became a fundamental part of our development culture.

In this article, I share how we implement feature flags in an enterprise B2B product, when we use them (and when we don't), how we handle flags that depend on each other, and how we integrate the system with iterative development.

## Why Feature Flags?

The key question we ask ourselves before every PR is: *"If something goes wrong, how can we quickly roll back to the previous state?"*

Without feature flags, the answer involves a whole new release cycle. With feature flags, it's just changing a value in the dashboard. The difference can be hours versus seconds.

But feature flags aren't just a rollback mechanism. They also allow us to:

- **Decouple deploy from release**: Code can be in production without being active for users.
- **Give clients control**: In a B2B product, different clients can have different timelines for adopting new features.
- **Protect existing code**: While developing new features, production code keeps working without risk.

## Managing Access to the Flag System

We use a feature flag platform with a per-license pricing model. Instead of giving direct access to every developer, we maintain a small group of administrators.

To avoid bottlenecks, we created an internal dashboard where any developer can look up information about existing flags. It's not exhaustive, but it covers 90% of day-to-day queries: name, current state, description, and which environments it's active in.

## When to Create a Feature Flag

The rule is simple: **whenever you add new functionality to code that's already in production**. It doesn't matter if it's a small change or a complete feature.

This rule might seem strict, but consistency is what makes it work. If we start making exceptions based on change size, we end up with subjective decisions that vary between developers.

## The Immunity Zone: When You DON'T Need a Feature Flag

Not everything needs a flag. We defined an "immunity zone" for cases where adding a feature flag would be counterproductive:

**Features inside already-protected features.** If you're adding functionality A inside a feature B that already has its own flag, you don't need a second flag. The exception is if there's a chance B will launch without A.

**Bug fixes that don't introduce new features.** A fix is a fix. If you're not adding new behavior, you don't need a flag.

**Infrastructure changes.** Analytics, linter configuration, TypeScript, bundlers, package upgrades, tests, documentation, Storybook. All of this is out of scope.

**Changes exclusively to default translations.**

**When the flag introduces more risk than the code.** If protecting a change would require spreading the flag across multiple modules in complex ways, the flag's risk might exceed the change's risk. These cases require explicit discussion.

## Combined Feature Flags: The Dependency Problem

One of the least documented challenges is what happens when you have multiple flags that interact with each other. This naturally occurs in complex products.

### Hierarchical Flags (Parent-Child)

The most common case: a large feature (`dashboard-v2`) that contains sub-features (`dashboard-v2-charts`, `dashboard-v2-exports`). Here we apply a simple rule:

**The parent flag is an absolute kill switch.** If `dashboard-v2` is off, child flags shouldn't be evaluated. This prevents inconsistent states where a sub-feature is active but its parent context doesn't exist.

```
dashboard-v2: OFF
  └── dashboard-v2-charts: ON   → Not evaluated, parent is OFF
  └── dashboard-v2-exports: OFF → Not evaluated, parent is OFF
```

In code, this means always evaluating the parent flag first:

```javascript
// ✅ Correct: evaluate hierarchically
if (flags.dashboardV2) {
  if (flags.dashboardV2Charts) {
    renderCharts();
  }
}

// ❌ Incorrect: evaluate flags independently
if (flags.dashboardV2Charts) {
  renderCharts(); // May fail if dashboardV2 is OFF
}
```

### Mutually Exclusive Flags

Sometimes you have two implementations of the same thing: the legacy version and the new version. The risk here is having both active simultaneously.

Our solution is to use a **single flag with multiple values** instead of two boolean flags:

```javascript
// ❌ Risky: two boolean flags
flags.legacyEditor  // true/false
flags.newEditor     // true/false
// What happens if both are true?

// ✅ Better: a flag with variants
flags.editorVersion  // "legacy" | "new" | "hybrid"
```

### Flags with Cross Dependencies

The most complex case: Feature A needs Feature B to be active to work, but B doesn't need A.

We document these dependencies explicitly in the flag description and validate at runtime:

```javascript
function evaluateFlags(flags) {
  // Validate dependencies
  if (flags.featureA && !flags.featureB) {
    console.warn('Feature A requires Feature B. Disabling A.');
    flags.featureA = false;
  }
  return flags;
}
```

## Iterations: Feature Flags in Incremental Development

Feature flags shine especially in iterative development, but they require discipline to avoid ending up with a tangle of eternal flags.

### Short vs Long-Lived Flags

We distinguish between two types:

**Release flags (short-lived):** Protect new code until it's validated in production. Expected lifespan: days to a few weeks. They should be removed once the feature is stable.

**Ops flags (long-lived):** Control operational behavior that may need toggling at any time (maintenance mode, graceful degradation, rate limits). These are permanent.

The problem arises when a release flag becomes an ops flag by accident, simply because no one cleaned it up.

### Iteration Strategy with Flags

When we develop a large feature across multiple sprints, we follow this pattern:

**Sprint 1:** Create parent flag `feature-x`. Develop the foundation. Everything behind the flag.

**Sprint 2-N:** If sub-features can be released independently, create child flags. If not, keep using the parent flag.

**Post-launch:** Once the feature is stable for all clients, schedule flag removal.

```
Sprint 1: feature-x (OFF) → Foundation developed
Sprint 2: feature-x (OFF) → Iteration 1 complete
Sprint 3: feature-x (ON for beta testers) → Validation
Sprint 4: feature-x (ON for everyone) → Release
Sprint 5: Remove flag, code becomes the default
```

### The Flag Debt Problem

Flags that aren't removed accumulate. In six months you can have 50 flags where only 10 are relevant. This has real costs:

- **Cognitive complexity:** New developers don't know which flags matter.
- **Combinatorial testing:** Each flag doubles test scenarios.
- **Dead code:** Branches that never execute but remain in the codebase.

Our solution is a **quarterly flag review**. We list all active flags, identify which ones are at 100% for all clients, and create tickets to remove them from the code.

Some teams automate this with alerts: "This flag has been at 100% for more than 30 days. Should it be removed?"

## Governance: Labels in the PR Process

To maintain consistency across the team, we use GitHub labels that indicate the feature flag status in each PR. The concept is simple:

**Pending analysis.** Every new PR starts unclassified. Someone must determine if it needs a flag or not.

**Flag not required.** For bug fixes or changes that fall in the immunity zone. This can be automated: if the associated ticket is a bug, it probably doesn't need a flag.

**Flag required.** Changes that need protection. The PR shouldn't be merged until the flag is implemented.

**Flag implemented.** Confirmation that the flag is in the code and configured in the platform.

**Discussion required.** Edge cases where it's unclear if the flag is necessary or if adding it introduces more risk.

**Isolated release.** Cases where the flag is technically necessary but implementing it is so complex that the risk is comparable to not having it. Requires explicit approval.

Automation helps: a workflow can assign the initial label and detect obvious cases (bugs), but the final decision is always human.

## Exceptions and Documentation

When someone believes their PR should have a flag but adding it is risky, we open an explicit discussion in the PR.

The important thing is to document these exceptions. A PR without a flag when it should have one isn't necessarily a problem, but a PR without a flag *and without documenting why* is.

## Conclusion

Feature flags are a powerful tool when used consistently. The cost of implementing them is low compared to the cost of an emergency rollback.

The keys that have worked for us:

1. **Clear rules** about when to use flags (and when not to).
2. **Mental model for combined flags**: hierarchical, exclusive, or with dependencies.
3. **Lifecycle discipline**: create, use, remove. Eternal flags are technical debt.
4. **Automation** where it makes sense: PR labels, old flag alerts, internal dashboards.

If your team isn't using feature flags, I recommend starting simple: one flag per new feature in production. Once the habit is established, you can refine the rules based on your project's needs.

---

*Have questions about feature flags or want to share how your team does it? Let's connect on [LinkedIn](https://linkedin.com/in/brauliodeleon).*
