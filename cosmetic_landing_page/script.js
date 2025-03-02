document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let formData = new FormData(this);
    let name = formData.get("name");
    let phone = formData.get("phone");
    let product = formData.get("product");

    let telegramBotToken = "7557974630:AAG6xouAFCzRzR9q_c__hvUD9ga_AR1Ii_U";
    let chatId = "6125897758";

    let message = `📩 *Yangi buyurtma!*%0A👤 Ism: ${name}%0A📞 Telefon: ${phone}%0A🛍️ Mahsulot: ${product}`;

    fetch(`https://api.telegram.org/bot${telegramBotToken}/sendMessage?chat_id=${chatId}&text=${message}&parse_mode=Markdown`)
    .then(response => response.json())
    .then(data => {
        if (data.ok) {
            alert("Ma'lumot yuborildi!");
        } else {
            alert("Xatolik yuz berdi, iltimos qayta urinib ko'ring.");
        }
    })
    .catch(error => console.error(error));

    function toggleContactInfo() {
        const contactInfo = document.getElementById('contact-info');
        contactInfo.classList.toggle('show');
      }      

    this.reset();
});
