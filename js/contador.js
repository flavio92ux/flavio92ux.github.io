window.onload = () => {
    const count = document.getElementById('contador');
    const number = Number(count.innerText) + 1;
    count.innerText = number;
};