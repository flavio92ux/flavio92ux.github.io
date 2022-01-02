window.onload = async () => {
    const count = document.getElementById('contador');
    const response = await fetch('https://contador-flavio92ux.herokuapp.com/', { method: 'POST' })
    const json = await response.json();
    const { number } = json[0];
    count.innerText = number;
};