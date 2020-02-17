---
title: VIM cheatsheet
tags:
  - cheatsheet
---

**Cheatsheets**

- [https://github.com/hackjutsu/vim-cheatsheet](https://github.com/hackjutsu/vim-cheatsheet)
- [https://gist.github.com/azadkuh/5d223d46a8c269dadfe4](https://gist.github.com/azadkuh/5d223d46a8c269dadfe4)
- [https://vimsheet.com/](https://vimsheet.com/)

**Substitute or Find/Replace**

To find each occurrence of ‘eth0’ in the current line only, and replace it with ‘br0’, enter (first press Esc key and type):

```
:%s/eth0/br0/g
```

To find and replace all occurrences of ‘eth1’ with ‘br1’, enter:

```
:%s/eth1/br1/g
```

To find and replace all occurrences of ‘eth1’ with ‘br1’, but ask for confirmation first, enter:

```
:%s/eth1/br1/gc
```

To find and replace all occurrences of case insensitive ‘eth1’ with ‘br1’, enter:

```
:%s/eth1/br1/gi
```

The above example will find eth1, ETH1, eTh1, ETh1 and so on and replace with br1. To find and replace all occurrences of ‘eth1’ with ‘br1’ for lines from 3 to 7, enter:

```
:3,7s/eth1/br1/g
```
