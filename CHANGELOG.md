# Change Log

Useful extensions and settings for Angular development with [Visual Studio Code](https://code.visualstudio.com/).  
Please install this pack before our workshop.

## v0.4.8
- extension added:
  * [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- extensions removed:
  * [TSLint](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-tslint-plugin)
  * [Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome)
  * [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)
  * [CSS Formatter](https://marketplace.visualstudio.com/items?itemName=aeschli.vscode-css-formatter)
  * [AngularDoc for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=AngularDoc.angulardoc-vscode)


## v0.4.7
- extension removed:
  * [Bracket Pair Colorizer](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer)

## v0.4.6
- extension removed:
  * [TSLint (deprecated)](https://marketplace.visualstudio.com/items?itemName=eg2.tslint), fixes issue [#6](https://github.com/angular-schule/vscode-angular-schule-extension-pack/issues/6)
- extension added:
  * [TSLint](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-tslint-plugin)
- ❗ Important: If you still have the deprecated `vscode-tslint` extension in VS Code installed, please disable/remove it to avoid linting files twice!

## v0.4.5
- extensions removed:
  * [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme), see [#3](https://github.com/angular-schule/vscode-angular-schule-extension-pack/issues/3)

## v0.4.4
- extensions added:
  * [AngularDoc for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=AngularDoc.angulardoc-vscode)
  * [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)
  * [CSS Formatter](https://marketplace.visualstudio.com/items?itemName=aeschli.vscode-css-formatter)
- extensions removed:
  * [vscode-icons](https://marketplace.visualstudio.com/items?itemName=robertohuertasm.vscode-icons), fixes issue #1 because "Project Auto-Detection" drives me nuts!
- tweaks settings:
  * adds entry `vsicons.projectDetection.disableDetect:true` to make `vscode-icons` silent, you have to uninstall `vscode-icons` manually if you upgraded from a previous version


## v0.3.1
- extensions removed:
  * [Bootstrap 4 snippets](https://marketplace.visualstudio.com/items?itemName=thekalinga.bootstrap4-vscode), fixes issue [#1](https://github.com/angular-schule/vscode-angular-schule-extension-pack/issues/1)
  * [Auto Close Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag), VSCode has own support for [closing HTML tags](https://code.visualstudio.com/updates/v1_16#_html-close-tags)

## v0.2.1
- tweaks settings:
  * deletes old entry `typescript.tsdk` in user settings (see https://github.com/Microsoft/vscode/issues/48640) (for previous installations)
  * deletes old entry `vsicons.projectDetection.autoReload` in user settings (for previous installations)
  * deletes old entry `editor.codeActionsOnSave` in user settings (for previous installations)

## v0.2.0
- extensions added:
  * [Bracket Pair Colorizer](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer)
  * [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)
  * [Auto Close Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag)
  * [Bootstrap 4 snippets](https://marketplace.visualstudio.com/items?itemName=thekalinga.bootstrap4-vscode)
- extensions removed:
  * [Auto Import](https://marketplace.visualstudio.com/items?itemName=steoates.autoimport) - VSCode has native import support now

## v0.1.1 - v0.1.2
- New colorful logo, no other changes

## v0.1.0
- Adds opinionated user settings for a quick workshop start (activated on first run)
- The update command is also available from the command palette by pressing (`Ctrl+Shift+P` or `Cmd+Shift+P` on Mac) and typing `Angular.Schule`.

## v0.0.1 - v0.0.3
- Initial releases with minor fixes

