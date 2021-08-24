---
title: "Longterm happniess with testing discipline"
date: 2021-06-11
header:
image: "/images/main-header.jpg"
tags: [testing, unit, endtoend,integration]
excerpt: "testing"
---
{: .text-left}
## Rise of testing culture as main contributor to improved software
###Introduction
Any software developers know very well that testing is important. But as its based on experience, many developers have not done enough. One result of was to quote Gerald Weinberg's frequently repeated phrase, "If builders built buildings the way programmers write programs, then the first woodpecker to appear will destroy civilization." Seemed to me at the time, after a few years, I started to hate it because it became more and more fragile and scary. Looking back, I think I am reacting to the common experience of untested code, and these small changes accidentally caused breakages for incomprehensible reasons.

### Prove it works
Can you prove it works? No.
I have looked for research on the effectiveness of the test, but have not found much. But there are other kinds of useful lessons in the world, so we must not compromise with what our experience tells us to be correct.

I don't remember when you were infected, but I can attest: once you are infected, you will never feel comfortable in front of untested code. They also don't provide untested code. By the way, I no longer hate the software I've been working on for a while.
Year after year, tolerance for bad tests is getting lower and lower.

### Path to go

So this is the position will get you in better situations:

#### Unit testing is an important investment in the future of software.

When you are creating a new feature and implementing a series of functions to complete it, don't fool yourself into thinking that you are smart enough to know in advance what will be error prone, what will become a bottleneck, and what will be difficult to understand. for his successor.
Remember that the code reading and updating frequency is higher than the code writing frequency. Personally, I think that writing a good test helps developers in the first development step rather than slowing them down. But I know, and what I know about this call, unit testing greatly improves productivity and eases the pain of many developers who will learn and review this code later. This is the commercial value!

#### The test coverage data is useful and you should pay close attention to it.

And the coverage data is more than just a percentage figure. When I do most of the time for some specific programming part, I like to run a test with coverage turned on, and then quickly view all the important code snippets, looking at the green and red sidebars. Every time I do this, I get a surprise, usually in the form of files that I think my unit tests are smart, but there is a big gap in coverage. Not only did this make me want to improve the test, it also taught me something I didn't know about how my code reacts to input.

#### The untested legacy code base can and should be improved gradually.

This is a policy that I see applied with success; It has two parts: First, when you make major changes to functions that are not unit tested, write them down. Second, check-in is not allowed to lower the coverage rate.  This is effective because when you use a large old code base, updates are generally not evenly distributed around it; there are hot spots where helpful behaviors accumulate. So if you apply this strategy, the code "hot spots" will organically increase pretty good test coverage, while the rest, which may not have been touched or seen for many years, are ignored and it doesn't matter.

#### Be pragmatic.
Testing should be an ultimately-pragmatic activity with no room for ideology. There are the TDD/BDD directions, but any pragmatic activity is better than mocking actual cloud service.
#### Unit testing empowers code reviewers.
When doing reviews, we often run into situations where I can't figure out what the developer is trying to achieve in a certain code snippet. If you go to the unit test and see what it is doing, that makes the purpose of the function obvious. This also applies to downstream developers who must modify the code.
#### Integration testing is very important and very difficult, especially in a microservice environment.

The problem is that moving from monoliths to microservices, which makes these tests more important, also makes them harder to build. Which is another good reason to have a bigger  percentage of unit tests as cover.

####  Integration test must pass 100%. It cannot be ignored is not acceptable.

Finally, I have seen integration test logs showing crashes over and over again, and some developers said "Oh yes, those specific tests are unstable, and they sometimes fail". For whatever reason, they think this is good. Certain test results leave a better impression.
Integration tests must run "fast enough".

####  The unit tests should run very fast with a single IDE key combination, and running them every few seconds is as good as a nervous ticking sound. If tests are reasonable fast, developers are more keen to run them.
 



 