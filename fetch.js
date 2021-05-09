async function fetchUsers () {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    let data = await res.json();

    let tab1 = data.find(item => item.id == 1);
   // console.log(tab1)
   document.getElementById('name1').innerHTML = tab1.name;
   document.getElementById('username1').innerHTML = tab1.username;
   document.getElementById('email1').innerHTML = tab1.email;
   document.getElementById('phone1').innerHTML = tab1.phone;
   document.getElementById('website1').innerHTML = tab1.website;

   let block2 = data.find(user => user.id == 2);
   // console.log(tab2)
   document.getElementById('name2').innerHTML = block2.name;
   document.getElementById('username2').innerHTML = block2.username;
   document.getElementById('email2').innerHTML = block2.email;
   document.getElementById('phone2').innerHTML = block2.phone;
   document.getElementById('website2').innerHTML = block2.website;

   let block3 = data.find(user => user.id == 3);
   // console.log(tab3)
   document.getElementById('name3').innerHTML = block3.name;
   document.getElementById('username3').innerHTML = block3.username;
   document.getElementById('email3').innerHTML = block3.email;
   document.getElementById('phone3').innerHTML = block3.phone;
   document.getElementById('website3').innerHTML = block3.website;

   let block4 = data.find(user => user.id == 4);
   // console.log(tab4)
   document.getElementById('name4').innerHTML = block4.name;
   document.getElementById('username4').innerHTML = block4.username;
   document.getElementById('email4').innerHTML = block4.email;
   document.getElementById('phone4').innerHTML = block4.phone;
   document.getElementById('website4').innerHTML = block4.website;

   let block5 = data.find(user => user.id == 5);
   // console.log(tab5)
   document.getElementById('name5').innerHTML = block5.name;
   document.getElementById('username5').innerHTML = block5.username;
   document.getElementById('email5').innerHTML = block5.email;
   document.getElementById('phone5').innerHTML = block5.phone;
   document.getElementById('website5').innerHTML = block5.website;

   let block6 = data.find(user => user.id == 6);
   // console.log(tab6)
   document.getElementById('name6').innerHTML = block6.name;
   document.getElementById('username6').innerHTML = block6.username;
   document.getElementById('email6').innerHTML = block6.email;
   document.getElementById('phone6').innerHTML = block6.phone;
   document.getElementById('website6').innerHTML = block6.website;

   let block7 = data.find(user => user.id == 7);
   // console.log(tab7)
   document.getElementById('name7').innerHTML = block7.name;
   document.getElementById('username7').innerHTML = block7.username;
   document.getElementById('email7').innerHTML = block7.email;
   document.getElementById('phone7').innerHTML = block7.phone;
   document.getElementById('website7').innerHTML = block7.website;

   let block8 = data.find(user => user.id == 8);
   // console.log(tab8)
   document.getElementById('name8').innerHTML = block8.name;
   document.getElementById('username8').innerHTML = block8.username;
   document.getElementById('email8').innerHTML = block8.email;
   document.getElementById('phone8').innerHTML = block8.phone;
   document.getElementById('website8').innerHTML = block8.website;
}

fetchUsers()