function handlelogin(){
    const username=document.getElementById('user').value;
    const password=document.getElementById('pass').value;
    const errorMsg=document.getElementById('error');

    const LoginData=[
        {username:"keerthana",password:"keerth123"},
        {username:"pooja",password:"pass123"},
    ]

    const isValue=LoginData.some((user)=>user.username==username && user.password === password);

    if(isValue){
        window.location.href="flexbox.html"
        errorMsg.innerText="Login succesful"
    }
    else{
        errorMsg.innerText="Invalid credentials"
    }
}