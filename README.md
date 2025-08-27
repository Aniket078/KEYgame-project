# KEYgame-project
This is a typing speed test web application built with HTML, CSS, and JavaScript. It challenges users to type randomly generated sentences as quickly and accurately as possible while tracking their typing performance in real-time.

Features

Random Sentence Generator – A new sentence is shown each round.
Real-Time Stats – Displays Keystrokes, KPM (Keystrokes Per Minute), and WPM (Words Per Minute) as you type.
Enter to Finish – Press Enter to check if your input matches the sentence
Auto Reset – After finishing, stats reset and a new sentence is loaded automatically.
Auto Focus – Input box focuses after each round for smooth gameplay.

Tech Stack

HTML5 – Structure of the game.
CSS3 – Basic styling for UI.
JavaScript (ES6) – Game logic, timer, and real-time stats tracking.

How It Works

A random sentence is displayed on screen.
The player starts typing in the input box.
The game tracks keystrokes, speed, and accuracy in real-time.
On pressing Enter, the game checks correctness:

✅ If correct → shows success, resets stats, loads a new sentence.

❌ If incorrect → alerts an error, lets the player retry.
