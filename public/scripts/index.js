let loginBtn = document.querySelectorAll('#login');
let logoutBtn = document.querySelectorAll('#logout');
let profileBtn = document.querySelectorAll('.profile');
auth.onAuthStateChanged(user => {
    if(user) {
        console.log('User Logged In')
        loginBtn.forEach(btn => btn.style.display = 'none')
        logoutBtn.forEach(btn => btn.style.display = 'initial')
        profileBtn.forEach(btn => btn.style.display = 'initial')
    } else {
        console.log('User Logged Out')
        loginBtn.forEach(btn => btn.style.display = 'initial')
        logoutBtn.forEach(btn => btn.style.display = 'none')
        profileBtn.forEach(btn => btn.style.display = 'none')
    }
})

// logout
logoutBtn.forEach(btn => {
    btn.addEventListener('click', (e) => {
        auth.signOut().then(() => {
            window.location.href = './login.html'
            alert("You've been successfully Logged Out !!")
        }).catch(err => alert(err.message));
      });
})