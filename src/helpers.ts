import * as vscode from 'vscode';

// as seen in https://github.com/PKief/vscode-material-icon-theme/
export interface AdvancedWorkspaceConfiguration {
    get<T>(section: string, defaultValue?: T): T;
    has(section: string): boolean;
    [key: string]: any;
    inspect<T>(section: string): { defaultValue: T, globalValue: T, key: string, workspaceValue: T } | undefined;
    update(section: string, value: any, global?: boolean): Thenable<void>;
}

// Get configuration of vscode
export const getConfig = (section?: string) => {
    return vscode.workspace.getConfiguration(section) as AdvancedWorkspaceConfiguration;
};

// Update configuration of vscode
export const setConfig = (section: string, value: any, global: boolean = false) => {
    return getConfig().update(section, value, global);
};