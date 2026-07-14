const fs = require("fs").promises;
const path = require("path");

const adminFile = path.join(
  __dirname,
  "..",
  "data",
  "admin.json"
);

async function getAdmin() {
  
  const data = await fs.readFile(adminFile, "utf8");
  
  const admins = JSON.parse(data);
  
  return admins[0];
  
}

module.exports = {
  
  getAdmin
  
};