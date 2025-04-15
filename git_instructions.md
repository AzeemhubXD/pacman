# How to Push Your Pacman Game to GitHub

Follow these steps to create a GitHub repository and push your Pacman game to it:

## 1. Complete the Git Setup on Your Local Machine

```bash
# Configure your Git user information
git config --global user.email "your-email@example.com"
git config --global user.name "Your Name"

# Verify git configuration
git config --list
```

## 2. Create a GitHub Repository

1. Go to [GitHub](https://github.com/) and sign in to your account
2. Click on the "+" icon in the top-right corner and select "New repository"
3. Name your repository (e.g., "pacman-js")
4. Add a description (optional)
5. Choose public or private repository
6. DO NOT initialize the repository with a README, .gitignore, or license (we already have these)
7. Click "Create repository"

## 3. Link Your Local Repository to GitHub

GitHub will show you instructions after creating the repository. Follow the commands for "push an existing repository from the command line":

```bash
# Add the GitHub repository as a remote
git remote add origin https://github.com/YOUR-USERNAME/pacman-js.git

# Commit your changes if you haven't already
git commit -m "Initial commit with Pacman game implementation"

# Push your code to GitHub
git push -u origin master
```

If your default branch is named "main" instead of "master", use:
```bash
git push -u origin main
```

## 4. Verify Your Repository

1. Refresh your GitHub repository page
2. You should see all your files listed in the repository
3. The README.md file will be displayed on the main page

## 5. Future Changes

For future changes to your code, use the following workflow:

```bash
# Make changes to your files

# Add the changes to the staging area
git add .

# Commit the changes
git commit -m "Description of your changes"

# Push the changes to GitHub
git push
```

## Troubleshooting

If you encounter issues:

1. Check your Git configuration:
   ```bash
   git config --list
   ```

2. Ensure you have the correct repository URL:
   ```bash
   git remote -v
   ```

3. If you need to change the remote URL:
   ```bash
   git remote set-url origin https://github.com/YOUR-USERNAME/pacman-js.git
   ```

4. If you have authentication issues, consider using GitHub CLI or setting up SSH keys for easier authentication. 