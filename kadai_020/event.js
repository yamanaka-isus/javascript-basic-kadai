const addTud = document.getElementById('text');
const addBtn = document.getElementById('btn');
console.log(addTud);//テスト1

addBtn.addEventListener('click', () => {
    console.log(addTud);//テスト2
    addTud.textContent = 'ボタンをクリックしました';
});