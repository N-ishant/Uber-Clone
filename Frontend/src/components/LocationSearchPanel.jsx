import React from "react";

const LocationSearchPanel = (props) => {
  const locations = [
    " O-5/C-1, Dilshad Garden, New Delhi, 110095",
    " A-5/M-1, Indreapuram, New Delhi, 110095",
    " Z-5C/1, Anand Vihar, New Delhi, 110095",
    " D 4/1, Goa, New Delhi, 110095",
  ];
  return (
    <div>

      {
        locations.map(function(elem, idx){
          return (
            <div key={idx} onClick={() => {
              props.setVehiclePanelOpen(true);
              props.setPanelOpen(false);
            }} className="flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl items-center my-2 justify-start">
              <h2 className="bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full">
                <i className="ri-map-pin-fill"></i>
              </h2>
              <h4 className="font-medium">
                {elem}
              </h4>
            </div>
          );
        })
      }


    
    </div>
  );
};

export default LocationSearchPanel;
