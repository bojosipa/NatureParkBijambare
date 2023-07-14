function sendMail(){
    var params={
        from_name: document.getElementById("fullName").value,
        email_id: document.getElementById("email_id").value,
        subject_from: document.getElementById("subject").value,
        message: document.getElementById("message").value
    };
    const serviceID= "service_ruabgol";
    const templateID= "template_cle8wz4"

    emailjs
        .send(serviceID, templateID, params)
        .then((res) =>{
                document.getElementById("fullName").value ="";
                document.getElementById("email_id").value ="";
                document.getElementById("subject").value ="";
                document.getElementById("message").value ="";
                console.log(res);
                alert("Poruka je uspješno poslata.")
    })
    .catch((err) => console.log(err));
}

    
