module.exports.swLoginRoute = {
    "/login": {
        "get": {
            "summary": "update the user info",
            "tags": [
                "login"
            ],
            "parameters": [
                {
                    "name": "key",
                    "in": "header",
                    "schema": {
                        "type": "string"
                    },
                    "required": true
                }
            ],
            "requestBody": {
                "content": {
                    "application/json": {
                        "schema": {}
                    }
                }
            },
            "responses": {
                "200": {
                    "description": "Done"
                },
                "default": {
                    "description": "Error message"
                }
            }
        },
        "patch": {
            "summary": "update the user info",
            "tags": [
                "login"
            ],
            "parameters": [
                {
                    "name": "key",
                    "in": "header",
                    "schema": {
                        "type": "string"
                    },
                    "required": true
                }
            ],
            "requestBody": {
                "content": {
                    "application/json": {
                        "schema": {}
                    }
                }
            },
            "responses": {
                "200": {
                    "description": "Done"
                },
                "default": {
                    "description": "Error message"
                }
            }
        }

    }
}
