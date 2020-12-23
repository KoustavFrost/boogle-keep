const vscode = require('vscode');
const provider;

function activate(context) {

	let boogleKeepView = vscode.window.createTreeView("boogle-keep-view");

	context.subscriptions.push(boogleKeepView);

}
exports.activate = activate;

function deactivate() {}

module.exports = {
	activate,
	deactivate
}
