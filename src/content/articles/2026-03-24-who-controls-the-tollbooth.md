---
title: "Who Controls the Tollbooth?"
date: 2026-03-24
draft: false
tags: ["bitcoin", "regulation", "payments", "agentic-payments"]
summary: "Open source doesn't mean permissionless. Find the tollbooth before you build on the rails."
image: ""
---

Every new payment protocol launches with the same press release. Open standard. Permissionless. Available to everyone.

Then you read the governance section.

ACP is Apache licensed. It is also governed by Stripe and OpenAI, who decide which merchants appear in ChatGPT and which transactions flow. x402 is open source. It runs on USDC on Base, issued by Circle, who can freeze any address under regulatory order. AP2 runs on Google's agent marketplace. The protocol spec is public. The on-ramp is not.

Open source tells you who can read the code. It tells you nothing about who controls the chokepoints.

The first question is never "is the system open?" The first question is: who has the power to say no? In every agentic payment stack I have looked at, that answer involves at least one entity with full veto rights. Usually several.

L402 is the exception. Payment flows through Lightning routing nodes. No single node can stop a transaction. The only chokepoint is one you control.

Find the tollbooth before you build on the rails.
