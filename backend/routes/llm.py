from flask import Blueprint, request, jsonify
import requests
import base64
import os
from src.ollama import client
import ollama

llm_bp = Blueprint("llm", __name__)

@llm_bp.route('', methods=['POST'])
def image_to_llm():
    user_message = request.json.get('message', None)
    file = request.json.get('file', None)

    if not user_message:
        return jsonify({"error": "missing promt"}), 400
 
    if file:
        # Remove the header of the data URL (data:image/png;base64,)
        header, encoded = file.split(',', 1)
        image_data = base64.b64decode(encoded)

        # Save the image
        image_path = os.path.join('uploads', 'image.png')
        with open(image_path, 'wb') as f:
            f.write(image_data)

    return jsonify({"response": "hi"})

    try:
        # response = client.chat(model='llama3.2-vision', messages=[
        #     {
        #         'role': 'user',
        #         'content': user_message,
        #         'images': ['./image.jpg']
        #     },
        # ])
        response = ollama.chat(
            model='llama3.2-vision',
            messages=[{
                'role': 'user',
                'content': user_message,
                'images': ['.uploads/image.jpg']
            }]
        )

        if response:
            llm_response = response['message']['content']
            # print(response.content)
            return jsonify({"response": llm_response})

    except Exception as e:
        return jsonify({"error": str(e)}), 500
