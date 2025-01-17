# Decoding a Secret Message

This exercise involves writing code to decode and display a secret message from a 2D grid of Unicode characters specified in a Google Doc. The message, when printed in a fixed-width font, forms a graphic showing a sequence of uppercase letters.

---

## Problem Description

You are provided with a Google Doc containing a list of Unicode characters along with their corresponding positions in a 2D grid. Your task is to:

1. Write a function that takes the URL of such a Google Doc as an argument.
2. Retrieve and parse the data from the document.
3. Print the grid of characters in a format where:
   - Characters align to their specified `x` and `y` coordinates.
   - Empty grid spaces are filled with a space character (`' '`).

The grid will form a graphic showing uppercase letters, representing the secret message.

### Key Details:
- The coordinates start at `(0, 0)`, and their values increase in the positive `x` and `y` directions.
- The grid size is unbounded, meaning `x` and `y` can be arbitrarily large.
- Input data will always have a consistent format.

### Example:

For a [Google Doc](https://docs.google.com/document/d/e/2PACX-1vT6lXuBO3HUYW7NPqu0YslZ2ZRcOfQfCfQz3fr06x71U9K4aHWS2g4udFusvHRSwIJO4rB82J_llmcU/pub) containing the following input data:

| x   | char | y   |
|-----|------|-----|
| 0   | █    | 0   |
| 1   | ▀    | 0   |
| 2   | ▀    | 0   |
| 0   | █    | 1   |
| 1   | ▀    | 1   |
| 0   | █    | 2   |

The output grid would display:

```
█▀▀▀
█▀▀ 
█   
```

---

## Specifications

- **Languages**: Solutions must be written in **Python** (preferred) or **JavaScript**.
- **Input**: The function takes a single argument, a string representing the URL of the Google Doc.
- **Output**: When called, the function prints the decoded grid to the console.

### Requirements:

- Use external libraries as needed.
- You can include helper functions to organize your solution.
- Ensure your main function:
  1. Accepts the URL as a string argument.
  2. Outputs the correctly formatted grid of characters.

---

## Example Workflow

1. Retrieve the Google Doc data.
2. Parse the character and coordinate information.
3. Generate the 2D grid, ensuring all characters align to their specified coordinates.
4. Fill unoccupied positions with spaces.
5. Print the final grid to reveal the secret message.

Feel free to adapt the approach based on your language choice (Python or JavaScript). Happy coding! 🚀

## Google doc link for the secret message
https://docs.google.com/document/d/e/2PACX-1vTCF1dQ4oUhN7xxSXYflinbjV77TKwgJE43nRPXFS-oxedH93kLDgO8sSXjSm78_mN0POkD2ScEELym/pub
