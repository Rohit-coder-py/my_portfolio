/* Everything you will edit lives in this file: projects, skills, AI tools, certificates.
   Change a link here and the page updates. No need to touch index.html. */
var GH = 'https://github.com/Rohit-coder-py/';

window.PORTFOLIO = {
  categories: [
    { id: 'genai', label: 'GenAI' },
    { id: 'nlp',   label: 'NLP' },
    { id: 'dl',    label: 'Deep learning' },
    { id: 'ml',    label: 'Machine learning' }
  ],

  /* Every project card is built from these fields:
     does  = what the app does, in plain words (shown first)
     stats = up to 3 numbers [value, label] that a recruiter can scan
     facts = short rows [name, text]: Data, Model, Note
     live  = Streamlit link, code = this project's own GitHub repo */
  projects: [
    { title: 'BankSaathi AI', cat: 'genai', tag: 'GenAI', wide: true,
      does: 'Explains banking terms like UPI, NEFT, EMI and KYC in Hindi, English or Hinglish, and checks a suspicious SMS or WhatsApp message for scams. It gives information only and never touches a bank account.',
      stats: [['3','tools: chat, term explainer, scam checker'],['Low / Med / High','scam risk level, with the red flags']],
      facts: [['Safety','OTPs, PINs, CVVs and card numbers are blocked before any text reaches the AI.'],
              ['Model','Groq LLM through LangChain. Scam and term results come back as structured data (Pydantic).'],
              ['For','Students, families, senior citizens and small shop owners who find banking jargon hard.']],
      stack: ['LangChain','Groq','Pydantic','Streamlit'],
      live: 'https://banksaathi-ai-gen-ai.streamlit.app/', code: GH + 'BankSaathi-AI' },

    { title: 'ShipSense', cat: 'dl', tag: 'Deep Learning',
      does: 'Predicts the chance that an order will arrive late, using only what is known when the order is placed. Gives a Low, Moderate or High risk band for one shipment (form) or a whole CSV of them.',
      stats: [['180K+','shipment records'],['27','features']],
      facts: [['Model','PyTorch neural network, hyperparameters tuned with Optuna.'],
              ['App','Single and batch prediction, charts, and a model-info page.']],
      stack: ['PyTorch','Optuna','Scikit-learn','Streamlit'],
      live: 'https://shipsense-v2-pytorch.streamlit.app/', code: GH + 'shipsense-shipping-delay-prediction-pytorch' },

    { title: 'Credit Card Fraud Detection', cat: 'dl', tag: 'Deep Learning',
      does: 'Predicts whether a card transaction is fraud. Fraud is only 0.52% of transactions, so the app has a threshold slider to trade catching more fraud against raising more false alarms.',
      stats: [['0.907','ROC-AUC'],['73.3%','fraud precision'],['32.8%','fraud recall']],
      facts: [['Data','254K+ transactions from Kaggle.'],
              ['Model','Custom PyTorch neural network.'],
              ['Note','Accuracy is 99.58%, but that is misleading when fraud is this rare, so I report ROC-AUC, precision and recall.']],
      stack: ['PyTorch','Scikit-learn','Streamlit'],
      live: 'https://credit-card-fraud-detection-pytorch.streamlit.app/', code: GH + 'Credit-Card-Fraud-Detection' },

    { title: 'Ask-Your-PDF', cat: 'genai', tag: 'GenAI',
      does: 'Upload a PDF and ask questions in plain English. It answers only from the document and shows the pages it used. If the answer is not in the PDF, it says so instead of guessing.',
      stats: [['Page-cited','every answer shows its source'],['In memory','your PDF is never saved']],
      facts: [['Model','MiniLM embeddings, FAISS search, Groq LLM (RAG).'],
              ['Details','1000-character chunks with 150 overlap, and the last 6 messages kept for follow-up questions.']],
      stack: ['LangChain','FAISS','Hugging Face','Groq','Streamlit'],
      live: 'https://ask-your-pdf-genai.streamlit.app/', code: GH + 'Ask-your-PDF' },

    { title: 'Support Ticket Classification', cat: 'nlp', tag: 'NLP',
      does: 'Reads a customer’s message and predicts which department it belongs to (11 categories) and what the customer wants (27 intents), so tickets can be routed without a person reading each one.',
      stats: [['99.72%','category accuracy'],['99.15%','intent accuracy']],
      facts: [['Data','About 26.9K labelled tickets.'],
              ['Model','TF-IDF + LinearSVC, chosen from 12 model and feature combinations.'],
              ['Note','The tickets are template-generated, so real tickets would score lower.']],
      stack: ['Scikit-learn','TF-IDF','LinearSVC','Streamlit'],
      live: 'https://customer-support-ticket-classification-system-nlp.streamlit.app/', code: GH + 'Customer-Support-Ticket-Classification-System' },

    { title: 'Employee Attrition Predictor', cat: 'ml', tag: 'Machine Learning',
      does: 'Predicts whether an employee is likely to leave, from things like overtime, salary, job satisfaction and work-life balance, so HR can act early.',
      stats: [['89.8%','accuracy, best of 10 models'],['1,470','employee records']],
      facts: [['Data','IBM HR Analytics dataset.'],
              ['Model','Support Vector Machine, picked after comparing 10 algorithms and tuning.']],
      stack: ['Scikit-learn','SVM','Streamlit'],
      live: 'https://employee-attrition-predictor-harsh.streamlit.app/', code: GH + 'Employee-Attrition-Prediction-ML-Model' },

    { title: 'Chest X-Ray Pneumonia Classifier', cat: 'dl', tag: 'Deep Learning',
      does: 'Upload a chest X-ray and it predicts Normal or Pneumonia, with a confidence score for both classes. A learning project, not for diagnosis.',
      stats: [['From scratch','CNN, no pretrained model'],['15%','held-out test split']],
      facts: [['Data','Public Kaggle chest X-ray dataset (1.2 GB).'],
              ['Model','Four-block CNN built and trained in PyTorch.']],
      stack: ['PyTorch','CNN','Streamlit'],
      live: 'https://chest-x-ray-pneumonial-predictor-pytorch.streamlit.app/', code: GH + 'Chest-X-Ray-Pneumonia-Predictor' },

    { title: 'AI Text Summariser', cat: 'nlp', tag: 'NLP / Transformers',
      does: 'Paste a long article or upload a text file and get a short summary written in new sentences, not copied lines. Texts longer than the model’s limit are split, summarised and merged.',
      stats: [['1,024','token limit, longer text is chunked'],['12 + 6','encoder and decoder layers']],
      facts: [['Model','DistilBART (distilbart-cnn-12-6) from Hugging Face, on PyTorch.'],
              ['Extras','A Token Inspector shows how text is split into tokens. A Model Lab shows the model’s size and layers.']],
      stack: ['PyTorch','Hugging Face','Streamlit'],
      live: 'https://ai-text-summarizer-transformers.streamlit.app/', code: GH + 'AI-Text-Summarizer' },

    { title: 'Bolo AI: Multilingual Chatbot', cat: 'genai', tag: 'GenAI',
      does: 'Chat in English, Hindi or Hinglish and it replies in the same language. Every message shows which language was detected.',
      stats: [['3','languages: English, Hindi, Hinglish']],
      facts: [['Model','Groq LLM through LangChain.'],
              ['Features','Remembers the whole chat, language override, and a creativity slider that sets the temperature.']],
      stack: ['LangChain','Groq','Streamlit'],
      live: 'https://llm-chatbot-genai.streamlit.app/', code: GH + 'LLM-Chatbot' },

    { title: 'AI Cloud Cost Predictor', cat: 'ml', tag: 'Machine Learning',
      does: 'Estimates what an Azure resource will cost before the invoice arrives, from details like the service and the date, so teams can spot overspend early.',
      stats: [['Azure','billing data'],['Linear Regression','scikit-learn model']],
      facts: [['Work','Data cleaning, date features, manual encoding, model evaluation and a Streamlit app.']],
      stack: ['Scikit-learn','Pandas','Streamlit'],
      live: 'https://ai-cloud-cost-predictor.streamlit.app/', code: GH + 'AI-Cloud-Cost-Predictor' },

    { title: 'Retail Customer Segmentation', cat: 'ml', tag: 'Machine Learning',
      does: 'Groups mall customers by age, income and spending score so a shop can aim offers at the right group. The dashboard places a new customer into a segment.',
      stats: [['3','features: age, income, spending score']],
      facts: [['Model','K-Means clustering. Number of clusters chosen with the Elbow method, features scaled first.'],
              ['Data','Mall Customers dataset.']],
      stack: ['Scikit-learn','K-Means','Plotly','Streamlit'],
      live: 'https://customer-clustering-dashboard.streamlit.app/', code: GH + 'Retail-Customer-Segmentation' }
  ],

  /* icon: file in assets/tech/. No icon = a text tile (concepts that have no logo). */
  skills: [
    { group: 'Languages', items: [['Python','python'],['SQL','sql']] },
    { group: 'Data analysis', items: [['Pandas','pandas'],['NumPy','numpy'],['Matplotlib','matplotlib'],['Seaborn','seaborn'],['Plotly','plotly']] },
    { group: 'ML & deep learning', items: [['PyTorch','pytorch'],['Scikit-learn','scikit-learn'],['Transformers','huggingface'],['ANN'],['CNN'],['RNN / LSTM'],['TF-IDF']] },
    { group: 'Generative AI', items: [['LangChain','langchain'],['Hugging Face','huggingface'],['Groq','groq'],['Pydantic','pydantic'],['RAG'],['FAISS'],['ChromaDB']] },
    { group: 'Apps & tools', items: [['Streamlit','streamlit'],['Git','git'],['GitHub','github']] },
    { group: 'Learning now', now: true, items: [['AI agents'],['FastAPI','fastapi'],['Docker','docker']] }
  ],

  /* shown in the scrolling strip under the hero */
  strip: ['python','pytorch','scikit-learn','pandas','numpy','langchain','huggingface','groq','streamlit','fastapi','docker','git','github','sql','plotly','pydantic'],

  ai: [
    { group: 'Coding agents',     items: [['Claude Code','claude-code','Coding agent'],['Codex','codex','Coding agent'],['Devin','devin','Software engineer agent']] },
    { group: 'App builders',      items: [['Lovable','lovable','Prompt to app'],['Replit','replit','Browser IDE and agent']] },
    { group: 'Models & platforms', items: [['DeepSeek','deepseek','Open model'],['GLM 5.1','glm','Zhipu model'],['Kimi','kimi','K3.1 PRO'],['Ollama','ollama','Run models locally'],['Hugging Face','huggingface','Models and datasets'],['OpenRouter','openrouter','One API, many models']] }
  ],

  certs: [
    { title: 'ADCA', issuer: 'Best Computer Technology', note: 'Advanced Diploma in Computer Applications, 96%', img: 'adca' },
    { title: 'Python', issuer: 'Kaggle', note: 'Course certificate', img: 'kaggle-python' },
    { title: 'Problem Solving (Basic)', issuer: 'HackerRank', note: 'Skills certification', img: 'hackerrank-problem-solving' },
    { title: 'AI Tools & Claude Workshop', issuer: 'be10X', note: 'Issued September 12, 2026', img: 'ai-tools' }
  ]
};
