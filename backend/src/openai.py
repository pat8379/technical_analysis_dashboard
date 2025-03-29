from openai import OpenAI
from dotenv import load_dotenv
import os

load_dotenv()
client = OpenAI(
    # This is the default and can be omitted
    api_key=os.environ.get("OPENAI_API"),
)

def chat_with_gpt(chat_history, user_message):
    chat_history.append({
        "role": "user",
        "content": user_message
    })
    completion = client.chat.completions.create(
        model="gpt-4o",
        messages=chat_history,
    )
    return completion.choices[0].message.content