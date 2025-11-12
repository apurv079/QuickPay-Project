const form = document.getElementById('createaccountform');

form.addEventListener('submit', function (event) {
    event.preventDefault();

const name = document.getElementById('username').value.trim();
const email = document.getElementById('email').value.trim();
const mobile = document.getElementById('mobile').value.trim();


if (!name || !email || !mobile){
    alert('⚠️ Please fill in all required fields.');
    return;
}

if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
    alert('⚠️ Please enter a valid email address.');
    return;
}

if (!/^\d{10}$/.test(mobile)){
    alert('⚠️ Please enter a valid 10-digit mobile number.');
    return;
}

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Mobile:", mobile);

    alert(`Welcome ${name}!✅ Account created successfully!`);
    window.location.href = window.location.origin + "../index.html";


    form.reset();
});