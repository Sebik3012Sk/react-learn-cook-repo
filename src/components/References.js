import "./References.css";
import { useState } from "react";
import { projectFirestore } from "../firebase/config";
import AllReferencesButton from "./AllReferencesButton";

const References = () => {

  const [firstnameValue, setFirstnameValue] = useState("");
  const [lastnameValue, setLastnameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [referenceValue , setReferenceValue] = useState("");

  const formReferenceSubmitHandler = (e) => {

    e.preventDefault();

    const date = new Date();

    const result_form_object = {
      firstnameValue: firstnameValue,
      lastnameValue: lastnameValue,
      emailValue: emailValue,
      referenceData : referenceValue,
      date : date.toLocaleDateString()
    }

    projectFirestore.collection("form-data").add(result_form_object);

    alert("Succesfully send data to database");
  }

  return (
    <div className="form-group">
        <div className="container">
            <form onSubmit={formReferenceSubmitHandler} id="form-refences" action="">

                <h2 className="references-text">References</h2>

                <input type="text" placeholder="Enter Your firstname" onChange={ (e) => setFirstnameValue(e.target.value) }/> <br />
                <input type="text" placeholder="Enter Your lastname" onChange={ (e) => setLastnameValue(e.target.value) }/>
                <input type="email" placeholder="enter your email" onChange={ (e) => setEmailValue(e.target.value) }/>
                <textarea cols="30" rows="8" onChange={ (e) => setReferenceValue(e.target.value)}></textarea>
                <button className="button-submit" type="submit">Odeslat Recenzi</button>
                <AllReferencesButton />
            </form>
        </div>

    </div>
  )
}

export default References