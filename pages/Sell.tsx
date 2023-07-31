import React, { useState, ChangeEvent, FormEvent, SetStateAction } from 'react';

interface PropertyDetails {
  title: string;
  description: string;
  price: string;
  images: File[];
  documents: File[];
  city: string;
  district: string;
  propertyType: string;
}

const Sell = () => {
  const [propertyDetails, setPropertyDetails] = useState<PropertyDetails>({
    title: '',
    description: '',
    price: '',
    images: [],
    documents: [],
    city: '',
    district: '',
    propertyType: '',

  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setPropertyDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []) as File[];
    setPropertyDetails((prevDetails) => ({
      ...prevDetails,
      images: [...prevDetails.images, ...files.slice(0, 10)],
    }));
  };

  const handleDocumentUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []) as File[];
    setPropertyDetails((prevDetails) => ({
      ...prevDetails,
      documents: [...prevDetails.documents, ...files.slice(0, 5)],
    }));
  };

  const handlePropertyTypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setPropertyDetails((prevDetails) => ({
      ...prevDetails,
      propertyType: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Perform form submission or data processing here
    console.log(propertyDetails);
  };

  return (
    <div>
      <h1>Sell Your Property</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={propertyDetails.title}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label className='dec' htmlFor="description">Description:</label>
          <textarea
            className='textarea'
            id="description"
            name="description"
            value={propertyDetails.description}
            onChange={handleInputChange}
          ></textarea>
        </div>

        <div>
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            name="price"
            value={propertyDetails.price}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="images">Images (Up to 10):</label>
          <input
            type="file"
            id="images"
            name="images"
            accept="image/*"
            multiple
            onChange={handleImageUpload}
          />
        </div>

        <div>
          <label htmlFor="documents">Documents (Up to 5):</label>
          <input
            type="file"
            id="documents"
            name="documents"
            accept="application/pdf, image/*"
            multiple
            onChange={handleDocumentUpload}
          />
        </div>

        <div>
          <label htmlFor="city">City:</label>
          <input
            type="text"
            id="city"
            name="city"
            value={propertyDetails.city}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="district">District:</label>
          <input
            type="text"
            id="district"
            name="district"
            value={propertyDetails.district}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="propertyType">Property Type:</label>
          <select
            id="propertyType"
            name="propertyType"
            value={propertyDetails.propertyType}
            onChange={handlePropertyTypeChange}
          >
            <option value="">Select Property Type</option>
            <option value="house">House</option>
            <option value="apartment">Apartment</option>
            <option value="condo">Condo</option>
            <option value="land">Land</option>
          </select>
        </div>

        <div>
          <h3>Selected Images:</h3>
          {propertyDetails.images.map((image, index) => (
            <img key={index} src={URL.createObjectURL(image)} alt={`Image ${index + 1}`} />
          ))}
        </div>

        <div>
          <h3>Selected Documents:</h3>
          {propertyDetails.documents.map((document, index) => (
            <div key={index}>
              <a href={URL.createObjectURL(document)} target="_blank" rel="noopener noreferrer">
                Document {index + 1}
              </a>
            </div>
          ))}
        </div>

        <button className='submit' type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Sell;
