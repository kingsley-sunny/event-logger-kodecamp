const EventEmitter = require("events");

class EventLogger extends EventEmitter {
  // The private variable that is accessible only within the class
  #_events = [];

  // This function adds the events to the events array and also emit the event
  logEvent(title, description) {
    const timestamp = new Date().toUTCString();
    const event = { title, description, timestamp };

    this.#_events.push(event);

    this.emit(title, event);
  }

  // This function display all the events that is being registered
  displayAllEvents() {
    return this.#_events.map(
      (event, index) => `| ${index} | ${event.description} | ${event.timestamp} |`
    );
  }
}

const eventLogger = new EventLogger();

eventLogger.once("first-event", event => console.log(event));
eventLogger.on("second-event", event => console.log(event));

eventLogger.logEvent("first-event", "This is the first event");
eventLogger.logEvent("second-event", "This is the second event");

const totalEvents = eventLogger.displayAllEvents();

console.log("TOTAL EVENTS: ", totalEvents);
