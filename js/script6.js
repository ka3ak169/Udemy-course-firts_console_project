const personalPlanPeter = {
  name: "Peter",
  age: "29",
  skills: {
      languages: ['ru', 'eng'],
      programmingLangs: {
          js: '20%',
          php: '10%'
      },
      exp: '1 month'
  },
  showAgeAndLangs: function (obj) {
    const {age} = obj;
    const lang = obj.skills.languages.join(' ').toUpperCase();
    return `Мне ${age} и я владею языками: ${lang}`
  }
};

function showExperience(plan) {
  const {skills:{exp}} = plan;
  return exp
}

function showProgrammingLangs(plan) {
  const langs = plan.skills.programmingLangs;
  let results = '';
  if (Object.keys(langs).length === 0) {
    console.log(Object.keys(langs).length === 0);
    return ''
  } else {
    for (let lang in langs) {

      const otv = `Язык ${lang} изучен на ${langs[lang]}\n`;
      results += otv
    }
    return results;
  }
}
// showProgrammingLangs(personalPlanPeter);
console.log(showProgrammingLangs(personalPlanPeter));
// personalPlanPeter.showAgeAndLangs(personalPlanPeter)