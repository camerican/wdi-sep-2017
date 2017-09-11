## Creating a git project

* git init
* (touch /mkdir scaffolding)
* git add -A
* git commit -m "Created scaffolding"
* (create new repo on github.com)
* git remote add origin git@github.com:myusername/myprojectname.git
* git push -u origin master

## Git Branches

* git branch (to view branches)
* git branch name (to create branch of name)
* git checkout name (to switch to "name")

| Command | Description | Example |
| --- | --- | --- |
| `git branch` | View Branches | |
| `git branch [name]` | Create a branch | `git branch cam` |
| `git checkout [name]` | Switch to a branch | `git checkout cam` |
| `git branch -d [name]` | Delete a branch (can't be on that branch at the time!) | `git branch -d cam` |
| `git checkout -b [name]` | Create and switch to a branch | `git checkout -b cam` |
| `git merge [name]` | Merge a branch into checked out branch | `git merge master` |