---
title: "The Model Is Not the Bottleneck"
date: 2026-06-03
draft: false
tags: ["building", "ai", "systems"]
summary: "The failure mode in agentic systems is rarely the model. It's everything around it."
image: ""
---

The demo works. Then the real problem breaks it.

Not because the model failed. Because no one tested what was around it.

Agent failures live in the orchestration layer. The prompt that encodes the right answer but not the right judgment. The handoff that drops context. The output the next agent accepts as valid and isn't. The retry loop that masks a structural error by running it three more times.

I've been building multi-agent pipelines across research, publishing, and business intelligence. The pattern is consistent. When something breaks, it's the harness.

Benchmarks confirm it. Agents score 70% in controlled evals. The same systems on real tasks: under 10%. That gap is not the model. It's everything the eval didn't test.

Before adding another model to your stack, check the scaffolding.
