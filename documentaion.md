# Documentation

OpenAI plugins connect ChatGPT to third-party applications. These plugins enable ChatGPT to interact with APIs defined by developers, enhancing ChatGPT's capabilities and allowing it to perform a wide range of actions.

## Plugin End-to-End Flow

- Create a manifest file and host it
  - The file includes metadata about the plugin (name, logo, etc.), details about authentication required (type of auth, OAuth URLs, etc.), and an OpenAPI spec for the endpoints you want to expose.
  - The model will see the OpenAPI description fields, which can be used to provide a natural language description for the different fields.
- Register the plugin in the ChatGPT UI
  - Select the plugin model from the top drop down, then select “Plugins”, “Plugin Store”, and finally “Develop your own plugin”.
  - If authentication is required, provide an OAuth 2 client_id and client_secret or an API key.
- Users activate the plugin
  - Users must manually activate the plugin in the ChatGPT UI. (ChatGPT will not use the plugin by default.)
  - If OAuth is required, users will be redirected via OAuth to the plugin to sign in.

## File Structure and Explanation

<details>
<summary>**Plugin Manifest**</summary>

### ai-plugin.json

Every plugin requires a ai-plugin.json file, which needs to be hosted on the API’s domain. For example, a company called example.com would make the plugin JSON file accessible via an https://example.com domain since that is where their API is hosted. When you install the plugin via the ChatGPT UI, on the backend we look for a file located at /.well-known/ai-plugin.json. The /.well-known folder is required and must exist on your domain in order for ChatGPT to connect with your plugin. If there is no file found, the plugin cannot be installed. For local development, you can use HTTP but if you are pointing to a remote server, HTTPS is required.

</details>
