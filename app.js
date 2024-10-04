const container = document.getElementById('container');
const trynow2Btn = document.getElementById('trynow2');
const trynow1Btn = document.getElementById('trynow1');


trynow2Btn.addEventListener('click', () => {
    container.classList.add("active");
});


trynow1Btn.addEventListener('click', () => {
    container.classList.remove("active");
});
function login1btnAction(event) {
    event.preventDefault();
    const validEmail = "admin@example.com";
    const validPassword = "password123";

    let email = document.getElementById('email1').value;
    let password = document.getElementById('password1').value;

    
    if (email === validEmail && password === validPassword) {
        
        window.location.href = "home.html";
    } else {
        alert("Invalid email or password");
    }
}
function login2btnAction(event) {
    event.preventDefault();
    const validEmail = "cashier@example.com";
    const validPassword = "password123";

    let email = document.getElementById('email2').value;
    let password = document.getElementById('password2').value;

    
    if (email === validEmail && password === validPassword) {
        
        window.location.href = "oder.html";
    } else {
        alert("Invalid email or password");
    }
}
function addCashier(){
    console.log("Button clicked"); 
    newusername=document.getElementById("name").value.trim();
    newpassword=document.getElementById("password").value.trim();

    if (newusername === "" || newpassword === "") {
        console.log("Username or password cannot be empty.");
        return;
    }

    
    let cashiers = JSON.parse(localStorage.getItem('cashiers')) || [];

    
    const existingCashier = cashiers.find(cashier => cashier.username === newusername);
    if (existingCashier) {
       
        console.log("Cashier username already exists.");
        return;
    }

    
    cashiers.push({ username: newusername, password: newpassword });

    
    localStorage.setItem('cashiers', JSON.stringify(cashiers));

    console.log("Cashier Added Successfully");
    console.log("Username:", newusername);
    console.log("Password:", newpassword);
    
}