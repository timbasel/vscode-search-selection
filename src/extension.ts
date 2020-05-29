import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    console.log('Extension "Search Selection" activated.');

    const disposable = vscode.commands.registerCommand('extension.searchSelection', () => {
        vscode.commands.executeCommand('workbench.action.findInFiles', getSelectedText())
    })

    context.subscriptions.push(disposable);
}

function getSelectedText(): string {
    const selection = vscode.window.activeTextEditor?.selection;
    if (!selection) {
        return ''
    }
    const range = new vscode.Range(selection.start, selection.end);
    const selectedText = vscode.window.activeTextEditor?.document.getText(range);
    if (!selectedText) {
        return ''
    }
    return selectedText
}
