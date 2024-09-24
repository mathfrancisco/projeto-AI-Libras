from flask import Flask, request, jsonify
import base64
import cv2
import numpy as np
from tensorflow.keras.models import load_model

app = Flask(__name__)

# Carregar o modelo treinado (exemplo de como carregar o I3D)
model = load_model('caminho_do_modelo/model_i3d.h5')

def preprocess_image(image_data):
    # Decodificar imagem base64
    image_data = base64.b64decode(image_data.split(',')[1])
    np_arr = np.frombuffer(image_data, np.uint8)
    img = cv2.imdecode(np_arr, cv2.IMREAD_COLOR)

    # Pré-processar a imagem (redimensionar, normalizar, etc.)
    img = cv2.resize(img, (240, 320))  # Ajuste conforme a necessidade do modelo
    img = img / 255.0  # Normalizar entre 0 e 1
    return img

@app.route('/recognize-gesture', methods=['POST'])
def recognize_gesture():
    data = request.get_json()
    image_data = data['image']
    
    # Pré-processar a imagem para o modelo
    img = preprocess_image(image_data)
    
    # Expanda a dimensão para corresponder ao formato de entrada do modelo
    img = np.expand_dims(img, axis=0)
    
    # Fazer a predição com o modelo carregado
    prediction = model.predict(img)
    
    # Obter o gesto reconhecido (mapeie os índices para os nomes dos gestos)
    gesture = np.argmax(prediction, axis=1)[0]
    
    return jsonify({"gesture": f"Gesto {gesture}"})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3000)
