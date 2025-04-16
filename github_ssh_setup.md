# Setting Up SSH for GitHub Authentication

Using SSH keys provides a secure way to connect to GitHub without using passwords. This guide will walk you through setting up SSH authentication for your Pacman JS repository.

## 1. Check for Existing SSH Keys

First, check if you already have SSH keys on your computer:

```bash
ls -la ~/.ssh
```

Look for files named `id_rsa` (private key) and `id_rsa.pub` (public key). If you don't see these files or the `.ssh` directory doesn't exist, you'll need to generate new SSH keys.

## 2. Generate a New SSH Key

To generate a new SSH key:

```bash
ssh-keygen -t ed25519 -C "your_email@example.com"
```

Or, if you're using an older system that doesn't support the Ed25519 algorithm:

```bash
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```

When prompted for a location, press Enter to accept the default file location. Then enter a secure passphrase for additional security (highly recommended).

## 3. Add the SSH Key to the SSH Agent

Start the SSH agent in the background:

```bash
# For Windows using PowerShell
Start-Service ssh-agent

# For macOS/Linux
eval "$(ssh-agent -s)"
```

Add your SSH private key to the SSH agent:

```bash
ssh-add ~/.ssh/id_ed25519  # or ssh-add ~/.ssh/id_rsa if you used RSA
```

## 4. Add the SSH Key to Your GitHub Account

Copy your SSH public key to the clipboard:

```bash
# For Windows (PowerShell)
Get-Content ~/.ssh/id_ed25519.pub | Set-Clipboard

# For Windows (Command Prompt)
type ~/.ssh/id_ed25519.pub | clip

# For macOS
pbcopy < ~/.ssh/id_ed25519.pub

# For Linux
xclip -selection clipboard < ~/.ssh/id_ed25519.pub
# or
cat ~/.ssh/id_ed25519.pub
# Then manually copy the output
```

Add the key to your GitHub account:

1. Sign in to GitHub
2. Click your profile photo in the top-right corner
3. Click **Settings**
4. In the sidebar, click **SSH and GPG keys**
5. Click **New SSH key**
6. In the "Title" field, add a descriptive label for the new key (e.g., "Personal Laptop")
7. Paste your public key into the "Key" field
8. Click **Add SSH key**

## 5. Update Your Remote Repository URL

Change your repository's remote URL from HTTPS to SSH:

```bash
# Check current remote
git remote -v

# Change the remote URL to SSH
git remote set-url origin git@github.com:AzeemhubXD/pacman-js.git
```

## 6. Test Your SSH Connection

Verify that your SSH connection is working:

```bash
ssh -T git@github.com
```

You may see a warning about the authenticity of the host. Type "yes" to continue. If you see a message like "Hi AzeemhubXD! You've successfully authenticated," your SSH connection is working.

## 7. Push Using SSH

Now you can push to your repository using SSH encryption:

```bash
git add .
git commit -m "Your commit message"
git push
```

You won't need to enter your GitHub username and password anymore.

## Important Notes

- **Keep your private key secure**: Never share your private key (id_ed25519 or id_rsa) with anyone.
- **Use a strong passphrase**: This adds an extra layer of security.
- **SSH keys vs. repository encryption**: Note that SSH only encrypts the connection to GitHub, not the repository contents themselves. Your code is still stored on GitHub's servers according to their privacy policies.

For more information, see [GitHub's documentation on SSH](https://docs.github.com/en/authentication/connecting-to-github-with-ssh). 