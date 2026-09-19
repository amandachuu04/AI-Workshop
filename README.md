# Fancy Command Tool

## Section 1 — Command Description

This tool combines the Linux `grep` and `head` commands into one Node.js program. The `grep` command searches a file and prints every line that contains a specified pattern, while the `head` command prints the first 10 lines of a file. The program allows the user to choose which command they want to run.

To use `grep`, run:

```bash
node aiwsgrephead.js grep "ERROR" server.log
```

To use `head`, run:

```bash
node aiwsgrephead.js head server.log
```

The tool combines the functions of `grep` and `head` into one program while keeping their behavior separate.

## Section 2 — AI-Assisted Programming

I used AI to help me understand how the `grep` and `head` commands work and how they could be recreated using Node.js. I asked AI questions about `process.argv`, reading files with the `fs` module, splitting file contents into lines, searching for patterns with `includes()`, and printing the first 10 lines of a file. AI also helped me identify test cases and edge cases, such as missing arguments, missing filenames, and search patterns that are not found.

I still had to think independently about how I wanted the two commands to work together. I decided that `grep` should print all matching lines, while `head` should only print the first 10 lines of the file. I also had to determine the correct number of command-line arguments for each command and make sure the correct values were stored in `process.argv`.

AI did not always understand what I wanted at first. For example, it originally suggested using `head` to limit the results from `grep` to 10 lines, but I wanted `grep` to continue printing all matching lines. I had to clarify that the commands should be combined into one program but still work separately. AI also initially included some incorrect or unnecessary usage examples that I had to adjust to match my final program.
