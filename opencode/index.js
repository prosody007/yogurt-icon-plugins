const PLUGIN_MCP_URL = "https://icon.ggeric.top/api/mcp?channel=plugin";

export const YogurtIconPlugin = async () => ({
  async config(config) {
    config.mcp ??= {};
    const existing = config.mcp["yogurt-icon"];
    // User configuration wins, including disabled servers and other endpoints.
    if (existing) return;
    config.mcp["yogurt-icon"] = { type: "remote", url: PLUGIN_MCP_URL, enabled: true };
  },
});
