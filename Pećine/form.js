function sendMail(){
    var params={
        name: document.getElementById("name").value,
        mail: document.getElementById("mail").value,
        day: document.getElementById("day").value,
        hour: document.getElementById("hour").value,
        persons: document.getElementById("persons").value
    };
    const serviceID= "service_ruabgol";
    const templateID= "template_380y9wl"

    emailjs
        .send(serviceID, templateID, params)
        .then((res) =>{
                document.getElementById("name").value ="";
                document.getElementById("mail").value ="";
                document.getElementById("day").value ="";
                document.getElementById("hour").value ="";
                document.getElementById("persons").value ="";
                console.log(res);
                alert("Poruka je uspješno poslata.")
    })
    .catch((err) => console.log(err));
}