export const Createacountpage = () => { 

    return ( 
        <div className="create-main">
        <div className="create-form">
        <div className="create-box">
          <p>create acount</p>
          <form className="create-flex">
            <input className="create-name" type="text" placeholder=" enter Name" />
            <input
              className="creat-password"
              type="password"
              placeholder=" enter Name"
            />

            <input
              className="creat-reapetpasword"
              type="password"
              placeholder="re enter password"
            />

            <input className="create-email" type="text" placeholder="email" />

            <input
              className="create-reenteremail"
              type="text"
              placeholder="re enter email"
            />
          </form>

          <div className="send-massage">creat contact</div>
        </div>
      </div>

      </div>
    );
}