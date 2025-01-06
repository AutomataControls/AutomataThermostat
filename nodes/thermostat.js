module.exports = function (RED) {
    function AutomataThermostat(config) {
        RED.nodes.createNode(this, config);
        const node = this;

        // Initialize the configuration
        const ui = RED.require("node-red-dashboard")(RED);
        const group = RED.nodes.getNode(config.group);

        if (!group) {
            return;
        }

        // Store the full UI template HTML in a separate file
        const fs = require('fs');
        const path = require('path');
        const templatePath = path.join(__dirname, 'templates', 'thermostat-ui.html');
        const template = fs.readFileSync(templatePath, 'utf8');

        const done = ui.addWidget({
            node: node,
            group: config.group,
            order: config.order,
            width: config.width,
            height: config.height,
            format: template,
            templateScope: "local",
            emitOnlyNewValues: false,
            forwardInputMessages: false,
            storeFrontEndInputAsState: true,
            convertBack: function (value) {
                return value;
            },
            beforeEmit: function (msg, value) {
                return { msg: msg };
            },
            beforeSend: function (msg, orig) {
                if (orig) {
                    return orig.msg;
                }
            },
            initController: function ($scope, events) {
                // Initialize the UI controller
                $scope.theme = config.theme || 'dark';
                $scope.units = config.units || 'F';

                $scope.thermostat = {
                    currentTemp: 72,
                    setpoint: 74,
                    mode: "off",
                    // ... other initial states
                };

                // Handle incoming messages
                $scope.$watch('msg', function (msg) {
                    if (!msg) {
                        return;
                    }
                    // Update the UI based on incoming messages
                    if (msg.payload) {
                        if (msg.payload.setpoint !== undefined) {
                            $scope.thermostat.setpoint = msg.payload.setpoint;
                        }
                        // ... handle other incoming data
                    }
                });
            }
        });

        if (done) {
            node.on("close", done);
        }
    }
    RED.nodes.registerType("automata-thermostat", AutomataThermostat);
};