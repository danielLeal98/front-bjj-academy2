import React from 'react';
import { FooterBase, ImageFooter, DivContentFooter, DivImage, DivTextoFooter, Text1, Text2 } from './styles';
import Logo from '../../assets/logo-academia.png';
import '../Footer/footer.css';

function Footer() {
  return (
    <FooterBase>
      <DivContentFooter>
        <DivTextoFooter>
          <DivImage>
            <ImageFooter src={Logo} alt="Logo Site" />
          </DivImage>
        </DivTextoFooter>
      </DivContentFooter>
    </FooterBase>
  );
}

export default Footer;
