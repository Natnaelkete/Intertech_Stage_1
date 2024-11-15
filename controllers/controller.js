export const getName = (req, res) => {
  try {
    res.status(200).send("My name is Natnael Ketema");
  } catch (error) {
    console.log("From getName", error);
  }
};

export const getHobby = (req, res) => {
  try {
    res.status(200).json({
      1: "Coding",
      2: "Taking courses",
      3: "Playing football",
    });
  } catch (error) {
    console.log("From getHobby", error);
  }
};
export const getDream = (req, res) => {
  try {
    res
      .status(200)
      .send(
        "I have a dream to be one of the great Ethiopian developer and programmer and promote my country to the world with tech related things"
      );
  } catch (error) {
    console.log("From getDream", error);
  }
};
export const getWelcome = (req, res) => {
  try {
    res
      .status(200)
      .send("Hi! Welcome, you can explore /name, /hobby, /dream routes");
  } catch (error) {
    console.log("From getDream", error);
  }
};
