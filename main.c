#include <stdio.h>
#include <stdlib.h>

int main() {
    int password = 12345;
    int userInput;
    int attempts = 0;
    int option;
    int num1, num2;

    // Password validation loop
    while (attempts < 4) {
        printf("กรุณาใส่รหัสผ่าน: ");
        scanf("%d", &userInput);

        if (userInput == password) {
            break; // Exit loop if password is correct
        } else {
            attempts++;
            printf("รหัส %d ไม่ถูกต้อง\n", attempts);
            if (attempts == 4) {
                printf("คุณใส่รหัสผิด 4 ครั้ง เราขอนำคุณออกจากระบบ\n");
                return 0;
            }
        }
    }

    // Menu options
    while (1) {
        printf("\nเลือกเมนูที่ต้องการทำด้านล่าง:\n");
        printf("1. +\n");
        printf("2. -\n");
        printf("3. X\n");
        printf("4. Exit\n");
        printf("คุณเลือก: ");
        scanf("%d", &option);

        switch (option) {
            case 1: // Addition
                printf("ใส่ตัวเลขที่ 1: ");
                scanf("%d", &num1);
                printf("ใส่ตัวเลขที่ 2: ");
                scanf("%d", &num2);
                printf("ผลลัพธ์: %d\n", num1 + num2);
                break;

            case 2: // Subtraction
                printf("Enter first number: ");
                scanf("%d", &num1);
                printf("Enter second number: ");
                scanf("%d", &num2);
                if (num1 >= num2) {
                    printf("Result: %d\n", num1 - num2);
                } else {
                    printf("Subtraction result must be non-negative. Try again.\n");
                }
                break;

            case 3: // Multiplication
                printf("Enter first number: ");
                scanf("%d", &num1);
                printf("Enter second number: ");
                scanf("%d", &num2);
                printf("Result: %d\n", num1 * num2);
                break;

            case 4: // Exit
                printf("Exiting program.\n");
                exit(0);

            default:
                printf("Invalid option. Please try again.\n");
                break;
        }
    }

    return 0;
}
