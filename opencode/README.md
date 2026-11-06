# Yogurt Icon for OpenCode

This plugin registers the public Yogurt Icon MCP server from OpenCode's configuration hook. It preserves an existing `yogurt-icon` MCP definition, including a disabled definition or a custom endpoint.

## Install from this repository

Copy `index.js` to `~/.config/opencode/plugins/yogurt-icon.js`, or to your project's `.opencode/plugins/yogurt-icon.js`, then restart OpenCode. This local method is available independently of npm publication. Do not install a second copy if the existing local plugin already loads.

## npm distribution

The intended npm package name is `yogurt-icon-opencode`. The repository alone does not mean that the npm package has been published; check the release notes before using the following configuration:

```json
{ "plugin": ["yogurt-icon-opencode@1.3.2"] }
```

Search the Yogurt Icon catalog by English or Chinese keyword, category, and outline or solid style. Retrieve an existing result as SVG or React JSX at a chosen size, with optional stroke width. The plugin uses three read-only tools: `list_categories`, `search_icons`, and `get_icon`.

Connects to `https://icon.ggeric.top/api/mcp?channel=plugin`. No Yogurt account, API key, or OAuth is required. The host controls normal installation trust and tool-use prompts. Website favorites require a separate website sign-in and are not exposed by the plugin. The tools do not import arbitrary URLs, create new artwork, edit the catalog, or access user accounts.

Search queries and retrieval requests are sent to Yogurt Icon. Search text is not stored as history; successful retrievals are counted anonymously by icon, style, format and channel as explained in the privacy policy. The plugin itself does not store user data. It does not send requests to a second service or run a local MCP server.

Keep copyright and license notices in returned icons. Client adapter code and instructions are MIT licensed; see LICENSE and RIGHTS.md for scope. Icon artwork remains covered by the service terms and its included notices.

Publisher: GUOTONG SUN. [Website](https://icon.ggeric.top) · [Support](https://icon.ggeric.top/support/) · [Privacy](https://icon.ggeric.top/privacy/) · [Terms](https://icon.ggeric.top/terms/). Contact: prosody007@gmail.com.
