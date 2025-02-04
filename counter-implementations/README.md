# Counter App Assignment

You will implement your counter app designs here.

## Prerequisites

Before you begin developing, ensure you have the following installed:

- [Visual Studio Code](https://code.visualstudio.com/)
- [Node.js](https://nodejs.org/en)
- [Expo Go](https://expo.dev/go) (on your phone)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) (VSCode Extension)
- [Tailwind CSS Intellisense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) (VSCode Extension)
- nvm
  - [Windows](https://github.com/coreybutler/nvm-windows)
  - [MacOS](https://github.com/nvm-sh/nvm)

Optional VSCode Extensions:

- [vscode-icons](https://marketplace.visualstudio.com/items?itemName=vscode-icons-team.vscode-icons)
- [vscode-pets](https://marketplace.visualstudio.com/items?itemName=tonybaloney.vscode-pets)

## Setup

1. Pull the latest changes from this repository and navigate to the `counter-implementations` directory:

   ```bash
   git pull
   cd counter-implementations
   ```

2. Install and use Node.js version 22.9.0 with nvm:

   ```bash
   nvm install
   ```

   If you ever change Node.js versions for a different project, be sure to run `nvm use` from the project root to switch back to this project's Node.js version (22.9.0).

3. Install the necessary node modules:

   ```bash
   npm install
   ```

4. Start the application:

   ```
   npm run start
   ```

5. Scan the QR code in the terminal with your phone.

## Instructions

Individually, you will create a working implementation of the counter app you designed last week.
To accomplish this, do the following:

1. Create a new branch from the main branch, matching the given format:
   ```bash
   git checkout main
   git checkout -b <firstName-lastName-counter-impl>
   ```
2. Push your new branch:
   ```bash
   git push --set-upstream origin <firstName-lastName-counter-impl>
   ```
3. Build your counter app (help resources are below).
4. When your counter app is ready for review, open a Pull Request.

## Resources

- Custom buttons: https://reactnative.dev/docs/pressable
- Handling state: https://reactnative.dev/docs/intro-react#state
- Styling: https://tailwindcss.com/
