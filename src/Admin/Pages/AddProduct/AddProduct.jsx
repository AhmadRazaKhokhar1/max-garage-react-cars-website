import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

function AddProduct() {
  const token = localStorage.getItem("authTokenJWT");

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
  const [carEngineCapacity, setCarEngineCapacity] = useState("");

  //Product Authorization
  const [carDocuments, setcarDocuments] = useState("");
  const [carTaxPaid, setcarTaxPaid] = useState("");
  const [carCondition, setcarCondition] = useState("");

  //Product Features
  const [carAirConditionerAndHeater, setcarAirConditionerAndHeater] =
    useState("");
  const [carRadio, setCarRadio] = useState("");
  const [carSpeaker, setCarSpeaker] = useState("");
  const [carCdAndDvdPlayer, setCarCdAndDvdPlayer] = useState("");
  const [carPowerSteering, setCarPowerSteering] = useState("");
  const [carPowerWindows, setCarPowerWindows] = useState("");
  const [carAutomaticDoors, setCarAutomaticDoors] = useState("");
  const [carAlloyRims, setCarAlloyRims] = useState("");
  const [carFrontCamera, setCarFrontCamera] = useState("");
  const [carBackCamera, setCarBackCamera] = useState("");
  const [carNavigation, setCarNavigation] = useState("");
  const [carKeyLessEntry, setCarKeyLessEntry] = useState("");
  const [carSunRoof, setCarSunRoof] = useState("");
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

  async function addProductToDB(e) {
    e.preventDefault();
try {
 
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
    formData.append("carPowerSteering", carPowerSteering);
    formData.append("carPowerWindows", carPowerWindows);
    formData.append("carAutomaticDoors", carAutomaticDoors);
    formData.append("carAlloyRims", carAlloyRims);
    formData.append("carFrontCamera", carFrontCamera);
    formData.append("carBackCamera", carBackCamera);
    formData.append("carNavigation", carNavigation);
    formData.append("carCdAndDvdPlayer", carCdAndDvdPlayer);
    formData.append("carKeyLessEntry", carKeyLessEntry);
    formData.append("carSunRoof", carSunRoof);
    formData.append("carAppleCarPlay", carAppleCarPlay);
    formData.append("carParkingSensors", carParkingSensors);
    formData.append("carMobileWireLessCharging", carMobileWireLessCharging);

    formData.append("carAllGenuine", carAllGenuine);
    formData.append("carModified", carModified);

    formData.append("carIsFeatured", carIsFeatured);

    formData.append("carIsPopularDeal", carIsPopularDeal);
    formData.append("carKeyWords", carKeyWords);

    formData.append("carOwnerNumber", carOwnerNumber);
    formData.append("carOwnerName", carOwnerName);
    formData.append("carOwnerEmail", carOwnerEmail);

    const response = await axios.post(baseUrl, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(response);
  
  // useEffect(() => {}, []);
 
} catch (error) {
  toast.error(error.response.message);
  console.log(error)
}
  }  
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

  //colapse
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  return (
    <div className="pt-28 px-24 pr-5">
      <br />
      <h1
        className="titleMain px-8 items-center w-96"
        style={{ width: "300px" }}
      >
        Add Product
      </h1>
      <hr />
      <form
        method="POST"
        className="px-5 py-3 felx-wrap shadow-2xl"
        onSubmit={addProductToDB}
        encType="multipart/form-data"
      >
        <div className="flex w-full shadow-2xl  felx-wrap">
          <div className="carImportantDetails w-84 shadow-inner flex-wrap">
            <div className="flex flex-column w-68">
              <label htmlFor="carImages" className="text-gray-500 text-sm">
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
            <div className="previewCarousel flex flex-wrap w-68 justify-around px-4 ">
              {carImages.map((image, index) => (
                <div
                  key={index}
                  className="imgPreviewContainer flex w-32 flex-row wrap"
                >
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

            <div
              className="flex items-center justify-between bg-gray-200 p-2 cursor-pointer w-80"
              onClick={toggleCollapse}
            >
              <span>Car Important Details</span>
              <span
                className={`transform ${
                  isCollapsed ? "rotate-0" : "rotate-180"
                } transition-transform`}
              >
                &#9650;
              </span>
            </div>
            <div
              className={`overflow-hidden w-80 transition-max-height duration-500 ease-in-out ${
                isCollapsed ? "max-h-0" : "max-h-screen"
              }`}
            >
              <div className="bg-gray-300 p-4">
                <div className="flex">
                  <label className="text-sm" htmlFor="carMake">
                    Car Make
                  </label>
                  <input
                    type="text"
                    name="carMake"
                    className="rounded capitalize w-52 my-1 text-xs"
                    placeholder="Toyota etc,."
                    onChange={(e) => setCarBrandMake(e.target.value)}
                  />
                </div>
                <div className="flex">
                  <label className="text-sm" htmlFor="carModel">
                    Car Model
                  </label>
                  <input
                    type="text"
                    name="carModel"
                    className="rounded capitalize w-52 my-1 text-xs"
                    placeholder="Grande etc,."
                    onChange={(e) => setcarModel(e.target.value)}
                  />
                </div>
                <div className="flex">
                  <label className="text-sm" htmlFor="carRegisteredIn">
                    Registered in
                  </label>
                  <select
                    name="carRegisteredIn"
                    className=" rounded w-52 my-1 text-xs"
                    onChange={(e) => setcarRegisteredIn(e.target.value)}
                  >
                    <option value="Punjab" defaultChecked>
                      Punjab
                    </option>
                    <option value="KPK">KPK</option>
                    <option value="Baloachistan">Baloachistan</option>
                    <option value="Sindh">Sindh</option>
                    <option value="Gilgit Baltistan">Gilgit Baltistan</option>
                  </select>
                </div>
                <div className="flex">
                  <label className="text-sm" htmlFor="carColor">
                    Color
                  </label>
                  <input
                    type="text"
                    name="carColor"
                    className="roundedcapitalize  w-52 my-1 text-xs"
                    placeholder="Black etc,."
                    onChange={(e) => setcarColor(e.target.value)}
                  />
                </div>
                <div className="flex">
                  <label className="text-sm" htmlFor="carModelYear">
                    Model Year
                  </label>
                  <input
                    type="number"
                    name="carModelYear"
                    className="roundecapitalize d w-52"
                    placeholder="2019 etc,."
                    min={1940}
                    max={2025}
                    onChange={(e) => setcarYearModel(e.target.value)}
                  />
                </div>
                <div className="flex">
                  <label className="text-sm" htmlFor="carFuelType">
                    Fuel Type
                  </label>
                  <select
                    name="carFuelType"
                    className="rounded w-52 my-1 text-xs"
                    onChange={(e) => setcarFuelType(e.target.value)}
                  >
                    <option value="Petrol" defaultChecked>
                      Petrol
                    </option>
                    <option value="Diesel">Diesel</option>
                    <option value="Electric">Electric</option>
                    <option value="Hybrid">Hybrid</option>
                  </select>
                </div>
                <div className="flex">
                  <label className="text-sm" htmlFor="carBodyType">
                    Body Type
                  </label>
                  <select
                    name="carBodyType"
                    className="rounded w-52 my-1 text-xs"
                    onChange={(e) => setcarBodyType(e.target.value)}
                  >
                    <option value="Luxury" defaultChecked>
                      Luxury
                    </option>
                    <option value="Sports">Sports</option>
                    <option value="Sedan">Sedan</option>
                    <option value="SUV">SUV</option>
                    <option value="Truck">Truck</option>
                  </select>
                </div>
                <div className="flex">
                  <label className="text-sm" htmlFor="carCondition">
                    Condition
                  </label>
                  <select
                    name="carCondition"
                    className="rounded w-52 my-1 text-xs"
                    onChange={(e) => setcarCondition(e.target.value)}
                  >
                    <option value="Luxury" defaultChecked>
                      New
                    </option>
                    <option value="Sports">Used</option>
                    <option value="Sedan">Used Like New</option>
                    <option value="SUV">Damaged</option>
                  </select>
                </div>
                <div className="flex">
                  <label className="text-sm" htmlFor="carTransmissionType">
                    Transmission
                  </label>
                  <select
                    name="carTransmissionType"
                    className="rounded w-52 my-1 text-xs"
                    onChange={(e) => setcarTransmissionType(e.target.value)}
                  >
                    <option
                      value="Manual"
                      className="rounded w-52"
                      defaultChecked
                    >
                      Manual
                    </option>
                    <option value="Automatic" className="rounded w-52">
                      Automatic
                    </option>
                  </select>
                </div>

                <div className="flex">
                  <label className="text-sm" htmlFor="carAssembled">
                    Assembled
                  </label>
                  <select
                    name="carAssembled"
                    className="rounded w-52 my-1 text-xs"
                    onChange={(e) => setcarAssembled(e.target.value)}
                  >
                    <option
                      value="Imported"
                      className="rounded w-52"
                      defaultChecked
                    >
                      Imported
                    </option>
                    <option value="Local" className="rounded w-52">
                      Local
                    </option>
                  </select>
                </div>
                <div className="flex">
                  <label className="text-sm" htmlFor="carMileage">
                    Mileage
                  </label>
                  <input
                    type="number"
                    name="carMileage"
                    className="rounded capitalize w-52 my-1 text-xs"
                    placeholder="4500KM etc,."
                    min={0}
                    onChange={(e) => setcarMileage(e.target.value)}
                  />
                </div>
                <div className="flex">
                  <label className="text-sm" htmlFor="carEngineCapacity">
                    Engine Capacity
                  </label>
                  <input
                    type="text"
                    name="carEngineCapacity"
                    className="rounded capitalize w-52 my-1 text-xs"
                    placeholder="2000cc etc,."
                    min={550}
                    max={12000}
                    onChange={(e) => setCarEngineCapacity(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* feature  */}
          <div className="carFeatures w-full shadow-inner p-10 rounded">
            <h1 className="font-extrabold text-lg"> Car Features</h1>
            <div className="flex flex-wrap">
              <div className="flex p-2 ml-1 justify-between w-36">
                <label className="text-sm" htmlFor="carModelYear">
                  Documents
                </label>
                <input
                  type="checkbox"
                  name="carModelYear"
                  className="rounded w-6 px-1 my-1 text-xs"
                  onChange={() => setcarDocuments(!carDocuments)}
                />
              </div>

              <div className="flex p-2 ml-1 justify-between w-36">
                <label className="text-sm" htmlFor="carModelYear">
                  Tax & Duty Paid
                </label>
                <input
                  type="checkbox"
                  name="carModelYear"
                  className="rounded w-6 px-1 my-1 text-xs"
                  onChange={(e) => setcarTaxPaid(!carTaxPaid)}
                />
              </div>
              <div className="flex p-2 ml-1 justify-between w-36">
                <label className="text-sm" htmlFor="carAirConditionerAndHeater">
                  AC/Heater
                </label>
                <input
                  type="checkbox"
                  name="carAirConditionerAndHeater"
                  className="rounded capitalize w-6 px-1 my-1 text-xs"
                  placeholder="Grande etc,."
                  onChange={(e) =>
                    setcarAirConditionerAndHeater(!carAirConditionerAndHeater)
                  }
                />
              </div>
              <div className="flex p-2 ml-1 justify-between w-36">
                <label className="text-sm" htmlFor="carRadio">
                  Radio
                </label>
                <input
                  type="checkbox"
                  name="carRadio"
                  className="rounded capitalize w-6 px-1 my-1 text-xs"
                  placeholder="Grande etc,."
                  onChange={() => setCarRadio(!carRadio)}
                />
              </div>

              <div className="flex p-2 ml-1 justify-between w-36">
                <label className="text-sm" htmlFor="carSpeaker">
                  Speakers/Sound System
                </label>
                <input
                  type="checkbox"
                  name="carSpeaker"
                  className="rounded capitalize w-6 px-1 my-1 text-xs"
                  onChange={() => setCarSpeaker(!carSpeaker)}
                />
              </div>
              <div className="flex p-2 ml-1 justify-between w-36">
                <label className="text-sm" htmlFor="carCdPlayer">
                  CD & DVD Player
                </label>
                <input
                  type="checkbox"
                  name="carCdPlayer"
                  className="rounded capitalize w-6 px-1 my-1 text-xs"
                  onChange={() => setCarCdAndDvdPlayer(!carCdAndDvdPlayer)}
                />
              </div>
              <div className="flex p-2 ml-1 justify-between w-36">
                <label className="text-sm" htmlFor="carPowerSteering">
                  Power Steering
                </label>
                <input
                  type="checkbox"
                  name="carPowerSteering"
                  className="rounded capitalize w-6 px-1 my-1 text-xs"
                  onChange={() => setCarPowerSteering(!carPowerSteering)}
                />
              </div>
              <div className="flex p-2 ml-1 justify-between w-36">
                <label className="text-sm" htmlFor="carPowerWindows">
                  Power Windows
                </label>
                <input
                  type="checkbox"
                  name="carPowerWindows"
                  className="rounded capitalize w-6 px-1 my-1 text-xs"
                  onChange={() => setCarPowerWindows(!carPowerWindows)}
                />
              </div>
              <div className="flex p-2 ml-1 justify-between w-36">
                <label className="text-sm" htmlFor="carAutomaticDoors">
                  Automatic Doors
                </label>
                <input
                  type="checkbox"
                  name="carAutomaticDoors"
                  className="rounded capitalize w-6 px-1 my-1 text-xs"
                  onChange={() => setCarAutomaticDoors(!carAutomaticDoors)}
                />
              </div>
              <div className="flex p-2 ml-1 justify-between w-36">
                <label className="text-sm" htmlFor="carAlloyRims">
                  Alloy & Rims
                </label>
                <input
                  type="checkbox"
                  name="carAlloyRims"
                  className="rounded capitalize w-6 px-1 my-1 text-xs"
                  onChange={() => setCarAlloyRims(!carAlloyRims)}
                />
              </div>
              <div className="flex p-2 ml-1 justify-between w-36">
                <label className="text-sm" htmlFor="carFrontCamera">
                  Front Camera
                </label>
                <input
                  type="checkbox"
                  name="carFrontCamera"
                  className="rounded capitalize w-6 px-1 my-1 text-xs"
                  onChange={() => setCarFrontCamera(!carFrontCamera)}
                />
              </div>
              <div className="flex p-2 ml-1 justify-between w-36">
                <label className="text-sm" htmlFor="carBackCamera">
                  Back Camera
                </label>
                <input
                  type="checkbox"
                  name="carBackCamera"
                  className="rounded capitalize w-6 px-1 my-1 text-xs"
                  onChange={() => setCarBackCamera(carBackCamera)}
                />
              </div>
              <div className="flex p-2 ml-1 justify-between w-36">
                <label className="text-sm" htmlFor="carNavigation">
                  Navigation
                </label>
                <input
                  type="checkbox"
                  name="carNavigation"
                  className="rounded capitalize w-6 px-1 my-1 text-xs"
                  onChange={() => setCarNavigation(!carNavigation)}
                />
              </div>
              <div className="flex p-2 ml-1 justify-between w-36">
                <label className="text-sm" htmlFor="carKeyLessEntry">
                  Keyless Entry
                </label>
                <input
                  type="checkbox"
                  name="carKeyLessEntry"
                  className="rounded capitalize w-6 px-1 my-1 text-xs"
                  onChange={() => setCarKeyLessEntry(!carKeyLessEntry)}
                />
              </div>
              <div className="flex p-2 ml-1 justify-between w-36">
                <label className="text-sm" htmlFor="carSunRoof">
                  Sun Roof
                </label>
                <input
                  type="checkbox"
                  name="carSunRoof"
                  className="rounded capitalize w-6 px-1 my-1 text-xs"
                  onChange={() => setCarSunRoof(!carSunRoof)}
                />
              </div>

              <div className="flex p-2 ml-1 justify-between w-36">
                <label className="text-sm" htmlFor="carAppleCarPlay">
                  Apple Car Play
                </label>
                <input
                  type="checkbox"
                  name="carAppleCarPlay"
                  className="rounded capitalize w-6 px-1 my-1 text-xs"
                  onChange={() => setCarAppleCarPlay(!carAppleCarPlay)}
                />
              </div>

              <div className="flex p-2 ml-1 justify-between w-36">
                <label className="text-sm" htmlFor="carParkingSensors">
                  Parking Sensors
                </label>
                <input
                  type="checkbox"
                  name="carParkingSensors"
                  className="rounded capitalize w-6 px-1 my-1 text-xs"
                  onChange={() => setCarParkingSensors(!carParkingSensors)}
                />
              </div>

              <div className="flex p-2 ml-1 justify-between w-36">
                <label className="text-sm" htmlFor="carMobileWireLessCharging">
                  Wireless Mobile Charging
                </label>
                <input
                  type="checkbox"
                  name="carMobileWireLessCharging"
                  className="rounded capitalize w-6 px-1 my-1 text-xs"
                  onChange={() =>
                    setCarMobileWireLessCharging(!carMobileWireLessCharging)
                  }
                />
              </div>
            </div>
          </div>

          {/* last section  */}

          <div className="flec flex-row">
            <div className="featuring w-72 flex mx-2 p-1 flex-row shadow-inner">
              <div className="flex flex-col w-32 h-12">
                <label className="text-sm" htmlFor="carMobileWireLessCharging">
                  Mark as Featured
                </label>
                <select
                  type="checkbox"
                  name="carMobileWireLessCharging"
                  className="rounded capitalize w-16 px-1 my-1 text-xs"
                  onChange={(e) => setCarIsFeatured(e.target.value)}
                >
                  <option value={false} defaultChecked>
                    No
                  </option>
                  <option value={true}>Yes</option>
                </select>
              </div>
              <div className="flex flex-col h-12">
                <label className="text-sm" htmlFor="CarPopularDeal">
                  Mark as Popular Deal
                </label>
                <select
                  type="checkbox"
                  name="CarPopularDeal"
                  className="rounded capitalize w-16 px-1 my-1 text-xs"
                  onChange={(e) => setCarIsPopularDeal(e.target.value)}
                >
                  <option value={false} defaultChecked>
                    No
                  </option>
                  <option value={true}>Yes</option>
                </select>
              </div>
            </div>
            <div className="featuring w-72 flex mx-2 p-1 flex-row shadow-inner">
              <div className="flex flex-col">
                <label className="text-sm" htmlFor="CarPopularDeal">
                  Keywords
                </label>
                <textarea
                  name="carKeyWords"
                  id="carKeyWords"
                  onChange={(e) => setCarKeyWords(e.target.value)}
                  cols="30"
                  rows="3"
                  style={{ resize: "none" }}
                  defaultValue={carKeyWords}
                ></textarea>
              </div>
            </div>

            <div className="flex flex-row p-5">
              <div className="flex flex-col w-32 h-12">
                <label className="text-sm" htmlFor="carAllGenuine">
                  All Genuine
                </label>
                <select
                  type="checkbox"
                  name="carAllGenuine"
                  className="rounded capitalize w-16 px-1 my-1 text-xs"
                  onChange={(e) => setCarAllGenuine(e.target.value)}
                >
                  <option value={false} defaultChecked>
                    No
                  </option>
                  <option value={true}>Yes</option>
                </select>
              </div>

              <div className="flex flex-col h-12">
                <label className="text-sm" htmlFor="carModified">
                  Modified
                </label>
                <select
                  type="checkbox"
                  name="carModified"
                  className="rounded capitalize w-16 px-1 my-1 text-xs"
                  onChange={(e) => setCarModified(e.target.value)}
                >
                  <option value={false} defaultChecked>
                    No
                  </option>
                  <option value={true}>Yes</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col ">
              <h1 className="text-bolder">Owner Details</h1>
              <div className="flex flex-col w-32 h-12 my-2">
                <label className="text-sm" htmlFor="carOwnerName">
                  Owner Name
                </label>
                <input
                  type="text"
                  className="rounded w-52"
                  onChange={(e) => setCarOwnerName(e.target.value)}
                  placeholder="Enter Full Name"
                />
              </div>

              <div className="flex flex-col w-32 h-12 my-2">
                <label className="text-sm" htmlFor="carOwnerNumber">
                  Owner Number
                </label>
                <input
                  type="text"
                  className="rounded w-52"
                  onChange={(e) => setCarOwnerNumber(e.target.value)}
                  placeholder="Enter Full Number"
                />
              </div>

              <div className="flex flex-col w-32 h-12 my-2">
                <label className="text-sm" htmlFor="carOwnerEmail">
                  Owner Email
                </label>
                <input
                  type="text"
                  className="rounded w-52"
                  onChange={(e) => setCarOwnerEmail(e.target.value)}
                  placeholder="Enter Email"
                />
              </div>
            </div>
          </div>
        </div>
        <input type="submit" value="Add Product" className="btn-primary " />
      </form>
    </div>
  );
}

export default AddProduct;
