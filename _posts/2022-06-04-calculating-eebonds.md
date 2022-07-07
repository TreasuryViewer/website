---
layout: post
title: Calculating Yield for Series EE Bonds
subtitle: The math is easier than you might think
author: Ricky
---

If you go on TreasuryDirect® right now, and look at a Series EE bond, you will see a rather small interest rate (right now, the latest one I’ve bought is at 0.1%). But this rate undersells the actual yield you are realistically getting.

# Doubling in 20 Years

Unlike all the other types of treasury securities, Series EE bonds don’t just collect interest or appreciate their principal. They also have this weird mechanic that if you hold to 20 years, the principle doubles in value.


> At 20 years, a bond we sell now will be worth twice what you pay for it. If you keep the bond that long, we make a one-time adjustment then to fulfill this guarantee.
> <br>&nbsp;&nbsp;&nbsp;&nbsp;— <https://www.treasurydirect.gov/indiv/products/prod_eebonds_glance.htm>

So if the interest has already 2x’ed your money by 20 years (which is very unlikely nowadays), then nothing happens. Otherwise, it doubles and continues gaining the normal interest.

# Doing the math

Ok, we know enough to calculate the yield now. Let’s examine the more realistic case of the doubling first.

If the yield is some $$x\%$$, then after 20 years, your money gets multiplied by $$(1+x)^{20}$$. This has to equal 2 because of the doubling. Taking the 20-th root of both sides, we get that $$1+x = 1.0352649$$, or that $$x = 3.526\%$$.

Alternatively, you can consider gaining the written interest rate, let’s call it $$p\%$$. Combining these two, we see that if we are before 20 years from the issue date, then the yield is $$\max(p, 3.526\%)$$. After 20 years, it’s always just the written rate $$p\%$$.

