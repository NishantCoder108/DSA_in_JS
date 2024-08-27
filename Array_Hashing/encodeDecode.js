class Codec {
    // Encodes a list of strings to a single string.
    encode(strs) {
        return strs.map((str) => `${str.length}#${str}`).join("");
    }

    // Decodes a single string to a list of strings.
    decode(s) {
        let i = 0;
        const decodedList = [];

        while (i < s.length) {
            let j = i;

            // Find the position of the delimiter '#'
            while (s[j] !== "#") {
                j++;
            }

            // Get the length of the string
            const length = parseInt(s.slice(i, j));

            // Extract the string based on the length
            const str = s.slice(j + 1, j + 1 + length);
            decodedList.push(str);

            // Move the index to the next string
            i = j + 1 + length;
        }

        return decodedList;
    }
}

// Example Usage:
const codec = new Codec();

// Example 1
const input1 = ["neet", "code", "love", "you"];
const encoded1 = codec.encode(input1);
console.log("Encoded:", encoded1); // Encoded: "4#neet4#code4#love3#you"
const decoded1 = codec.decode(encoded1);
console.log("Decoded:", decoded1); // Decoded: ["neet", "code", "love", "you"]

// Example 2
const input2 = ["we", "say", ":", "yes"];
const encoded2 = codec.encode(input2);
console.log("Encoded:", encoded2); // Encoded: "2#we3#say1#:3#yes"
const decoded2 = codec.decode(encoded2);
console.log("Decoded:", decoded2); // Decoded: ["we", "say", ":", "yes"]

// Example 2
const input3 = [":we", "say,&ht", ":", "yes"];
const encoded3 = codec.encode(input3);
console.log("Encoded:", encoded3); // Encoded: "2#we3#say1#:3#yes"
const decoded3 = codec.decode(encoded3);
console.log("Decoded:", decoded3); // Decoded: ["we", "say", ":", "yes"]
