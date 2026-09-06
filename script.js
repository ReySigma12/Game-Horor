const startButton = document.getElementById("startButton");
const menu = document.getElementById("menu");
const jumpscare = document.getElementById("jumpscare");
const video = document.getElementById("scarevideo");
const music = document.getElementById("backsoundMusic");

// halaman menu utama
window.addEventListener("load", () => {
    music.volume = 0.5;

    music.play().catch(() => {
    });
});
    // backsound
    document.addEventListener("pointerdown", function startMusic () {
        music.volume = 0.5;
        if (music.paused) {
            music.play().catch(() => {});
            }
        // hapus event
        document.removeEventListener("pointerdown", startMusic);
    });

    // start game
    startButton.addEventListener("click", async () => {

        // matikan musik menu
        music.pause();
        music.currentTime = 0;

        // video
        video.pause();
        video.currentTime = 0;

        // tampilkan jumpscare
        jumpscare.style.display = "flex";
        menu.style.display = "none";

        // mainkan video
        try {
            await video.play();
        } catch (error) {
            console.error("Error playing video:", error);
        }
    });