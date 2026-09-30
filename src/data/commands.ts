export interface CommandGroup { title: string; note?: string; cmds: { c: string; d: string }[] }

export const commandGroups: CommandGroup[] = [
  { title: 'Setup (once)', cmds: [
    { c: 'git --version', d: 'Check Git is installed' },
    { c: 'git config --global user.name "Your Name"', d: 'Name on your commits' },
    { c: 'git config --global user.email "you@example.com"', d: 'Email on your commits' },
    { c: 'git config --global init.defaultBranch main', d: 'Default branch name' } ] },
  { title: 'Fork workflow', note: "origin = your fork. upstream = the original project. The project's CONTRIBUTING.md always wins over generic advice.", cmds: [
    { c: 'git clone <repository-url>', d: 'Copy your fork to your laptop' },
    { c: 'cd <repository-name>', d: 'Enter the project folder' },
    { c: 'git remote add upstream <original-repository-url>', d: 'Link the original project' },
    { c: 'git remote -v', d: 'Show origin and upstream' } ] },
  { title: 'Branch, change, commit', cmds: [
    { c: 'git status', d: 'What changed?' },
    { c: 'git branch', d: 'List local branches' },
    { c: 'git switch -c feature/my-change', d: 'Create and enter your own branch' },
    { c: 'git diff', d: 'Review unstaged changes' },
    { c: 'git add <file>', d: 'Stage one file' },
    { c: 'git add .', d: 'Stage everything (check git status first)' },
    { c: 'git diff --staged', d: 'Review what will be committed' },
    { c: 'git commit -m "docs: improve contribution guide"', d: 'Save with a clear message' },
    { c: 'git push -u origin feature/my-change', d: 'Send the branch to your fork, then open the Pull Request' } ] },
  { title: 'Stay in sync', cmds: [
    { c: 'git fetch upstream', d: "Download the original project's updates" },
    { c: 'git switch main', d: 'Go to your main branch' },
    { c: 'git merge --ff-only upstream/main', d: 'Update main safely (refuses if it would rewrite history)' },
    { c: 'git pull --rebase upstream main', d: 'Replay your commits on the latest main. Rebase rewrites local commits: only on your own branch.' } ] },
  { title: 'Look around and undo safely', cmds: [
    { c: 'git log --oneline --graph --decorate --all', d: 'History as a graph' },
    { c: 'git restore <file>', d: 'Discard unsaved edits in a file (cannot be undone)' },
    { c: 'git restore --staged <file>', d: 'Unstage a file, keep the edits' },
    { c: 'git stash', d: 'Set unfinished work aside' },
    { c: 'git stash pop', d: 'Bring it back' } ] },
];
