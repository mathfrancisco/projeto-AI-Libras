
// utilities.jsx
// Este objeto mapeia números para nomes de gestos e cores
// Isso é usado para rotular e colorir diferentes gestos reconhecidos

const labelMap = {
    1: { name: 'Olá', color: 'red' },
    2: { name: 'Obrigado', color: 'yellow' },
    3: { name: 'Eu te amo', color: 'lime' },
    4: { name: 'Sim', color: 'blue' },
    5: { name: 'Não', color: 'purple' },
};

// Esta função desenha a malha da mão na tela
export const drawHand = (predictions, ctx) => {
    // Verifica se existem previsões de mão
    if (predictions.length > 0) {
        // Para cada mão detectada
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

                // Define a cor e estilo do círculo
                ctx.fillStyle = "aqua";
                ctx.fill();
                ctx.strokeStyle = "white";
                ctx.stroke();
            }

            // Desenha conexões entre os pontos para formar a malha da mão
            const fingers = {
                polegar: [0, 1, 2, 3, 4],
                indicador: [0, 5, 6, 7, 8],
                medio: [0, 9, 10, 11, 12],
                anelar: [0, 13, 14, 15, 16],
                mindinho: [0, 17, 18, 19, 20],
            };

            // Para cada dedo, desenha uma linha conectando seus pontos
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

// Esta função desenha retângulos com rótulos para os gestos reconhecidos
export const drawRect = (boxes, classes, scores, threshold, imgWidth, imgHeight, ctx) => {
    for (let i = 0; i < boxes.length; i++) {
        // Verifica se a pontuação do gesto está acima do limiar
        if (boxes[i] && classes[i] && scores[i] > threshold) {
            // Extrai as coordenadas do retângulo e a classe do gesto
            const [y, x, height, width] = boxes[i];
            const text = classes[i];

            // Verifica se a classe existe no labelMap
            if (labelMap[text]) {
                // Define o estilo para o texto e o retângulo
                ctx.strokeStyle = labelMap[text]['color'];
                ctx.lineWidth = 3;
                ctx.fillStyle = 'white';
                ctx.font = '20px Arial';

                // Desenha o texto com o nome do gesto e a pontuação
                ctx.fillText(
                    `${labelMap[text]['name']} - ${Math.round(scores[i] * 100) / 100}`,
                    x * imgWidth,
                    y * imgHeight - 10
                );

                // Desenha o retângulo ao redor do gesto reconhecido
                ctx.beginPath();
                ctx.rect(x * imgWidth, y * imgHeight, (width * imgWidth) / 2, (height * imgHeight) / 1.5);
                ctx.stroke();
            }
        }
    }
};

