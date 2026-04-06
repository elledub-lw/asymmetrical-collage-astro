---
title: "Post-Mortem: Personal Knowledge System Failure"
date: 2026-04-06
draft: false
tags: ["resilience", "systems", "sovereignty", "building"]
summary: "I only build what I need, and today I discovered that resilience is the exception to that rule."
image: ""
---

At approximately 09:00 on a bank holiday, the primary MacBook Pro went dark. Battery failure. Both MagSafe and USB-C failed. Chargers confirmed working on other devices. Hardware fault suspected. Machine not recovered at time of writing.

Within one hour, work had resumed on a backup machine. This is the incident report.

---

## Timeline

**~09:00** — Primary Mac shuts down.

**~09:15** — Decision: use wife's Mac as backup. Admin account created. iCloud Obsidian vault synced. Claude Code installed.

**~09:45** — First attempt to run a skill: `/lw-orient`. Silent failure.

**~09:50** — Root cause identified: `~/.claude/commands/` does not exist on this machine. Skills live in the vault. Command wiring is machine-local. Two separate things.

**~09:55** — Fix designed and applied: 21 thin stub files created in `~/.claude/commands/`, each pointing to the canonical skill file in the vault.

**~10:00** — `/lw-orient` runs. Full operational context restored.

---

## What Held

**The iCloud Obsidian vault.** Every note, skill, output, and project file immediately accessible. No data loss. No recovery procedure. Plain markdown, iCloud sync, no proprietary format. The design held.

**The skills themselves.** All 21 skills survived intact in `Claude/Skills/`. The vault is the single source of truth. It travelled with me.

**The orientation.** Once `/lw-orient` was wired and running, context recovery was immediate. One pass across the vault. A Claude session that knew what was blocked, what was moving, what mattered this week. The system knew where I was. That was the most validating moment of the incident.

---

## What Failed

**Machine-local command wiring.** `~/.claude/commands/` lives only on the machine. When the machine fails, the wiring fails with it.

This is a subtle failure mode. The *content* of the skills is in the vault and survived. The *registration* of those skills as slash commands is outside the vault and didn't. Two things that look like one thing.

---

## Root Cause

A hidden assumption that "local-first" meant "resilient."

It doesn't. Local-first means your data isn't held hostage by a platform. It says nothing about what happens when the local machine fails. Those are different threat models.

The vault was designed for the first. The command layer had no design for the second. The assumption was never tested. It had never needed to be.

---

## The Contradiction

Yesterday I published a post arguing that I only build what I actually need, not what I might hypothetically need someday. It's a principle I stand behind. Speculative infrastructure is a trap.

Today I discovered its named exception.

Resilience work is prospective by definition. You cannot build your incident response during the incident. You cannot design your recovery path while you're in the failure. Think about failure modes before they materialize. Not out of anxiety. Because failure is not hypothetical. It's scheduled. You just don't know when.

The principle still holds for features and capabilities. Build what you need. Don't speculate.

But for resilience and security: assume the failure. Design for it. Test it before it matters.

I've written professional continuity and resilience plans. My system didn't have one.

---

## Remediation

**Applied this session:**
- 21 command stubs created on the backup machine, each a thin pointer to the vault skill file. Stubs never need updating. The vault is the truth.

**Open:**
- Same stub setup needed on primary Mac once recovered.
- Full dependency audit: shell profile, environment variables, API keys, MCP configs, installed CLI tools. Map what's synced vs. what's local vs. what's undocumented.
- A skill or script to snapshot `~/.claude/` to a synced location regularly, so the command config is as resilient as the skills it wires.

I'll be building that on nodl cloud. I co-founded the company eight years ago to build infrastructure for people who take sovereignty and resilience seriously. Dog-fooding, in the most literal sense.

---

## Lessons

The vault held because it was designed to hold. The command layer failed because it was never designed at all.

One hour of recovery time for a complete workstation failure is an acceptable outcome. The honest version: more luck than design. The iCloud sync and open formats were deliberate choices. The portability of the skills was a side effect, not a tested recovery path.

The next step is to make the resilience intentional. Not because today was catastrophic. Because it revealed the difference between surviving by design and surviving by luck.

Bank holiday. Mac still dead. Writing this from my wife's computer.
