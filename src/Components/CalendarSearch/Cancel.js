import React from "react";
import { createPortal } from "react-dom";

let cancelContainer = document.getElementById("cancel");

if (!cancelContainer) {
    const cancelContainerDiv = document.createElement("div");
    cancelContainerDiv.id = "cancel";
    cancelContainerDiv.className = "cancel";
    document.body.appendChild(cancelContainerDiv);
    cancelContainer = cancelContainerDiv;
}
