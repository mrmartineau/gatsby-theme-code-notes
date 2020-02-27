---
title: Fish shell
emoji: 🐠
tags:
  - cli
---

My Fish config: https://github.com/mrmartineau/fish

Change fish settings:

```shell
fish_config
```

Reload fish shell

```shell
fish
```

http://fishshell.com/docs/current/tutorial.html
https://github.com/jorgebucaran/fish-cookbook

## Functions

Create new functions in `~/.config/fish/functions` e.g. `xyz.fish`

## Aliases

```sh
alias gco 'git checkout'
```

### abbr

If you add an abbr instead of an alias you'll get better auto-complete. In fish abbr more closely matches the behavior of a bash alias.

```sh
abbr -a gco git checkout
```

Will add a new abbreviation `gco` that expands to `git checkout`.

## Fisher

https://github.com/jorgebucaran/fisher

```
fisher self-update
```
