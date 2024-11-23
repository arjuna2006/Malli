import {useState} from 'react'

export default function Prodd() {
  const[pname,setPname]=useState("");
  const[pprice,setPprice]=useState("");
  const[pdescription,setPdescription]=useState("");
  const[submit,setSubmit]=useState(false);

  function handlePname(e){
    setPname(e.target.value);
  }
  function handlePprice(e){
    setPprice(e.target.value);
  }
  function handlePdescription(e){
    setPdescription(e.target.value);
  }
  function handleSubmit(e){
    e.preventDefault();
    console.log("Product name:",pname);
    console.log("Product Price:",pprice);
    console.log("product Description:",pdescription);
    console.log(`Produt ${pname}Added`);

    setSubmit(true);
    clearAll();
  }
  function clearAll(){
    setPname("");
    setPprice("");
    setPdescription("");
  }
  function handlesuccessMessage(){
    if(submit){
        return(
            <div>
                <p id='d1'>Product Added sccussfully</p>
            </div>
        );
    }
    
  }
  return(
    <div>
      <h1>Product Catalog</h1>
        <div className="form">
            <form onSubmit={handleSubmit}>
                <label htmlFor='Product Name'>Product Name</label>
                <input type='text' id='name' name='Product Name' value={pname}onChange={handlePname}required/><br></br>

                <label htmlFor='Product Price'>Product Price</label>
                <input type='number' id='price' name='Product Price' value={pprice}onChange={handlePprice}required/><br></br>

                <label htmlFor='Product Description'>Product Description</label>
                <input type='text' id='description' name='Product description' value={pdescription}onChange={handlePdescription}required/><br></br>

                <button id='btn' type='submit' >Added Product</button>
            </form>
        </div>
        <div id='d3'>
            {handlesuccessMessage()}
        </div>
    </div>
  );
}
