
const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter the file name: ", function (fileName) {

    rl.question("Enter the content: ", function (content) {

        // Create and write to the file
        fs.writeFile(fileName, content, function (err) {

            if (err) {
                console.log("Error creating file:", err);
                rl.close();
                return;
            }

            console.log("\nFile created successfully.");

            // Read the file
            fs.readFile(fileName, "utf8", function (err, data) {

                if (err) {
                    console.log("Error reading file:", err);
                    rl.close();
                    return;
                }

                console.log("\nFile contents:");
                console.log(data);

                // Append additional content
                rl.question("\nEnter additional content: ", function (extraContent) {

                    fs.appendFile(
                        fileName,
                        "\n" + extraContent,
                        function (err) {

                            if (err) {
                                console.log("Error appending file:", err);
                                rl.close();
                                return;
                            }

                            console.log("\nContent appended successfully.");

                            // Read final contents
                            fs.readFile(
                                fileName,
                                "utf8",
                                function (err, finalData) {

                                    if (err) {
                                        console.log(
                                            "Error reading final file:",
                                            err
                                        );
                                        rl.close();
                                        return;
                                    }

                                    console.log("\nFinal file contents:");
                                    console.log(finalData);

                                    rl.close();
                                }
                            );
                        }
                    );
                });
            });
        });
    });
});
