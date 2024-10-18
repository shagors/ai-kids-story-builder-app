"use client";
import React, { useState } from "react";
import StorySubjectInput from "./_components/StorySubjectInput";
import StoryType from "./_components/StoryType";
import AgeGroup from "./_components/AgeGroup";
import ImageStyle from "./_components/ImageStyle";
import { Button } from "@nextui-org/button";

export interface fieldData {
  fieldName: string;
  fieldValue: string;
}

export interface formDataType {
  storySubject: string;
  storyType: string;
  imageStyle: string;
  ageGroup: string;
}

const CreateStory = () => {
  const [formData, setFormData] = useState<formDataType>();
  const onHandleUserSelection = (data: fieldData) => {
    setFormData((prev: any) => ({
      ...prev,
      [data.fieldName]: data.fieldValue,
    }));
    console.log(formData);
  };

  return (
    <div className="px-10 md:px-20 lg:px-40">
      <h2 className="font-extrabold text-center text-[70px] text-primary">
        Create Your Story
      </h2>
      <p className="text-2xl text-primary text-center">
        Unlock your creativity with Al Craft stories like never before!Let our
        Al bring your in agation to life, one story at a time.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-14">
        {/* Story Subject */}
        <StorySubjectInput userSelection={onHandleUserSelection} />
        {/* Story Type */}
        <StoryType userSelection={onHandleUserSelection} />
        {/* Age Group */}
        <AgeGroup userSelection={onHandleUserSelection} />
        {/* Image Style */}
        <ImageStyle userSelection={onHandleUserSelection} />
      </div>
      <div className="flex justify-end py-10">
        <Button color="primary" className="p-10 text-2xl">
          Generate Story
        </Button>
      </div>
    </div>
  );
};

export default CreateStory;
