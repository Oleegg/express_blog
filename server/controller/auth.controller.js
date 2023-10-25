const db = require("../db");
const bcrypt = require("bcryptjs");

class AuthController {
  async registrationUser(req, res) {
    try {
      const { name, surname, email, password } = req.body;
      const candidate = await db.query(
        "SELECT COUNT(*) FROM authusers WHERE email=$1",
        [email]
      );

      if (candidate.rows[0].count === 0) {
        return res.status(400).json({
          message: "There is already a user with this email address",
        });
      }

      const hashedPassword = await bcrypt.hash(password, 12);
      await db.query(
        "INSERT INTO authusers (name, surname, email, password) values ($1, $2, $3, $4) RETURNING *",
        [name, surname, email, hashedPassword]
      );
      res.status(201).json({ message: `New user ${name} ${surname} created` });
    } catch (e) {
      return res.status(500).json({ message: e.message });
    }
  }

  async getUser(req, res) {
    try {
      const { email, password } = req.body;

      const { rowCount, rows } = await db.query(
        "SELECT * FROM authusers WHERE email=$1",
        [email]
      );

      if (rowCount === 0) {
        return res.status(400).json({
          message: "This is an email address, not registered",
        });
      }

      const isMatch = await bcrypt.compare(password, rows[0].password);
      if (!isMatch) {
        return res.status(400).json({
          message: "Invalid email address",
        });
      }

      res.status(201).json({
        message: `Get user ${rows[0].name} ${rows[0].surname}`,
      });
    } catch (e) {
      return res.status(500).json({ message: e.message });
    }
  }
}

module.exports = new AuthController();
