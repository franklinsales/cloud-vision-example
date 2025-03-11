const vision = require("@google-cloud/vision");

// Defina o caminho para o JSON da conta de serviço
const client = new vision.ImageAnnotatorClient({
  keyFilename: "elemental-alloy-453403-i1-aec5c40ced10.json", // Substitua pelo caminho correto
});

async function extractTextFromImage(imagePath) {
  try {
    const [result] = await client.textDetection(imagePath);
    const detections = result.textAnnotations;

    if (detections.length > 0) {
      console.log("Texto extraído:");
      console.log(detections[0].description);
    } else {
      console.log("Nenhum texto encontrado.");
    }
  } catch (error) {
    console.error("Erro ao processar a imagem:", error);
  }
}

// Teste com uma imagem local
extractTextFromImage("./1031aacc84e1021941add10d5e534b33f110.jpg");
