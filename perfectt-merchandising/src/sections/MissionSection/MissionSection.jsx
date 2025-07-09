// src/sections/MissionSection/MissionSection.jsx
import React from 'react';
import {
  MissionWrapper,
  MissionContent,
  MissionTitle,
  MissionText,
  MissionHighlight,
  // MissionIcon // Descomente se for usar um ícone
} from './MissionSection.styles';
// Exemplo de importação de ícone, se for usar:
// import { FaBullseye } from 'react-icons/fa'; 

function MissionSection() {
  return (
    <MissionWrapper id="mission"> {/* Adicione o ID para navegação */}
      <MissionContent>
        {/* <MissionIcon><FaBullseye /></MissionIcon> */} {/* Descomente e ajuste o ícone */}
        <MissionTitle>Nossa Missão</MissionTitle>
        <MissionText>
          Na Perfectt Merchandising, nossa missão é transcender as expectativas em cada projeto de visibilidade e exposição de marca. Comprometemo-nos a criar soluções inovadoras e impactantes que não apenas destacam produtos, mas também contam histórias e estabelecem conexões duradouras com o público. Buscamos a excelência na criação, produção e implementação, garantindo que cada ambiente de merchandising se torne uma experiência imersiva e memorável.
        </MissionText>
        <MissionHighlight>
          "Transformar ambientes em palcos de engajamento e inspiração."
        </MissionHighlight>
      </MissionContent>
    </MissionWrapper>
  );
}

export default MissionSection;