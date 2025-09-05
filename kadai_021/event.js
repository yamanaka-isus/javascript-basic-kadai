const btn = document.getElementById('btn');
const text = document.getElementById('text');

btn.addEventListener('click', () => {
    setTimeout(() => {
        const cagText = document.createElement('text');
        text.textContent = 'ボタンをクリックしました';
        console.log(cagText);
    },2000);
});