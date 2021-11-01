[comment]: <> (---)

[comment]: <> (title: "12 Software Engineering Laws Everybody Loves to Ignore")

[comment]: <> (date: 2021-08-02 )

[comment]: <> (header:)

[comment]: <> (image: "/images/main-header.jpg")

[comment]: <> (tags: [engineering, laws])

[comment]: <> (excerpt: "engineering")

[comment]: <> (---)

[comment]: <> ({: .text-left})

[comment]: <> (### 1. Eagleson's Law)

[comment]: <> (<blockquote>)

[comment]: <> ("Any code of your own that you haven't looked at for six or more months might as well have been written by someone else.")

[comment]: <> (</blockquote>)

[comment]: <> (6 months is rather optimistic.)

[comment]: <> (### 2. Parkinson's Law)

[comment]: <> (<blockquote>)

[comment]: <> ("Work expands so as to fill the time available for its completion.")

[comment]: <> (</blockquote>)

[comment]: <> (The primary project management lessons here is that if you don't set rough deadlines for at least conceptual milestones, then)

[comment]: <> (the project will never be completed. This is why iterating on a minimum viable product within fixed timelines is important.)

[comment]: <> (And we can and should adjust this law for data, processing power, RAM, ...:)

[comment]: <> (<blockquote>)

[comment]: <> ("Data/CPU/memory usage expands to use up all available storage space/bandwidth/cycles/RAM.")

[comment]: <> (</blockquote>)

[comment]: <> (### 3. Pareto's Fallacy)

[comment]: <> (The Pareto Principle is easy to misinterpret, especially by management. This often leads to Pareto's Fallacy:)

[comment]: <> (<blockquote>)

[comment]: <> ("When you're 80% done, you think you only have 20% left.")

[comment]: <> (</blockquote>)

[comment]: <> (The critical part that's overlooked here is that those 20% will require 80% of your time.)

[comment]: <> (### 4. The LGTM Dilemma)

[comment]: <> (<blockquote>)

[comment]: <> ("If you want to quickly ship a 10 line code change, hide it in a 1500 line pull request.")

[comment]: <> (</blockquote>)

[comment]: <> (Also known as The Bikeshedders' Blind Spot.)

[comment]: <> (### 5. LeBlanc's Law:)

[comment]: <> (<blockquote>)

[comment]: <> ("Later equals Never.")

[comment]: <> (</blockquote>)

[comment]: <> (We usually don't get around to doing any of those things we plan to do "later". After dealing with the consequences of "I'll)

[comment]: <> (fix it later" a few too many.)

[comment]: <> (### 6. Greenspun's 10th Rule of Programming)

[comment]: <> (<blockquote>)

[comment]: <> (Any custom developed authentication system contains an ad hoc, informally-specified, bug-ridden, slow implementation of half of Kerberos.)

[comment]: <> (</blockquote>)

[comment]: <> (This can be generalized to the Universal NIH-Rule: "any custom developed system contains an ad hoc, informally-specified,)

[comment]: <> (bug-ridden, slow implementation of half of the industry standard you refused to adopt".)

[comment]: <> (### 7. The Iceberg Fallacy)

[comment]: <> (<blockquote>)

[comment]: <> ("The cost of development of a new software product is the only ~25% of the total cost of ownership management sees and budgets for.")

[comment]: <> (</blockquote>)

[comment]: <> (Ops Addition :)

[comment]: <> (<blockquote>)

[comment]: <> (If software maintenance is 75% of the total cost of ownership, then operational support is the remaining 75%.)

[comment]: <> (</blockquote>)

[comment]: <> (### 8. Conway's Law)

[comment]: <> (Also known as: "You will ship your org chart.")

[comment]: <> (<blockquote>)

[comment]: <> ("Any organization that designs a system will produce a design whose structure is a copy of the organization's communication structure.")

[comment]: <> (</blockquote>)

[comment]: <> (You may think you can avoid it via cross-functional standup meetings and stakeholder updates and decision matrices, but)

[comment]: <> (eventually and inevitably conflicting or diverging priorities will lead to equally conflicting or divergent processes and)

[comment]: <> (outcomes.)

[comment]: <> (### 9. Zawinski's Law)

[comment]: <> (Adjusted for 2021:)

[comment]: <> (<blockquote>)

[comment]: <> ("Every program attempts to expand until it includes a web server. Those programs which cannot so expand are replaced by ones which can.")

[comment]: <> (For web services, it's "...until it requires a user account and collects all users' data"; for physical devices, it's "...until it includes an insecure wifi access point with a default password you can't change. And a web server".)

[comment]: <> (</blockquote>)

[comment]: <> (### 10. Sturgeon's Revelation)

[comment]: <> (<blockquote>)

[comment]: <> ("90% of everything is crud.")

[comment]: <> (</blockquote>)

[comment]: <> (Yes, that includes your products.)

[comment]: <> (### 11. Brooks's Law)

[comment]: <> (From The Mythical Man-Month:)

[comment]: <> (<blockquote>)

[comment]: <> ("Adding manpower to a late software project makes it later.")

[comment]: <> (</blockquote>)

[comment]: <> (When you realize you're not making the progress you thought you would and your management tries to reallocate resources from)

[comment]: <> (another part of the org, you'll end up not only delaying the project, but you'll likely ship a more brittle, more complex)

[comment]: <> (product.)

[comment]: <> (### 12. George Box's Law)

[comment]: <> (<blockquote>)

[comment]: <> ("All models are wrong, but some are useful.")

[comment]: <> (                            George Box)

[comment]: <> (</blockquote>)

[comment]: <> (All models of systems are flawed, but that as long as they are not too flawed they may be useful. Excessive detail may lead)

[comment]: <> (to too much complexity, too little detail may prevent the model from being functional.)

[comment]: <> (## Bonus)

[comment]: <> (### 1. The Two Pizza Rule)

[comment]: <> (<blockquote>)

[comment]: <> ("If you can't feed a team with two pizzas, it's too large.")

[comment]: <> (                                        Jeff Bezos)

[comment]: <> (</blockquote>)

[comment]: <> (His belief is suggests that large teams are inherently inefficient. This is supported by the fact that as the team size)

[comment]: <> (increases linearly, the links between people increases quadratically; thus the cost of coordinating and communicating also)

[comment]: <> (grows quadratically.)

[comment]: <> (### 2. The Dead Sea Effect)

[comment]: <> (<blockquote>)

[comment]: <> ("...the more talented and effective IT engineers are the ones most likely to leave - to evaporate ... [those who tend to] remain behind [are] the 'residue' — the least talented and effective IT engineers.")

[comment]: <> (                                                                                                      Bruce F. Webster)

[comment]: <> (</blockquote>)

[comment]: <> (Typically, highly skilled engineers find it easy to gain employment elsewhere and are the first to do so. Engineers who have)

[comment]: <> (obsolete or weak skills will tend to remain with the company, as finding employment elsewhere is difficult.)

[comment]: <> (### If you find it interesting more links to read:)

[comment]: <> (- <strong> <a href="https://github.com/dwmkerr/hacker-laws#the-law-of-conservation-of-complexity-teslers-law">hacker-laws</a> </strong> )

[comment]: <> (- <strong> <a href="https://www.laws-of-software.com/">laws-of-software </a></strong> )
