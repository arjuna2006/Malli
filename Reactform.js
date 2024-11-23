import React, {useState} from 'react'

export default function Reactform() {
    const[name, setName]=useState("");
    const[id,setId]=useState("");
    const[password,setPassword]=useState("");
    const[submit,steSubmit]=useState(false);

    function handleName(e){
        setName(e.target.value);

    }
    function handleId(e){
        setId(e.target.value);
    }
    function handlePassword(e){
        setPassword(e.target.value);
    }
    function handleSubmit(e){
        e.preventDefault();
        if(name===''|| id=== ''|| password===''){
            alert("please enter all fileds");
        }else{
            steSubmit(true);
            clearAll();
        }

    }
    function clearAll(){
        setName("");
        setId("");
        setPassword("");
    }
    function successMessage(){
        if(submit){
            return(
                <div>
                    <p id='d1'>User {name} Registration successfully</p>
                </div>
            );
        }

    }
    return(
        <div>
            <div className='form'>
                <form onSubmit={handleSubmit}>
                    <div id='d21'>
                        <p>Sign-Up</p>
                    </div>
                    <label htmlFor='UseName'>User Name</label>
                    <input type='text' id='name' name='UseName' value={name}onChange={handleName}/><br></br><br></br>

                    <label htmlFor='UserId'>User E-mail</label>
                    <input type='text' id='email' name='UserId' value={id}onChange={handleId}/><br></br><br></br>

                    <label htmlFor='Password'>Password</label>
                    <input type='password' id='psw' name='Password' value={password}onChange={handlePassword}/><br></br><br></br>
                    <button type='submit' id='btn' >Create Account</button>
                </form>
            </div>
            <div id='success'>
                {successMessage()}
            </div>
        </div>
    )

  
}
