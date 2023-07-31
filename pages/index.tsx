import type { AppProps } from "next/app";
import Navbar from "./components/Navbar";
// import heading from "./components/heading";
import Heading from "./components/Heading";
import Dropdown from "./components/Dropdown";
import Button from "./components/Button";
import Card from "./components/Card";
import Footer from "./components/Footer";
import React, {useState} from "react";

// interface PropertyDetails {
//   title: string;
//   description: string;
//   price: string;
//   images: File[];
//   documents: File[];
//   city: string;
//   district: string;
//   propertyType: string;
// }
// interface PropertyLists {
//   properties : PropertyDetails;
// }


export default function Home() {

  // const [propertyDetails, setPropertyDetails] = useState<PropertyDetails>({
  //   title: '',
  //   description: '',
  //   price: '',
  //   images: [],
  //   documents: [],
  //   city: '',
  //   district: '',
  //   propertyType: '',

  // });

  

  let items1 = ["pokhara", "kathmandu", "Dharan", "Biratnagar", ""];
  let items = ["Gandaki", "Lumbini", "Bagmati", " Karnali", "koshi"];
  let items2 = ['house', 'Apartment', 'land', 'condo']
  return (
    <>
      <Navbar />
      <Heading />
      <div className="dropdown-ml"><Dropdown items={items} selectopt='select district' /> <Dropdown items={items1} selectopt='select city' /> <Dropdown items={items2} selectopt="select property type" /> <Button /></div>
      <div className='card-container'>

        <Card imageSrc="123.jpg" destination="#" />
        <Card imageSrc="123.jpg" destination="#" />
        <Card imageSrc="123.jpg" destination="#" />
        <Card imageSrc="123.jpg" destination="#" />
        <Card imageSrc="123.jpg" destination="#" />
        <Card imageSrc="123.jpg" destination="#" />
        <Card imageSrc="123.jpg" destination="#" />
        <Card imageSrc="123.jpg" destination="#" />
      </div>
      <Footer />
    </>
  );
}
