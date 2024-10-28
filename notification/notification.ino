#include <stdio.h>
#include <time.h>

// Function to check if current time is between 9 AM and 10 AM
int is_time_between_9_to_10() {
    time_t now;
    struct tm *local;
    now = time(NULL);
    local = localtime(&now);

    int hour = local->tm_hour;

    if (hour >= 9 && hour < 10) {
        return 1;
    }
    return 0;
}

int main() {
    int ir_sensor;  // Variable to store IR sensor value
    printf("Enter IR sensor value (0 or 1): ");
    scanf("%d", &ir_sensor);

    if (ir_sensor == 0) {
        // If IR sensor returns 0 and it's between 9 AM and 10 AM, activate the alarm
        if (is_time_between_9_to_10()) {
            printf("Alarm Activated!\n");
        } else {
            printf("Alarm will only activate between 9 AM to 10 AM.\n");
        }
    } else if (ir_sensor == 1) {
        // If IR sensor returns 1, deactivate the alarm and print "Medicine is taken"
        printf("Alarm Deactivated! Medicine is taken.\n");
    } else {
        printf("Invalid IR sensor value. Please enter 0 or 1.\n");
    }

    return 0;
}
