import emailjs from "emailjs-com";


export const ContactForm = () => {
    const sendEmail = ((e) => {
        e.preventDefault();
    emailjs.sendForm('default_service', 'contact_template', e.target, 'user_Cs2W7BFFJbcNMbw8d0mW8')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
        document.getElementById("submit").style.display = "none";
        document.getElementById("sent").style.display = "block";
        document.getElementById("submit").value = "Sent!";
    })

    return(
            <form onSubmit={sendEmail} data-aos="fade-up" data-aos-duration="700" data-aos-offset="200" data-aos-delay="200" className="row p-0 mx-0 pb-5">
                        <div className="col-12 form-group mx-auto">
                            <input type="text" className="form-control" placeholder="Full Name" name="name" autoComplete="off"/>
                        </div>
                        <div className="col-12 col-md-6 form-group pt-2 mx-auto">
                            <input type="text" className="form-control" placeholder="Phone Number" name="phone" autoComplete="off"/>
                        </div>
                        <div className="col-12 col-md-6 form-group pt-2 mx-auto">
                            <input type="text" className="form-control" placeholder="Company Name" name="company" autoComplete="off"/>
                        </div>
                        <div className="col-12 form-group pt-2 mx-auto">
                            <input type="email" className="form-control" placeholder="Email Address" name="email" autoComplete="off"/>
                        </div>
                        <div className="col-12 form-group pt-2 mx-auto">
                            <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                        </div>
                        <div className="col-12 pt-3 mx-auto row justify-content-end">
                            <input id={"submit"} type="submit" className="btn btn-submit" value="Send Message &#10230;"></input>
                            <span id={"sent"} className="btn btn-submit sent">Sent!</span>
                        </div>
                </form>
    )
}