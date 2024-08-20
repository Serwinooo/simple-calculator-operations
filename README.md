# Operational Calculator

A simple calculator web application built with HTML, CSS, and JavaScript. This calculator can perform basic arithmetic operations like addition, subtraction, multiplication, and division.

## Features

- Basic arithmetic operations: addition, subtraction, multiplication, and division.
- Responsive design suitable for various screen sizes.
- Clear button to reset the current calculation.
- Prevents invalid input in the calculation field.
- Displays error messages for invalid operations (e.g., division by zero).

## Project Structure

The project consists of three main files:

1. **index.html**: The structure of the calculator's user interface.
2. **style.css**: The styling of the calculator, including layout and button styles.
3. **script.js**: The logic and functionality behind the calculator's operations.

## Usage

1. **Display**: The calculator has an input field (`#result`) that displays the current value.
2. **Buttons**:
   - Number buttons (`.numbers`): Used to input numbers.
   - Operation buttons (`.operation`): Used to select an operation (addition, subtraction, multiplication, or division).
   - Clear button (`#clear`): Clears the current input and stored values.
   - Equal button (`#equals`): Computes the result of the entered operation.

## JavaScript Functions

- **firstNum()**: Handles the number input from the user and displays it on the calculator screen.
- **operationSet()**: Captures the selected operation (e.g., `+`, `-`, `*`, `/`) and stores it for calculation.
- **answer()**: Calculates the result based on the numbers and operations entered by the user, then displays it in the input field.

## Example Usage

1. Enter a number using the number buttons.
2. Choose an arithmetic operation (e.g., addition).
3. Enter another number.
4. Press the `=` button to see the result.
5. Press the `C` button to clear the current calculation and start a new one.

## Installation

To run this calculator locally, simply clone the repository and open the `index.html` file in your browser.

```bash
git clone <repository-url>
cd operational-calculator
open index.html
