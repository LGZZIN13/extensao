class NitroBlock {
    getInfo() {
        return {
            "id": "NitroBlock",
            "name": "NitroBlock",
            "blocks": [{
                "opcode": "substringy",
                "blockType": "reporter",
                "text": "letras [num1] a [num2] de [string]",
                "arguments": {
                    "num1": {
                        "type": "number",
                        "defaultValue": 2
                    },
                    "num2": {
                        "type": "number",
                        "defaultValue": 5
                    },
                    "string": {
                        "type": "string",
                        "defaultValue": "hello world"
                    }
                }
            }],
            "menus": {}
        };
    }

    substringy({ num1, num2, string }) {
        return string.substring(num1 - 1, num2);
    }
}

Scratch.extensions.register(new NitroBlock());
