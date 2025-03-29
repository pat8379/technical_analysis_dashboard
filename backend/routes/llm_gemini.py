from flask import Blueprint, request, jsonify
import base64
import os
from google import genai
from google.genai import types
import PIL.Image
from dotenv import load_dotenv
from src.openai import chat_with_gpt

load_dotenv()

llm_gemini_bp = Blueprint("llm_gemini", __name__)
client = genai.Client(api_key=os.environ['API_KEY'])

@llm_gemini_bp.route('', methods=['POST'])
def image_to_llm():
    user_message = request.json.get('message', None)
    chat_history = request.json.get('chat_history', None)
    file = request.json.get('file', None)
    mode = request.json.get('mode', 'chat')
    llm = request.json.get('llm', 'gemini')

    chat_history_client = []
    file_data = None

    if not user_message:
        return jsonify({"error": "missing promt"}), 400
 
    if file:
        # Remove the header of the data URL (data:image/png;base64,)
        header, encoded = file.split(',', 1)
        # file_data = encoded
        image_data = base64.b64decode(encoded)

        # Save the image
        image_path = os.path.join('uploads', 'image.png')

        with open(image_path, 'wb') as f:
            f.write(image_data)

        # with open(image_path, 'rb') as image_file:
        #     # Step 2: Encode the image to Base64
        #     encoded_string = base64.b64encode(image_file.read())
            
        # Step 3: Convert Base64 bytes to UTF-8 string
        # file_data = encoded_string.decode('utf-8')


    for entry in chat_history:
        if entry["role"] == "assistant":
            entry["role"] = "model"
        chat_history_client.append(
            types.Content(role=entry["role"], parts=[types.Part(text=entry["content"])])
        )

    image = PIL.Image.open('/home/ec2-user/technical_analysis_dashboard/backend/uploads/image.png')

    if mode == 'chat':
        try:
            if llm == 'gemini':
                chat = client.chats.create(
                    model="gemini-2.0-flash",
                    history=chat_history_client
                )
                response = chat.send_message(message=user_message)
                return jsonify({"response": response.text})
            else:
                response_text = chat_with_gpt(user_message)
                return jsonify({"response": response_text})


        except Exception as e:
            return jsonify({"error": str(e)}), 500
    else:
        try:
            response = client.models.generate_content(
            model="gemini-2.0-flash",
            contents=[user_message, image])

            return jsonify({"response": response.text})
        except Exception as e:
            return jsonify({"error": str(e)}), 500


@llm_gemini_bp.route('/list', methods=['POST'])
def text_to_llm():
    user_message = request.json.get('message', None)
    chat_history = request.json.get('chat_history', None)

    chat_history_client = []
    file_data = None

    if not user_message:
        return jsonify({"error": "missing promt"}), 400


    for entry in chat_history:
        if entry["role"] == "assistant":
            entry["role"] = "model"
        chat_history_client.append(
            types.Content(role=entry["role"], parts=[types.Part(text=entry["content"])])
        )
    try:
        chat = client.chats.create(
            model="gemini-2.0-flash",
            history=chat_history_client
        )
        response = chat.send_message(message=user_message)
        return jsonify({"response": response.text})

    except Exception as e:
        return jsonify({"error": str(e)}), 500
