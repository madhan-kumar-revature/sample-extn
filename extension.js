const vscode = require('vscode');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
    console.log('Congratulations, your extension "sample-test-extension" is now active!');

    let disposable = vscode.commands.registerCommand('sample-test-extension.helloWorld', function () {
        vscode.window.showInformationMessage('Hello World from sample-test-extension!');
    });

    context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
}
