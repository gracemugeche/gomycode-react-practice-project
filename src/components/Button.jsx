import React from "react";
import { PrimaryButton } from "./PrimaryButton";
import { DangerButton } from "./DangerButton";
import { DefaultButton } from "./DefaultButton";
import { SecondaryButton } from "./SecondaryButton";

export function Button({ children='Default Text ',variant = "default" }) {

  switch (variant) {
    case "primary":
      return <PrimaryButton >{children}</PrimaryButton>

      
    case "secondary":
      return <SecondaryButton >{children}</SecondaryButton>

      
    case "danger":
      return <DangerButton >{children}</DangerButton>

      

    default:
    return <DefaultButton >{children}</DefaultButton>
  }

}
