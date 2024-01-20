import countryList from "react-select-country-list";
import { useState, ChangeEvent, useMemo } from "react";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
interface ShippingInfo {
  address: string;
  city: string;
  state: string;
  pinCode: number | string;
  country: string;
}

const Shipping = () => {
  const navigate = useNavigate();
  const countryOptions = useMemo(() => countryList().getData(), []);
  const [shippingInfo, setShippingInfo] = useState<ShippingInfo>({
    address: "",
    city: "",
    state: "",
    pinCode: "",
    country: "",
  });

  const changeHandler = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) => {
    setShippingInfo({ ...shippingInfo, [e.target.name]: e.target.value });
  };

  return (
    <div className="shipping">
      <button type="button" onClick={() => navigate(-1)} className="back-btn">
        <BiArrowBack />
      </button>
      <form>
        <h1>Shipping Address</h1>
        <input
          required
          type="text"
          placeholder="Address"
          name="address"
          value={shippingInfo.address}
          onChange={changeHandler}
        />
        <input
          required
          type="text"
          placeholder="City"
          name="city"
          value={shippingInfo.city}
          onChange={changeHandler}
        />
        <input
          required
          type="text"
          placeholder="State"
          name="state"
          value={shippingInfo.state}
          onChange={changeHandler}
        />
        <select
          required
          name="country"
          value={shippingInfo.country}
          onChange={changeHandler}
        >
          <option value="">Select Country</option>
          {countryOptions.map((country) => (
            <option key={country.label} value={country.label}>
              {country.label}
            </option>
          ))}
        </select>
        <input
          required
          type="number"
          placeholder="Pin Code"
          name="pinCode"
          value={shippingInfo.pinCode}
          onChange={changeHandler}
        />
        <button type="submit">Pay now</button>
      </form>
    </div>
  );
};

export default Shipping;
