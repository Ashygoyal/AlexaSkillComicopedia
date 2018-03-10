/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/
/**
 * This sample demonstrates a simple skill built with the Amazon Alexa Skills
 * nodejs skill development kit.
 * This sample supports multiple lauguages. (en-US, en-GB, de-DE).
 * The Intent Schema, Custom Slots and Sample Utterances for this skill, as well
 * as testing instructions are located at https://github.com/alexa/skill-sample-nodejs-fact
 **/

'use strict';
const Alexa = require('alexa-sdk');

//=========================================================================================================================================
//TODO: The items below this comment need your attention.
//=========================================================================================================================================

//Replace with your app ID (OPTIONAL).  You can find this value at the top of your skill's page on http://developer.amazon.com.
//Make sure to enclose your value in quotes, like this: const APP_ID = 'amzn1.ask.skill.bb4045e6-b3e8-4133-b650-72923c5980f1';
const APP_ID = 'amzn1.ask.skill.59c8b39d-f331-4b2d-82a9-b6ee2480355f';

const SKILL_NAME = 'Comics Facts';
const GET_FACT_MESSAGE = "Here's your fact: ";
const HELP_MESSAGE = 'You can say tell me a comics fact, or, you can say exit... What can I help you with?';
const HELP_REPROMPT = 'What can I help you with?';
const STOP_MESSAGE = 'Goodbye!';

//=========================================================================================================================================
//TODO: Replace this data with your own.  You can find translations of this data at http://github.com/alexa/skill-sample-node-js-fact/data
//=========================================================================================================================================
const data = [
    'The Daily Planet, where Lois Lane and Clark Kent are employed is actually operated by the entertainment division of Wayne Enterprises, which is owned by Bruce Wayne.',
    'Although the main goal of Deadpool is to become best friends with Spiderman, he constantly makes fun of him, often times calling him a virgin.',
    'The kryptonite ring worn by Lex Luthor eventually gave him cancer and his right hand had to be amputated.',
    'Black Panther first appeared in an issue of Fantastic Four.',
    'Marvel originally considered calling Carnage as either Ravage or Chaos, instead.',
    'Superman Blue is Superman as pure energy. He wears a containment suit to prevent the energy from dispersing and possesses far different abilities than his normal self.',
    'The helmet of Jay Garrick- the first Flash, is a reference to the one worn by Greek deity Hermes.',
    'Aquaman regularly guards the Earth from the Night Gods who are ancient monsters and demons that try to invade the planet through hidden doorways.',
    'In the Comics Ultimates edition 3, Wolverine revealed that he may possibly the father of Scarlet Witch.',
    'When Lobo was born, his evil was so frighteningly apparent, the nurse who delivered him went insane and became the first mental patient of that planet in ten millenia, after the infant Lobo chewed off four of her fingers.',
    'Daredevil can sense 150 yards in 360 degrees without concentrating and even more when he does concentrate.',
    'During World War 2, Logan fought alongside Captain America, Bucky Barnes and Hercules. They had much respect for Logan.',
    'Deadpool has been banned from Taco Bell, they wont even let him in.',
    'Vision absorbs ambient solar energy that his body converts into usable forms of energy with 99 percent efficiency.',
    'The Hellbat armor was forged in the sun by Superman, and built with the collective efforts of the Justice League for Batman to handle large scale threats in extreme scenarios.',
    'In a battle between Thanos and his son, Thane, Thanos effortlessly smashed his son through a planet, causing it to explode.',
    'Jason Todd has received training from numerous martial arts masters such as Batman, Nightwing, Bronze Tiger, Lady Shiva and the All-Caste. He was considered their most successful pupil, earning him respect and secrets only he has been able to unlock.',
    'Deathstroke is one of the few people in the DC Universe that consistently beats Batman in hand to hand combats.',
    'The personal bodyguards of Black Panther are a team of unstoppable ladies called The Dora Milaje.',
    'According to the Nova Corps, Starlord has accumulated over three lakh fifty thusand murders.',
    'People in the MArvel universe often confuse DEadpool with Spiderman. People unfamiliar with Deadpool have called him ninja Spiderman.',
    'Darkseid has killed both his mother and his brother.',
    'Gambit is not from New Orleans, he is actually Acadian which is technically Canadian.',
];

//=========================================================================================================================================
// Editing anything below this line might break your skill.
//=========================================================================================================================================

const handlers = {
    'LaunchRequest': function () {
        this.emit('GetNewFactIntent');
    },
    'GetNewFactIntent': function () {
        const factArr = data;
        const factIndex = Math.floor(Math.random() * factArr.length);
        const randomFact = factArr[factIndex];
        const speechOutput = GET_FACT_MESSAGE + randomFact;

        this.response.cardRenderer(SKILL_NAME, randomFact);
        this.response.speak(speechOutput);
        this.emit(':responseReady');
    },
    'AMAZON.HelpIntent': function () {
        const speechOutput = HELP_MESSAGE;
        const reprompt = HELP_REPROMPT;

        this.response.speak(speechOutput).listen(reprompt);
        this.emit(':responseReady');
    },
    'AMAZON.CancelIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
    'AMAZON.StopIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
};

exports.handler = function (event, context, callback) {
    const alexa = Alexa.handler(event, context, callback);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};
