'use strict';

import * as vscode from 'vscode';
import { getConfig, setConfig } from './helpers';

const VERSION = '0.5.0';

function updateConfig() {

    // FYI
    // let config = getConfig();
    
    // Controls auto save of dirty files. Accepted values:
    // 'off', 'afterDelay', 'onFocusChange' (editor loses focus),
    // 'onWindowChange' (window loses focus).
    setConfig('files.autoSave', 'onFocusChange', true);

    // Finally sets own config to avoid repeated updates
    setConfig('angular-schule.configUpdated', VERSION, true);

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
        vscode.window.showInformationMessage('Angular.Schule v' + VERSION);
    });

    let disposable2 = vscode.commands.registerCommand('extension.updateConfig', () => {
        updateConfig();        
    });    

    context.subscriptions.push(disposable);
    context.subscriptions.push(disposable2);

    // naughty update of the vscode configuration on first run
    // requires the evil `"activationEvents": ["*"]`
    let configUpdated = getConfig('angular-schule').get('configUpdated');
    if(configUpdated !== VERSION) {
        updateConfig();
    }
}

// this method is called when your extension is deactivated
export function deactivate() {
}
