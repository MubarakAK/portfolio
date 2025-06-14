let disp = document.getElementsByClassName("container")[0];
let sitebox = document.getElementsByClassName("sitedis")[0];
let namebox = document.getElementsByClassName("iddis")[0];
let searchin = document.getElementsByClassName("searchin")[0];
let passbox = document.getElementsByClassName("passdis")[0];
let submit = document.getElementById("submit");
let password = document.getElementById("password");
let search = document.getElementById("search");
let name1, site, pass, passwordset;
let deleter = 0
let key = []
let passwords = []
let newpasswords = []
let refreshpasswords = []
let keystr;
let str, str0, str1, deleteid;
let deleteboxes;
let deleto, parent;


function deletePass() {
    // Update delete id if delete button is clicked, only after which passwords can be updated
    deleteboxes = Array.from(document.getElementsByClassName("delete"));
    if (deleteboxes) {
        deleteboxes.forEach(element => {
            element.addEventListener("click", () => {
                deleter = 1
                deleteid = element.parentElement.id
                console.log('running', deleteid)
            })
        });
    }

}

function updatePass() {
    // Delete and Update Passwords if any delete button has been clicked, succeeds delete id assigning
    passwords = localStorage.getItem("passwords")
    if (passwords) {
        passwords = passwords.split(";");
        newpasswords = passwords.filter(element => element.split(",")[0] !== deleteid);
        localStorage.setItem("passwords", newpasswords.join(";"))
        deleteid = -1
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
            parent.className = "parent"
            parent.innerHTML = `<b><p>Website: ${str[1]}</p> <p>Username: ${str[2]}</p> <p>Password:${str[3]}</p></b>`
            deleto = document.createElement('button')
            deleto.className = 'delete'
            deleto.innerHTML = '<p>Delete</p>'
            parent.append(deleto)
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
            parent.id = str[0]
            parent.className = "parent"
            parent.innerHTML = `<b><p>Website: ${str[1]}</p> <p>Username: ${str[2]}</p> <p>Password:${str[3]}</p></b>`
            deleto = document.createElement('button')
            deleto.className = 'delete'
            deleto.innerHTML = '<p>Delete</p>'
            parent.append(deleto)
            passbox.append(parent)
            }
        });
    }
    else {
        passbox.innerHTML = `<div class="parent" id="-1"><p>No Passwords To Show</p></div>`
    }
}



search.addEventListener("click", () => {
    if (searchin.value == '') {
        updatePass()
        dispPass()
        deletePass()
    }
    else {
        updatePass()
        dispsearch()
        deletePass()
    }
})


updatePass()
dispPass()
deletePass()

setInterval(() => {
    if (deleter == 1) {
        updatePass()
        dispPass()
        deletePass()
    }
    deleter = 0
}, 1);







