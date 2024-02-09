# Interactive Birthday Candle Web App

## Project Overview
This web application brings joy and interactivity to virtual celebrations with a fun, unique feature — a birthday candle that users can blow out using their microphone. With a blend of modern web technologies, this app offers an immersive experience that mimics the cherished tradition of blowing out a birthday candle.

## Features
- **Blowable Birthday Candle**: Utilizes the Web Audio API to process real-time audio input from the user's microphone to detect "blowing" and extinguish the candle on the screen.
- **Raining Hearts Animation**: Upon successfully blowing out the candle, the user is greeted with a delightful visual effect of pink hearts raining down the screen, enhancing the festive atmosphere.
- **Customizable Text Message**: Displays a customizable "Happy Birthday" message that can be tailored to the birthday person's name or any celebratory note.
- **Responsive Design**: Crafted to provide a seamless experience across various devices and screen sizes, ensuring everyone can join the celebration.

## Technology Stack
- HTML5
- CSS3 (with keyframe animations for effects)
- JavaScript (for audio processing and DOM manipulation)

## How It Works
1. The app prompts users to allow access to their microphone.
2. Once access is granted, it listens for a "blowing" sound.
3. When a "blow" is detected, a JavaScript function is triggered to switch the on-screen candle image from lit to extinguished.
4. This action also initiates the raining hearts animation, symbolizing the celebration of a wish made.
5. The app then presents a customizable, styled "Happy Birthday" message.

## Setup and Usage
To get started with this app:
1. Clone the repository to your local machine.
2. Open the `index.html` file in a modern web browser.
3. Click "Start Microphone" to activate the candle blowing feature.
4. Blow into your device's microphone to "blow out" the candle.

## Customization
- To change the birthday message, edit the text within the `#birthday-message` element.
- Modify the `style.css` file to apply different styles to the candle, hearts, and birthday message as desired.




