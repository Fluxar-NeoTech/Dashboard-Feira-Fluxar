import { useState, useRef } from "react";
import FluxarLogo from "../../assets/Logo.svg";
import {
  NavbarContainer,
  Logo,
  Left,
  HiddenFileInput,
  Overlay
} from "./styles.js";

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileUpload = () => alert("Foto enviada!");

  return (
    <>
      <NavbarContainer>
        <Left>
          <Logo>
            <img src={FluxarLogo} alt="Logo do Fluxar" draggable="false" />
          </Logo>
        </Left>
      </NavbarContainer>

,
      <HiddenFileInput
        type="file"
        ref={fileInputRef}
        onChange={handleFileUpload}
        accept="image/*"
      />
    </>
  );
}
