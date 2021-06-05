const influencerQuestions = {
  pages: [
    {
      questions: [
        {
          type: "text",
          name: "name",
          title: "Full Name:",
          placeHolder: "Enter your name...",
          isRequired: true, 
        }, {
          type: "text",
          name: "igName",
          title: "IG Name: ",
          isRequired: true,
        }, {
          type: "text",
          name: "phone",
          title: "Phone: ",
          isRequired: true, 
          validators: [{ type: "numeric" }]
        }, 
      ]
    }, {
      questions: [
        {
          type: "radiogroup",
          name: "goals",
          title: "What are your goals in working online with me?",
          choices: [
            "Make an extra $500 a month", 
            "Side hustle", 
            "Full-time business",
            "Get to the TOP of the company", 
          ]
        }, {
          type: "radiogroup",
          name: "coachable",
          title: "Are you coachable?",
          choices: ["Yes", "No"]
        }, {
          type: "radiogroup",
          name: "hungry",
          title: "Are you hungry? (FOR SUCCESS)",
          choices: ["Yes", "No"]
        }, {
          type: "radiogroup",
          name: "all in",
          title: "Will you be all in?",
          choices: ["Yes", "No"]
        }, 
      ]
    },
  ],
  completedHtml: "<p><h2>The majority of my income is made through my phone believe it or not, and I can make that possible for you too! I look forward to speaking, building a long lasting friendship and potentially working together!</h2></p>"
};

export default influencerQuestions;