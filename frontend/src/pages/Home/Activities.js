import React, { useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";

function Activities() {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  const {portfolioData} = useSelector((state) => state.root);
  const {activities} = portfolioData;
  return (
    <div>
      <SectionTitle title="Extra Curicular Activities / Hoobies" />
      <div className="flex py-10 gap-20 sm:flex-col">
        <div className="flex flex-col gap-10 border-l-2 border-[#135e4c82] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full">
          {activities.map((activity, index) => (
            <div onClick={()=>{
                setSelectedItemIndex(index);
            }}
            className="cursor-pointer"
            >
              <h1
                className={`text-xl px-5
                    ${
                  selectedItemIndex === index
                    ? "text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#1a7f5a31] py-3"
                    : "text-white"
                } `}
              >
                {activity.year}
              </h1>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-5">
            <h1 className="text-secondary text-xl">{activities[selectedItemIndex].title}</h1>
            <h1 className="text-tertiary text-xl">{activities[selectedItemIndex].place}</h1>
            <p className="text-white">{activities[selectedItemIndex].description}</p>
        </div>
      </div>
    </div>
  );
}

export default Activities;
