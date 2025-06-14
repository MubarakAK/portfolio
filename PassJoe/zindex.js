let disp = document.getElementsByClassName("container")[0];
let sitebox = document.getElementsByClassName("sitedis")[0];
let namebox = document.getElementsByClassName("iddis")[0];
let passbox = document.getElementsByClassName("passdis")[0];
let submit = document.getElementById("submit");
let password = document.getElementById("password");
let name1, site, pass, passwordset
let id
let key = []
let passwords = []
let keystr;
let str, str0, str1, check;

function setPass() {
    if (website.value != '' && username.value != '' && password.value != '' && website.value && username.value && password.value) {
        passwordset = localStorage.getItem("passwords")
        if (passwordset) {
            passwords = passwordset.split(";")
            if (passwords.length == 0) {
                id = -1000
            }
            else {
                passwords.forEach((element, index) => {
                    if (index == passwords.length - 1) {
                        str = element.split(",")
                        id = parseInt(str[0]) + 1
                    }
                });
            }
        }
        else {
            id = -1000
        }

        key.push(id)
        key.push(website.value)
        key.push(username.value)
        key.push(password.value)

        if (localStorage.getItem("passwords")) {
            keystr = localStorage.getItem("passwords") + ';' + key.toString()
        }
        else {
            keystr = key.toString()
        }
        localStorage.setItem("passwords", keystr)
        keystr, name1, site, pass = ''
        website.value = ''
        username.value = ''
        password.value = ''
        key = []
    }
    else {
        console.log(id)
        id = id - 1;
        console.log(id)
    }

}

function dispPass() {
    // Display passwords onto screen
    passbox.innerHTML = ''
    passwordset = localStorage.getItem("passwords")
    if (passwordset && passwordset != '') {
        refreshpasswords = passwordset.split(";")
        refreshpasswords.forEach((element, index) => {
            str = element.split(",")
            parent = document.createElement('div')
            parent.id = str[0]
            parent.innerHTML = `<b><p>Website: ${str[1]}</p> <p>Username: ${str[2]}</p> <p>Password:${str[3]}</p></b>`
            deleto = document.createElement('button')
            deleto.className = 'delete'
            deleto.innerHTML = '<p>Delete</p>'
            parent.append(deleto)
            passbox.append(parent)
        });
    }
    else {
        passbox.innerHTML = `<div id="-1"><p>No Passwords To Show</p></div>`
    }
}

submit.addEventListener("click", () => {
    setPass()
    id += 1
})




