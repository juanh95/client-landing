const skinQuestions = {
  pages: [
    {
      questions: [
        {
          type: "text",
          name: "name",
          title: "What is your name?",
          placeHolder: "Enter your name...",
          isRequired: true, 
          autoComplete: "name",
        }, {
          type: "text",
          name: "email",
          title: "E-mail:",
          isRequired: true, 
          validators: [{ type: "email" }],
        }, {
          type: "text",
          name: "phone",
          title: "Phone: ",
          isRequired: true, 
          validators: [{ type: "numeric" }],
        }, {
          type: "radiogroup",
          name: "age range",
          title: "What is your age range?",
          isRequired: true, 
          choices: ["18-24", "25-34", "35-44", "45-54", "55-64", "65-74"]
        }
      ]
    }, {
      questions: [
        {
          type: "radiogroup",
          name: "skin description",
          title: "How would you best describe your skin?",
          choices: [
            "Oily - appears shiny with very visible pores", 
            "Normal - neither dry nor oily or sensitive", 
            "Combination - feels dry or normal in some areas & oily in others",
            "Dry - tight sensitive, lacks hydration, & pores are not visible", 
            "Sensitive - very delicate & responsive to changes"
          ]
        }, {
          type: "radiogroup",
          name: "skin main concern",
          title: "What is the main concern with your skin?",
          choices: [
            "Fine lines & wrinkles", 
            "Dullness / lack of radiance", 
            "Lack of hydration",
            "Texture", 
            "Large visible pores",
            "Uneven skintone / hyperpigmentation", 
            "Acne"
          ]
        }, {
          type: "radiogroup",
          name: "skin goal",
          title: "What is your main skin goal?",
          choices: [
            "Bright, radiant skin", 
            "Clear, even tone skin", 
            "Replenished, hydrated skin",
            "Plump, tight skin", 
            "Smooth, refined skin",
          ]
        }, {
          type: "radiogroup",
          name: "makeup wear",
          title: "Do you wear makeup?",
          choices: ["Yes", "No"]
        }, 
      ]
    },
  ],
  completedHtml: "<p><h2>Your Consultation is Under Review</h2></p>"
};

export default skinQuestions;