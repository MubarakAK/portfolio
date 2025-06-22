display = document.getElementsByClassName("display")[0];
result = document.getElementsByClassName("result")[0];
answer = document.getElementsByClassName("ans")[0];
allc = document.getElementsByClassName("AC")[0];
c = document.getElementsByClassName("C")[0];
numbers = Array.from(document.getElementsByClassName("num"));
operators = Array.from(document.getElementsByClassName("opr"));
dots = Array.from(document.getElementsByClassName("dot"))[0];
display.innerText = '';
let txtcurnt
let txtlast
let txtstr = ''
let no
let opr = ''
let ans = 0;
let dotend = false
let oprpassed

funcnum = () => {
    if (opr == '') {
        txtstr = display.innerText
        txtcurnt = txtstr + no
        txtlast = txtcurnt
        txtstr = txtcurnt
        display.innerText = txtstr
    }
    else if (opr != '') {
        txtstr = display.innerText
        txtstr = txtstr.toString() + no
        display.innerText = txtstr
        opr = ''
    }
}

funcc = () => {
        txtstr = display.innerText
        txtstr = txtstr.slice(0, -1);
        txtstr = txtstr.toString()
        txtcurnt = txtstr
        txtlast = txtstr
        display.innerText = txtstr
}

funcac = () => {
    txtstr = display.innerText
    txtstr = ''
    txtcurnt = txtstr
    txtlast = txtstr
    display.innerText = txtstr
}

funcopr = (oprpassed) => {
    if (opr!= '' && opr!= ')' && oprpassed!= '(' && txtstr != '') {
        opr = oprpassed
        txtstr = display.innerText
        txtstr = txtstr.slice(0, -1);
        txtstr = txtstr.toString() + opr
        display.innerText = txtstr
    }
    else if ((opr == '' || opr== ')' || oprpassed== '(') && (txtstr != '')) {
        opr = oprpassed
        txtstr = display.innerText
        txtstr = txtstr.toString() + opr
        display.innerText = txtstr
    }
}

funcresult = () => {
    txtstr = display.innerText
    // txtstr.replaceAll('x','*')
    // txtstr.replaceAll('divide','/')///////////////////////////needswork
    ans = eval(txtstr);
    display.innerText = ans
    txtstr = ans
    txtlast = ans
    txtcurnt = ans
}

funcans = () => {
    txtstr = display.innerText
    txtstr = txtstr.toString() + ans
    display.innerText = txtstr
    opr = ''
}

funcdot = () => {
    txtstr = display.innerText
    for (let index = 0; index < txtstr.length; index++) {
        element = txtstr[index];
        if (element == '.') {
            dotend = true
        }
        if (element == '+' || element == '-' || element == '*' || element == '/' || element == '(' || element == ')') {
            dotend = false
        }
    }
    if (dotend == false) {
        dot = dots.innerText
        txtstr = txtstr.toString() + dot
        display.innerText = txtstr
    }
}

numbers.forEach(element => {
    element.parentElement.addEventListener("click", () => {
        no = element.innerText
        funcnum()
    })
});

operators.forEach(element => {
    element.parentElement.addEventListener("click", () => {
        funcopr(element.innerText)
    })
});

result.parentElement.addEventListener("click", () => {
    funcresult()
})

answer.parentElement.addEventListener("click", () => {
    funcans()
})

dots.parentElement.addEventListener("click", () => {
    funcdot()
});

allc.parentElement.addEventListener("click", () => {
    funcac()
});

c.parentElement.addEventListener("click", () => {
    funcc()
});

document.addEventListener("keydown", (elem) => {
    for (let index = 0; index < 10; index++) {
        if (elem.key == index) {
            no = elem.key
            funcnum()    
        }        
    }
    if (elem.key == '+' || elem.key == '-' || elem.key == '*' || elem.key == '/' || elem.key == '(' || elem.key == ')') {
        console.log('running')
        funcopr(elem.key)    
    }
    if (elem.key == '=' || elem.key == 'Enter') {
        funcresult()
    }
    if (elem.key == '.') {
        funcdot()
    }
    if (elem.key == 'Backspace') {
        funcc()
    }
    if (elem.key == 'Delete') {
        funcc()
    }
    
})