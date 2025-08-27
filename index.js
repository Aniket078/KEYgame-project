    const sentences = [
      "The quick brown fox jumps over the lazy dog.",
      "Typing fast requires practice and focus.",
      "Programming is fun when you enjoy problem solving.",
      "Consistency is the key to mastering any skill.",
      "Monkeytype is a great tool to practice typing speed."
    ];

    let currentSentence = sentences[Math.floor(Math.random() * sentences.length)];
    document.getElementById("sentence").textContent = currentSentence;

    const inputBox = document.getElementById("inputbox");
    const stats = document.getElementById("stats");

    let keystrokes = 0;
    let startTime = null;

    // track typing
    inputBox.addEventListener("input", () => {
      if (!startTime) startTime = Date.now(); // start timer on first input

      keystrokes++;
      let timePassed = (Date.now() - startTime) / 60000; // minutes
      let kpm = (keystrokes / timePassed).toFixed(2);

      stats.textContent = `Keystrokes: ${keystrokes} | KPM: ${isFinite(kpm) ? kpm : 0}`;
    });

    inputBox.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault(); // stop newline

        if (inputBox.value.trim() === currentSentence) {
          alert("✅ Correct! You typed it perfectly.");
        } else {
          alert("❌ Incorrect! Try again.");
        }

        keystrokes = 0;
        startTime = null;
        stats.textContent = "Keystrokes: 0 | KPM: 0";
        inputBox.value = "";

        currentSentence = sentences[Math.floor(Math.random() * sentences.length)];
        document.getElementById("sentence").textContent = currentSentence;
      }
    });