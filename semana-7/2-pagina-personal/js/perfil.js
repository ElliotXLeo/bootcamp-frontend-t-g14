'use strict';

const perfil = (profile, technologies) => {
  const { name, shortName, slogan, description, urlPhoto, urlCv } = profile;

  const perfilInfoTitle = document.querySelector('.perfil__info-title');
  const perfilInfoSubtitle = document.querySelector('.perfil__info-subtitle');
  const perfilInfoDescription = document.querySelector('.perfil__info-description');
  const perfilInfoLinkCV = document.getElementById('perfilInfoLinkCV');
  const perfilInfoLinkProjects = document.getElementById('perfilInfoLinkProjects');
  const perfilFigureImage = document.querySelector('.perfil__figure-image');
  
  const perfilFigureTechOne = document.querySelector('.perfil__figure-tech-one');
  const perfilFigureTechTwo = document.querySelector('.perfil__figure-tech-two');
  const perfilFigureTechThree = document.querySelector('.perfil__figure-tech-three');
  const perfilFigureTechFour = document.querySelector('.perfil__figure-tech-four');

  perfilInfoTitle.innerHTML = name;
  perfilInfoSubtitle.innerHTML = slogan;
  perfilInfoDescription.innerHTML = description;
  perfilInfoLinkCV.innerHTML = 'CV';
  perfilInfoLinkCV.href = urlCv;
  perfilInfoLinkProjects.innerHTML = 'Proyectos';
  perfilFigureImage.src = urlPhoto;
  perfilFigureImage.alt = shortName;

  perfilFigureTechOne.src = technologies[0].image;
  perfilFigureTechOne.alt = technologies[0].name;
  perfilFigureTechTwo.src = technologies[1].image;
  perfilFigureTechTwo.alt = technologies[1].name;
  perfilFigureTechThree.src = technologies[2].image;
  perfilFigureTechThree.alt = technologies[2].name;
  perfilFigureTechFour.src = technologies[3].image;
  perfilFigureTechFour.alt = technologies[3].name;
};

export default perfil;