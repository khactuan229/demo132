var users = 'http://localhost:3000/users';

function start() {
    getMembers(render)

}


start();


// get member
function getMembers(callback) {
    fetch(users)
            .then((response) => response.json())
            .then(callback)
}


// render table
function render(users) {
    var str = `
        <tr>
            <th>FullName</th>
            <th>Email</th>
        </tr>
    `
    console.log('user',users);
   users.reduce((acc, user) =>{
        str += `
        <tr>
        <td>${user.name}</td>
        <td>${user.email}</td>
        </tr>
        `
        //console.log(acc);
        return str
   },'')
   document.querySelector('#table').innerHTML = str
};


// import create

import rei, {isflag, create} from './form.js';

var rei1 = rei
var isFlag = isflag
var create1 = create

// var btn = document.querySelector('#create')
// btn.onclick = function() {
//     create1();
    
//     console.log(isFlag)

// }





