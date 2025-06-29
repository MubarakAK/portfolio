let disp = document.getElementsByClassName("container")[0];
let sitebox = document.getElementsByClassName("sitedis")[0];
let namebox = document.getElementsByClassName("iddis")[0];
let passbox = document.getElementsByClassName("passdis")[0];
let searchin = document.getElementsByClassName("searchin")[0];
let submit = document.getElementById("submit");
let search = document.getElementById("search");
let password = document.getElementById("password");
let name1, site, pass, passwordset
let id = 0
let key = []
let passwords = []
let newpasswords = []
let refreshpasswords = []
let keystr;
let str, str0, str1, deleteid;
let deleteboxes;
let deleto, parent;

function dispPass() {
    // Display passwords onto screen
    passbox.innerHTML = ''
    passwordset = localStorage.getItem("passwords")
    if (passwordset && passwordset != '') {
        refreshpasswords = passwordset.split(";")
        refreshpasswords.forEach((element, index) => {
            str = element.split(",")
            parent = document.createElement('div')
            parent.className = "parent"
            parent.id = str[0]
            parent.innerHTML = `<b><p>Website: ${str[1]}</p> <p>Username: ${str[2]}</p> <p>Password:${str[3]}</p></b>`
            passbox.append(parent)
        });
    }
    else {
        passbox.innerHTML = `<div class="parent" id="-1"><p>No Passwords To Show</p></div>`
    }
}

function dispsearch() {
    // Display searched passwords onto screen

    passbox.innerHTML = ''
    passwordset = localStorage.getItem("passwords")
    if (passwordset && passwordset != '') {
        refreshpasswords = passwordset.split(";")
        refreshpasswords.forEach((element, index) => {

            str = element.split(",")
            if (str.includes(searchin.value)) {
                parent = document.createElement('div')
                parent.className = "parent"
                parent.id = str[0]
                parent.innerHTML = `<b><p>Website: ${str[1]}</p> <p>Username: ${str[2]}</p> <p>Password: ${str[3]}</p></b>`
                passbox.append(parent)
            }
        });
    }
    else {
        passbox.innerHTML = `<div class="parent" id="-1"><p>No Passwords To Show</p></div>`
    }
}

search.addEventListener("click", () => {
    if(searchin.value=='')
    {
        dispPass() 
    }
    else{
        dispsearch()
    }
})

dispPass()

// setInterval(() => {
//     dispPass()
// }, 1);







