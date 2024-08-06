import React, { useState } from "react";
import FAQSection from "../UI/chats/FAQSection";
import FeedbackForm from "../UI/chats/FeedbackForm";
import SupportHeaderSection from "../UI/chats/SupportHeaderSection";
import SearchBar from "../UI/chats/SearchBar";

const data = [1, 2, 3, 4, 5];

function SupportPage({ clickHandler }: { clickHandler: any }) {
  const [value, setValue] = useState("");

  const handleChange = (option: string) => {
    setValue(option);
    clickHandler(option);
  };

  const handleFAQClick = () => {
    handleChange("FAQ");
  };

  return (
    <div className="w-full h-[800px]">
      <SupportHeaderSection handleChange={handleChange} />
      <SearchBar />
      <FAQSection data={data} handleFAQClick={handleFAQClick} />
      <FeedbackForm />
    </div>
  );
}

export default SupportPage;
