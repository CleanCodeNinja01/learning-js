function partnerPortalTeam(name, age) {
  this.name = name;
  this.age = age;
}

partnerPortalTeam.prototype.pair = function () {
  console.log(this.name);
};

function partnerPortalTeamInsight(){

}

partnerPortalTeamInsight.prototype = Object.create(partnerPortalTeam.prototype)

