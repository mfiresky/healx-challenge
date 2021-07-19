# Healx challenge

## Requirment
- NodeJS (latest lts/*, see .nvm and [nvm](https://github.com/nvm-sh/nvm))

## How to run
1. First run  `npm i`
2. Then `npm run dev` to run the project
3. Solution will be available at [http://localhost:3000](http://localhost:3000)

## Project description

### Used dependencies
- **Next.js** - Instead of plain CRA app I used Next.js framework. Mostly because of a backend server and almost "no configuration" to make it up and running.
- **Graphql** - Although it might be an overkill for such a small project. I've decided to use it to remember how it's done with graphql and appolo platform.
- **Tailwind CSS** - I decided to use Tailwind CSS, due to the amount of utilities you get out of the box to style your classes.

### What is finished
- Searching scientific publications (basic functionality)
- Pagination using the "retmax" and "restart" options in the esearch endpoint (plese see Todo section for additional explanation)
- Encode the search term in the url, so reloading the application (or sharing the link) will show the same results
  - add `?term=diabetes` to the url
- Include some tests to any of your components (plese see Todo section for additional explanation)

### Todo/Nice to have
Unfortunately, due to time constraints, this is only a basic solution. In my opinion, it's about 80% complete. To push it to 100% I should add:

- **Add unit tests** - I'm missing proper configuration and good code coverage.
- **Fix pagination** - There's a small bug in pagination which prevent going back. This need to be fixed!
- **Add debounce to search input field** - It would be nice to have debounce option for input field to not overflow with request.
- **Encode the search term in the url** - For now you can only pass search term. This should be extended to include retmax and retstart.

## Contributing

### Commit messages

Before the message is committed, the [@commitlint/cli](https://github.com/conventional-changelog/commitlint) is run with git hooks ([husky](https://github.com/typicode/husky)) to check that the format of the message corresponds to the correct format of [@commitlint/config-conventional](https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-conventional). Which is then used to auto-generate `CHANGELOG.md` file with `npm run release` command.

#### Allowed types

You can find allowed types in `.versionrc.js` file or in the table below.

| Type     | Section             | Description                                                                                            |
| -------- | ------------------- | ------------------------------------------------------------------------------------------------------ |
| feat     | Features            | A new feature                                                                                          |
| fix      | Bug Fixes           | A bug fix                                                                                              |
| docs     | Documentation       | Documentation only changes                                                                             |
| perf     | Performance Updates | A code change that improves performance                                                                |
| chore    | Internals           | Other changes that don't modify src or test files                                                      |
| test     | Internals           | Adding missing tests or correcting existing tests                                                      |
| ci       | Internals           | Changes to our CI configuration files and scripts                                                      |
| refactor | Internals           | A code change that neither fixes a bug nor adds a feature                                              |
| style    | Internals           | Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc) |
| revert   | Internals           | Reverts a previous commit                                                                              |

#### Example

Commit convention for the message. This might include `type`, `scope` or `breaking changes`.

```
type(scope?): subject
body?
footer?
```

Better example bellow

```
fix(dependencies): some message

BREAKING CHANGE: message with multiple lines
something to consider
```
