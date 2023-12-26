import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

function AddProduct() {
  const baseUrl = "http://localhost:2013/max-garage/api/cars";
  //Product Important Details
  const [carImages, setCarImages] = useState([]);
  const [carBrandMake, setCarBrandMake] = useState("");
  const [carModel, setcarModel] = useState("");
  const [carRegisteredIn, setcarRegisteredIn] = useState("");
  const [carColor, setcarColor] = useState("");
  const [carYearModel, setcarYearModel] = useState("");
  const [carFuelType, setcarFuelType] = useState("");
  const [carBodyType, setcarBodyType] = useState("");
  const [carTransmissionType, setcarTransmissionType] = useState("");
  const [carMileage, setcarMileage] = useState("");
  const [carAssembled, setcarAssembled] = useState("");
  const [carEngineCapacity, setcarEngineCapacity] = useState("");

  //Product Authorization
  const [carDocuments, setcarDocuments] = useState("");
  const [carTaxPaid, setcarTaxPaid] = useState("");
  const [carCondition, setcarCondition] = useState("");

  //Product Features
  const [carAirConditionerAndHeater, setcarAirConditionerAndHeater] =
    useState("");
  const [carRadio, setCarRadio] = useState("");
  const [carSpeaker, setCarSpeaker] = useState("");
  const [carCdPlayer, setCarCdPlayer] = useState("");
  const [carPowerSteering, setCarPowerSteering] = useState("");
  const [carPowerWindows, setCarPowerWindows] = useState("");
  const [carAutomaticDoors, setCarAutomaticDoors] = useState("");
  const [carAlloyRims, setCarAlloyRims] = useState("");
  const [carRearCamera, setCarRearCamera] = useState("");
  const [carNavigation, setCarNavigation] = useState("");
  const [carKeyLessEntry, setCarKeyLessEntry] = useState("");
  const [carSunRoof, setCarSunRoof] = useState("");
  const [carDvdPlayer, setCarDvdPlayer] = useState("");
  const [carAppleCarPlay, setCarAppleCarPlay] = useState("");
  const [carParkingSensors, setCarParkingSensors] = useState("");
  const [carMobileWireLessCharging, setCarMobileWireLessCharging] =
    useState("");

  //Extra Features
  const [carAllGenuine, setCarAllGenuine] = useState("");
  const [carModified, setCarModified] = useState("");

  //Featuring
  const [carIsFeatured, setCarIsFeatured] = useState("");
  const [carIsPopularDeal, setCarIsPopularDeal] = useState("");

  //keywords
  const [carKeyWords, setCarKeyWords] = useState("");

  //Owner details
  const [carOwnerNumber, setCarOwnerNumber] = useState("");
  const [carOwnerName, setCarOwnerName] = useState("");
  const [carOwnerEmail, setCarOwnerEmail] = useState("");

  useEffect(() => {
    async function AddProduct(e) {
      e.preventDefault();

      const formData = new FormData();
      formData.append("carImages", carImages);
      formData.append("carBrandMake", carBrandMake);
      formData.append("carModel", carModel);
      formData.append("carRegisteredIn", carRegisteredIn);
      formData.append("carColor", carColor);
      formData.append("carYearModel", carYearModel);
      formData.append("carFuelType", carFuelType);
      formData.append("carBodyType", carBodyType);
      formData.append("carTransmissionType", carTransmissionType);
      formData.append("carMileage", carMileage);
      formData.append("carAssembled", carAssembled);
      formData.append("carEngineCapacity", carEngineCapacity);

      formData.append("carDocuments", carDocuments);
      formData.append("carTaxPaid", carTaxPaid);
      formData.append("carCondition", carCondition);

      formData.append("carAirConditionerAndHeater", carAirConditionerAndHeater);
      formData.append("carRadio", carRadio);
      formData.append("carSpeaker", carSpeaker);
      formData.append("carCdPlayer", carCdPlayer);
      formData.append("carPowerSteering", carPowerSteering);
      formData.append("carPowerWindows", carPowerWindows);
      formData.append("carAutomaticDoors", carAutomaticDoors);
      formData.append("carAlloyRims", carAlloyRims);
      formData.append("carRearCamera", carRearCamera);
      formData.append("carNavigation", carNavigation);
      formData.append("carKeyLessEntry", carKeyLessEntry);
      formData.append("carKeyLessEntry", carKeyLessEntry);
      formData.append("carSunRoof", carSunRoof);
      formData.append("carDvdPlayer", carDvdPlayer);
      formData.append("carAppleCarPlay", carAppleCarPlay);
      formData.append("carParkingSensors", carParkingSensors);
      formData.append("carMobileWireLessCharging", carMobileWireLessCharging);

      formData.append("carAllGenuine", carAllGenuine);
      formData.append("carAllGenuine", carAllGenuine);

      formData.append("carIsFeatured", carIsFeatured);

      formData.append("carIsPopularDeal", carIsPopularDeal);
      formData.append("carKeyWords", carKeyWords);

      formData.append("carOwnerNumber", carOwnerNumber);
      formData.append("carOwnerName", carOwnerName);
      formData.append("carOwnerEmail", carOwnerEmail);
      
      const response = await axios.post(baseUrl, {
        // formData
      });
    }
  }, []);


  //file handeling

   const handleFileChange = (event) => {
    const files = event.target.files;

    if (files.length > 0) {
      const validFiles = Array.from(files).filter((file) =>
        file.type.startsWith("image/")
      );

      if (validFiles.length >= 3 && validFiles.length <= 10) {
        setCarImages(validFiles);
      } else {
        toast.warning("Please select between 3 and 10 valid images");
      }
    } else {
      setCarImages([]);
    }
  };
  const handleDeleteImage = (index) => {
    setCarImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };
  return (
    <div className="pt-28 px-24 pr-5">
      <form method="POST" className="px-5 py-3" onSubmit={AddProduct}>
        <h1 className="titleMain px-8 items-center">Add Product</h1>
        <div className="carImportantDetails">
          <div className="flex flex-column w-72 ">
            <label htmlFor="carImages" className="text-gray-500">
              Choose at least 3 images (MAX-10 and 3MB-Each)
            </label>
            <input
              type="file"
              name="carImages"
              id="carImages"
              onChange={handleFileChange}
              accept="image/*"
              max={10}
              min={3}
              multiple
              className="w-52 hover:scale-105"
            />
          </div>
          <div className="previewCarousel flex flex-wrap w-72 justify-around px-4 ">

          {carImages.map((image, index) => (
            <div key={index} className="imgPreviewContainer flex w-32 flex-row wrap">
            <img
              key={index}
              src={URL.createObjectURL(image)}
              alt={`Car Image ${index + 1}`}
              className="w-24 rounded py-1"
              
            />
            <button
                type="button"
                onClick={() => handleDeleteImage(index)}
                className="delete-button absolute flex"
              >
                ❌
              </button>
            </div>
          ))}
       
          </div>
        </div>

        <input type="submit" value="Add Product" className="btn-primary "/>
      </form>
    </div>
  );
}

export default AddProduct;
