const config = {};

// Server settings
config.server = {
    host: process.env.IP || 'localhost',
    port: process.env.PORT || 3000,
    mongoUser: "hasbeerlords",
    mongoPsw: "2JKCJkwTdkHWIJ5f"
};

// Export configuration object
module.exports = config;