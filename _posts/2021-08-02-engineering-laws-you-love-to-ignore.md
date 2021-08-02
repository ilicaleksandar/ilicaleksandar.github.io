---
title: "12 Software Engineering Laws Everybody Loves to Ignore"
date: 2021-08-02 header:
image: "/images/main-header.jpg"
tags: [engineering, laws]
excerpt: "engineering"
---
{: .text-left}
## 12 Software Engineering Laws Everybody Loves to Ignore

### 1. Eagleson's Law

<blockquote>
"Any code of your own that you haven't looked at for six or more months might as well have been written by someone else."
</blockquote>

6 months is rather optimistic.

### 2. Parkinson's Law

<blockquote>
"Work expands so as to fill the time available for its completion."
</blockquote>

The primary project management lessons here is that if you don't set rough deadlines for at least conceptual milestones, then
the project will never be completed. This is why iterating on a minimum viable product within fixed timelines is important.
And we can and should adjust this law for data, processing power, RAM, ...:

<blockquote>
"Data/CPU/memory usage expands to use up all available storage space/bandwidth/cycles/RAM."
</blockquote>

### 3. Pareto's Fallacy

The Pareto Principle is easy to misinterpret, especially by management. This often leads to Pareto's Fallacy:

<blockquote>
"When you're 80% done, you think you only have 20% left."
</blockquote>

The critical part that's overlooked here is that those 20% will require 80% of your time.

### 4. The LGTM Dilemma

<blockquote>
"If you want to quickly ship a 10 line code change, hide it in a 1500 line pull request."
</blockquote>

Also known as The Bikeshedders' Blind Spot.

### 5. LeBlanc's Law:

<blockquote>
"Later equals Never."
</blockquote>

We usually don't get around to doing any of those things we plan to do "later". After dealing with the consequences of "I'll
fix it later" a few too many.

### 6. Greenspun's 10th Rule of Programming

<blockquote>
Any custom developed authentication system contains an ad hoc, informally-specified, bug-ridden, slow implementation of half of Kerberos.
</blockquote>

This can be generalized to the Universal NIH-Rule: "any custom developed system contains an ad hoc, informally-specified,
bug-ridden, slow implementation of half of the industry standard you refused to adopt".

### 7. The Iceberg Fallacy

<blockquote>
"The cost of development of a new software product is the only ~25% of the total cost of ownership management sees and budgets for."
</blockquote>

Ops Addition :

<blockquote>
If software maintenance is 75% of the total cost of ownership, then operational support is the remaining 75%.
</blockquote>

### 8. Conway's Law

Also known as: "You will ship your org chart."

<blockquote>
"Any organization that designs a system will produce a design whose structure is a copy of the organization's communication structure."
</blockquote>

You may think you can avoid it via cross-functional standup meetings and stakeholder updates and decision matrices, but
eventually and inevitably conflicting or diverging priorities will lead to equally conflicting or divergent processes and
outcomes.

### 9. Zawinski's Law

Adjusted for 2021:

<blockquote>
"Every program attempts to expand until it includes a web server. Those programs which cannot so expand are replaced by ones which can."
For web services, it's "...until it requires a user account and collects all users' data"; for physical devices, it's "...until it includes an insecure wifi access point with a default password you can't change. And a web server".
</blockquote>

### 10. Sturgeon's Revelation

<blockquote>
"90% of everything is crud."
</blockquote>

Yes, that includes your products.

### 11. Brooks's Law

From The Mythical Man-Month:

<blockquote>
"Adding manpower to a late software project makes it later."
</blockquote>

When you realize you're not making the progress you thought you would and your management tries to reallocate resources from
another part of the org, you'll end up not only delaying the project, but you'll likely ship a more brittle, more complex
product.

### 12. George Box's Law

<blockquote>
All models are wrong, but some are useful.
                            George Box
</blockquote>

All models of systems are flawed, but that as long as they are not too flawed they may be useful. Excessive detail may lead
to too much complexity, too little detail may prevent the model from being functional.

### Bonus

#### 1. The Two Pizza Rule

<blockquote>
If you can't feed a team with two pizzas, it's too large.
                                        Jeff Bezos
</blockquote>

His belief is suggests that large teams are inherently inefficient. This is supported by the fact that as the team size
increases linearly, the links between people increases quadratically; thus the cost of coordinating and communicating also
grows quadratically.

#### 2. The Dead Sea Effect

<blockquote>
"...the more talented and effective IT engineers are the ones most likely to leave - to evaporate ... [those who tend to] remain behind [are] the 'residue' — the least talented and effective IT engineers."
                                                                                                      Bruce F. Webster
</blockquote>

Typically, highly skilled engineers find it easy to gain employment elsewhere and are the first to do so. Engineers who have
obsolete or weak skills will tend to remain with the company, as finding employment elsewhere is difficult.

### If you find interesting more links to read:

- <strong> <a href="https://github.com/dwmkerr/hacker-laws#the-law-of-conservation-of-complexity-teslers-law">hacker-laws</a> </strong> 
- <strong> <a href="https://www.laws-of-software.com/">laws-of-software </a></strong> 
