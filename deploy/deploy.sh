#!/bin/sh

# Add the post-receive hook for git
cp post-receive ../.git/hooks

# Download node packages for this project (package.json)
cd ..
sudo npm bundle