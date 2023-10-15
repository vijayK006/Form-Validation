import React,{useState} from 'react'

const Home = () => {
    const [name, setName] = useState("");
    const [alertname, setalertName] = useState("");



const save=(e)=>{
    const regname = /^[A-Za-z0-9.,\s]+$/;
    if (regname.test(name)) {
      setalertName("");
      e.preventDefault();

    } else if (!regname.test(name) && name === "") {
      setalertName("Please enter your name");
      e.preventDefault();
  
    } else {
      setalertName("Please enter the valid name");
      e.preventDefault();
  
    }
}

const clearForm = ()=>{
    setalertName('');
    setName('');
}

  return (
    <>
      <section className='container'>

        <div className='row'>
            <div className='col-lg-5'>
            <form onSubmit={save}>
  <div class="mb-3 mt-3">
    <label for="name" class="form-label">Name Validation</label>
    <input type="text" class="form-control" 
    id="name" 
    placeholder="Enter name" 
    name="fullname" 
    value={name} 
    onChange={(e)=>  setName(e.target.value)}/>
    <p style={{color:"red",fontSize:"11px", fontWeight:"500"}}>{alertname}</p>
  </div>
  {/* <div class="mb-3">
    <label for="pwd" class="form-label">Password:</label>
    <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pswd"/>
  </div> */}
 
  <input type="submit" class="btn btn-primary" value="Submit"/> &nbsp;&nbsp;
  <input type="reset" class="btn btn-primary" value="Clear / Reset" onClick={clearForm}/>
</form>
            </div>
        </div>
      </section>
    </>
  )
}

export default Home
