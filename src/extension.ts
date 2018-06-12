'use strict';

import * as vscode from 'vscode';
import { getConfig, setConfig } from './helpers';

function updateConfig() {

    // FYI
    // let config = getConfig();

    // Specifies the icon theme used in the workbench or 'null' to not show any file icons."
    setConfig('workbench.iconTheme', 'vscode-icons', true);

    // DISABLED - flickering is very annoying!
    // If set to true, the extension will restart automatically on project detection.
    // setConfig('vsicons.projectDetection.autoReload', true, true);

    // Controls auto save of dirty files. Accepted values:  'off', 'afterDelay', 'onFocusChange' (editor loses focus), 'onWindowChange' (window loses focus). If set to 'afterDelay', you can configure the delay in 'files.autoSaveDelay'.
    setConfig('files.autoSave', 'onFocusChange', true);

    // Specifies the folder path containing the tsserver and lib*.d.ts files to use.
    // always prefers local tsc installation
    setConfig('typescript.tsdk', 'node_modules/typescript/lib', true);

    // Finally sets own config to avoid repeated updates
    setConfig('angular-schule.configUpdated', true, true);
    
    // New: see https://code.visualstudio.com/updates/v1_23#_run-code-actions-on-save
    setConfig('editor.codeActionsOnSave',  { "source.organizeImports": true }, true);    


    vscode.window.showInformationMessage('Angular.Schule has successfully updated your settings.');
}


// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('extension "angular-schule-extension-pack" is active!');

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    let disposable = vscode.commands.registerCommand('extension.getVersion', () => {
        vscode.window.showInformationMessage('Angular.Schule v0.2.0');
    });

    let disposable2 = vscode.commands.registerCommand('extension.updateConfig', () => {
        updateConfig();        
    });    

    context.subscriptions.push(disposable);
    context.subscriptions.push(disposable2);

    // naughty update of the vscode configuration on first run
    // requires the evil `"activationEvents": ["*"]`
    let configUpdated = getConfig('angular-schule').get('configUpdated');
    if(!configUpdated) {
        updateConfig();
    }
}

// this method is called when your extension is deactivated
export function deactivate() {
}
