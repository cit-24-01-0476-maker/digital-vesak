const btn = document.getElementById('enter-btn');
const welcome = document.getElementById('welcome-screen');
const mainContent = document.getElementById('main-content');
const scene = document.getElementById('vesak-scene');
const normalVideoContainer = document.getElementById('normal-video-container');
const lampSection = document.getElementById('lamp-section');

const video360 = document.getElementById('vesak-video'); 
const normalVideo = document.getElementById('normal-kudu-video');

const homeAudio = document.getElementById('home-audio');
const thoranaAudio = document.getElementById('thorana-audio');
const kuduAudio = document.getElementById('kudu-audio');
const pahanaAudio = document.getElementById('pahana-audio');

if (btn) {
    btn.addEventListener('click', () => {
        welcome.style.display = 'none';

        if (mainContent) {
            mainContent.style.display = 'block';
            if (homeAudio) homeAudio.play();
        }
        if (scene) {
            scene.setAttribute('visible', 'true');
            if (video360) { video360.muted = true; video360.play(); }
            if (thoranaAudio) thoranaAudio.play();
        }
        if (normalVideoContainer) {
            normalVideoContainer.style.display = 'block';
            if (normalVideo) { normalVideo.muted = true; normalVideo.play(); }
            if (kuduAudio) kuduAudio.play();
        }
        if (lampSection) {
            lampSection.style.display = 'flex';
            if (pahanaAudio) pahanaAudio.play();
        }
    });
}

// 🪔 ඩිජිටල් පහන දල්වන කොටස
const lightBtn = document.getElementById('light-btn');
const flame = document.getElementById('flame');
const blessingText = document.getElementById('blessing-text');
const pahanaBg = document.getElementById('pahana-bg');

if (lightBtn) {
    lightBtn.addEventListener('click', () => {
        flame.classList.add('lit');
        lightBtn.style.display = 'none'; 
        blessingText.innerHTML = "ඔබ දැල්වූ මෙම පහනේ ආලෝකයෙන් <br>මුළු ලොවම සුවපත් වේවා! 🌸";
        blessingText.style.opacity = '1';
        if(pahanaBg) {
            pahanaBg.style.background = 'radial-gradient(circle, #4a2500, #000)';
        }
    });
}