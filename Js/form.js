
function sendMail() {
    var params = {
        name: document.getElementById("name").value , 
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };

    const serviceID = "service_e7e9hf6";
    const templateID = "template_ivbc2uf";

    emailjs.send(serviceID,templateID,params)
    .then(
        res =>{
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "" ;
            console.log(res);
            alert("Your sent message succesfully");
        })
        .catch((err) => console.log(err));

}
