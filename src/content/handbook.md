# Open Source, Git & GitHub Handbook

> A practical guide from complete beginner to confident contributor
>
> Prepared for **Open Source Kigali** learners and anyone beginning their open source journey.
> By Ushindi Bihame Victoire / Osk Fullstack Software Engineer | Requirement Specialist

---

## Table of Contents

1. [What Open Source Means](#1-what-open-source-means)
2. [How Open Source Works](#2-how-open-source-works)
3. [Why Contribute?](#3-why-contribute)
4. [The People, Files, and Language of Open Source](#4-the-people-files-and-language-of-open-source)
5. [Git and GitHub Are Not the Same](#5-git-and-github-are-not-the-same)
6. [Install and Configure Git](#6-install-and-configure-git)
7. [The Git Mental Model](#7-the-git-mental-model)
8. [Your First Local Git Project](#8-your-first-local-git-project)
9. [Understanding Commits](#9-understanding-commits)
10. [Branches and Merging](#10-branches-and-merging)
11. [GitHub and Remote Repositories](#11-github-and-remote-repositories)
12. [Contributing Through a Fork and Pull Request](#12-contributing-through-a-fork-and-pull-request)
13. [Working With Issues](#13-working-with-issues)
14. [Writing a Good Pull Request](#14-writing-a-good-pull-request)
15. [Merge Conflicts](#15-merge-conflicts)
16. [Undoing Changes Safely](#16-undoing-changes-safely)
17. [Stashing Work](#17-stashing-work)
18. [Tags and Releases](#18-tags-and-releases)
19. [Useful GitHub Features](#19-useful-github-features)
20. [Intermediate and Advanced Git](#20-intermediate-and-advanced-git)
21. [Open Source Licenses](#21-open-source-licenses)
22. [Security and Safe Contribution](#22-security-and-safe-contribution)
23. [Common Problems and Fixes](#23-common-problems-and-fixes)
24. [Command Cheat Sheet](#24-command-cheat-sheet)
25. [A Practical Learning Path](#25-a-practical-learning-path)
26. [Glossary](#26-glossary)

---

# Part I — Understanding Open Source

## 1. What Open Source Means

**Open source software** is software whose source code is available under a license that allows people to inspect, use, modify, and redistribute it.

Open source does **not** simply mean “the code is visible.” The license is important. A public repository without a license normally gives other people no legal permission to copy, modify, or distribute the code.

Examples of well-known open source projects include:

- Linux
- Git
- Visual Studio Code — its core source is released as Code - OSS
- React
- Firefox
- PostgreSQL
- Python

Open source can also include more than code:

- Documentation
- Designs
- Translations
- Test cases
- Data sets
- Educational materials
- Community processes

### Open source is not always free of cost

“Open” describes the permissions given by the license. A company may sell hosting, support, consulting, or an enterprise version while maintaining an open source project.

### Public code is not automatically open source

Always look for a license such as `MIT`, `Apache-2.0`, or `GPL-3.0`. If a repository has no license, ask the maintainers before reusing its work.

---

## 2. How Open Source Works

A typical project works like this:

1. Maintainers publish a repository.
2. Contributors discover the project and read its guidelines.
3. Work is discussed in issues or discussions.
4. A contributor creates a branch and makes a focused change.
5. The contributor submits a pull request.
6. Automated checks and human reviewers examine the change.
7. The contributor responds to feedback.
8. A maintainer merges the approved change.
9. The change may be included in a future release.

```text
Idea or bug
    ↓
Issue / discussion
    ↓
Fork or branch
    ↓
Code, documentation, test, or design change
    ↓
Commit
    ↓
Pull request
    ↓
Review + automated checks
    ↓
Merge
    ↓
Release
```

Open source is collaboration in public. Good communication is as important as good code.

### Governance varies

Projects may be managed by:

- One independent maintainer
- A community committee
- A nonprofit foundation
- A company
- A group of volunteers

Read the repository documents to understand who makes decisions and how.

---

## 3. Why Contribute?

You can contribute to:

- Learn by solving real problems
- Build a public record of your work
- Improve tools you already use
- Practice teamwork and code review
- Meet developers, designers, writers, and maintainers
- Learn how professional software is developed
- Give back to a community

Do not contribute only to collect green squares or pull-request counts. A small, useful, respectful contribution is more valuable than many noisy ones.

### You do not need to be an expert

Beginner-friendly contributions include:

- Fixing a typo or unclear sentence
- Improving installation instructions
- Reproducing and documenting a bug
- Adding or improving tests
- Translating content
- Improving accessibility
- Reviewing an open pull request
- Answering a community question
- Creating a small example

The right first contribution is not the biggest task. It is the smallest useful task you understand well enough to finish.

---

## 4. The People, Files, and Language of Open Source

### Common roles

| Role | Meaning |
|---|---|
| **User** | Uses the project. |
| **Contributor** | Improves the project in any accepted way. |
| **Reviewer** | Examines proposed changes and gives feedback. |
| **Maintainer** | Guides the project and manages contributions. |
| **Owner** | Controls the repository or organization. |

One person may have several roles.

### Important repository files

| File | Purpose |
|---|---|
| `README.md` | Explains what the project is and how to begin. |
| `CONTRIBUTING.md` | Explains how to contribute. |
| `LICENSE` | Defines the legal permissions and conditions. |
| `CODE_OF_CONDUCT.md` | Defines expected community behavior. |
| `SECURITY.md` | Explains how to report security problems safely. |
| `CHANGELOG.md` | Records notable changes between versions. |
| `.gitignore` | Lists files Git should not track. |
| Issue templates | Help people report bugs or request features clearly. |
| Pull request template | Helps contributors describe proposed changes. |

### Important words

- **Repository (repo):** A project and its complete Git history.
- **Issue:** A tracked bug, task, proposal, or question.
- **Branch:** An independent line of development.
- **Commit:** A saved snapshot of tracked changes.
- **Pull request (PR):** A request to review and merge changes.
- **Merge:** Combine changes from one branch into another.
- **Release:** A named, packaged version of a project.
- **Upstream:** Usually the original repository you contribute to.
- **Origin:** The default name for the remote repository you cloned—often your fork.

---

# Part II — Git Foundations

## 5. Git and GitHub Are Not the Same

Git and GitHub are connected, but they are different.

### Git

**Git** is a distributed version control system. It runs on your computer and records the history of your files.

Git helps you:

- Track changes
- Restore earlier versions
- Work on separate branches
- Combine work safely
- Collaborate without constantly overwriting other people's files

Git can work without internet access and without GitHub.

### GitHub

**GitHub** is an online platform that hosts Git repositories and adds collaboration features such as:

- Pull requests
- Issues
- Code review
- Project boards
- Discussions
- Releases
- Automated workflows with GitHub Actions

### A simple analogy

```text
Git    = the camera and photo history on your device
GitHub = the online gallery where a team shares and reviews the photos
```

Other Git hosting services include GitLab, Codeberg, and Bitbucket.

---

## 6. Install and Configure Git

### Install Git

Download Git from <https://git-scm.com/downloads> or use your operating system's package manager.

Check the installation:

```bash
git --version
```

On Windows, Git normally includes **Git Bash**. Git Bash is a terminal application, not Git itself.

If the command is not found after installation, reopen the terminal. If it still fails, make sure Git was added to your system `PATH`.

### Configure your identity

Your commit name does not have to be your GitHub username, but your email should match an email connected to your GitHub account if you want commits attributed to your profile.

Set the identity for every repository on your computer:

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

Set a different identity only inside the current repository:

```bash
git config user.name "Your Name"
git config user.email "you@example.com"
```

> **Correction:** The email command uses `user.email`, not `user.name`.

View configuration:

```bash
git config --global --list
git config --list --show-origin
```

Set modern defaults:

```bash
git config --global init.defaultBranch main
git config --global core.autocrlf input       # macOS/Linux
git config --global core.autocrlf true        # Windows
```

Use only the `core.autocrlf` command appropriate for your system.

### Authenticate with GitHub

GitHub does not accept an account password for Git operations over HTTPS. Common choices are:

- Sign in through GitHub CLI: `gh auth login`
- Use a personal access token over HTTPS
- Configure an SSH key

GitHub CLI is optional but helpful:

```bash
gh auth login
gh auth status
```

Never paste access tokens or private SSH keys into code, issues, chat messages, or commits.

---

## 7. The Git Mental Model

Git work normally moves through four places:

```text
Working directory → Staging area → Local repository → Remote repository
      edit            git add        git commit          git push
```

### 1. Working directory

The files you are currently editing.

### 2. Staging area (index)

The exact changes selected for the next commit. Staging lets you commit only the related work.

### 3. Local repository

The commit history stored in the hidden `.git` directory on your machine. A local repository is not a temporary area; it is the complete local Git database.

### 4. Remote repository

A copy hosted elsewhere, such as GitHub. It is not necessarily “the cloud”—it can also live on another server or machine.

### Git tracks content, not simply files

A file may be:

- **Untracked:** Git has not started tracking it.
- **Tracked and unmodified:** It matches the latest commit.
- **Modified:** It changed after the latest commit.
- **Staged:** Its current changes are selected for the next commit.

Check the current state often:

```bash
git status
git status --short
```

---

## 8. Your First Local Git Project

### Start a new repository

```bash
mkdir hello-open-source
cd hello-open-source
git init
```

Create a README file:

```bash
echo "# Hello Open Source" > README.md
```

Check the state:

```bash
git status
```

Stage and commit it:

```bash
git add README.md
git commit -m "docs: add project README"
```

### Stage changes

Stage one file:

```bash
git add README.md
```

Stage selected files:

```bash
git add README.md CONTRIBUTING.md
```

Stage all changes from the current directory downward:

```bash
git add .
```

Stage all changes in the repository, including deletions:

```bash
git add --all
# Short form
git add -A
```

Interactively choose changes:

```bash
git add --patch
# Short form
git add -p
```

> Avoid `git add *`. Shell wildcard behavior differs, hidden files are usually missed, and the result may be surprising. Prefer `git add .`, `git add -A`, or explicit filenames.

Inspect unstaged changes:

```bash
git diff
```

Inspect staged changes:

```bash
git diff --staged
```

### Ignore generated or private files

Create a `.gitignore` file, for example:

```gitignore
node_modules/
.env
.env.*
dist/
coverage/
*.log
.DS_Store
```

`.gitignore` does not stop tracking a file already committed. To stop tracking it while keeping it locally:

```bash
git rm --cached path/to/file
```

Never commit secrets. If a secret has already been committed, removing the current file is not enough because it remains in history. Revoke or rotate the secret immediately, then follow the project's incident process.

---

## 9. Understanding Commits

A commit is a saved snapshot plus information about who created it, when, and why.

Create a commit:

```bash
git commit -m "fix: handle an empty search result"
```

A good commit should:

- Represent one logical change
- Be small enough to review
- Leave the project in a sensible state
- Explain why the change matters

### Good commit messages

Write a short command-style subject:

```text
Add validation for empty email addresses
Fix mobile navigation overlap
Document the local setup process
```

A common optional convention is:

```text
feat: add profile image upload
fix: prevent duplicate form submission
docs: explain environment setup
test: cover invalid login attempts
refactor: simplify permission checks
chore: update development dependencies
```

### View history

```bash
git log
git log --oneline
git log --oneline --graph --decorate --all
git show <commit-id>
git show --stat <commit-id>
```

Search commits:

```bash
git log --author="Name"
git log --since="2 weeks ago"
git log -- path/to/file
git log --grep="search text"
```

Compare changes:

```bash
git diff <older-commit> <newer-commit>
git diff main...feature/my-change
```

### Correct the most recent local commit

Add forgotten changes and replace the latest commit:

```bash
git add forgotten-file.md
git commit --amend
```

Change only its message:

```bash
git commit --amend -m "docs: clarify installation steps"
```

Do not amend a shared commit unless your team agrees, because amending changes its commit ID.

---

## 10. Branches and Merging

A branch is a movable name pointing to a commit. It lets you develop a change independently from the main line of work.

List branches:

```bash
git branch
git branch --all
```

Create and switch to a branch:

```bash
git switch -c docs/improve-setup
```

Switch to an existing branch:

```bash
git switch main
```

The older equivalent is:

```bash
git checkout -b docs/improve-setup
git checkout main
```

`git switch` is clearer for branch operations. `git checkout` remains valid and is also used by older tutorials.

### Branch naming examples

```text
feature/user-profile
fix/login-redirect
docs/setup-guide
test/payment-validation
```

### Merge locally

Switch to the branch that should receive the changes, update it, and merge:

```bash
git switch main
git pull --ff-only origin main
git merge feature/user-profile
```

If the merge succeeds, delete the finished local branch:

```bash
git branch -d feature/user-profile
```

Force-delete only when you understand that unmerged commits may become difficult to recover:

```bash
git branch -D feature/user-profile
```

### Merge styles

- **Merge commit:** Preserves the complete branch structure.
- **Squash merge:** Combines the branch into one commit on the target branch.
- **Rebase and merge:** Replays commits to create a linear history.

The project's maintainers choose the preferred style.

---

# Part III — GitHub and Collaboration

## 11. GitHub and Remote Repositories

### Clone an existing repository

```bash
git clone https://github.com/OWNER/REPOSITORY.git
cd REPOSITORY
```

With SSH:

```bash
git clone git@github.com:OWNER/REPOSITORY.git
```

Cloning downloads the project and its Git history and normally creates a remote named `origin`.

### Inspect remotes

```bash
git remote -v
git remote show origin
```

### Connect a local project to GitHub

Create an empty repository on GitHub, then run:

```bash
git remote add origin https://github.com/YOUR-USERNAME/REPOSITORY.git
git branch -M main
git push -u origin main
```

`-u` sets the upstream tracking branch. Later, plain `git push` and `git pull` usually know which branch to use.

### Fetch, pull, and push

Download remote information without changing your working files:

```bash
git fetch origin
```

Download and integrate the remote branch:

```bash
git pull origin main
```

A pull is usually a fetch followed by a merge or rebase, depending on configuration.

Push the current branch and set its tracking branch:

```bash
git push -u origin HEAD
```

Push a named branch:

```bash
git push origin feature/user-profile
```

Delete a remote branch:

```bash
git push origin --delete feature/user-profile
```

> Avoid pushing every local branch with `git push --all` unless you intentionally want all of them on that remote.

### Correct fetch syntax

`git fetch` receives a **remote name**, optionally followed by a remote branch:

```bash
git fetch origin
git fetch origin main
```

It is not normally `git fetch <local-branch-name>`.

---

## 12. Contributing Through a Fork and Pull Request

A **fork** is your GitHub-hosted copy of another person's repository. Forking is useful when you do not have permission to push branches directly to the original project.

### Before changing anything

1. Read `README.md`.
2. Read `CONTRIBUTING.md`.
3. Read `CODE_OF_CONDUCT.md`.
4. Check the license.
5. Search issues and pull requests for related work.
6. Ask to be assigned if the project requires it.
7. Understand how to run the project and its tests.

### Standard fork workflow

#### 1. Fork on GitHub

Open the original repository and select **Fork**.

#### 2. Clone your fork

```bash
git clone https://github.com/YOUR-USERNAME/REPOSITORY.git
cd REPOSITORY
```

#### 3. Add the original repository as `upstream`

```bash
git remote add upstream https://github.com/ORIGINAL-OWNER/REPOSITORY.git
git remote -v
```

A common setup is:

```text
origin   → your fork
upstream → original project
```

#### 4. Synchronize before starting

```bash
git switch main
git fetch upstream
git merge --ff-only upstream/main
git push origin main
```

You can also use GitHub's **Sync fork** button.

#### 5. Create a focused branch

```bash
git switch -c docs/fix-installation
```

#### 6. Make and inspect the change

```bash
git status
git diff
```

Run the project's formatting, linting, and test commands from its contributing guide.

#### 7. Stage and commit

```bash
git add path/to/changed-file.md
git diff --staged
git commit -m "docs: correct installation command"
```

#### 8. Push your branch

```bash
git push -u origin HEAD
```

#### 9. Open a pull request

On GitHub, open a pull request from your branch to the original project's target branch. Complete the template and explain the change.

With GitHub CLI:

```bash
gh pr create
```

#### 10. Respond to review

Make requested changes on the same branch:

```bash
# Edit files
git add .
git commit -m "fix: address review feedback"
git push
```

The pull request updates automatically. Do not open a new pull request for each review change.

#### 11. Clean up after merge

```bash
git switch main
git fetch upstream
git merge --ff-only upstream/main
git push origin main
git branch -d docs/fix-installation
```

Delete the remote branch if GitHub did not delete it:

```bash
git push origin --delete docs/fix-installation
```

### Direct collaborator workflow

If you have permission to push to the original repository, you may clone it directly, create a branch, push the branch, and open a pull request without forking. Follow the project's rules.

---

## 13. Working With Issues

An issue may describe a bug, feature, documentation change, task, or discussion.

### Finding beginner-friendly work

Look for labels such as:

- `good first issue`
- `first-timers-only`
- `beginner-friendly`
- `help wanted`
- `documentation`
- `accessibility`

A label is an invitation to investigate, not permission to ignore the contributing guide.

### Before asking for assignment

Check:

- Is the issue still open?
- Is someone already assigned?
- Is there an active pull request?
- Do you understand the expected result?
- Can you reproduce the problem?
- Can you complete it within a reasonable time?

### A useful comment

```text
Hello! I reproduced this issue on [environment/version].
I would like to work on it. My plan is to [brief plan].
Is this approach acceptable?
```

Avoid comments that contain only “assign me” when you have not read or investigated the issue.

### Reporting a good bug

Include:

1. A clear title
2. What you expected
3. What actually happened
4. Exact steps to reproduce it
5. Version, browser, operating system, or environment
6. Minimal example, screenshots, or logs when safe
7. Possible cause or fix, if known

Remove passwords, tokens, personal data, and other secrets from screenshots and logs.

---

## 14. Writing a Good Pull Request

A pull request means:

> “I made a focused change. Please review it, discuss it with me, and merge it if it is ready.”

A good pull request is:

- Focused on one concern
- Small enough to review
- Linked to the relevant issue
- Tested
- Documented when behavior changes
- Respectful and open to feedback

### Example pull request description

```markdown
## What changed

- Corrected the Windows setup command
- Added a note about restarting the terminal

## Why

The previous command used the wrong configuration key and blocked setup.

## How I tested it

- Followed the guide on Windows 11
- Confirmed `git config --global --list` shows the correct values

Closes #42
```

Use `Closes #42`, `Fixes #42`, or `Resolves #42` when the PR should automatically close that issue after merging.

### Draft pull requests

Open a draft PR when you want early feedback but the change is not ready to merge. Explain what remains unfinished.

### Code review behavior

When receiving review:

- Assume good intent
- Ask when feedback is unclear
- Discuss ideas, not people
- Explain trade-offs calmly
- Mark a conversation resolved only after addressing it
- Thank reviewers for their time

When reviewing:

- Explain why a change is needed
- Separate required changes from suggestions
- Praise good work
- Avoid insulting or vague language

---

## 15. Merge Conflicts

A conflict occurs when Git cannot decide how to combine changes—for example, two branches changed the same lines differently.

Git marks a conflicted file like this:

```text
<<<<<<< HEAD
Content from your current branch
=======
Content from the branch being merged
>>>>>>> other-branch
```

Resolve it by:

1. Open each conflicted file.
2. Understand both versions.
3. Edit the file to the correct final content.
4. Remove all conflict markers.
5. Run tests.
6. Stage the resolved files.
7. Complete the merge.

```bash
git status
git add path/to/resolved-file
git commit
```

Abort a merge and return to the state before it began:

```bash
git merge --abort
```

During a rebase, continue or abort with:

```bash
git add path/to/resolved-file
git rebase --continue

# Or abandon the rebase
git rebase --abort
```

Do not resolve a conflict by blindly accepting one side. Understand the intended behavior first.

---

# Part IV — Recovery and Advanced Workflows

## 16. Undoing Changes Safely

Before undoing anything, run:

```bash
git status
git diff
git log --oneline --decorate -10
```

### Discard unstaged changes in one file

```bash
git restore path/to/file
```

This overwrites uncommitted changes in that file. Copy valuable work elsewhere first if uncertain.

### Unstage a file but keep its changes

```bash
git restore --staged path/to/file
```

Older equivalent:

```bash
git reset HEAD path/to/file
```

### Restore a deleted tracked file

```bash
git restore path/to/file
```

### Remove a tracked file

Delete it and stage the deletion:

```bash
git rm path/to/file
```

Remove a tracked directory:

```bash
git rm -r path/to/directory
```

Stop tracking a file but keep it on your computer:

```bash
git rm --cached path/to/file
```

### Safely undo a shared commit

```bash
git revert <commit-id>
```

`git revert` creates a new commit that reverses the selected commit. It is normally the safest option for a shared branch.

### Move a local branch backward

```bash
git reset --soft <commit-id>   # Keep changes staged
git reset --mixed <commit-id>  # Keep changes unstaged; this is the default
git reset --hard <commit-id>   # Discard tracked changes
```

> **Danger:** `git reset --hard` can permanently discard uncommitted tracked work. Do not use it as a general “bring everything back” command.

`git reset` moves a branch and changes staging or working state depending on its mode. It does not normally recover deleted untracked files.

### Inspect an old commit without moving a branch

```bash
git switch --detach <commit-id>
```

Return to your branch:

```bash
git switch main
```

To continue working from the old commit, create a branch:

```bash
git switch -c investigation/old-version
```

### Recover lost commits

Git's reference log often helps after a mistaken reset or rebase:

```bash
git reflog
```

Find the previous commit ID, then create a rescue branch:

```bash
git branch rescue-work <commit-id>
```

### Clean untracked files

Preview first:

```bash
git clean -n
```

Delete untracked files only after reviewing the preview:

```bash
git clean -f
```

Include untracked directories:

```bash
git clean -fd
```

This can be destructive. Ignored files require additional flags and should rarely be removed this way.

---

## 17. Stashing Work

A stash temporarily saves unfinished tracked changes so you can work with a clean directory.

Save tracked changes:

```bash
git stash push -m "WIP: profile form"
```

Include untracked files:

```bash
git stash push -u -m "WIP: profile form"
```

List stashes:

```bash
git stash list
```

Inspect one:

```bash
git stash show -p stash@{0}
```

Apply it and keep it in the stash list:

```bash
git stash apply stash@{0}
```

Apply it and remove it from the list if successful:

```bash
git stash pop stash@{0}
```

Delete one stash:

```bash
git stash drop stash@{0}
```

Delete all stashes:

```bash
git stash clear
```

> Correct syntax is `stash@{0}`, not `stash{0}`.

A stash is local and temporary. For important work, a small work-in-progress branch and commit may be safer.

---

## 18. Tags and Releases

A tag gives a permanent name to a commit, often for a release.

List tags:

```bash
git tag
```

Create an annotated tag:

```bash
git tag -a v1.0.0 -m "Release version 1.0.0"
```

Push one tag:

```bash
git push origin v1.0.0
```

Push all local tags:

```bash
git push origin --tags
```

Delete a local and remote tag:

```bash
git tag -d v1.0.0
git push origin --delete v1.0.0
```

Many projects use Semantic Versioning:

```text
MAJOR.MINOR.PATCH
```

- **MAJOR:** Breaking changes
- **MINOR:** Backward-compatible features
- **PATCH:** Backward-compatible fixes

A GitHub release may add notes, downloadable files, and a human-friendly page around a tag.

---

## 19. Useful GitHub Features

### Issues and labels

Track bugs, tasks, and ideas. Labels classify work by type, priority, status, or difficulty.

### Discussions

Long-form community questions, announcements, ideas, and conversations that may not be actionable issues.

### Projects

Boards and tables for planning issues and pull requests.

### Actions

Automated workflows that can run tests, formatting, builds, releases, or security checks. Workflow files normally live in `.github/workflows/`.

A failed check is useful information. Open the check, read the failing step, reproduce it locally when possible, and correct the cause.

### Releases

Named versions with notes and downloadable artifacts.

### CODEOWNERS

A file that requests reviews from responsible people when certain files change.

### Protected branches and rulesets

Repository owners may require pull requests, passing checks, signed commits, or reviewer approval before merging.

### GitHub CLI examples

```bash
gh repo clone OWNER/REPOSITORY
gh issue list
gh issue view 42
gh pr create
gh pr status
gh pr checks
gh pr view --web
```

---

## 20. Intermediate and Advanced Git

Use these commands only after understanding the basic workflow.

### Rebase a feature branch

Rebase replays your commits on a new base:

```bash
git switch feature/my-change
git fetch origin
git rebase origin/main
```

After rebasing a branch you previously pushed, its commit IDs change. Update your own remote branch carefully:

```bash
git push --force-with-lease
```

Prefer `--force-with-lease` over `--force`; it refuses to overwrite remote work you have not seen.

> Do not rebase commits other people are actively using unless the team agrees.

Rebase does not simply put changes “on one line.” It rewrites commit ancestry and can produce a linear history.

### Interactive rebase

Clean recent local commits before review:

```bash
git rebase -i HEAD~3
```

You can reorder, reword, combine (`squash`), or remove commits. Avoid rewriting shared history.

### Cherry-pick

Apply one existing commit to the current branch:

```bash
git cherry-pick <commit-id>
```

Use sparingly; it duplicates the change under a new commit context.

### Bisect

Find the commit that introduced a bug using binary search:

```bash
git bisect start
git bisect bad
git bisect good <known-good-commit>
```

Test each selected commit and mark it:

```bash
git bisect good
# or
git bisect bad
```

Finish:

```bash
git bisect reset
```

### Blame

See which commit last changed each line:

```bash
git blame path/to/file
```

Use blame to understand history, not to blame people.

### Worktrees

Work on multiple branches in separate directories without repeatedly switching:

```bash
git worktree add ../project-hotfix -b fix/urgent main
```

List and remove worktrees:

```bash
git worktree list
git worktree remove ../project-hotfix
```

### Signed commits

Some projects require cryptographically verified commits. Follow GitHub's current documentation to configure SSH or GPG signing, then verify your setting:

```bash
git config --global commit.gpgsign
```

### Useful aliases

```bash
git config --global alias.st status
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.lg "log --oneline --graph --decorate --all"
```

Aliases are convenience only. Learn the full commands first.

---

# Part V — Responsible Open Source Participation

## 21. Open Source Licenses

A license says what people may do with a project and what conditions they must follow.

### Common license families

| License | General idea |
|---|---|
| **MIT** | Permissive; keep copyright and license notices. |
| **Apache-2.0** | Permissive; includes an explicit patent grant and notice requirements. |
| **BSD** | Permissive family with notice requirements. |
| **GPL** | Copyleft; distributed derivative works must follow GPL requirements. |
| **AGPL** | Strong copyleft that also addresses software used over a network. |
| **LGPL** | Copyleft mainly focused on libraries and modifications to them. |
| **MPL-2.0** | File-level copyleft. |

This summary is educational, not legal advice. Read the actual license and ask a qualified person when legal certainty matters.

### Choosing a license

Use <https://choosealicense.com/> to compare common choices. Do not invent a custom license unless you have legal help.

### Contributor agreements

Some projects ask contributors to sign a Contributor License Agreement (CLA) or certify a Developer Certificate of Origin (DCO). Read what you are agreeing to before accepting.

---

## 22. Security and Safe Contribution

### Never publish secrets

Do not commit:

- Passwords
- Access tokens
- Private keys
- Database connection strings
- Private user data
- Production `.env` files

Use environment variables and commit an example such as `.env.example` with fake values.

If a secret is exposed:

1. Revoke or rotate it immediately.
2. Tell the responsible maintainer privately.
3. Remove it from the current code.
4. Clean history if the project requires it.
5. Investigate whether it was used.

Deleting a file or commit does not make an exposed secret safe again.

### Report vulnerabilities privately

Check `SECURITY.md` or GitHub's private vulnerability reporting option. Do not publish an exploitable vulnerability in a public issue before maintainers can respond.

### Review before running code

An open source repository can contain unsafe scripts. Before running unfamiliar commands:

- Read the installation script
- Check the package source and reputation
- Avoid running as administrator/root unnecessarily
- Use an isolated development environment when appropriate
- Inspect changed dependency files in pull requests

### Respect licenses and authorship

Do not copy code from another project without checking its license and preserving required notices. Do not claim another person's work as your own.

### Community safety

Follow the code of conduct. Harassment, spam, plagiarism, and low-effort automated contributions damage communities.

AI can help explain, brainstorm, or review, but you remain responsible for every submitted line. Understand the change, test it, disclose AI assistance if the project requires it, and never submit generated noise.

---

## 23. Common Problems and Fixes

### “Not a git repository”

You are outside a repository or Git was not initialized.

```bash
pwd
ls -la
git init              # Only if this should become a new repository
```

On Windows Command Prompt, use `cd` and `dir`; in PowerShell, `Get-Location` and `Get-ChildItem` also work.

### “Author identity unknown”

Configure your name and email:

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

### Push rejected: non-fast-forward

Remote work exists that you do not have locally. For your own feature branch:

```bash
git fetch origin
git rebase origin/your-branch
git push
```

For a shared branch, follow the team's merge or rebase policy. Do not immediately force-push.

### Authentication failed

- Confirm the repository URL with `git remote -v`.
- Run `gh auth status` if using GitHub CLI.
- Check your token permissions or SSH setup.
- Remember that GitHub does not accept an account password for Git over HTTPS.

### Changes are not appearing

Check all states:

```bash
git status
git diff
git diff --staged
git log -1 --stat
```

You may have edited a different file, forgotten to stage it, committed on another branch, or ignored the file.

### File remains tracked after adding it to `.gitignore`

```bash
git rm --cached path/to/file
git commit -m "chore: stop tracking generated file"
```

For a directory:

```bash
git rm -r --cached path/to/directory
```

### Wrong branch

If changes are not committed:

```bash
git switch -c correct-branch
```

If Git refuses because branches differ, stash the work, switch, then apply the stash.

If the commit is on the wrong local branch, create the correct branch at the current commit, then carefully restore the original branch:

```bash
git branch correct-branch
git switch original-branch
# Only if the incorrect commit is local and unshared:
git reset --hard HEAD~1
```

### Editor opened during a commit or merge

Git may open Vim. To save and quit:

```text
Press Esc, type :wq, then press Enter
```

To quit without saving:

```text
Press Esc, type :q!, then press Enter
```

You can configure a familiar editor, for example Visual Studio Code:

```bash
git config --global core.editor "code --wait"
```

### Open the current directory in a file manager

Commands vary by operating system:

```bash
open .       # macOS
explorer .   # Windows
xdg-open .   # Many Linux desktop systems
```

Open the current directory in Visual Studio Code:

```bash
code .
```

---

# Part VI — Reference and Practice

## 24. Command Cheat Sheet

### Setup

```bash
git --version
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
git config --global --list
```

### Start or copy a repository

```bash
git init
git clone <repository-url>
```

### Daily inspection

```bash
git status
git status --short
git diff
git diff --staged
git log --oneline --graph --decorate --all
```

### Stage and commit

```bash
git add <file>
git add .
git add -A
git add -p
git commit -m "clear message"
git commit --amend
```

### Branches

```bash
git branch
git branch --all
git switch -c <new-branch>
git switch <branch>
git branch -d <branch>
```

### Remotes

```bash
git remote -v
git remote add origin <url>
git remote add upstream <url>
git fetch origin
git fetch upstream
git pull --ff-only origin main
git push -u origin HEAD
git push origin --delete <branch>
```

### Merge and rebase

```bash
git merge <branch>
git merge --abort
git rebase main
git rebase --continue
git rebase --abort
git push --force-with-lease
```

### Undo and recovery

```bash
git restore <file>
git restore --staged <file>
git revert <commit-id>
git reset --soft <commit-id>
git reset --mixed <commit-id>
git reset --hard <commit-id>     # Destructive
git reflog
git clean -n                     # Preview only
git clean -f                     # Destructive
```

### Stash

```bash
git stash push -m "description"
git stash push -u -m "description"
git stash list
git stash show -p stash@{0}
git stash apply stash@{0}
git stash pop stash@{0}
git stash drop stash@{0}
```

### Files

```bash
git rm <file>
git rm -r <directory>
git rm --cached <file>
git mv <old-name> <new-name>
```

### Search and compare

```bash
git show <commit-id>
git diff <commit-a> <commit-b>
git log -- <file>
git blame <file>
git grep "search text"
```

### Tags

```bash
git tag
git tag -a v1.0.0 -m "Release v1.0.0"
git push origin v1.0.0
```

### GitHub CLI

```bash
gh auth login
gh repo clone OWNER/REPOSITORY
gh issue list
gh issue view <number>
gh pr create
gh pr status
gh pr checks
```

---

## 25. A Practical Learning Path

### Level 1 — First day

Learn and practice:

```bash
git init
git status
git add
git commit
git log
git diff
```

Goal: Create a local repository and make three meaningful commits.

### Level 2 — First week

Learn and practice:

```bash
git clone
git switch -c
git merge
git remote -v
git push
git pull
```

Goal: Create a GitHub repository, push a branch, and merge a pull request.

### Level 3 — First open source contribution

Practice this loop:

```text
Read → Choose issue → Fork → Clone → Branch → Change → Test
→ Commit → Push → Pull request → Review → Improve → Merge
```

Goal: Submit one small, useful pull request you understand completely.

### Level 4 — Team confidence

Learn:

- Conflict resolution
- Rebase
- Reflog
- Tests and automated checks
- Issue writing
- Code review
- Project-specific conventions

Goal: Review another contribution and explain your own change clearly.

### Level 5 — Maintainership

Learn:

- Release management
- Dependency and vulnerability management
- Community moderation
- Contribution templates
- Automation
- Roadmaps and governance
- Sustainable review practices

Goal: Help another beginner make a successful contribution.

### The 10-minute contribution drill

Use a practice repository or a repository that welcomes the change:

1. **Minute 0–1:** Read the task and contribution guide.
2. **Minute 1–2:** Fork and clone.
3. **Minute 2–3:** Create a branch.
4. **Minute 3–6:** Make one small change.
5. **Minute 6–7:** Review the diff.
6. **Minute 7–8:** Commit.
7. **Minute 8–9:** Push.
8. **Minute 9–10:** Open a clear pull request.

Speed is useful for a demonstration, but quality and respect matter more in a real project.

### Open Source Kigali practice challenge

1. Explore the Open Source Kigali organization: <https://github.com/Open-Source-Kigali>
2. Choose a repository and read its documentation.
3. Run it locally.
4. Find an open beginner-friendly issue—or propose a small documented improvement.
5. Discuss the task before making a large change.
6. Create a focused branch and pull request.
7. Share what you learned with another learner.

---

## 26. Glossary

| Term | Meaning |
|---|---|
| **Branch** | An independent line of development. |
| **Clone** | A local copy of a repository and its history. |
| **Commit** | A recorded snapshot of staged changes. |
| **Contributor** | Someone who improves a project. |
| **Diff** | The difference between two versions. |
| **Fork** | Your GitHub-hosted copy of another repository. |
| **HEAD** | A reference to your current checked-out commit or branch. |
| **Issue** | A tracked task, bug, proposal, or question. |
| **Maintainer** | A person responsible for guiding and managing a project. |
| **Merge** | Combining development histories. |
| **Merge conflict** | A change Git cannot combine automatically. |
| **Open source** | Work shared under a license that grants use, study, modification, and redistribution rights. |
| **Origin** | Conventional name for the remote repository you cloned. |
| **Pull request** | A proposal to review and merge changes. |
| **Push** | Send local commits to a remote repository. |
| **Rebase** | Replay commits on a different base, creating new commit IDs. |
| **Remote** | A named connection to another repository. |
| **Repository** | Project files plus their Git history. |
| **Stage** | Select changes for the next commit. |
| **Stash** | Temporarily store unfinished local changes. |
| **Tag** | A stable name for a specific commit. |
| **Upstream** | Usually the original repository from which a fork was created. |
| **Working directory** | The checked-out files you are currently editing. |

---

# Final Principles

1. **Read before changing.**
2. **Start small and finish well.**
3. **Check `git status` often.**
4. **Review your diff before every commit.**
5. **Never commit a secret.**
6. **Do not force-push shared history.**
7. **Test what you change.**
8. **Communicate respectfully.**
9. **Understand every contribution you submit.**
10. **Teach the next person.**

> You do not need to know every Git command. Learn the mental model, practice the core workflow, and know how to investigate safely when something goes wrong.

---

## Trusted References

- Git documentation: <https://git-scm.com/doc>
- Pro Git book: <https://git-scm.com/book/en/v2>
- GitHub documentation: <https://docs.github.com/>
- GitHub Skills: <https://skills.github.com/>
- Choose an Open Source License: <https://choosealicense.com/>
- Open Source Guides: <https://opensource.guide/>
- Open Source Initiative: <https://opensource.org/>
- Open Source Kigali: <https://github.com/Open-Source-Kigali>

---

*Keep learning. Keep building. Keep contributing.*

> Prepared by Ushindi Bihame Victoire / Osk Fullstack Software Engineer | Requirement Specialist