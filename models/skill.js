const skills = [
  { id: 111111, skill: "JavaScript", obtained: true },
  { id: 222222, skill: "HTML", obtained: true },
  { id: 333333, skill: "CSS", obtained: true },
  { id: 444444, skill: "JS Promises", obtained: false },
];

module.exports = {
  getAll,
  getOne,
};

function getAll() {
  return skills;
}

function getOne(id) {
  id = parseInt(id);
  return skills.find((skill) => skill.id === id);
}
