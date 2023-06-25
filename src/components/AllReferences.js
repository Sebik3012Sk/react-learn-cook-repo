import React , { useEffect, useState } from "react";
import "./AllReferences.css";
import { projectFirestore } from "../firebase/config";
import BackToHome from "./BackToHome";
import data_images from "../data_images";




const AllReferences = () => {
  const [references, setReferences] = useState([]);

  useEffect(() => {
    projectFirestore
      .collection("form-data")
      .get()
      .then((snapshot) => {
        const referencesData = snapshot.docs.map((doc) => doc.data());
        setReferences(referencesData);
      });
  }, []);

  return (
    <div>

      <h2 className="references-header-text">References From Our Clients</h2>  

      {references.map((reference, index) => (
        <div className="div-references" key={index}>
          
          <div className="beetween-div">
            <img className="image-account" src={data_images[10].image} alt="" />
            <p className="username-data">{reference.firstnameValue} {reference.lastnameValue}</p>
            <p className="date-reference">{reference.date}</p>
          </div>

          <p className="reference-data">{reference.referenceData}</p>  

        </div>
      ))}

      <BackToHome />

    </div>
  );
};

export default AllReferences;