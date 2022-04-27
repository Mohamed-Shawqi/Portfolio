import styled from "styled-components";
import {FaCertificate} from 'react-icons/fa'

export const BigBoxContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  padding: 20px 0;
  grid-gap: 10px;
`;

export const BigBox = styled.div`
  background: #212d45;
  border-radius: 12px;
  padding: 24px;

  @media (max-width: 652px) {
    padding: 18px;
  }
`;

export const BigBoxTitle = styled.h3`
  color: #fff;
  font-size: 2rem;
  padding-bottom: 5px;

  @media (max-width: 784px) {
    font-size: 1.5rem;
  }
  @media (max-width: 652px) {
    font-size: 1.2rem;
  }
`;

export const BigBoxText = styled.p`
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.75);

  @media (max-width: 784px) {
    font-size: 16px;
  }
  @media (max-width: 652px) {
    font-size: 12px;
    
  };
`;

export const CertificateIcon = styled(FaCertificate)`
 font-size: 1.5rem;
 margin-left: 10px;
 color: gold;
`

