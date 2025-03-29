from openai import OpenAI
from dotenv import load_dotenv
import os

load_dotenv()
client = OpenAI(
    # This is the default and can be omitted
    api_key=os.environ.get("OPENAI_API"),
)

def chat_with_gpt(prompt):
    response = client.responses.create(
        model="gpt-3.5",
        instructions="You are a coding assistant that talks like a pirate.",
        input="How do I check if a Python object is an instance of a class?",
    )

    return response.output_text