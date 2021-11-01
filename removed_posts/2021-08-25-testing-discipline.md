---
title: "Rise of testing culture as the main contributor to improved software"
date: 2021-08-25
header:
image: "/images/main-header.jpg"
tags: [testing, unit, endtoend, integration]
excerpt: "testing"
---
{: .text-left}
## Introduction
Any software developer knows very well that testing is important. But as it's based on experience, many developers have not done enough. One result was to quote Gerald Weinberg's frequently repeated phrase, "If builders built buildings the way programmers write programs, then the first woodpecker to appear will destroy civilization." Looking back, I think I am reacting to the common experience of untested code, and these small changes accidentally caused breakages for incomprehensible reasons. Seemed to me at the time, after a few years, I started to hate it because it became more and more fragile and scary. As you work on software I've been working on for a while, it feels less comfortable in front of untested code. Year after year, tolerance for bad tests is getting lower and lower.
 
## Path to go

So this is the path that will get you in better situations:

### Unit testing is an important investment in the future of software.

When you are creating a new feature and implementing a series of functions to complete it, don't fool yourself into thinking that you are smart enough to know in advance what will be error-prone, what will become a bottleneck, and what will be difficult to understand. For his successor.
Remember that the code reading and updating frequency is higher than the code writing frequency. Personally, I think that writing a good test helps developers in the first development step rather than slowing them down. But I know, and what I know about this call, unit testing greatly improves productivity and eases the pain of many developers who will learn and review this code later. This is the commercial value!

### The test coverage data is useful and you should pay close attention to it.

This is a policy that I see applied with success; It has two parts: First, when you make major changes to functions that are not unit tested, write them down. Second, check-in is not allowed to lower the coverage rate.  This is effective because when you use a large old codebase, updates are generally not evenly distributed around it; there are hot spots where helpful behaviors accumulate. So if you apply this strategy, the code "hot spots" will organically increase pretty good test coverage, while the rest, which may not have been touched or seen for many years, are ignored and it doesn't matter.

### The untested legacy code base can and should be improved gradually.

This is a policy that I see applied with success; It has two parts: First, when you make major changes to functions that are not unit tested, write them down. Second, check-in is not allowed to lower the coverage rate.  This is effective because when you use a large old code base, updates are generally not evenly distributed around it; there are hot spots where helpful behaviors accumulate. So if you apply this strategy, the code "hot spots" will organically increase pretty good test coverage, while the rest, which may not have been touched or seen for many years, are ignored and it doesn't matter.

### Be pragmatic.
Testing should be an ultimately pragmatic activity with no room for ideology. There are the TDD/BDD directions, but any pragmatic activity is useful. Previously we used local DynamoDB as a mock for tests instead of mocking cloud services.
### Unit testing empowers code reviewers.
When doing reviews, we often run into situations where I can't figure out what the developer is trying to achieve in a certain code snippet. If you go to the unit test and see what it is doing, that makes the purpose of the function obvious. This also applies to downstream developers who must modify the code.### Integration testing is very important and very difficult, especially in a microservice environment.

### Integration testing is very important and very difficult, especially in a microservice environment.
The problem is that moving from monoliths to microservices, which makes these tests more important, also makes them harder to build. Which is another good reason to have a bigger percentage of unit tests as cover.

## Where we stand

We are now doing things in a more efficient manner. Every squad also needs to contend with those dreadful old stagnant pools of unproven legacy. Take it in stride; it's simply a part of the job. In any case, you're undoubtedly responsible for some of it.
