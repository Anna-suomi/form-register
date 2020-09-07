import React,{Component} from 'react';




class Form extends Component{
render(){

    return(
        <section-2>
        <form className="register-form-wrapper">
            <div className="form-title">
                <h1>Log in to your account</h1>
            </div>
            <div className="form-control">
                <div className="form-input">
                <i class="far fa-user icon  "></i>
                <input type="text"className="inputfield" placeholder=" Username"/>
                </div>
                <div className="form-input">
                    <i class="fas fa-unlock icon "></i>
                    <input type="text"className="inputfield" placeholder="Password" />
                        <i class="far fa-eye icon-3 "></i>
                </div>
                <div className="checkbox">
                    <input type="checkbox"/>
                    <div>
                    <p>remember me</p>
                    </div>
                </div>
               
         <div>
            <a href="https://cardlist-test.netlify.app/" className="button">Login</a>
         </div> 
                
            </div>
        </form>
        </section-2>
    )
}
}

export default Form;
