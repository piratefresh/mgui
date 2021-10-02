import React from "react";
import InputIconContainerStyles from "./InputIconContainer.module.css";

export default function InputIconContainer({ icon }: any) {
  return (
    <div className={InputIconContainerStyles["mgui-input-icon-container"]}>
      {icon}
    </div>
  );
}
