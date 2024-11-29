const isValidId = require("./isValidId");

class HeroValidator {
  static validate(data) {
    const {
      name,
      strength,
      dexterity,
      intellect,
      isInvincible,
      image,
      user_id,
    } = data;
    if (!name || typeof name !== "string" || name.trim() === "") {
      return {
        isValid: false,
        error: " The name is required and cannot be an empty string",
      };
    }
    if (
      !strength ||
      !dexterity ||
      !intellect ||
      !user_id ||
      !isFinite(strength) ||
      !isFinite(dexterity) ||
      !isFinite(intellect) ||
      !isFinite(user_id)
    ) {
      return {
        isValid: false,
        error:
          "Strength, dexterity, user ID or intelligence is a must and must be a number",
      };
    }
    if (isInvincible !== 'true'&& isInvincible !== 'false' ) {
      console.log(444);
      
      return {
        isValid: false,
        error: "The invincible property required and must be true or false",
      };
    }
    return {
      isValid: true,
      error: null,
    };
  }
}
module.exports = HeroValidator;
