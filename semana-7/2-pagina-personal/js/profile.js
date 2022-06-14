'use strict';

const profile = (profile, technologies) => {
  const { name, shortName, slogan, description, urlPhoto, urlCv } = profile;

  const profileInfo = document.querySelector('.profile__info');
  const profileFigure = document.querySelector('.profile__figure');

  const profileInfoTitle = document.querySelector('.profile__info-title');
  const profileInfoSubtitle = document.querySelector('.profile__info-subtitle');
  const profileInfoDescription = document.querySelector('.profile__info-description');
  const profileInfoLinkCV = document.getElementById('profileInfoLinkCV');
  const profileInfoLinkProjects = document.getElementById('profileInfoLinkProjects');
  
  const profileFigureImage = document.querySelector('.profile__figure-image');
  const profileFigureTechOne = document.querySelector('.profile__figure-tech-one');
  const profileFigureTechTwo = document.querySelector('.profile__figure-tech-two');
  const profileFigureTechThree = document.querySelector('.profile__figure-tech-three');
  const profileFigureTechFour = document.querySelector('.profile__figure-tech-four');

  profileInfoTitle.innerHTML = name;
  profileInfoSubtitle.innerHTML = slogan;
  profileInfoDescription.innerHTML = description;
  profileInfoLinkCV.innerHTML = 'CV';
  profileInfoLinkCV.href = urlCv;
  profileInfoLinkProjects.innerHTML = 'Proyectos';
  
  profileFigureImage.src = urlPhoto;
  profileFigureImage.alt = shortName;
  profileFigureTechOne.src = technologies[0].image;
  profileFigureTechOne.alt = technologies[0].name;
  profileFigureTechTwo.src = technologies[1].image;
  profileFigureTechTwo.alt = technologies[1].name;
  profileFigureTechThree.src = technologies[2].image;
  profileFigureTechThree.alt = technologies[2].name;
  profileFigureTechFour.src = technologies[3].image;
  profileFigureTechFour.alt = technologies[3].name;

  const documentScroll = () => {
    let { scrollY } = window;
    profileInfo.style.marginTop = `-${scrollY}px`;
    profileFigure.style.marginTop = `-${scrollY}px`;
  };

  document.addEventListener('scroll', documentScroll);
};

export default profile;