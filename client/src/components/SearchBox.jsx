import { useState } from "react";

const locations = Array.from({ length: 30 }, (_, i) => `Location ${i + 1}`);

const SearchBox = () => {
  const [type, setType] = useState("");
  const [category, setCategory] = useState("");
  const [priceFrom, setPriceFrom] = useState("");
  const [priceTo, setPriceTo] = useState("");
  const [location, setLocation] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [isLuxury, setIsLuxury] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    const filters = {
      type,
      category,
      priceFrom,
      priceTo,
      location,
      bedrooms,
      isLuxury,
    };
    console.log("Search filters:", filters);
    // API poziv ide ovde
  };

  return (
    <div className="w-full max-w-5xl mx-auto p-4 py-32" >
      <form
        onSubmit={handleSearch}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 bg-white p-6 rounded-2xl shadow-xl"
      >
        {/* Type */}
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Type
          </label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:ring-blue-500 focus:outline-none"
          >
            <option value="">Select type</option>
            <option value="sell">Sell</option>
            <option value="rent">Rent</option>
          </select>
        </div>

        {/* Category */}
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Category
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:ring-blue-500 focus:outline-none"
          >
            <option value="">Select category</option>
            <option value="house">House</option>
            <option value="apartment">Apartment</option>
            <option value="office">Office</option>
            <option value="land">Land</option>
            <option value="garage">Garage</option>
            <option value="villa">Villa</option>
            <option value="studio">Studio</option>
          </select>
        </div>

        {/* Location */}
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Location
          </label>
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:ring-blue-500 focus:outline-none"
          >
            <option value="">Select location</option>
            {locations.map((loc, index) => (
              <option key={index} value={loc}>
                {loc}
              </option>
            ))}
          </select>
        </div>

        {/* Bedrooms */}
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Bedrooms
          </label>
          <select
            value={bedrooms}
            onChange={(e) => setBedrooms(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:ring-blue-500 focus:outline-none"
          >
            <option value="">Select</option>
            <option value="1">1 Bedroom</option>
            <option value="2">2 Bedrooms</option>
            <option value="3">3 Bedrooms</option>
            <option value="4">4 Bedrooms</option>
            <option value="5">5+ Bedrooms</option>
          </select>
        </div>

        {/* Price From */}
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Price From (€)
          </label>
          <input
            type="number"
            min="0"
            value={priceFrom}
            onChange={(e) => setPriceFrom(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:ring-blue-500 focus:outline-none"
            placeholder="e.g. 10000"
          />
        </div>

        {/* Price To */}
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Price To (€)
          </label>
          <input
            type="number"
            min="0"
            value={priceTo}
            onChange={(e) => setPriceTo(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:ring-blue-500 focus:outline-none"
            placeholder="e.g. 50000"
          />
        </div>

        {/* Luxury Checkbox */}
        <div className="lg:col-span-3 flex items-center gap-2">
          <input
            type="checkbox"
            id="luxury"
            checked={isLuxury}
            onChange={() => setIsLuxury(!isLuxury)}
            className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          <label htmlFor="luxury" className="text-sm text-gray-700">
            Show only luxury properties
          </label>
        </div>

        {/* Submit */}
        <div className="lg:col-span-3">
          <button
            type="submit"
            className="w-full rounded-lg bg-gray-600 py-2 text-white font-semibold hover:bg-blue-700 transition"
          >
            Search Properties
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBox;
