# Yogurt Icon for Claude Code

Install from the public marketplace repository:

```sh
claude plugin marketplace add prosody007/yogurt-icon-plugins
claude plugin install yogurt-icon@yogurt-icon-native
```

Restart Claude Code, or run `/reload-plugins`, then inspect `/mcp`. Ask: "Find an outline settings icon in Yogurt Icon and return its 24px SVG." This is publisher-hosted distribution; it does not imply an Anthropic directory listing.

Search the Yogurt Icon catalog by English or Chinese keyword, category, and outline or solid style. Retrieve an existing result as SVG or React JSX at a chosen size, with optional stroke width. The plugin uses three read-only tools: `list_categories`, `search_icons`, and `get_icon`.

Connects to `https://icon.ggeric.top/api/mcp?channel=plugin`. No Yogurt account, API key, or OAuth is required. The host controls normal installation trust and tool-use prompts. Website favorites require a separate website sign-in and are not exposed by the plugin. The tools do not import arbitrary URLs, create new artwork, edit the catalog, or access user accounts.

Search queries and retrieval requests are sent to Yogurt Icon. Search text is not stored as history; successful retrievals are counted anonymously by icon, style, format and channel as explained in the privacy policy. The plugin itself does not store user data. It does not send requests to a second service or run a local MCP server.

Keep copyright and license notices in returned icons. Client adapter code and instructions are MIT licensed; see LICENSE and RIGHTS.md for scope. Icon artwork remains covered by the service terms and its included notices.

Publisher: GUOTONG SUN. [Website](https://icon.ggeric.top) · [Support](https://icon.ggeric.top/support/) · [Privacy](https://icon.ggeric.top/privacy/) · [Terms](https://icon.ggeric.top/terms/). Contact: prosody007@gmail.com.
