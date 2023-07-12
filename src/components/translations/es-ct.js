const aboutTranslations = {
  home: 'Inici',
  about: 'Sobre mi',
  hello: 'Hola, sóc en Xavi, encantat de conèixer-te.',
  description: 'Sóc Desenvolupador Web i estic molt apassionat pel meu treball.',
  frontend: 'Em fascina tot el que estigui relacionat amb el Front-End, crear webs per a clients, apps de mòbil i coses vinculades a la part visible de la programació.',
};

const contactTranslations = {
  contact: 'Contacte',
  descriptioncontact: '//Envieu el formulari a continuació o envieu-me un correu electrònic - xpuiig14@gmail.com',
  sendEmail: 'Enviar correu electrònic',
  contactInfo: 'Informació de contacte:',
  phone: 'Telèfon:',
};

const homeTranslations = {
  hellohome: 'Hola, el meu nom és',
  name: 'Xavi Puig Navarro',
  dev: 'Desenvolupador Web',
  lookPor: 'Veure Portfoli',
};

const skillsTranslations = {
  skills: 'Experiència',
  descriptionSkills: '//Aquestes són les tecnologies amb les que he treballat:',
  portfolio: 'Fes un cop d\'ull a tots els meus projectes:',
};

const workTranslations = {
  work: 'Portafoli',
  descriptionWork: '//Fes una ullada a tots els meus projectes:',
  project1: 'Nom del Projecte 1',
  project2: 'Nom del Projecte 2',
  project3: 'Nom del Projecte 3',
  code: 'Codi',
};

export default {
  ...aboutTranslations,
  ...contactTranslations,
  ...homeTranslations,
  ...skillsTranslations,
  ...workTranslations,
  selectLanguage: 'Selecciona un idioma:',
  spanish: 'Espanyol',
  catalan: 'Català',
  english: 'Anglès',
};
