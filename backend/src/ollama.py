from ollama import Client
import os

client = Client(
  host=os.environ['OLLAMA_URL'],
#   headers={'x-some-header': 'some-value'}
)
# response = client.chat(model='llama3.2', messages=[
#   {
#     'role': 'user',
#     'content': 'Why is the sky blue?',
#   },
# ])