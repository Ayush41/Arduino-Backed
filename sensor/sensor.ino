#define IR_SENSOR_PIN 2  // Change this to the appropriate pin number
#define THRESHOLD 500    

unsigned long lastStateChangeTime = 0;
bool isClose = false;

void setup() {
  Serial.begin(9600);
  pinMode(IR_SENSOR_PIN, INPUT);
}

void loop() {
  int sensorValue = analogRead(IR_SENSOR_PIN);
  bool currentState = (sensorValue > THRESHOLD);

  if (currentState != isClose) {
    unsigned long currentTime = millis();
    unsigned long duration = currentTime - lastStateChangeTime;

    // Send the state change information
    Serial.print(currentState ? "CLOSE" : "FAR");
    Serial.print(",");
    Serial.println(duration);

    isClose = currentState;
    lastStateChangeTime = currentTime;
  }

  delay(100);  // Adjust this delay as needed
}
