# Documentation

OpenAI plugins connect ChatGPT to third-party applications. These plugins enable ChatGPT to interact with APIs defined by developers, enhancing ChatGPT's capabilities and allowing it to perform a wide range of actions.

## Plugin End-to-End Flow

- Create a manifest file and host it
  - The file includes metadata about your plugin (name, logo, etc.), details about authentication required (type of auth, OAuth URLs, etc.), and an OpenAPI spec for the endpoints you want to expose.
  - The model will see the OpenAPI description fields, which can be used to provide a natural language description for the different fields.
- Register your plugin in the ChatGPT UI
  - Select the plugin model from the top drop down, then select “Plugins”, “Plugin Store”, and finally “Develop your own plugin”.
  - If authentication is required, provide an OAuth 2 client_id and client_secret or an API key.
