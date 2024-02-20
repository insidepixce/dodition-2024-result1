const form = document.getElementById('form');
const linkInput = document.getElementById('linkInput');
const successBox = document.getElementById('successBox');
const failureBox = document.getElementById('failureBox');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const inputLink = linkInput.value.trim();
    const links = [
        "https://open.kakao.com/o/s9o0oZSf",
        "https://open.kakao.com/me/yuki_xnn",
        // Add more links here
    ];
    const isValidLink = links.includes(inputLink);
    if (isValidLink) {
        successBox.style.display = "block";
    } else {
        failureBox.style.display = "block";
        resultMessage.textContent = "탈락입니다.";
    }
});

function showNumber(number) {
    var modal = document.getElementById("modal");
    var participantNumber = document.getElementById("participantNumber");
    participantNumber.textContent = number + "님은 " + number + "번입니다.";
    modal.style.display = "block";
}

function closeModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}
