function sendMail(params) {
     var tempParams = {
          from_name: document.getElementById("subject").value,
          to_name: document.getElementById("name").value,
          message: document.getElementById("message").value,
          reply_to: document.getElementById("email").value,
     };

     emailjs.send('service_jdxtllp', 'template_03mvbap', tempParams).then(function (res) {
          console.log("successfully sent your mail...😀", res.status);
     })
}