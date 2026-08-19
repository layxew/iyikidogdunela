const cumleler = [
    "bazen insanlar güzeldir ya",
    "sadece görünüşleriyle değil",
    "söyledikleriyle değil",
    "var olduklarıyla",
    "varlığın hayatımıza anlam katıyor"
];

const sequenceContainer = document.getElementById("text-sequence");
const uiContainer = document.getElementById("ui");

let currentIndex = 0;

function showNextSentence() {
    if (currentIndex < cumleler.length) {
        sequenceContainer.innerText = cumleler[currentIndex];
        sequenceContainer.classList.add("show");

        setTimeout(() => {
            sequenceContainer.classList.remove("show");
            currentIndex++;
            setTimeout(showNextSentence, 1000);
        }, 2200);
    } else {
        setTimeout(startHeartAnimation, 800);
    }
}

function startHeartAnimation() {
    sequenceContainer.remove();
    uiContainer.classList.remove("hidden");

    // Kalp üzerindeki toplam yazı sayısı
    const totalWords = 50; 

    for (let i = 0; i < totalWords; i++) {
        const layer = document.createElement("div");
        layer.className = "love_horizontal";
        
        // CSS değişkenleri ile her yazıya özel sıra numarası veriyoruz
        layer.style.setProperty("--i", i);
        layer.style.setProperty("--total", totalWords);

        const word = document.createElement("div");
        word.className = "love_word";
        word.innerText = "İyi ki doğdun Ela!";

        layer.appendChild(word);
        uiContainer.appendChild(layer);
    }
}

window.onload = () => {
    showNextSentence();
};