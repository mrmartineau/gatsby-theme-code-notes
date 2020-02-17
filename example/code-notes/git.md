---
title: Git
tags:
  - git
  - cheatsheet
---

## Branches

List all local branches

```sh
git branch
```

List all merged branches

```sh
git branch --merged
```

Same as above but exclude master and develop branches

```sh
git branch --merged | egrep -v "(^\*|master|develop)"
```

## Deleting

```sh
git branch -d branch_name
```

## Delete remote branches

```sh
git push origin --delete branch1 branch2
```

## Generate release notes

These release notes were generated using this script:

```sh
git log f5b38145...8c17d7a9 --pretty=format:'- **%s** ([%h](github.com/FairFXGroup/fx-holiday-money-app/commit/%H)) by %an' --reverse
```

To retrieve the git commit hashes use this:

```sh
git log --oneline
```

[gitsheet.wtf/](https://gitsheet.wtf/)
