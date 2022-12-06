#define led1 13
#define led2 12
#define led3 11
#define led4 10
#define led5 9
#define switcher 8
int timer = 0;
int buttonState = 0;
bool timing;

void setup() {
  // initialize serial communication at 9600 bits per second:
  Serial.begin(9600);
  pinMode(led1, OUTPUT);
  pinMode(led2, OUTPUT);
  pinMode(led3, OUTPUT);
  pinMode(led4, OUTPUT);
  pinMode(led5, OUTPUT);
  pinMode(switcher, INPUT);
}

// the loop routine runs over and over again forever:
void loop() {
  // read the input on analog pin 0:
  int sensorValue = analogRead(A0);
  buttonState = digitalRead(switcher);
  Serial.println(buttonState);
  if (buttonState == HIGH) {
    timing = true;
  }
  if (timing == true) {
    int newTimer = sensorValue;

    for (int i = 0; i < newTimer; i += 200) {
      delay(1000);
      if (i < 200 && i >= 0) {
        digitalWrite(led1, HIGH);
        digitalWrite(led2, LOW);
        digitalWrite(led3, LOW);
        digitalWrite(led4, LOW);
        digitalWrite(led5, LOW);

        timer = 200;
      } else if (i < 400 && i >= 200) {
        digitalWrite(led1, HIGH);
        digitalWrite(led2, HIGH);
        digitalWrite(led3, LOW);
        digitalWrite(led4, LOW);
        digitalWrite(led5, LOW);
        timer = 400;
      } else if (i < 600 && i >= 400) {
        digitalWrite(led1, HIGH);
        digitalWrite(led2, HIGH);
        digitalWrite(led3, HIGH);
        digitalWrite(led4, LOW);
        digitalWrite(led5, LOW);

        timer = 600;
      } else if (i < 800 && i >= 600) {
        digitalWrite(led1, HIGH);
        digitalWrite(led2, HIGH);
        digitalWrite(led3, HIGH);
        digitalWrite(led4, HIGH);
        digitalWrite(led5, LOW);

        timer = 800;
      } else if (i >= 800) {
        digitalWrite(led1, HIGH);
        digitalWrite(led2, HIGH);
        digitalWrite(led3, HIGH);
        digitalWrite(led4, HIGH);
        digitalWrite(led5, HIGH);
        timer = 1000;
      }
    }
    timing = false;
    buttonState = LOW;
  }
  Serial.println("breaker breaker");
  Serial.println(timing);
  if (sensorValue > 0 && sensorValue < 1100 && timing == false) {
    if (sensorValue < 200 && sensorValue >= 0) {
      digitalWrite(led1, HIGH);
      digitalWrite(led2, LOW);
      digitalWrite(led3, LOW);
      digitalWrite(led4, LOW);
      digitalWrite(led5, LOW);
      timer = 200;
    }
    if (sensorValue < 400 && sensorValue >= 200) {
      digitalWrite(led1, HIGH);
      digitalWrite(led2, HIGH);
      digitalWrite(led3, LOW);
      digitalWrite(led4, LOW);
      digitalWrite(led5, LOW);
      timer = 400;
    }
    if (sensorValue < 600 && sensorValue >= 400) {
      digitalWrite(led1, HIGH);
      digitalWrite(led2, HIGH);
      digitalWrite(led3, HIGH);
      digitalWrite(led4, LOW);
      digitalWrite(led5, LOW);
      timer = 600;
    }
    if (sensorValue < 800 && sensorValue >= 600) {
      digitalWrite(led1, HIGH);
      digitalWrite(led2, HIGH);
      digitalWrite(led3, HIGH);
      digitalWrite(led4, HIGH);
      digitalWrite(led5, LOW);
      timer = 800;
    }
    if (sensorValue >= 800) {
      digitalWrite(led1, HIGH);
      digitalWrite(led2, HIGH);
      digitalWrite(led3, HIGH);
      digitalWrite(led4, HIGH);
      digitalWrite(led5, HIGH);
      timer = 1000;
    }
  }
  delay(1);  // delay in between reads for stability
}