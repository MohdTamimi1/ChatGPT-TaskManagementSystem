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
<summary>Plugin Manifest</summary>

### ai-plugin.json

Every plugin requires a ai-plugin.json file, which needs to be hosted on the API’s domain. For example, a company called example.com would make the plugin JSON file accessible via an https://example.com domain since that is where their API is hosted. When the user installs the plugin via the ChatGPT UI, on the backend ChatGPT looks for a file located at /.well-known/ai-plugin.json. The /.well-known folder is required and must exist on your domain in order for ChatGPT to connect with your plugin. If there is no file found, the plugin cannot be installed. For local development, you can use HTTP but if you are pointing to a remote server, HTTPS is required.

</details>

<details>
<summary>OpenAPI definition</summary>

### openapi.yaml

This file is used to build the OpenAPI specification to document the API. The model in ChatGPT does not know anything about the API other than what is defined in the OpenAPI specification and manifest file. This means that if you have an extensive API, you need not expose all functionality to the model and can choose specific endpoints. For example, if you have a social media API, you might want to have the model access content from the site through a GET request but prevent the model from being able to comment on users posts in order to reduce the chance of spam. The OpenAPI specification is the wrapper that sits on top of the API.

We start by defining the specification version, the title, description, and version number. When a query is run in ChatGPT, it will look at the description that is defined in the info section to determine if the plugin is relevant for the user query.

- Keep in mind the following limits in your OpenAPI specification, which are subject to change:
  - 200 characters max for each API endpoint description/summary field in API specification
  - 200 characters max for each API param description field in API specification

Since we are running our server locally, we want to set the server to point to your localhost URL.

</details>

<details>
<summary>API</summary>

### main.py

Note: Setting CORS to allow chat.openapi.com is only required when running a localhost plugin

The file is used to define the API endpoints to create, update, delete and fetch todo list items for a specefic user.

the framework used to build the API is quart which is a Fast Python web microframework. Using Quart you can:

- write JSON APIs e.g. a RESTful API.
- render and serve HTML e.g. a blog.
- serve WebSockets e.g. a simple chat.
- stream responses e.g. serve video.

all of the above in a single app, or do pretty much anything over the HTTP or WebSocket protocols.

</details>
