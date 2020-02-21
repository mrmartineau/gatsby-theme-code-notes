---
title: Yalc
tags:
  - javascript
---

Say we have two repos:

`fx-holiday-app` which depends on `@fairfx/fuji`

## Step 1

Run `yalc publish` in the `@fairfx/fuji`

## Step 2

Run `yalc add @fairfx/fuji` in the `fx-holiday-app`

## Step 3

Run `yarn` in `fx-holiday-app`

## Step 4

Run `yalc push` whenever you update `@fairfx/fuji`

You may need to run `yarn build && yarn push` if you package needs building first.
