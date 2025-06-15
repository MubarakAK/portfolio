let content = document.getElementsByClassName("content")[0]
let inp = document.getElementById("inp");
let inpbutton = document.getElementById("inpbutton");
let require, url, email, answer, deliverability, qualityscore, is_valid_format, is_free_email, is_disposable_email
let is_role_email, is_catchall_email, is_mx_found, is_smtp_valid

tempanswer = {
    "email":"mubarakishak2002@gmail.com",
    "autocorrect":"",
    "deliverability":"DELIVERABLE",
    "quality_score":"0.95",
    "is_valid_format":{"value":true,"text":"TRUE"},
    "is_free_email":{"value":true,"text":"TRUE"},
    "is_disposable_email":{"value":false,"text":"FALSE"},
    "is_role_email":{"value":false,"text":"FALSE"},
    "is_catchall_email":{"value":false,"text":"FALSE"},
    "is_mx_found":{"value":true,"text":"TRUE"},
    "is_smtp_valid":{"value":true,"text":"TRUE"}
}

async function fetchweather() {
    console.log("running")
    if (inp.value){
        email = inp.value
    }
    url = `https://emailvalidation.abstractapi.com/v1/?api_key=71c908fddc79467a929fa9ed6dce352b&email=${email}`
    // answer = tempanswer
    require = await fetch(url, { method: 'GET' })
    answer = await require.json()
    content.innerHTMl = `<b><div class="first">
                    <div class="conty 0">
                            <p>Email : ${email}</p>
                            <p>Details : Fetching..</p>
                    </div>
                </div>
                <div class="second">
                        <div class="conty 1">
                            <p>Result : Waiting...</p>                        
                        </div>
                </div></b>`
    console.log(answer)
}

function processweather() {
    if (answer && answer != 0) {
        deliverability = answer.deliverability;
        qualityscore = answer.qualityscore;
        is_valid_format = answer.is_valid_format.value;
        is_free_email = answer.is_free_email.value;
        is_disposable_email = answer.is_disposable_email.value;
        is_role_email = answer.is_role_email.value;
        is_catchall_email = answer.is_catchall_email.value;
        is_mx_found = answer.is_mx_found.value; 
        is_smtp_valid = answer.is_smtp_valid.value;
    }
}

function dispweather() {
    content.innerHTMl = ``
    if (answer && answer != 0) {
        result = `  <b><div class="first">
                    <div class="conty 0">
                            <p>Email : ${email}</p>
                            <p>Deliverability : ${deliverability}</p>
                            <p>Quality Score : ${qualityscore}</p>
                            <p>Free : ${is_free_email}</p>
                            <p>Valid Format : ${is_valid_format}</p>

                    </div>
                </div>
                <div class="second">
                        <div class="conty 1">
                            <p>Disposable : ${is_disposable_email}</p>
                            <p>Role : ${is_role_email}</p>
                            <p>Catch All : ${is_catchall_email}</p>
                            <p>MX Found : ${is_mx_found}</p>
                            <p>SMTP Valid : ${is_smtp_valid}</p>                        
                        </div>
                </div></b>`
    }
    else {
        result = `<b><div class="first">
                    <div class="conty 0">
                        Result Not Found
                    </div>
                </div></b>`
    }

    content.innerHTML = result
    answer = 0
}

async function execution() {
    await fetchweather()
    processweather()
    dispweather()
}

inpbutton.addEventListener("click", () => {
    execution()
})