const hairQuestions = {
  pages: [
    {
      questions: [
        {
          type: "text",
          name: "name",
          title: "What is your name?",
          placeHolder: "Enter your name...",
          isRequired: true, 
          
        }, {
          type: "radiogroup",
          name: "hair type",
          title: "What is your hair like?",
          isRequired: true,
          choices: [
            "Straight",
            "Wavy",
            "Curly",
          ]
        }, {
          type: "radiogroup",
          name: "scalp type",
          title: "What is your scalp like?",
          isRequired: true,
          choices: [
            "Dry",
            "Greasy / Oily",
            "Normal",
          ]
        }, {
          type: "radiogroup",
          name: "frizziness",
          title: "Do you struggle with frizziness?",
          isRequired: true, 
          choices: ["Yes", "No"]
        }
      ]
    }, {
      questions: [
        {
          type: "radiogroup",
          name: "ends type",
          title: "How are your ends?",
          choices: ["Split", "Good", "They're ok"]
        }, {
          type: "radiogroup",
          name: "hair wash frequency",
          title: "How often do you wash your hair?",
          choices: ["Daily", "Every Other Day", "1-3 Times a Week"]
        }, {
          type: "radiogroup",
          name: "chemical treatments",
          title: "Do you have any chemical treatments currently on your hair?",
          choices: ["Yes", "No"]
        }, {
          type: "radiogroup",
          name: "color treatments",
          title: "Is your hair color treateed?",
          choices: ["Yes", "No"]
        }, 
      ]
    }, {
      questions: [
        {
          type: "radiogroup",
          name: "heating tool use",
          title: "How often do you use heating tools on your hair such as blow dryers, straighteners, curlers?",
          choices: ["Every Day", "1-3 Times a Week", "Hardly Ever", "Never"]
        }, {
          type: "radiogroup",
          name: "styling",
          title: "Are you a wash and go or do you style your hair every day?",
          choices: ["Wash & Go", "Style"]
        }, {
          type: "radiogroup",
          name: "main concern",
          title: "What is your main concern?",
          choices: ["Hydration", "Volume", "Shine & Smoothness", "More Texture", "Growth"]
        }, {
          type: "radiogroup",
          name: "contact",
          title: "Would you like me to contact you with your personalized & ideal hair pack?",
          choices: ["Yes", "No"]
        }
      ]
    }, {
      questions: [
        {
          type: "radiogroup",
          name: "contactMethod",
          title: "How do you prefer me to contact you?",
          isRequired: true,
          choices: ["E-mail", "Call", "Text"]
        }, {
          type: "text",
          name: "email",
          title: "E-mail:",
          visibleIf: "{contactMethod} = 'E-mail'",
          isRequired: true, 
          validators: [{ type: "email" }],
          focus: false
        }, {
          type: "text",
          name: "phone",
          title: "Phone: ",
          visibleIf: "{contactMethod} = 'Call' or {contactMethod} = 'Text'",
          isRequired: true, 
          validators: [{ type: "numeric" }],
        },
      ]
    }
  ],
  completedHtml: "<p><h2>Thank you! I look forward to speaking with you and helping you achieve the most amazing healthy hair of your life!</h2></p>"
};

export default hairQuestions;