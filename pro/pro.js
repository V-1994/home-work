async function fetchUsers () {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    let data = await res.json();

    let block1 = data.find(item => item.id == 1);
    document.getElementById('title1').innerHTML = block1.title;
    document.getElementById('body1').innerHTML = block1.body;

    let block2 = data.find(item => item.id == 2);
    document.getElementById('title2').innerHTML = block2.title;
    document.getElementById('body2').innerHTML = block2.body;

    let block3 = data.find(item => item.id == 3);
    document.getElementById('title3').innerHTML = block3.title;
    document.getElementById('body3').innerHTML = block3.body;

    let block4 = data.find(item => item.id == 4);
    document.getElementById('title4').innerHTML = block4.title;
    document.getElementById('body4').innerHTML = block4.body;

    let block5 = data.find(item => item.id == 5);
    document.getElementById('title5').innerHTML = block5.title;
    document.getElementById('body5').innerHTML = block5.body;

    let block6 = data.find(item => item.id == 6);
    document.getElementById('title6').innerHTML = block6.title;
    document.getElementById('body6').innerHTML = block6.body;

    let block7 = data.find(item => item.id == 7);
    document.getElementById('title7').innerHTML = block7.title;
    document.getElementById('body7').innerHTML = block7.body;

    let block8 = data.find(item => item.id == 8);
    document.getElementById('title8').innerHTML = block8.title;
    document.getElementById('body8').innerHTML = block8.body;

}
fetchUsers()