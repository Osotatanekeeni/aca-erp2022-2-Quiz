export const QUESTIONS = [
    {
        question: 'What is the git command that downloads your repository from GitHub to your computer?',
        correct_answer: 'git clone',
        incorrect_answers: ['git push', 'git commit', 'git fork'],
        summary: 'Git clone is a command that downloads your repository from GitHub to your computer.\n',
    },

    {
        question: 'Git is the same as GitHub',
        correct_answer: 'False',
        incorrect_answers: ['True'],
        summary: 'Git is not the same as GitHub.\n',
    },
    {
        question: 'What is the command to get the installed version of Git?',
        correct_answer: 'git --version',
        incorrect_answers: ['gitVersion', 'git status', 'git help version'],
        summary: 'The git --version command returns the installed version of Git.\n',
    }, 
    {
        question: 'What is the command to add all files and changes of the current folder to the staging environment of the Git repository?',
        correct_answer: 'git add .',
        incorrect_answers: ['git add -all', 'git add -a', 'git add -files'],
        summary: 'The git add . command adds all files and changes of the current folder to the staging environment of the Git repository.\n',
    },
    {
        question: 'What is the command to get the current status of the Git repository?',
        correct_answer: 'git status',
        incorrect_answers: ['git config --status', 'git getStatus', '--status'],
        summary: 'The git status command returns the current status of the Git repository.\n',
    },
    {
        question: 'What is the command to initialize Git on the current repository?',
        correct_answer: 'git init',
        incorrect_answers: ['start git', 'initialize git', 'git start'],
        summary: 'The git init command initializes Git on the current repository.\n',
    },
    {
        question: 'What is the command to commit the staged changes of the current repository?',
        correct_answer: 'git commit',
        incorrect_answers: ['git save', 'git snapshot', 'git com'],
        summary: 'The git commit command commits the staged changes of the current repository.\n',
    },
    {
        question: 'Git automatically adds new files to the repository and starts tracking them',
        correct_answer: 'False',
        incorrect_answers: ['True'],
        summary: 'Git does not automatically add new files to the repository and starts tracking them.\n',
    },
    {
        question: 'After you add a file with Git, it becomes',
        correct_answer: 'staged',
        incorrect_answers: ['committed', 'modified', 'untracked'],
        summary: 'After you add a file with Git, it becomes staged.\n',
    },
    {
        question: 'What command lets you create a connection between a local and remote repository?',
        correct_answer: 'git remote add origin',
        incorrect_answers: ['git add remote origin', 'git remote origin', 'git add origin'],
        summary: 'The git remote add origin command lets you create a connection between a local and remote repository.\n',
    },
    {
        question: 'Which command is a combination of fetch and merge?',
        correct_answer: 'pull',
        incorrect_answers: ['merge', 'synchronize', 'push'],
        summary: 'The pull command is a combination of fetch and merge.\n',
    },
    {
        question: 'How do you supply a commit message to a commit?',
        correct_answer: 'git commit -m "first commit"',
        incorrect_answers: ['git message "first commit"', 'git add "first commit"', 'git commit "first commit"'],
        summary: 'The git commit -m "first commit" command supplies a commit message "first commit" to a commit.\n',
    },
    {
        question: 'What will "git remote -v" print to the terminal?',
        correct_answer: 'The list of remote repositories you are connected to',
        incorrect_answers: ['The current git version you are running', 'An inline editor for modifying remote repositories', 'The last 5 git versions you\'\ve installed '],
        summary: 'The git remote -v command prints the list of remote repositories you are connected to.\n',
    },
    {
        question: 'What is the name of the area where uncommited changes are temporarily held?',
        correct_answer: 'Staging Area',
        incorrect_answers: ['Unstaging Area'],
        summary: 'The staging area is the area where uncommited changes are temporarily held.\n',
    },
    {
        question: 'Which command is useful for getting a high-level overview of the project history?',
        correct_answer: 'git log --oneline',
        incorrect_answers: ['git reset --hard', 'git log --author="<pattern>"', 'git rebase <base>'],
        summary: 'The git log --oneline command is useful for getting a high-level overview of the project history.\n',
    },
    {
        question: 'Which file can you configure to ensure that certain files are never committed to the local Git repository?',
        correct_answer: '.gitignore',
        incorrect_answers: ['Ignore.git', 'gitIgnore.txt', 'git.ignore'],
        summary: 'The .gitignore file can be used to ensure that certain files are never committed to the local Git repository.\n',
    },
    {
        question: 'What does "git push" do?',
        correct_answer: 'Updates remote refs along with associated objects',
        incorrect_answers: ['Updates remote refs', 'Gets changes from remote ref', 'None of these'],
        summary: 'The git push command updates remote refs along with associated objects.\n',
    },
    {
        question: 'Which of the following is not a git term?',
        correct_answer: 'Stem',
        incorrect_answers: ['Staging area', 'Fork', 'Push'],
        summary: 'stem is not a git term. Staging area, fork and push are git terms.\n',
    },
    {
        question: 'Which of the following is not a git command?',
        correct_answer: 'git roll',
        incorrect_answers: ['git clean', 'git clone', 'git commit'],
        summary: 'git roll is not a git command. git clean, git clone and git commit are git commands.\n',
    },
    {
        question: 'Which command is used to show limited number of commits?',
        correct_answer: 'git log -n',
        incorrect_answers: ['git fetch', 'git config', 'None of the above'],
        summary: 'The git log -n command is used to show limited number of commits.\n',
    },
    {
        question: 'What is the opposite of git clone?',
        correct_answer: 'git push',
        incorrect_answers: ['git add', 'git upload', 'git status'],
        summary: 'The git push command is the opposite of git clone.\n',
    },
    {
        question: 'To get the latest changes from your remote repository, the git command is?',
        correct_answer: 'git pull origin main',
        incorrect_answers: ['git refresh', 'git pull down', 'git reset'],
        summary: 'The git pull origin main command is used to get the latest changes from your remote repository.\n',
    },
    {
        question: 'After you initialize a new git repository and create a file named git-quiz.html, which of the following commands will not work if issued?',
        correct_answer: 'git commit -m "git quiz file added"',
        incorrect_answers: ['git add git-quiz.html', 'git status', 'git add .'],
        summary: 'If you initialize a git repository and create a file named git-quiz.html, the git commit -m "git quiz file added" command will not work if issued because the file has not been added to the staging area.\n',
    },
    {
        question: 'Assuming a repository at https://github.com/Osotatanekeeni/aca-erp2022-2-Quiz.git, how would you add the remote repository to your local git?',
        correct_answer: 'git remote add origin https://github.com/Osotatanekeeni/aca-erp2022-2-Quiz.git',
        incorrect_answers: ['git remote origin add https://github.com/Osotatanekeeni/aca-erp2022-2-Quiz.git', 'git remote new origin https://github.com/Osotatanekeeni/aca-erp2022-2-Quiz.git', 'git remote add https://github.com/Osotatanekeeni/aca-erp2022-2-Quiz.git'],
        summary: 'Use git remote add origin http://repo.git to add the remote repository to your local git.\n',
    },
    {
        question: 'What is the correct usage of push command?',
        correct_answer: 'git push <remote> <branch>',
        incorrect_answers: ['git push <branch> <remote>', 'Both correct', 'None of them'],
        summary: 'The git push <remote> <branch> command is used to push a branch to a remote repository.\n',
    },
    {
        question: 'Which of the following commands show changes between commits?',
        correct_answer: 'git diff',
        incorrect_answers: ['git show', 'git status', 'git reset'],
        summary: 'The git diff command shows changes between commits.\n',
    },
    {
        question: 'Which command would you use to review the commit history of a repository?',
        correct_answer: 'git log',
        incorrect_answers: ['git status', 'git config -l', 'git show'],
        summary: 'The git log command is used to review the commit history of a repository.\n',
    },
    {
        question: 'What command would you use to make Git track your file?',
        correct_answer: 'git add <file>',
        incorrect_answers: ['git clone', 'git status', 'git log'],
        summary: 'The git add <file> command is used to make Git track your file.\n',
    },
    {
        question: 'Which command would you use to view pending changes?',
        correct_answer: 'git status',
        incorrect_answers: ['git log', 'git config -l', 'git show'],
        summary: 'The git status command is used to view pending changes.\n',
    },
    {
        question: 'What is the gitignore file?',
        correct_answer: 'A file that contains a list of files or filename patterns for Git to skip for the current repo',
        incorrect_answers: [
            'A file containing a list of commands that Git will ignore',
            'A file that the user is intended to ignore',
            'A file listing uncommited changes'
        ],
        summary: 'The gitignore file is a file that contains a list of files or filename patterns for Git to skip for the current repo.\n',
    },
    {
        question: 'What kind of file will the command "git commit -a" not commit?',
        correct_answer: 'New files',
        incorrect_answers: ['Tracked files', 'Old files', 'Staged files'],
        summary: 'The git commit -a command will not commit new files IF they have not been added to the staging area.\n',
    },
    {
        question: 'How can you easil view the log message and diff output of the last commit if we do not know the commit ID?',
        correct_answer: 'git show',
        incorrect_answers: ['git identify', 'git revert', 'git log'],
        summary: 'The git show command is used to view the log message and diff output of the last commit if the commit ID is not known.\n',
    },
    {
        question: 'Which command would you use to update your local repository to reflect changes made in the remote repository?',
        correct_answer: 'git pull',
        incorrect_answers: ['git push', 'git clone', 'git commit -a -m'],
        summary: 'The git pull command is used to update your local repository to reflect changes made in the remote repository.\n',
    },
    {
        question: 'git config -global credential. helper cache allows you to configure the credential helper, which is used for what?',
        correct_answer: 'Allowing automated login to GitHub',
        incorrect_answers: ['Troubleshooting the login process', 'Dynamically suggesting commit messages', 'Allowing configuration of automatic repository pulling'],
        summary: 'The git config -global credential. helper cache allows you to configure the credential helper, which is used for allowing automated login to GitHub.\n',
    },
    {
        question: 'If you need to find more information about a remote branch, which command will you use?',
        correct_answer: 'git remote show origin',
        incorrect_answers: ['git fetch', 'git remote show', 'git checkout'],
        summary: 'The git remote show origin command is used to find more information about a remote branch.\n',
    },
    {
        question: 'What method of getting remote content will automatically merge the remote branch with the current local branch?',
        correct_answer: 'git pull',
        incorrect_answers: ['git fetch', 'git checkout', 'git remote update'],
        summary: 'The git pull command is used to automatically merge the remote branch with the current local branch.\n',
    },
    {
        question: 'What combination of command and flags will forece Git to push the current snapshot to the repo as it is, possibly resulting in permanent data loss?',
        correct_answer: 'git push --f',
        incorrect_answers: ['git log -graph -oneline -all', 'git status', 'git rebase -i'],
        summary: 'The git push --f command will force Git to push the current snapshot to the repo as it is, possibly resulting in permanent data loss.\n',
    },
    {
        question: 'What comnmand would you use to remove untracked files from your working directory?',
        correct_answer: 'git clean',
        incorrect_answers: ['git reset', 'git clean -f', 'git commit'],
        summary: 'The git clean command is used to remove untracked files from your working directory.\n',
    },
    {
        question: 'The git clone command does which of the follwowing',
        correct_answer: 'Both 1 & 2',
        incorrect_answers: ['Makes a local copy of the repository', 'Creates a working directory', 'Commits a new branch'],
        summary: 'The git clone command creates a working directory and makes a local copy of the repository.\n'
    },
    {
        question: 'Which command is used to check the current user configuration?',
        correct_answer: 'git config -l',
        incorrect_answers: ['git clone', 'git log', 'git status'],
        summary: 'git config -l is used to check the current user configuration.\n'
    },
    {
        question: 'Which command and tag combination is used to view detailed changes in a repo?',
        correct_answer: 'git log --summary',
        incorrect_answers: ['git log --oneline', 'git log --show', 'git log'],
        summary: 'git log --summary is used to view a detailed description of the changes made on a repository.\n'
    },
    {
        question: 'What command can you use to view the commit id of a commit?',
        correct_answer: 'git log',
        incorrect_answers: ['git commit-id', 'git show', 'git show commit'],
        summary: 'git log shows details about a commit including the commit id(hash).\n'
    },
    {
        question: 'When do we need to append a message while using git?',
        correct_answer: 'While commiting: git commit -m "initial commit"',
        incorrect_answers: ['While adding a remote repo: git remote add -m "adding github"', 'While initializing a repo: git init -m "initial commit"', 'While staging: git add -m "adding files ..."' ],
        summary: 'Only append a message when using git commit.\n'
    },
    {
        question: 'The reference to the remote repository from where a project was initially cloned is called: ',
        correct_answer: 'origin',
        incorrect_answers: ['tag', 'head', 'index'],
        summary: 'The reference to the remote repository from where a project was initially cloned is called origin.\n'
    },
    {
        question: 'Which command would you use to add and commit together with inline commit message?',
        correct_answer: 'git commit -am',
        incorrect_answers: ['git add -A', 'git commit -a', 'git commit -m'],
        summary: 'Use git commit -am to add files to the staging area and commit.\n'
    },
    {
        question: 'What command would you use to upload your code to your remote git url?',
        correct_answer: 'git push',
        incorrect_answers: ['git upload', 'git checkout', 'git build'],
        summary: 'git push would upload your code to your remote git url.\n'
    },
    {
        question: "What command would you use to temporarily stash changes you've made to your working directory?",
        correct_answer: 'git stash',
        incorrect_answers: ['git shelf', 'git ignore', 'git clone'],
        summary: "git stash temporarily shelves (or stashes) changes you've made to your working copy so you can work on something else, and then come back and re-apply them later on.\n"
    },
    {
        question: 'What command would you use to undo local changes to the state of a git repo?',
        correct_answer: 'git reset',
        incorrect_answers: ['git undo', 'git merge', 'git revert'],
        summary: 'git reset is used to undo local changes to the state of a Git repo.\n'
    },
    {
        question: 'What command would you use to view all available git commands?',
        correct_answer: 'git help --all',
        incorrect_answers: ['git show', 'git status', 'git commands'],
        summary: 'To view all git commands, use git help --all.\n'
    },
    {
        question: 'What command is used to see all options for a the "git commit" command?',
        correct_answer: 'git commit -help',
        incorrect_answers: ['git commit -show', 'git commit', 'git commit -m'],
        summary: 'use "git command -help" to see all options for a specific command.\n'
    }

    
    
]