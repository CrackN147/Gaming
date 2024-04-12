export const Contactpage = () => {

    return ( 
 

        <div className="Main-contact">
        <div className="main-form">
        <div className="form-box">
          <p>contact us</p>
          <form className="contact-flex">
            <input className="contact-name" type="text" placeholder="Name" />

            <input className="contact-email" type="text " placeholder="E mail" />

            <input
              className="contact-massage"
              type="text"
              placeholder="enter text"
            />
          </form>

          <div className="send-massage">send your massage</div>
        </div>
      </div>
      </div>
      
    );
}