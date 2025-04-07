const GREETINGS = [
    "Whalecome!",
    "All hands on deck!",
    "Let's Hustle",
];

module.exports = async (req, res) => {
    res.send({
        greeting: GREETINGS[ Math.floor( Math.random() * GREETINGS.length )],
    });
};