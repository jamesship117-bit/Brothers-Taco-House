---
name: vercel-deployment
description: Deploy and troubleshoot applications on Vercel using current platform docs and project-safe defaults. Use when the user asks to deploy to Vercel, configure vercel.json, set env vars, connect domains, debug build/runtime failures, or mentions vercel.com/docs.
---

# Vercel Deployment

## When to use this skill

Use this skill when the user wants to:
- deploy a project to Vercel
- configure Vercel project settings or `vercel.json`
- set environment variables, previews, or production behavior
- diagnose failed builds, serverless errors, or routing issues
- connect domains, DNS, or SSL on Vercel

## Core rules

1. Prefer official Vercel docs first for platform behavior and current syntax.
2. Preserve existing app behavior; avoid broad refactors during deployment fixes.
3. Make the smallest safe config/code change that unblocks deployment.
4. Keep environment changes explicit by scope (Development, Preview, Production).
5. Validate after each change with a build/deploy check before moving on.

## Workflow

Copy this checklist and track progress:

```md
Vercel Deployment Progress
- [ ] Step 1: Identify framework and deployment target
- [ ] Step 2: Validate local build and runtime assumptions
- [ ] Step 3: Configure Vercel settings and project files
- [ ] Step 4: Deploy and inspect logs
- [ ] Step 5: Fix failures with docs-backed changes
- [ ] Step 6: Verify production behavior (routes, env, domain)
```

### Step 1: Identify framework and deployment target

- Confirm framework/runtime (Next.js, Node, static, etc.).
- Confirm target: Preview vs Production.
- Confirm deployment path: Git integration or CLI (`vercel`, `vercel --prod`).

### Step 2: Validate local build and runtime assumptions

- Run local build command used by CI/Vercel.
- Resolve obvious type/lint/build errors before cloud deploy.
- Check for required env vars and server/client boundaries.

### Step 3: Configure Vercel settings and project files

- Align build command, output directory, and install command.
- Update `vercel.json` only when needed.
- Keep rewrites/redirects/headers minimal and explicit.
- Configure env vars by scope and document required keys.

### Step 4: Deploy and inspect logs

- Trigger deploy and capture failure stage:
  - install
  - build
  - runtime/function
  - routing/domain
- Use the first actionable error, not downstream noise.

### Step 5: Fix failures with docs-backed changes

- Map the failing area to Vercel docs and implement the narrowest fix.
- Re-deploy after each fix to isolate regressions.
- If uncertainty remains, prefer a reversible change and note trade-offs.

### Step 6: Verify production behavior

- Verify primary routes and API endpoints.
- Verify env-specific behavior (Preview vs Production).
- Verify domain, DNS, SSL, and caching behavior if applicable.

## Common issue map

- Build fails due to missing env var -> define var in correct Vercel environment.
- Works locally but fails on Vercel -> check Node/runtime version and build command parity.
- 404 on dynamic route -> verify framework routing/output and rewrites.
- Function timeout or memory issue -> reduce work per request or move heavy jobs off request path.
- Wrong env behavior in preview/prod -> audit env scopes and redeploy.

## Vercel docs starter links

- Platform docs: <https://vercel.com/docs>
- Framework docs: <https://vercel.com/docs/frameworks>
- Project configuration (`vercel.json`): <https://vercel.com/docs/project-configuration>
- Environment variables: <https://vercel.com/docs/environment-variables>
- Domains: <https://vercel.com/docs/domains>
- Build/output troubleshooting: <https://vercel.com/docs/deployments/troubleshoot-a-build>

## Output format for agent responses

When completing Vercel deployment work, respond with:
1. What changed (config, env scope, code, or project setting)
2. Why it fixed the deployment problem
3. What was verified (build logs, routes, env behavior, domain)
4. Any follow-up actions still needed
