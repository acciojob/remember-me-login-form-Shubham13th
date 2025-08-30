const userName = document.getElementById('username');
    const password = document.getElementById('password');
    const RememberMe = document.getElementById('checkbox');
    const form = document.querySelector('form');
    const existingbtn = document.getElementById('existing');

    
    if (localStorage.getItem("username") && localStorage.getItem("password")) {
      existingbtn.style.display = "block";
    }

    
    form.addEventListener('submit', (e) => {
      e.preventDefault(); // prevent page reload

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
    });

   
    existingbtn.addEventListener('click', () => {
      const savedUser = localStorage.getItem("username");
      if (savedUser) {
        alert(`Logged in as saved ${savedUser}`);
      }
    });