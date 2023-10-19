const skills = [
  { id: 111111, skill: "JavaScript", obtained: true },
  { id: 222222, skill: "HTML", obtained: true },
  { id: 333333, skill: "CSS", obtained: true },
  { id: 444444, skill: "JS Promises", obtained: false },
];

module.exports = {
  getAll,
  getOne,
  create,
  deleteOne,
};

function getAll() {
  return skills;
}

function getOne(id) {
  id = parseInt(id);
  return skills.find((skill) => skill.id === id);
}

function create(skill) {
  skill.id = Date.now() % 1000000;
  skill.obtained = false;
  skills.push(skill);
}

function deleteOne(id) {
  id = parseInt(id);
  const idx = skills.findIndex((skill) => skill.id === id);
  skills.splice(idx, 1);
}
