		 const userName = document.getElementById('username');
        const password = document.getElementById('password');
        const submit = document.getElementById('submit');
        const RememberMe = document.getElementById('checkbox');
        const form = document.querySelector('form');
        const existingbtn = document.getElementById('existing');


        if (localStorage.getItem("username") && localStorage.getItem("password")) {
            existingbtn.style.display = "block";
        }


        form.addEventListener('submit', (e) => {
            if (userName.value && password.value) {
                alert(`Logged in as ${userName.value}`);
            }

            if (RememberMe.checked) {
                localStorage.setItem("username", userName.value);
                localStorage.setItem("password", password.value);
            } else {
                localStorage.removeItem("username");
                localStorage.removeItem("password");
            }

            if (localStorage.getItem("username")) {
                existingbtn.style.display = "block";
            } else {
                existingbtn.style.display = "none";
            }
        })

        existingbtn.addEventListener('click', () => {
            alert(`Logged in as saved ${localStorage.getItem(username)}`);
        })
