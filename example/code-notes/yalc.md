---
title: Yalc
tags:
  - javascript
---

Say we have two repos:

`repo-a` which depends on npm `package-a`

## Step 1

Run `yalc publish` in the `package-a` repo

## Step 2

Run `yalc add package-a` in the `repo-a` repo

## Step 3

Run `yarn` in `repo-a`

## Step 4

Whenever you update `package-a`, run `yalc push` in the `package-a`, and run `yalc add package-a` in the `repo-a` repo

You may need to run `yarn build && yarn push` if you package needs building first.
