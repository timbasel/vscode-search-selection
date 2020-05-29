import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    const disposable = vscode.commands.registerCommand('extension.searchSelection', () => {
        vscode.commands.executeCommand('workbench.action.findInFiles')
    })

    context.subscriptions.push(disposable);
}
