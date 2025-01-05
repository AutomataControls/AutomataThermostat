# Automata Thermostat for Node-RED

Professional-grade HVAC control interface for Node-RED Dashboard 2.0, featuring comprehensive building automation capabilities.

![Automata Thermostat Screenshot](https://raw.githubusercontent.com/AutomataControls/AutomataThermostat/main/nodes/icons/thermostat.png)

## Features

- Modern, responsive thermostat interface with dark/light theme support
- Real-time temperature monitoring and control
- Multiple HVAC modes (Heat, Cool, Fan, Off)
- Advanced control modes:
  - VFD/TRIAC fan control
  - Modulating/TRIAC outdoor air control
  - Modulating/TRIAC heating control
  - Modulating/DX cooling control
- System monitoring:
  - Supply/Return temperatures
  - Mixed air temperature
  - Outdoor air temperature
  - Zone humidity
  - Actuator positions (OA, CW, HW)
  - VFD frequency
  - Pump and building pressure
- Building automation features:
  - Occupancy detection
  - Freeze protection
  - MQTT status indicators
  - Animated system status

## Installation

```bash
npm install @automatacontrols/automata-thermostat
```

## Quick Start

1. Install the node through the Node-RED Palette Manager or npm
2. Add the Automata Thermostat node to your flow
3. Configure the dashboard group and other settings
4. Deploy your flow

## Input Messages

Control your thermostat by sending messages with the following properties:

```javascript
{
    "payload": {
        "setpoint": 72,          // Temperature setpoint
        "supply": 70,            // Supply air temperature
        "outdoorAir": 75,        // Outdoor air temperature
        "mixedAir": 72,          // Mixed air temperature
        "humidity": 45,          // Zone humidity
        "mode": "cooling",       // HVAC mode
        "occupied": true,        // Occupancy status
        "freezestat": false,     // Freeze protection status
        "fanStatus": true,       // Fan operation status
        "oaActuator": 50,        // OA damper position (%)
        "cwActuator": 30,        // CW valve position (%)
        "hwActuator": 0,         // HW valve position (%)
        "vfd": 60,              // VFD frequency (Hz)
        "pumpPressure": 12,      // Pump pressure (PSI)
        "buildingPressure": 0.05 // Building pressure (inWC)
    }
}
```

## Output Messages

The node outputs control messages in this format:

```javascript
{
    "topic": "setpoint",  // or "mode", "controlMode_Fan", etc.
    "payload": value      // Depends on topic type
}
```

## Configuration

### Node Settings
- Name: Custom name for the node
- Group: Dashboard group assignment
- Theme: Dark/Light theme selection
- Units: °F/°C selection
- Size: Widget size in dashboard grid

## Support

For issues, feature requests, or contributions:
- GitHub Issues: [AutomataThermostat Issues](https://github.com/AutomataControls/AutomataThermostat/issues)
- GitHub Repository: [AutomataThermostat](https://github.com/AutomataControls/AutomataThermostat)

## License

MIT License - see [LICENSE](LICENSE) for details

## Author

AutomataControls
- GitHub: [AutomataControls](https://github.com/AutomataControls)

## Changelog

### 1.0.0
- Initial release
- Full HVAC control interface
- Real-time monitoring
- Advanced control modes
- Building automation features