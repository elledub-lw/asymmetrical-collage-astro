---
title: "The Environment, Not the Prompt"
date: 2026-04-05
draft: false
tags: ["ai-environmentalist", "knowledge-management", "obsidian", "sovereignty"]
summary: "Introducing the AI Environmentalist: not someone who crafts better prompts, but someone who designs the conditions in which good thinking grows, with a framework built from scratch, not copied."
image: ""
---

Most people who copy an AI setup end up with someone else's system.

The thread goes viral. Someone has built an extraordinary knowledge system. They share the prompts, the file structure, the commands. "Copy this and transform how you work." Most people bookmark it. A few try it. Fewer finish. The ones who do are wearing someone else's system like a costume.

This post is not that.

It gives you three ideas that might change how you think about building your own. Something permanent, specific to your life, that gets more useful the longer you use it.

This is not a productivity framework. Not a prompt engineering tutorial. Not reserved for developers — I am not one. It is for people who believe a system designed around who you actually are will outperform any one-size-fits-all template. Specificity always beats generality when the goal is sustained, compounding intelligence.

---

## How I got here

Two months ago I watched part of a podcast. [Isenberg and Vin](https://youtu.be/6MBq1paspVU?si=rIdtoKoQvyaMMteo) were demonstrating Claude Code inside Obsidian. I already used Claude Code. I recognized what they were building. I didn't need to watch the rest.

A day later I had a working version of my own.

My starting point: I knew how to open Obsidian and create notes. I'd built a couple of websites, but I'm not a developer. Some online courses, a GitHub account, basic git. Skills you pick up in a few weeks of self-guided learning.

Within days I had my notes organized the way I'd had them in Notion. But something was different. In Notion, the system needed me to keep it alive. Here I could see a system that would grow more useful the more I used it. That's a different thing entirely.

---

## The prompt engineer and the environmentalist

A phrase has dominated AI discourse for two years: prompt engineering. Craft a better question, get a better answer.

There's something true in it. Some prompts are obviously better than others.

But what actually moved the needle wasn't the question. It was the context. The more accurately I could tell the AI who I was, what I was working on, what I already knew, the better the output. Not because I'd phrased the question better. Because the AI was working with a fuller picture.

The prompt engineer optimizes the question. I became something different: an **AI Environmentalist**.

Not someone who crafts better instructions. Someone who designs the conditions in which good thinking grows. The distinction matters. An instruction tells the AI what to do right now. An environment tells it who you are, how you think, what you're working on, and what you value. Persistently. Across every session. Without re-explanation.

The vault is not a tool I use. It is an environment I tend.

---

## Three principles

These shaped every decision I made. They are not rules to implement. They are a frame of mind to build from.

**Start from your actual life, not someone else's workflow.**

The value of a system comes from its specificity. A system built around someone who works in risk management at a European fintech, co-founded a Bitcoin hardware and infrastructure company, researches, and publishes every day looks nothing like one built for a student or a developer. That's the feature, not a limitation.

One-size-fits-all templates flatten this. They compress your specific needs into a generic structure and ask you to adapt your thinking to fit. A system built for you runs in the other direction.

This is why I built every skill myself rather than copying anyone's setup. Partly to learn by doing. Partly because the specificity is where the value lives. A command I typed out and tested against my actual workflow will serve me in ways a pasted one never will.

**Design for the long arc.**

Before building anything, ask a different question: what does this look like in six months of daily use?

Not "what does this do today?" What does it become?

The best decisions I made came from watching what the system surfaced, then responding to what I saw. I observed first, then interacted. Small additions accumulated slowly: a skill when a recurring need became clear enough, a memory entry when something was worth preserving, a structural change only when the existing structure visibly failed. The system that exists today is smarter than anything I could have designed on day one.

Design from the overall pattern first. The lifecycle of an idea, the states a note moves through. Then add the fine-grained mechanics. The detail follows the pattern. Not the other way around.

**Tend, don't operate.**

A gardener doesn't grow plants. Plants grow. The gardener chooses the conditions: the soil, the spacing, the light. Get those right and growth follows without constant intervention.

Operating a system means running it. You are the engine. The moment you stop, it stops.

Tending is different. An AI Environmentalist designs the conditions in which the AI can do its best work: what context exists before any conversation begins, what rules govern how it engages, what structure determines where things live. Design those conditions well and the quality of thinking follows. Session after session. Without rebuilding from scratch.

---

## What the system looks like

The vault is organized around states, not topics. Notes don't go into folders based on what they're about. They go based on where they are in their development.

```
1.RAW        — quick capture: the daily dump, the idea in transit
2.Processing — active work being refined
3.Refined    — mature, standalone pieces
7.Someday    — coherent ideas with no current urgency
Claude/      — the only folder where AI may write
```

Andrej Karpathy recently [described a similar pattern](https://x.com/karpathy/status/2039805659525644595): a raw source directory that feeds everything downstream. We arrived at it independently. That convergence is telling. When you watch how ideas actually develop, a raw capture zone that isn't curated or permanent turns out to be the natural starting point.

Where our setups diverge is what happens next. In his system, the LLM compiles and maintains the knowledge base. The AI writes the wiki. In mine, the AI writes only in `Claude/`. The thinking is mine. That boundary is deliberate. The vault is the asset, and its intellectual content belongs to me.

Everything else in the vault is read-only for AI. Claude's output lives in a defined zone, with authorship clearly marked. The AI is a tool operating inside limits I've set.

The governing document is `CLAUDE.md`, a file in the vault root that loads at every session start. Not a configuration file. A teaching document. It defines who I am, what the vault structure means, how the AI should behave, what it may access. It took several iterations to get right. The current version defines a relationship, not just a set of rules.

Memory persists across sessions in two layers. A permanent baseline loads every time. An accumulating layer stores observations, corrections, project status, and preferences across weeks and months. The AI gets smarter about my life over time. Not because it has a better model. Because the environment contains more accurate information.

---

## In practice

Skills are slash commands stored as files in `Claude/Skills/`. `/lw-orient` reads memory, tasks, and recent outputs at session start to build a current picture before any work begins. `/blog-ideas` proposes post ideas grounded in what's currently in the vault. `/lw-audit` runs a health check, catching stale configuration before it becomes a problem. `/book-report` conducts a structured conversation about a book I've finished and produces a note from my answers and Kindle highlights.

The discipline: a skill is built only when a recurring task has enough structure to be repeatable. Not before. A skill built speculatively is a maintenance burden with no user.

Skills can be invoked two ways: by typing a command, or by describing what you want conversationally. I assumed both paths were equivalent. They weren't. My monitoring only captured one of them. For four days I had logs that felt complete and missed half of what was actually happening. The fix was a second rule covering the second path. The lesson was broader: the system was already more complex than my mental model of it. That complexity wasn't a failure. It was evidence the environment was working.

---

## Before and after

Before this system, I had a blog. Started four years ago. Struggled weekly, published 12 posts, stopped.

This time: 82 daily posts, and I take pleasure in writing them.

Not because I became more disciplined. The vault made the ideas visible. There's more material than I thought. Half-formed ideas from years ago, sitting in notes I'd forgotten, now connectable to something I wrote last week. The system didn't generate those ideas. It surfaced them, and showed me how they fit together.

The deeper surprise: the system revealed a thinking method that had always been mine. The way I approach problems, the patterns I return to, the instinct to connect things across domains. It was always there. I couldn't see it until something held it up.

That's what an environment does. It doesn't add capability. It makes visible what's already there.

The prompt engineer would have asked for better blog post ideas. The AI Environmentalist built a vault where the ideas were already inside, and a system that surfaces them on demand.

---

## The frame of mind

You don't need my setup. You need your own.

The three principles that travel:

Start from your actual life. The specificity is the value. A system designed around who you are will outperform any template. Not because it's technically superior. Because it fits.

Design for the long arc. Ask what the system becomes in six months of daily use. Observe before you optimize. Let small, slow solutions accumulate before adding complexity.

Tend, don't operate. Design the conditions. Let the quality of thinking follow.

That's what it means to be an **AI Environmentalist**. Not the best prompter in the room. The one who built the house.

What you're building isn't a framework you'll outgrow. It's not tied to a platform that will change its terms, or a template someone else will update for you. It's yours: designed around your thinking, your work, your life. It compounds with use. It gets more useful the longer you tend it. That's a different category of thing entirely.

You're not late. You're early.
