### Ollama

- install Ollama and pull Llama3.2 Vision or Gemma2 2B

```
ollama pull llama3.2-vision
ollama pull gemma2:2b
```

### Flask Server

- create a virtual environment and install packages

```
cd backend
python3 -m venv .venv
source .venv/bin/activate
sudo yum install -y dotnet
pip install -r requirements.txt
```

- run Flask server

```
flask run --debug
```

- Backend live on http://127.0.0.1:5000
