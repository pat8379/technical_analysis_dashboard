from flask import Blueprint, request, jsonify
import requests
from src.ollama import client
import ollama

llm_bp = Blueprint("llm", __name__)

@llm_bp.route('', methods=['POST'])
def image_to_llm():
    user_message = request.json.get('message')

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
                'images': ['./image.jpg']
            }]
        )

        if response:
            llm_response = response['message']['content']
            # print(response.content)
            return jsonify({"response": llm_response})

    except Exception as e:
        return jsonify({"error": str(e)}), 500
