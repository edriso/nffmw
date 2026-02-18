export const roadmap = [
  {
    id: "starting-line",
    title: "The Starting Line",
    tagline: "Master the fundamentals that separate juniors from seniors",
    icon: "🏁",
    topics: [
      {
        id: "css-mastery",
        title: "CSS Mastery",
        focus: [
          "Flexbox & Grid — build any layout without hacks",
          "CSS Custom Properties and dynamic theming",
          "Container queries and modern responsive design",
          "CSS animations, transitions, and keyframes",
          "Specificity, cascade layers, and the :has() selector",
        ],
        notes: [
          "CSS is the most underrated skill in frontend — it's the difference between pixel-perfect and 'close enough'",
          "Grid for 2D layouts, Flexbox for 1D — know when to use which",
          "Container queries let components own their own responsive behavior",
          "Avoid !important — if you need it, your architecture has a problem",
          "Learn logical properties (inline/block) for internationalization-ready layouts",
        ],
        takeaways: [
          "You should be able to recreate any UI from a screenshot",
          "Understand the box model deeply — it solves 90% of layout bugs",
          "Master one methodology (BEM, utility-first, CSS Modules) completely",
        ],
        purpose:
          "CSS is the visual engine of the web. Mastering it means you can build anything a designer hands you, without fighting the browser.",
        relevance:
          "Senior devs who can't do CSS become bottlenecks. This skill makes you self-sufficient and fast at shipping polished UIs.",
      },
      {
        id: "html-accessibility",
        title: "HTML & Accessibility Foundations",
        focus: [
          "Semantic HTML5 elements and document outline",
          "ARIA roles, states, and properties",
          "Form accessibility — labels, fieldsets, error announcements",
          "Keyboard navigation and focus management",
          "Screen reader testing fundamentals",
        ],
        notes: [
          "Semantic HTML is free accessibility — a <button> does more than a styled <div>",
          "ARIA is a last resort, not a first tool — native elements come with built-in behavior",
          "Tab order matters — if you can't navigate without a mouse, you've failed",
          "Use landmark regions (<nav>, <main>, <aside>) for screen reader navigation",
          "HTML is a contract with the browser — use it correctly and the browser works for you",
        ],
        takeaways: [
          "Write HTML that works without CSS or JS — that's your accessibility baseline",
          "Know the difference between aria-label, aria-labelledby, and aria-describedby",
          "Every interactive element must be keyboard accessible — no exceptions",
        ],
        purpose:
          "HTML is the skeleton of the web. Writing semantic, accessible HTML means your apps work for everyone, not just mouse users with perfect vision.",
        relevance:
          "Accessibility is becoming a legal requirement in many markets. Teams need devs who build it in from the start, not bolt it on later.",
      },
      {
        id: "browser-internals",
        title: "Browser Internals",
        focus: [
          "Critical rendering path: DOM → CSSOM → Render Tree → Layout → Paint → Composite",
          "How the event loop works: call stack, task queue, microtask queue",
          "Reflows vs repaints — what triggers each",
          "How browsers parse HTML and handle script loading (async/defer)",
          "Memory management and garbage collection basics",
        ],
        notes: [
          "Understanding the rendering pipeline explains why some CSS changes are expensive",
          "The event loop is the key to understanding async JavaScript behavior",
          "Batch DOM reads and writes separately to avoid layout thrashing",
          "requestAnimationFrame aligns with the browser's paint cycle — use it for visual updates",
          "Chrome DevTools Performance tab is your window into all of this",
        ],
        takeaways: [
          "You should be able to explain why setTimeout(fn, 0) doesn't run immediately",
          "Know which CSS properties trigger layout, paint, or composite-only changes",
          "Understand why React's virtual DOM exists — it's a batching optimization",
        ],
        purpose:
          "Knowing how the browser works turns performance optimization from guesswork into science. You'll debug faster and write more efficient code.",
        relevance:
          "This knowledge separates devs who can 'make it work' from devs who can 'make it work well'. Essential for performance-critical applications.",
      },
      {
        id: "javascript-deep-dive",
        title: "JavaScript Deep Dive",
        focus: [
          "Closures, scope chains, and the module pattern",
          "Prototypal inheritance and the class syntax",
          "Promises, async/await, and error handling patterns",
          "WeakMap, WeakSet, Proxy, Reflect — modern JS tools",
          "Event delegation, bubbling, and capturing",
        ],
        notes: [
          "Closures aren't magic — a function remembers the scope it was created in",
          "Understand 'this' in all contexts: global, object method, arrow function, class, event handler",
          "Prefer async/await over .then() chains — but understand both",
          "Proxy is powerful for reactive systems (Vue 3 uses it under the hood)",
          "Event delegation is essential for performance — one listener on the parent beats one per child",
        ],
        takeaways: [
          "You should be able to explain any JS concept without referencing framework-specific terms",
          "Understand the difference between reference and value types deeply",
          "Master error handling — try/catch with async/await, promise rejection patterns",
        ],
        purpose:
          "JavaScript is the engine of frontend development. Deep knowledge means you can debug anything, understand any framework, and write elegant solutions.",
        relevance:
          "Frameworks change every few years, but JavaScript fundamentals are forever. This is the foundation everything else is built on.",
      },
    ],
  },
  {
    id: "turbo-boost",
    title: "Turbo Boost",
    tagline: "Level up with the tools and patterns that power modern apps",
    icon: "🚀",
    topics: [
      {
        id: "advanced-react",
        title: "Advanced React Patterns",
        focus: [
          "Compound components and render props",
          "Custom hooks — encapsulating stateful logic",
          "React.memo, useMemo, useCallback — when they actually help",
          "Suspense and concurrent features",
          "Error boundaries and resilient component design",
        ],
        notes: [
          "Don't memoize everything — profile first, optimize second",
          "Custom hooks should encapsulate behavior, not just extract code",
          "Compound components (like Radix/Headless UI) give consumers control over rendering",
          "Error boundaries catch render errors — but not event handler or async errors",
          "useReducer > useState when state transitions are complex or interdependent",
        ],
        takeaways: [
          "Know when to use Context vs prop drilling vs state management libraries",
          "Build components that are flexible but not over-abstracted",
          "Understand React's rendering model — when and why components re-render",
        ],
        purpose:
          "Moving beyond basic React means building components that are composable, performant, and maintainable at scale.",
        relevance:
          "Every React team needs someone who understands the 'why' behind patterns, not just the 'how'. This is the difference between writing components and designing systems.",
      },
      {
        id: "typescript-frontend",
        title: "TypeScript for Frontend",
        focus: [
          "Generic types — making reusable, type-safe utilities",
          "Discriminated unions for state modeling",
          "Type narrowing and exhaustive checks",
          "Typing React props, hooks, and event handlers",
          "Utility types: Pick, Omit, Partial, Record, Extract",
        ],
        notes: [
          "TypeScript is a documentation tool that happens to catch bugs",
          "Discriminated unions model state machines perfectly — use them for loading/error/success states",
          "Generic types are like function parameters for types — start simple, add constraints as needed",
          "Don't use 'any' — use 'unknown' and narrow, or model the actual type",
          "Infer where possible — explicit types on function signatures, not every variable",
        ],
        takeaways: [
          "You should be able to type any React pattern without reaching for 'any'",
          "Understand how TypeScript's structural typing differs from nominal typing",
          "Use strict mode — it catches the bugs that matter",
        ],
        purpose:
          "TypeScript turns runtime errors into compile-time errors. It's the seatbelt that lets you drive faster with confidence.",
        relevance:
          "TypeScript is the industry standard. Teams that use it ship fewer bugs and onboard faster. It's expected at senior level.",
      },
      {
        id: "state-management",
        title: "State Management",
        focus: [
          "Local vs global vs server state — know the difference",
          "React Query / TanStack Query for server state",
          "Zustand for lightweight global state",
          "URL state with search params",
          "State machines and XState for complex flows",
        ],
        notes: [
          "Most 'state management problems' are actually 'server cache problems' — use React Query",
          "Zustand is Redux without the boilerplate — great for auth, theme, UI state",
          "URL is state too — use it for filters, pagination, modal open/close",
          "Don't put everything in global state — colocate state with the components that use it",
          "State machines make complex flows (multi-step forms, wizards) predictable",
        ],
        takeaways: [
          "Choose the right tool: local state → React state, server state → React Query, global UI → Zustand",
          "Understand why Redux exists but know when simpler tools suffice",
          "Server state should be treated as a cache, not as source of truth",
        ],
        purpose:
          "State is the hardest problem in frontend. Understanding the taxonomy of state types and matching each to the right tool prevents architectural mess.",
        relevance:
          "Bad state management is the #1 cause of frontend complexity. This knowledge lets you keep apps simple as they grow.",
      },
      {
        id: "nextjs-fullstack",
        title: "Next.js & Fullstack React",
        focus: [
          "App Router — Server Components, layouts, and loading states",
          "SSR vs SSG vs ISR — when to use each",
          "Server Actions for mutations",
          "Middleware for auth, redirects, and headers",
          "Deployment and edge runtime considerations",
        ],
        notes: [
          "Server Components reduce client bundle size — they don't ship JS to the browser",
          "Use SSG for content that rarely changes, SSR for personalized data, ISR for the middle ground",
          "Server Actions simplify forms — no separate API route needed",
          "The App Router is a paradigm shift — it's React's vision for the future, not just Next.js",
          "Edge runtime has limitations (no Node.js APIs) — understand the tradeoffs",
        ],
        takeaways: [
          "Understand the mental model shift from SPA to server-first architecture",
          "Know when Next.js is the right tool vs a plain Vite SPA",
          "Server Components and Client Components have a clear boundary — respect it",
        ],
        purpose:
          "Next.js represents the future of React development. Understanding it means you can build full-stack applications with a single framework.",
        relevance:
          "Most production React apps use Next.js or a similar meta-framework. This is the deployment reality of modern frontend work.",
      },
    ],
  },
  {
    id: "nitro-zone",
    title: "Nitro Zone",
    tagline: "Engineering excellence — the skills that make code production-ready",
    icon: "⚡",
    topics: [
      {
        id: "web-performance",
        title: "Web Performance",
        focus: [
          "Core Web Vitals: LCP, INP, CLS — what they measure and how to improve them",
          "Bundle analysis and code splitting strategies",
          "Image optimization: formats (WebP/AVIF), lazy loading, responsive images",
          "Font loading strategies and FOUT/FOIT prevention",
          "Caching strategies: service workers, HTTP cache headers, CDN edge caching",
        ],
        notes: [
          "Performance is a feature — slow apps lose users before they see your beautiful UI",
          "Measure before optimizing — Lighthouse and Web Vitals extension are your starting points",
          "Code splitting at the route level is the easiest big win",
          "Images are usually the heaviest resources — optimize them first",
          "Prefetching and preloading can make navigation feel instant",
        ],
        takeaways: [
          "You should be able to audit any site and identify the top 3 performance bottlenecks",
          "Understand the performance budget concept — set limits and stick to them",
          "Know the difference between perceived performance and actual performance",
        ],
        purpose:
          "Performance directly impacts user experience, SEO, and business metrics. Fast apps convert better and rank higher.",
        relevance:
          "Google uses Core Web Vitals as a ranking signal. Companies lose money on slow sites. This is a high-leverage skill.",
      },
      {
        id: "testing-strategy",
        title: "Testing Strategy",
        focus: [
          "Testing trophy: static → unit → integration → e2e",
          "Vitest for unit and integration tests",
          "React Testing Library — testing behavior, not implementation",
          "Playwright or Cypress for end-to-end testing",
          "MSW for mocking API calls in tests",
        ],
        notes: [
          "Write tests that give you confidence to refactor, not tests that break when you rename a CSS class",
          "Integration tests give the best ROI — they test how pieces work together",
          "Testing Library's philosophy: test like a user, query by role and text, not by test IDs",
          "MSW intercepts at the network level — your components don't know they're being mocked",
          "E2E tests should cover critical user journeys, not every edge case",
        ],
        takeaways: [
          "Aim for high confidence, not high coverage — 80% meaningful coverage beats 100% snapshot coverage",
          "If a bug reaches production, write a regression test before fixing it",
          "Testing is a design tool — hard-to-test code usually has a design problem",
        ],
        purpose:
          "Testing is what lets you ship with confidence. A good test suite is an insurance policy that pays dividends with every deployment.",
        relevance:
          "Teams that don't test move fast initially but grind to a halt. Teams that test well maintain velocity as complexity grows.",
      },
      {
        id: "design-systems",
        title: "Design Systems & Component Libraries",
        focus: [
          "Atomic design methodology: atoms → molecules → organisms → templates → pages",
          "Component API design — props, variants, compound patterns",
          "Storybook for component development and documentation",
          "Theming architecture: CSS variables, design tokens",
          "Headless UI libraries (Radix, Headless UI) vs styled libraries (MUI, Chakra)",
        ],
        notes: [
          "A design system is a product, not a project — it needs maintenance and governance",
          "Start with design tokens (colors, spacing, typography) before building components",
          "Headless components give you behavior without opinions on styling — maximum flexibility",
          "Storybook is documentation, testing, and development environment all in one",
          "Consistency > creativity for design systems — constraints are the point",
        ],
        takeaways: [
          "You should be able to build a small component library with consistent API patterns",
          "Understand the spectrum from fully custom to fully off-the-shelf — and when each makes sense",
          "Design tokens are the contract between design and engineering",
        ],
        purpose:
          "Design systems enable teams to build consistently and efficiently. They're the bridge between design and engineering that scales.",
        relevance:
          "Every mature frontend team has (or needs) a design system. Being able to build and maintain one is a multiplier skill.",
      },
      {
        id: "advanced-accessibility",
        title: "Advanced Accessibility",
        focus: [
          "WCAG 2.1 AA compliance — understanding the guidelines",
          "Building accessible modals, dropdowns, and tab interfaces",
          "Live regions and dynamic content announcements",
          "Color contrast, motion preferences, and reduced-motion media queries",
          "Automated a11y testing with axe-core and CI integration",
        ],
        notes: [
          "Accessibility is not a checkbox — it's a continuous practice embedded in your workflow",
          "Focus trapping in modals is critical — users shouldn't tab into hidden content",
          "prefers-reduced-motion is a real user preference — respect it",
          "Automated tools catch ~30% of issues — manual testing with a screen reader catches the rest",
          "Color alone should never convey information — always pair with text or icons",
        ],
        takeaways: [
          "Build accessible components from scratch at least once — understand the complexity before using libraries",
          "Know the WAI-ARIA Authoring Practices patterns for common widgets",
          "Accessibility testing should be part of your definition of done, not an afterthought",
        ],
        purpose:
          "Advanced accessibility means building interfaces that truly work for everyone. It's the difference between 'we pass an audit' and 'everyone can use our product'.",
        relevance:
          "Accessibility lawsuits are increasing. More importantly, ~15% of people have disabilities. Building for them is both right and smart.",
      },
    ],
  },
  {
    id: "pro-circuit",
    title: "Pro Circuit",
    tagline: "Architect-level skills for leading frontend teams",
    icon: "🏆",
    topics: [
      {
        id: "tooling-dx",
        title: "Tooling & Developer Experience",
        focus: [
          "Build tools: Vite internals, esbuild, Rollup plugin system",
          "Monorepo management with Turborepo or Nx",
          "CI/CD pipelines for frontend: linting, testing, preview deploys",
          "ESLint custom rules and code quality automation",
          "Developer environment optimization: hot reload, TypeScript speed, editor setup",
        ],
        notes: [
          "Good DX is a multiplier — if your team is fighting tooling, they're not shipping features",
          "Vite is fast because of esbuild (dev) and Rollup (build) — understand both",
          "Monorepos shine when you have shared packages (design system, utils, types)",
          "CI should catch what code review misses: broken tests, lint errors, type errors, bundle size regressions",
          "Preview deploys (Vercel, Netlify) let reviewers see changes without pulling code",
        ],
        takeaways: [
          "You should be able to configure a build pipeline from scratch, not just use defaults",
          "Understand the tradeoff between monorepo and polyrepo — neither is always better",
          "Automate everything that can be automated — human reviewers should focus on logic and architecture",
        ],
        purpose:
          "Tooling is the leverage that makes teams faster. Investing in DX pays compound interest across every feature the team ships.",
        relevance:
          "Senior and staff engineers are expected to improve the tools and processes, not just use them. This is leadership through infrastructure.",
      },
      {
        id: "api-layer",
        title: "API Layer & Data Fetching",
        focus: [
          "REST best practices and API contract design",
          "GraphQL fundamentals: queries, mutations, fragments",
          "tRPC for end-to-end type safety",
          "Optimistic updates and cache invalidation patterns",
          "WebSockets and real-time data strategies",
        ],
        notes: [
          "The API layer is the contract between frontend and backend — design it carefully",
          "GraphQL solves overfetching but adds complexity — use it when the tradeoff makes sense",
          "tRPC eliminates the API boundary when you control both frontend and backend",
          "Optimistic updates make apps feel instant — but handle rollback gracefully",
          "WebSockets are for push-based data (chat, notifications) — don't use them for everything",
        ],
        takeaways: [
          "Choose the right data fetching pattern for the use case — not every app needs GraphQL",
          "Understand cache invalidation deeply — it's one of the two hard problems in CS",
          "API error handling on the frontend is as important as the happy path",
        ],
        purpose:
          "The API layer is where frontend meets backend. Getting it right means smooth data flow, good UX, and fewer bugs.",
        relevance:
          "Frontend devs increasingly own the data layer. Understanding APIs deeply makes you a better collaborator and architect.",
      },
      {
        id: "frontend-architecture",
        title: "Frontend Architecture",
        focus: [
          "Feature-based folder structure vs layer-based structure",
          "Micro-frontends: when and how (Module Federation, Single-SPA)",
          "Monolith vs micro-frontend tradeoffs",
          "Frontend observability: error tracking, analytics, logging",
          "Technical debt management and migration strategies",
        ],
        notes: [
          "Architecture is about managing complexity as the codebase grows — it's not needed on day one",
          "Feature folders (co-located components, hooks, tests) scale better than type folders (all components in /components)",
          "Micro-frontends have a real cost — only use them when teams genuinely can't coordinate",
          "Observability means knowing what's happening in production — error rates, performance metrics, user flows",
          "The best migration strategy is the strangler fig pattern — incrementally replace, don't rewrite",
        ],
        takeaways: [
          "You should be able to design a frontend architecture for a team of 5-10 developers",
          "Understand when complexity is accidental (bad code) vs essential (hard problem)",
          "Make architecture decisions reversible when possible — avoid lock-in",
        ],
        purpose:
          "Architecture is the skill that lets you build systems that stay maintainable over years, not just weeks. It's thinking at the system level.",
        relevance:
          "This is what separates senior developers from architects and tech leads. It's the ability to see the forest, not just the trees.",
      },
    ],
  },
  {
    id: "the-blacklist",
    title: "The Blacklist",
    tagline: "Career accelerators — the meta-skills that compound over time",
    icon: "🔥",
    topics: [
      {
        id: "build-in-public",
        title: "Build in Public",
        focus: [
          "Shipping side projects and documenting the process",
          "Building a portfolio that shows depth, not just breadth",
          "Sharing progress on Twitter/X, LinkedIn, or a blog",
          "Getting feedback early and iterating publicly",
          "Turning projects into case studies with measurable outcomes",
        ],
        notes: [
          "Building in public creates accountability and attracts opportunities",
          "A portfolio project with a write-up is worth 10 todo apps",
          "Share what you learned, not just what you built — people connect with the journey",
          "Don't wait until it's perfect — 'good enough' shipped beats 'perfect' in drafts",
          "Consistency matters more than virality — post regularly, even if it's small",
        ],
        takeaways: [
          "Ship at least one project that solves a real problem (even if it's your own)",
          "Document your decisions — 'why' is more valuable than 'what' or 'how'",
          "Your public work is your resume — make it easy for people to understand your thinking",
        ],
        purpose:
          "Building in public turns your learning journey into a career asset. It creates proof of work that no resume can match.",
        relevance:
          "Hiring managers increasingly look at GitHub, blogs, and social presence. Public work demonstrates initiative, communication, and skill simultaneously.",
      },
      {
        id: "write-and-teach",
        title: "Write & Teach",
        focus: [
          "Technical writing: blog posts, tutorials, documentation",
          "Explaining complex concepts simply",
          "Creating educational content (videos, threads, talks)",
          "Internal knowledge sharing: tech talks, RFC documents, runbooks",
          "Building a writing habit — consistency over perfection",
        ],
        notes: [
          "Teaching is the best way to learn — if you can't explain it simply, you don't understand it deeply",
          "Technical writing is a career superpower — it scales your impact beyond your team",
          "Write for your past self — the person who would have needed this article six months ago",
          "Internal docs (RFCs, ADRs, runbooks) are as valuable as public content",
          "Good technical writing follows a pattern: problem → context → solution → tradeoffs",
        ],
        takeaways: [
          "Publish at least one technical article per month — quality improves with practice",
          "Create content that helps someone get unstuck — that's the highest value writing",
          "Contribute to your team's documentation — it makes everyone more effective",
        ],
        purpose:
          "Writing and teaching clarify your own thinking while building your reputation. It's the compound interest of knowledge work.",
        relevance:
          "Engineers who communicate well advance faster. Writing ability is the differentiator between senior and staff level at most companies.",
      },
      {
        id: "open-source",
        title: "Open Source Contribution",
        focus: [
          "Finding good first issues and understanding contribution workflows",
          "Reading and understanding large codebases quickly",
          "Writing quality PRs: descriptions, tests, documentation",
          "Engaging with maintainers and the community",
          "Starting or maintaining your own open source project",
        ],
        notes: [
          "Open source contribution is the closest thing to a real work simulation in public",
          "Start with documentation fixes and small bugs — build context before tackling features",
          "Read the CONTRIBUTING.md and follow the project's conventions exactly",
          "A well-written PR description is as important as the code itself",
          "Maintaining even a small library teaches you about API design, versioning, and community",
        ],
        takeaways: [
          "Contribute to at least one project you actually use — you understand the problems better",
          "Reading other people's code is a skill — practice it intentionally",
          "Open source teaches collaboration, code review, and communication at scale",
        ],
        purpose:
          "Open source is where you learn to work with other developers at a professional level. It builds skills that are hard to develop in isolation.",
        relevance:
          "Open source contributions are visible proof of your ability to collaborate, write quality code, and communicate with other developers.",
      },
      {
        id: "soft-skills",
        title: "Soft Skills & Career Growth",
        focus: [
          "Code review: giving and receiving feedback effectively",
          "Estimating work and communicating timelines",
          "Mentoring junior developers",
          "Navigating technical discussions and making tradeoff arguments",
          "Managing up: communicating progress and blockers",
        ],
        notes: [
          "Code review is a design discussion, not a gatekeeping exercise — be constructive",
          "Estimation is a skill that improves with tracking — compare estimates to actuals",
          "Mentoring makes you better — explaining forces you to understand more deeply",
          "In technical discussions, start with the problem, not the solution — alignment on the 'why' prevents bikeshedding",
          "Your manager can't help with blockers they don't know about — communicate early",
        ],
        takeaways: [
          "Treat code review as a learning opportunity — both giving and receiving",
          "Build trust through reliable delivery — under-promise, over-deliver consistently",
          "Invest in relationships with your team — technical skills get you hired, soft skills get you promoted",
        ],
        purpose:
          "Technical skills plateau without soft skills. The best engineers are effective not just because of what they know, but because of how they work with others.",
        relevance:
          "Beyond mid-level, career growth is primarily driven by communication, leadership, and influence — not just technical depth.",
      },
    ],
  },
];

export const allTopics = roadmap.flatMap((phase) =>
  phase.topics.map((topic) => ({
    ...topic,
    phaseId: phase.id,
    phaseTitle: phase.title,
  })),
);

export function getPhase(phaseSlug) {
  return roadmap.find((p) => p.id === phaseSlug);
}

export function getTopic(phaseSlug, topicSlug) {
  const phase = getPhase(phaseSlug);
  if (!phase) return null;
  return phase.topics.find((t) => t.id === topicSlug) || null;
}

export function getAdjacentTopics(phaseSlug, topicSlug) {
  const idx = allTopics.findIndex(
    (t) => t.phaseId === phaseSlug && t.id === topicSlug,
  );
  return {
    prev: idx > 0 ? allTopics[idx - 1] : null,
    next: idx < allTopics.length - 1 ? allTopics[idx + 1] : null,
  };
}
