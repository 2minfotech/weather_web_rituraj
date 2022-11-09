import React from "react";

export function ManyImage({ data }) {
  if (data > 30) {
    return <img src="./assects/images/Ellipse3.png" alt="2" />;
  } else {
    return <img src="./assects/images/cludy.png" alt="1" />;
  }
}
