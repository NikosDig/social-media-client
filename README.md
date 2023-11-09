# social-media-client

forked social media client for workflow assignment
[![Automated Unit Testing](https://github.com/NikosDig/social-media-client/actions/workflows/unit-test.yml/badge.svg)](https://github.com/NikosDig/social-media-client/actions/workflows/unit-test.yml)

[![Automated E2E Testing](https://github.com/NikosDig/social-media-client/actions/workflows/e2e-test.yml/badge.svg)](https://github.com/NikosDig/social-media-client/actions/workflows/e2e-test.yml)

# Social Media App

## Overview

The Social Media App allows users to register profiles, log in, read posts fetched from an API, create new posts, and update their own posts.

## Project Requirements

Web developers working on this project have followed the following requirements:

- Project is configured to run Prettier on commit
- Project is configured to run ESLint on commit
- The default branch is protected
- Code is versioned, and branching conventions are followed
- Project is configured to build and deploy to pages on merge to the default branch
- Project README file is updated to include new configuration information and workflow status badges
- Deployed project has been checked for 404 errors
- Any bugs found have been communicated in the Issues tab
- The login function fetches and stores a token in browser storage
- The logout function clears the token from browser storage
- The following features are automatically tested with End-to-End tests:
  - The user can log in and access their profile
  - The user cannot submit the login form with invalid credentials and is shown a message
  - The user can log out with the logout button

## Getting Started

To install the project, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/MariuszRozycki/social-media-client.git
   ```

## Go to the cloned project directory:

cd social-media-client

## List all branches, remote, and local:

git branch -a

## Install all packages from package.json:

npm install

## Start the project:

npm start

## Licencse

This project is licensed under the MIT License. See the LICENSE file for details.
