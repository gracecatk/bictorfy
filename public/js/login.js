document.querySelectorAll('.form input, .form textarea').forEach(function (element) {
    element.addEventListener('keyup', function (e) {
        var label = this.previousElementSibling;
        if (e.type === 'keyup') {
            if (this.value === '') {
                label.classList.remove('active', 'highlight');
            } else {
                label.classList.add('active', 'highlight');
            }
        }
    });

    element.addEventListener('blur', function () {
        var label = this.previousElementSibling;
        if (this.value === '') {
            label.classList.remove('active', 'highlight');
        } else {
            label.classList.remove('highlight');
        }
    });

    element.addEventListener('focus', function () {
        var label = this.previousElementSibling;
        if (this.value === '') {
            label.classList.remove('highlight');
        } else {
            label.classList.add('highlight');
        }
    });
});

document.querySelectorAll('.tab a').forEach(function (element) {
    element.addEventListener('click', function (e) {
        e.preventDefault();
        var parent = this.parentElement;
        parent.classList.add('active');
        Array.from(parent.parentElement.children).forEach(function (sibling) {
            if (sibling !== parent) {
                sibling.classList.remove('active');
            }
        });

        var target = this.getAttribute('href');
        document.querySelectorAll('.tab-content > div').forEach(function (div) {
            if (div !== document.querySelector(target)) {
                div.style.display = 'none';
            }
        });

        document.querySelector(target).style.display = 'block';
    });
});




  const loginFormHandler = async (event) => {
    event.preventDefault()
    const usernameLogin = document.querySelector('#usernameLogin').value.trim()
    const passwordLogin = document.querySelector('#passwordLogin').value.trim()

    const login = await fetch('/api/user/login', {
        method: "POST",
        body: JSON.stringify({
            username: usernameLogin,
            password: passwordLogin,
        }),
        headers: {"Content-Type": "application/json"}
    });
    if(login.ok) {
        document.location.replace("/home")
    }
  }
  const signupFormHandler = async (event) => {
    event.preventDefault()
    const usernameSignup = document.querySelector('#usernameSignup').value.trim()
    const passwordSignup = document.querySelector('#passwordSignup').value.trim()

    const signup = await fetch('/api/user', {
        method: "POST",
        body: JSON.stringify({
            username: usernameSignup,
            password: passwordSignup,
        }),
        headers: {"Content-Type": "application/json"}
    });
    if(signup.ok) {
        document.location.replace("/home")
    }
  }

  document.querySelector('#login').addEventListener('submit',loginFormHandler);
  document.querySelector('#signup').addEventListener('submit',signupFormHandler);
