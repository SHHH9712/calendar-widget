import { useState } from "react";

import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

export default function Widget() {
  const [showTab, setShowTab] = useState<string>("Days");
  return (
    <div className="container">
      <Header showTab={showTab} setShowTab={setShowTab} />
      <Body />
      <Footer />
    </div>
  );
}
