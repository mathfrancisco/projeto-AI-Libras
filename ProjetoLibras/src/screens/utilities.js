// utilities.js

// Define nosso labelMap para rotular diferentes gestos ou classes
const labelMap = {
    1: { name: 'Hello', color: 'red' },
    2: { name: 'Thank You', color: 'yellow' },
    3: { name: 'I Love You', color: 'lime' },
    4: { name: 'Yes', color: 'blue' },
    5: { name: 'No', color: 'purple' },
};

// Função para desenhar a malha da mão na tela
export const drawHand = (predictions, ctx) => {
    // Verifica se existem previsões de mão
    if (predictions.length > 0) {
        predictions.forEach(prediction => {
            // Pega as coordenadas dos pontos da mão
            const landmarks = prediction.landmarks;

            // Desenha os pontos da mão
            for (let i = 0; i < landmarks.length; i++) {
                const x = landmarks[i][0];
                const y = landmarks[i][1];

                // Desenha um círculo para cada ponto da mão
                ctx.beginPath();
                ctx.arc(x, y, 5, 0, 3 * Math.PI);

                // Cor e estilo do círculo
                ctx.fillStyle = "aqua";
                ctx.fill();
                ctx.strokeStyle = "white";
                ctx.stroke();
            }

            // Opcional: Desenhar conexões entre os pontos para formar a malha da mão
            const fingers = {
                thumb: [0, 1, 2, 3, 4],
                indexFinger: [0, 5, 6, 7, 8],
                middleFinger: [0, 9, 10, 11, 12],
                ringFinger: [0, 13, 14, 15, 16],
                pinky: [0, 17, 18, 19, 20],
            };

            for (let finger in fingers) {
                const points = fingers[finger].map(idx => landmarks[idx]);
                ctx.beginPath();
                ctx.moveTo(points[0][0], points[0][1]);
                for (let i = 1; i < points.length; i++) {
                    ctx.lineTo(points[i][0], points[i][1]);
                }
                ctx.strokeStyle = "white";
                ctx.lineWidth = 2;
                ctx.stroke();
            }
        });
    }
};

// Função para desenhar retângulos com rótulos
export const drawRect = (boxes, classes, scores, threshold, imgWidth, imgHeight, ctx) => {
    for (let i = 0; i < boxes.length; i++) { // Corrigi o loop para i < boxes.length
        if (boxes[i] && classes[i] && scores[i] > threshold) {
            // Extrai as variáveis
            const [y, x, height, width] = boxes[i];
            const text = classes[i];

            // Verifica se a classe existe no labelMap
            if (labelMap[text]) {
                // Define o estilo
                ctx.strokeStyle = labelMap[text]['color'];
                ctx.lineWidth = 3;
                ctx.fillStyle = 'white';
                ctx.font = '20px Arial';

                // Desenha o texto
                ctx.fillText(
                    `${labelMap[text]['name']} - ${Math.round(scores[i] * 100) / 100}`,
                    x * imgWidth,
                    y * imgHeight - 10
                );

                // Desenha o retângulo
                ctx.beginPath();
                ctx.rect(x * imgWidth, y * imgHeight, (width * imgWidth) / 2, (height * imgHeight) / 1.5);
                ctx.stroke();
            }
        }
    }
};
