const { Model } = require("objection");
const dbConfig = require("../../db/dbConfig");

Model.knex(dbConfig);

class Project extends Model {
  static get tableName() {
    return "projects";
  }

  static get IdColumn() {
    return "id";
  }
}

module.exports = Project;
