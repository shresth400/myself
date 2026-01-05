function disclaimer() {
    const agree = confirm("Agree to the Creative Commons License?")
    if (agree){
        return
    }
    else{
        window.location.href = "https://creativecommons.org/licenses/"
    }
}

window.onload = disclaimer;