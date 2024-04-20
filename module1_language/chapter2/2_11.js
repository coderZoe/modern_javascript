let userName = prompt("Who is there")
if (userName) {
    if (userName === "Admin") {
        let password = prompt("Password?")
        if (password) {
            if (password === "TheMaster") {
                alert("Welcome")
            } else {
                alert("Wrong Password")
            }
        }

    } else {
        alert("I do not know you")
    }
}