const vscode = require("vscode");

const MCP_URL = "https://icon.ggeric.top/api/mcp?channel=plugin";
const VERSION = "1.3.2";

exports.activate = function activate(context) {
  if (!vscode.lm?.registerMcpServerDefinitionProvider || !vscode.McpHttpServerDefinition) {
    throw new Error("Yogurt Icon requires VS Code 1.102 or newer with MCP support.");
  }
  context.subscriptions.push(vscode.lm.registerMcpServerDefinitionProvider("yogurt-icon", {
    provideMcpServerDefinitions() {
      return [new vscode.McpHttpServerDefinition("Yogurt Icon", vscode.Uri.parse(MCP_URL), {}, VERSION)];
    },
  }));
  context.subscriptions.push(vscode.commands.registerCommand("yogurtIcon.openLibrary", () =>
    vscode.env.openExternal(vscode.Uri.parse("https://icon.ggeric.top"))));
};
