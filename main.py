import json
import time

import quart
import quart_cors
from quart import request

app = quart_cors.cors(quart.Quart(__name__),
                      allow_origin="https://chat.openai.com")

# To Keep track of todo's.
_TODOS = {}

# Add Todo


@app.post("/todos/<string:username>")
async def add_todo(username):
    request = await quart.request.get_json(force=True)
    if username not in _TODOS:
        _TODOS[username] = []
    todo_item = {
        "task": request["todo"],
        "start_time": None,
        "end_time": None,
        "time_spent": None,
        "priority": request.get("priority", "low"),  # Default priority is low
        # Default for subtasks is an empty list
        "subtasks": request.get("subtasks", [])
    }
    _TODOS[username].append(todo_item)
    return quart.Response(response='OK', status=200)

# Update Todo


@app.put("/todos/<string:username>/<int:todo_idx>")
async def update_todo(username, todo_idx):
    request = await quart.request.get_json(force=True)
    new_priority = request.get("priority", "low")
    if new_priority not in ["low", "medium", "high"]:
        return quart.Response(response='Invalid priority value', status=400)
    if username not in _TODOS or not (0 <= todo_idx < len(_TODOS[username])):
        return quart.Response(response='Todo not found', status=404)
    _TODOS[username][todo_idx]["priority"] = new_priority
    return quart.Response(response='OK', status=200)

# Start Timer


@app.post("/todos/start_timer/<string:username>/<int:todo_idx>")
async def start_timer(username, todo_idx):
    if 0 <= todo_idx < len(_TODOS[username]):
        _TODOS[username][todo_idx]["start_time"] = time.time()
    return quart.Response(response='OK', status=200)

# Stop Timer


@app.post("/todos/stop_timer/<string:username>/<int:todo_idx>")
async def stop_timer(username, todo_idx):
    if 0 <= todo_idx < len(_TODOS[username]):
        start_time = _TODOS[username][todo_idx]["start_time"]
        if start_time is not None:
            end_time = time.time()
            _TODOS[username][todo_idx]["end_time"] = end_time
            _TODOS[username][todo_idx]["time_spent"] = end_time - start_time
            _TODOS[username][todo_idx]["start_time"] = None
    return quart.Response(response='OK', status=200)

# Get Todos


@app.get("/todos/<string:username>")
async def get_todos(username):
    return quart.Response(response=json.dumps(_TODOS.get(username, [])), status=200)

# Delete Todo


@app.delete("/todos/<string:username>")
async def delete_todo(username):
    request = await quart.request.get_json(force=True)
    todo_idx = request["todo_idx"]
    if 0 <= todo_idx < len(_TODOS[username]):
        _TODOS[username].pop(todo_idx)
    return quart.Response(response='OK', status=200)

# Logo


@app.get("/logo.png")
async def plugin_logo():
    filename = 'logo.png'
    return await quart.send_file(filename, mimetype='image/png')

# Plugin Manifest


@app.get("/.well-known/ai-plugin.json")
async def plugin_manifest():
    host = request.headers['Host']
    with open("./.well-known/ai-plugin.json") as f:
        text = f.read()
        return quart.Response(text, mimetype="text/json")

# OpenAPI Spec


@app.get("/openapi.yaml")
async def openapi_spec():
    host = request.headers['Host']
    with open("openapi.yaml") as f:
        text = f.read()
        return quart.Response(text, mimetype="text/yaml")


def main():
    app.run(debug=True, host="0.0.0.0", port=5003)


if __name__ == "__main__":
    main()
