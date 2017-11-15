const config = {};

// Server settings
config.server = {
    host: process.env.IP || 'localhost',
    port: process.env.PORT || 8080,
    mongoUser: "hasbeerlords",
    mongoPsw: "2JKCJkwTdkHWIJ5f"
};

// Export configuration object
module.exports = config;