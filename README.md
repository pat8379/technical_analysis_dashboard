# AI Technical Analysis Dashboard

Setup backend and frontend to run the dashboard

<br/>
<br/>

# Backend Setup

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
pip install -r requirements.txt
```

- specify which Ollama model to run in backend/.env (default is Gemma2B)

```
OLLAMA_MODEL=gemma2:2b
# OLLAMA_MODEL=llama3.2-vision
```

- run Flask server

```
flask run --debug
```

- Backend live on http://127.0.0.1:5000

<br/>
<br/>

# Frontend Setup

### Prequisites

- Node.js v22 and NPM installed
  https://nodejs.org/en/download

- Can either run with npm or yarn

## Run with NPM

- install packages and run

```
cd frontend
npm install
npm run dev
```

## Run with Yarn

- If yarn is not installed

```
npm install --global yarn
```

- install packages and run

```
cd frontend
yarn install
yarn dev
```

- Frontend live on http://localhost:5173/
