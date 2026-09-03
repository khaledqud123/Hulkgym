/* =====================================================
   HULK GYM
   COMPLETE WEBSITE JAVASCRIPT
===================================================== */


/* =====================================================
   MUSCLE DATABASE
===================================================== */

const muscles = {

  chest:{
    name:{
      en:"CHEST",
      ar:"الصدر"
    },

    scientific:{
      en:"Pectoralis major & Pectoralis minor",
      ar:"العضلة الصدرية الكبرى والعضلة الصدرية الصغرى"
    },

    target:{
      en:"Pectoralis major",
      ar:"العضلة الصدرية الكبرى"
    },

    description:{
      en:"The chest muscles contribute to pushing movements and shoulder control.",
      ar:"تساهم عضلات الصدر في حركات الدفع والتحكم في الكتف."
    },

    exercises:[

      {
        name:{
          en:"Bench Press",
          ar:"ضغط البنش"
        },

        icon:"▰",
        type:"press",

        equipment:{
          en:"Olympic Barbell + Bench",
          ar:"بار أولمبي + مقعد"
        },

        steps:{
          en:[
            "Lie comfortably on the bench and keep your body stable.",
            "Grip the bar securely with a comfortable hand position.",
            "Lower and press the bar using controlled movement.",
            "Keep the resistance manageable and focus on technique."
          ],

          ar:[
            "استلقِ بشكل مريح على المقعد وحافظ على ثبات جسمك.",
            "أمسك البار بإحكام باستخدام وضعية مريحة لليدين.",
            "أنزل البار وارفعه بحركة متحكم بها.",
            "استخدم مقاومة مناسبة وركز على التقنية الصحيحة."
          ]
        }
      },


      {
        name:{
          en:"Incline Dumbbell Press",
          ar:"ضغط الدمبل المائل"
        },

        icon:"◈",
        type:"dumbbell",

        equipment:{
          en:"Incline Bench + Dumbbells",
          ar:"مقعد مائل + دمبل"
        },

        steps:{
          en:[
            "Set the bench at a comfortable incline.",
            "Hold a dumbbell securely in each hand.",
            "Press the dumbbells upward with controlled movement.",
            "Lower them smoothly without rushing."
          ],

          ar:[
            "اضبط المقعد على زاوية مائلة مريحة.",
            "أمسك دمبلاً بشكل آمن في كل يد.",
            "ادفع الدمبل إلى الأعلى بحركة متحكم بها.",
            "أنزلهما بسلاسة دون استعجال."
          ]
        }
      },


      {
        name:{
          en:"Cable Fly",
          ar:"تفتيح الكابل"
        },

        icon:"⌁",
        type:"cable",

        equipment:{
          en:"Cable Machine + Handles",
          ar:"جهاز كابل + مقابض"
        },

        steps:{
          en:[
            "Stand in a stable position between the cable handles.",
            "Hold both handles securely.",
            "Bring the hands together in a controlled movement.",
            "Return slowly while keeping control of the cables."
          ],

          ar:[
            "قف بثبات بين مقابض الكابل.",
            "أمسك المقبضين بشكل آمن.",
            "اجمع اليدين معاً بحركة متحكم بها.",
            "ارجع ببطء مع المحافظة على التحكم بالكابل."
          ]
        }
      },


      {
        name:{
          en:"Push-Up",
          ar:"تمرين الضغط"
        },

        icon:"△",
        type:"bodyweight",

        equipment:{
          en:"Bodyweight",
          ar:"وزن الجسم"
        },

        steps:{
          en:[
            "Place your hands in a comfortable position.",
            "Keep your body controlled and aligned.",
            "Lower yourself smoothly.",
            "Press away from the floor without rushing."
          ],

          ar:[
            "ضع يديك في وضعية مريحة.",
            "حافظ على جسمك ثابتاً ومستقيماً.",
            "أنزل جسمك بسلاسة.",
            "ادفع جسمك بعيداً عن الأرض دون استعجال."
          ]
        }
      }

    ]
  },


  back:{
    name:{
      en:"BACK",
      ar:"الظهر"
    },

    scientific:{
      en:"Latissimus dorsi, Trapezius & Erector spinae",
      ar:"العضلة الظهرية العريضة والعضلة شبه المنحرفة وناصبة الفقرات"
    },

    target:{
      en:"Latissimus dorsi",
      ar:"العضلة الظهرية العريضة"
    },

    description:{
      en:"The back contains several major muscle groups involved in pulling movements, posture and trunk stability.",
      ar:"يحتوي الظهر على عدة مجموعات عضلية رئيسية تشارك في حركات السحب والوضعية وثبات الجذع."
    },

    exercises:[

      {
        name:{
          en:"Lat Pulldown",
          ar:"السحب العلوي"
        },

        icon:"↓",
        type:"cable",

        equipment:{
          en:"Lat Pulldown Machine + Bar",
          ar:"جهاز السحب العلوي + بار"
        },

        steps:{
          en:[
            "Sit comfortably and secure your legs.",
            "Grip the bar evenly with both hands.",
            "Pull the bar down with controlled movement.",
            "Return the bar slowly."
          ],

          ar:[
            "اجلس بشكل مريح وثبت ساقيك.",
            "أمسك البار بكلتا يديك بشكل متوازن.",
            "اسحب البار إلى الأسفل بحركة متحكم بها.",
            "أعد البار إلى الأعلى ببطء."
          ]
        }
      },


      {
        name:{
          en:"Seated Cable Row",
          ar:"سحب الكابل جالساً"
        },

        icon:"←",
        type:"cable",

        equipment:{
          en:"Cable Row Machine + Handle",
          ar:"جهاز سحب الكابل + مقبض"
        },

        steps:{
          en:[
            "Sit with your feet supported.",
            "Hold the handle securely.",
            "Pull the handle toward your body smoothly.",
            "Return the handle slowly."
          ],

          ar:[
            "اجلس مع تثبيت قدميك.",
            "أمسك المقبض بشكل آمن.",
            "اسحب المقبض باتجاه جسمك بسلاسة.",
            "أعد المقبض ببطء."
          ]
        }
      },


      {
        name:{
          en:"Dumbbell Row",
          ar:"سحب الدمبل"
        },

        icon:"↙",
        type:"dumbbell",

        equipment:{
          en:"Dumbbell + Bench",
          ar:"دمبل + مقعد"
        },

        steps:{
          en:[
            "Use a stable support and comfortable stance.",
            "Hold the dumbbell securely.",
            "Pull the dumbbell toward your side.",
            "Lower it with control."
          ],

          ar:[
            "استخدم دعماً ثابتاً ووضعية مريحة.",
            "أمسك الدمبل بشكل آمن.",
            "اسحب الدمبل باتجاه جانب جسمك.",
            "أنزله بتحكم."
          ]
        }
      },


      {
        name:{
          en:"Back Extension",
          ar:"تمديد الظهر"
        },

        icon:"⌃",
        type:"machine",

        equipment:{
          en:"Back Extension Machine",
          ar:"جهاز تمديد الظهر"
        },

        steps:{
          en:[
            "Set yourself comfortably on the machine.",
            "Keep the movement controlled.",
            "Move through a comfortable range.",
            "Avoid forcing the lower back into an extreme position."
          ],

          ar:[
            "اضبط وضعيتك بشكل مريح على الجهاز.",
            "حافظ على الحركة بتحكم.",
            "تحرك ضمن نطاق مريح.",
            "تجنب إجبار أسفل الظهر على وضعية شديدة."
          ]
        }
      }

    ]
  },


  shoulders:{
    name:{
      en:"SHOULDERS",
      ar:"الأكتاف"
    },

    scientific:{
      en:"Deltoideus",
      ar:"العضلة الدالية"
    },

    target:{
      en:"Deltoideus",
      ar:"العضلة الدالية"
    },

    description:{
      en:"The deltoids surround the shoulder and help lift and move the arms.",
      ar:"تحيط العضلات الدالية بالكتف وتساعد على رفع وتحريك الذراعين."
    },

    exercises:[

      {
        name:{
          en:"Dumbbell Shoulder Press",
          ar:"ضغط الكتف بالدمبل"
        },

        icon:"↑",
        type:"dumbbell",

        equipment:{
          en:"Bench + Dumbbells",
          ar:"مقعد + دمبل"
        },

        steps:{
          en:[
            "Sit or stand in a stable position.",
            "Hold the dumbbells securely.",
            "Press upward smoothly.",
            "Lower the dumbbells under control."
          ],

          ar:[
            "اجلس أو قف في وضعية ثابتة.",
            "أمسك الدمبل بشكل آمن.",
            "ادفع الدمبل إلى الأعلى بسلاسة.",
            "أنزل الدمبل بتحكم."
          ]
        }
      },


      {
        name:{
          en:"Lateral Raise",
          ar:"الرفع الجانبي"
        },

        icon:"↔",
        type:"dumbbell",

        equipment:{
          en:"Dumbbells",
          ar:"دمبل"
        },

        steps:{
          en:[
            "Hold manageable dumbbells at your sides.",
            "Keep your shoulders relaxed.",
            "Raise your arms smoothly.",
            "Lower them slowly."
          ],

          ar:[
            "أمسك دمبل مناسباً بجانب جسمك.",
            "حافظ على استرخاء الكتفين.",
            "ارفع ذراعيك بسلاسة.",
            "أنزلهما ببطء."
          ]
        }
      },


      {
        name:{
          en:"Reverse Fly",
          ar:"التفتيح الخلفي"
        },

        icon:"⇆",
        type:"dumbbell",

        equipment:{
          en:"Dumbbells + Bench",
          ar:"دمبل + مقعد"
        },

        steps:{
          en:[
            "Use a stable position.",
            "Hold the dumbbells securely.",
            "Move your arms outward with control.",
            "Return slowly."
          ],

          ar:[
            "استخدم وضعية ثابتة.",
            "أمسك الدمبل بشكل آمن.",
            "حرك ذراعيك إلى الخارج بتحكم.",
            "ارجع ببطء."
          ]
        }
      }

    ]
  },


  arms:{
    name:{
      en:"ARMS",
      ar:"الذراعان"
    },

    scientific:{
      en:"Biceps brachii & Triceps brachii",
      ar:"العضلة ذات الرأسين العضدية والعضلة ثلاثية الرؤوس العضدية"
    },

    target:{
      en:"Biceps brachii & Triceps brachii",
      ar:"العضلة ذات الرأسين وثلاثية الرؤوس"
    },

    description:{
      en:"The arm muscles include the biceps and triceps, which assist with bending and extending the elbow.",
      ar:"تشمل عضلات الذراع العضلة ذات الرأسين وثلاثية الرؤوس، وتساعدان في ثني ومد الكوع."
    },

    exercises:[

      {
        name:{
          en:"Dumbbell Curl",
          ar:"ثني الذراع بالدمبل"
        },

        icon:"⌁",
        type:"dumbbell",

        equipment:{
          en:"Dumbbells",
          ar:"دمبل"
        },

        steps:{
          en:[
            "Hold the dumbbells securely at your sides.",
            "Keep your elbows comfortable and stable.",
            "Curl the weights smoothly.",
            "Lower them slowly."
          ],

          ar:[
            "أمسك الدمبل بشكل آمن بجانب جسمك.",
            "حافظ على ثبات الكوعين بشكل مريح.",
            "ارفع الأوزان بسلاسة.",
            "أنزلها ببطء."
          ]
        }
      },


      {
        name:{
          en:"Hammer Curl",
          ar:"تمرين المطرقة"
        },

        icon:"⌂",
        type:"dumbbell",

        equipment:{
          en:"Dumbbells",
          ar:"دمبل"
        },

        steps:{
          en:[
            "Hold the dumbbells with a neutral grip.",
            "Keep the elbows close to your sides.",
            "Curl through a comfortable range.",
            "Return under control."
          ],

          ar:[
            "أمسك الدمبل بقبضة محايدة.",
            "حافظ على قرب الكوعين من الجسم.",
            "ارفع الدمبل ضمن نطاق مريح.",
            "ارجع بتحكم."
          ]
        }
      },


      {
        name:{
          en:"Cable Triceps Pressdown",
          ar:"ضغط الترايسبس بالكابل"
        },

        icon:"↓",
        type:"cable",

        equipment:{
          en:"Cable Machine + Handle",
          ar:"جهاز كابل + مقبض"
        },

        steps:{
          en:[
            "Stand comfortably at the cable station.",
            "Hold the attachment securely.",
            "Extend the elbows smoothly.",
            "Return the handle slowly."
          ],

          ar:[
            "قف بشكل مريح أمام جهاز الكابل.",
            "أمسك المقبض بشكل آمن.",
            "مد الكوعين بسلاسة.",
            "أعد المقبض ببطء."
          ]
        }
      }

    ]
  },


  legs:{
    name:{
      en:"LEGS",
      ar:"الساقان"
    },

    scientific:{
      en:"Quadriceps, Hamstrings, Gluteus maximus & Gastrocnemius",
      ar:"العضلات الرباعية وأوتار الركبة والألوية الكبرى وعضلة الساق"
    },

    target:{
      en:"Quadriceps & Gluteus maximus",
      ar:"العضلات الرباعية والألوية الكبرى"
    },

    description:{
      en:"The legs contain several major muscle groups responsible for standing, walking, squatting and many athletic movements.",
      ar:"تحتوي الساقان على عدة مجموعات عضلية رئيسية مسؤولة عن الوقوف والمشي والقرفصاء والعديد من الحركات الرياضية."
    },

    exercises:[

      {
        name:{
          en:"Squat",
          ar:"القرفصاء"
        },

        icon:"⌄",
        type:"press",

        equipment:{
          en:"Squat Rack + Barbell",
          ar:"حامل القرفصاء + بار"
        },

        steps:{
          en:[
            "Stand with a comfortable stance.",
            "Keep your feet stable and torso controlled.",
            "Lower through a comfortable range.",
            "Stand back up smoothly."
          ],

          ar:[
            "قف بوضعية مريحة.",
            "حافظ على ثبات القدمين والجذع.",
            "انزل ضمن نطاق مريح.",
            "عد إلى الوقوف بسلاسة."
          ]
        }
      },


      {
        name:{
          en:"Leg Press",
          ar:"ضغط الأرجل"
        },

        icon:"▣",
        type:"machine",

        equipment:{
          en:"Leg Press Machine",
          ar:"جهاز ضغط الأرجل"
        },

        steps:{
          en:[
            "Position yourself securely on the machine.",
            "Place your feet comfortably on the platform.",
            "Lower the platform under control.",
            "Press smoothly."
          ],

          ar:[
            "ثبت وضعيتك بشكل آمن على الجهاز.",
            "ضع قدميك بشكل مريح على المنصة.",
            "أنزل المنصة بتحكم.",
            "ادفع بسلاسة."
          ]
        }
      },


      {
        name:{
          en:"Romanian Deadlift",
          ar:"الرفعة الرومانية"
        },

        icon:"↘",
        type:"press",

        equipment:{
          en:"Barbell",
          ar:"بار"
        },

        steps:{
          en:[
            "Stand with a comfortable stance.",
            "Keep the weight close to your body.",
            "Hinge through the hips with a controlled back position.",
            "Return to standing smoothly."
          ],

          ar:[
            "قف بوضعية مريحة.",
            "حافظ على الوزن قريباً من الجسم.",
            "حرك الورك للخلف مع الحفاظ على وضعية ظهر متحكم بها.",
            "عد إلى الوقوف بسلاسة."
          ]
        }
      },


      {
        name:{
          en:"Calf Raise",
          ar:"رفع الساق"
        },

        icon:"↑",
        type:"machine",

        equipment:{
          en:"Calf Raise Machine",
          ar:"جهاز رفع الساق"
        },

        steps:{
          en:[
            "Stand securely with support if needed.",
            "Keep your feet stable.",
            "Raise your heels smoothly.",
            "Lower them slowly."
          ],

          ar:[
            "قف بأمان واستخدم دعماً عند الحاجة.",
            "حافظ على ثبات القدمين.",
            "ارفع الكعبين بسلاسة.",
            "أنزلهما ببطء."
          ]
        }
      }

    ]
  },


  core:{
    name:{
      en:"CORE",
      ar:"الجذع"
    },

    scientific:{
      en:"Rectus abdominis, Obliques & Transversus abdominis",
      ar:"العضلة المستقيمة البطنية والعضلات المائلة والمستعرضة البطنية"
    },

    target:{
      en:"Rectus abdominis & Obliques",
      ar:"العضلة المستقيمة البطنية والعضلات المائلة"
    },

    description:{
      en:"The core helps stabilize the trunk and transfer force between the upper and lower body.",
      ar:"يساعد الجذع على تثبيت الجسم ونقل القوة بين الجزء العلوي والسفلي."
    },

    exercises:[

      {
        name:{
          en:"Cable Crunch",
          ar:"كرنش الكابل"
        },

        icon:"↓",
        type:"cable",

        equipment:{
          en:"Cable Machine + Rope",
          ar:"جهاز كابل + حبل"
        },

        steps:{
          en:[
            "Set the cable at a comfortable position.",
            "Hold the attachment securely.",
            "Curl the trunk through a controlled range.",
            "Return slowly."
          ],

          ar:[
            "اضبط الكابل على وضعية مريحة.",
            "أمسك الملحق بشكل آمن.",
            "حرك الجذع ضمن نطاق متحكم به.",
            "ارجع ببطء."
          ]
        }
      },


      {
        name:{
          en:"Plank",
          ar:"البلانك"
        },

        icon:"▬",
        type:"bodyweight",

        equipment:{
          en:"Bodyweight",
          ar:"وزن الجسم"
        },

        steps:{
          en:[
            "Set your hands or forearms comfortably.",
            "Keep the body stable.",
            "Maintain controlled breathing.",
            "Stop when you can no longer maintain good position."
          ],

          ar:[
            "ضع يديك أو ساعديك في وضعية مريحة.",
            "حافظ على ثبات الجسم.",
            "حافظ على تنفس منتظم ومتحكم به.",
            "توقف عندما لا تستطيع المحافظة على الوضعية الصحيحة."
          ]
        }
      },


      {
        name:{
          en:"Dead Bug",
          ar:"ديد باغ"
        },

        icon:"✦",
        type:"bodyweight",

        equipment:{
          en:"Bodyweight",
          ar:"وزن الجسم"
        },

        steps:{
          en:[
            "Lie comfortably on your back.",
            "Keep your trunk stable.",
            "Move opposite limbs slowly.",
            "Return to the starting position with control."
          ],

          ar:[
            "استلقِ بشكل مريح على ظهرك.",
            "حافظ على ثبات الجذع.",
            "حرك الأطراف المتقابلة ببطء.",
            "عد إلى وضع البداية بتحكم."
          ]
        }
      }

    ]
  }

};


/* =====================================================
   STATE
===================================================== */

let currentLanguage = "en";
let currentMuscle = "chest";
let currentExercise = 0;


/* =====================================================
   ELEMENTS
===================================================== */

const languageToggle =
  document.getElementById("languageToggle");

const humanBody =
  document.getElementById("humanBody");

const muscleName =
  document.getElementById("muscleName");

const scientificName =
  document.getElementById("scientificName");

const muscleDescription =
  document.getElementById("muscleDescription");

const primaryTarget =
  document.getElementById("primaryTarget");

const exerciseList =
  document.getElementById("exerciseList");

const demoTitle =
  document.getElementById("demoTitle");

const demoTarget =
  document.getElementById("demoTarget");

const exerciseScene =
  document.getElementById("exerciseScene");

const equipmentName =
  document.getElementById("equipmentName");

const stepElements = [
  document.getElementById("step1"),
  document.getElementById("step2"),
  document.getElementById("step3"),
  document.getElementById("step4")
];


/* =====================================================
   LANGUAGE
===================================================== */

function applyLanguage(){

  document.documentElement.lang =
    currentLanguage;

  document.body.dir =
    currentLanguage === "ar"
      ? "rtl"
      : "ltr";


  document.querySelectorAll("[data-en]").forEach(element => {

    const value =
      element.dataset[currentLanguage];

    if(value !== undefined){

      element.textContent = value;

    }

  });


  renderMuscle(currentMuscle);

  renderExercise(currentExercise);

  updateCalendarLanguage();

}


/* =====================================================
   LANGUAGE TOGGLE
===================================================== */

languageToggle.addEventListener("click",() => {

  currentLanguage =
    currentLanguage === "en"
      ? "ar"
      : "en";

  applyLanguage();

});


/* =====================================================
   MUSCLE BUTTONS
===================================================== */

document.querySelectorAll(".muscle-btn").forEach(button => {

  button.addEventListener("click",() => {

    currentMuscle =
      button.dataset.muscle;

    currentExercise = 0;


    document.querySelectorAll(".muscle-btn")
      .forEach(btn =>
        btn.classList.remove("active")
      );


    button.classList.add("active");


    renderMuscle(currentMuscle);

    renderExercise(0);

  });

});


/* =====================================================
   RENDER MUSCLE
===================================================== */

function renderMuscle(key){

  const muscle =
    muscles[key];

  if(!muscle) return;


  muscleName.textContent =
    muscle.name[currentLanguage];


  scientificName.textContent =
    muscle.scientific[currentLanguage];


  muscleDescription.textContent =
    muscle.description[currentLanguage];


  primaryTarget.textContent =
    muscle.target[currentLanguage];


  exerciseList.innerHTML = "";


  muscle.exercises.forEach((exercise,index) => {

    const item =
      document.createElement("div");


    item.className =
      "exercise-item";


    if(index === currentExercise){

      item.classList.add("active");

    }


    item.innerHTML = `

      <div class="exercise-item-icon">
        ${exercise.icon}
      </div>

      <div>

        <strong>
          ${exercise.name[currentLanguage]}
        </strong>

        <small>
          ${muscle.target[currentLanguage]}
        </small>

      </div>

    `;


    item.addEventListener("click",() => {

      currentExercise = index;

      renderExercise(index);

    });


    exerciseList.appendChild(item);

  });


  highlightMuscle(key);

}


/* =====================================================
   MUSCLE HIGHLIGHTING
===================================================== */

function clearHighlights(){

  document
    .querySelectorAll(".zone")
    .forEach(zone =>
      zone.classList.remove("highlight")
    );

}


function highlightMuscle(key){

  clearHighlights();


  const selectors = {

    chest:[
      ".zone.chest"
    ],

    back:[
      ".zone.lats",
      ".zone.trapezius"
    ],

    shoulders:[
      ".zone.shoulder"
    ],

    arms:[
      ".arm-muscle.upper",
      ".arm-muscle.fore"
    ],

    legs:[
      ".thigh-muscle",
      ".calf-muscle"
    ],

    core:[
      ".zone.abs",
      ".zone.oblique"
    ]

  };


  if(!selectors[key]) return;


  selectors[key].forEach(selector => {

    document
      .querySelectorAll(selector)
      .forEach(zone =>
        zone.classList.add("highlight")
      );

  });

}


/* =====================================================
   FRONT / BACK
===================================================== */

document.querySelectorAll(".view-btn")
  .forEach(button => {

    button.addEventListener("click",() => {

      document.querySelectorAll(".view-btn")
        .forEach(btn =>
          btn.classList.remove("active")
        );


      button.classList.add("active");


      const view =
        button.dataset.view;


      humanBody.classList.toggle(
        "back-view",
        view === "back"
      );


      highlightMuscle(currentMuscle);

    });

  });


/* =====================================================
   EXERCISE RENDER
===================================================== */

function renderExercise(index){

  const muscle =
    muscles[currentMuscle];

  if(
    !muscle ||
    !muscle.exercises[index]
  ){
    return;
  }


  const exercise =
    muscle.exercises[index];


  currentExercise =
    index;


  demoTitle.textContent =
    exercise.name[currentLanguage];


  demoTarget.textContent =
    muscle.target[currentLanguage];


  equipmentName.textContent =
    exercise.equipment[currentLanguage];


  const steps =
    exercise.steps[currentLanguage];


  stepElements.forEach((element,index) => {

    if(element){

      element.textContent =
        steps[index];

    }

  });


  updateExerciseVisual(
    exercise.type
  );


  document
    .querySelectorAll(".exercise-item")
    .forEach((item,index) => {

      item.classList.toggle(
        "active",
        index === currentExercise
      );

    });

}


/* =====================================================
   EXERCISE VISUAL
===================================================== */

function updateExerciseVisual(type){

  exerciseScene.classList.remove(
    "cable-mode",
    "dumbbell-mode",
    "bodyweight-mode"
  );


  if(
    type === "cable" ||
    type === "machine"
  ){

    exerciseScene.classList.add(
      "cable-mode"
    );

  }


  if(type === "dumbbell"){

    exerciseScene.classList.add(
      "dumbbell-mode"
    );

  }


  if(type === "bodyweight"){

    exerciseScene.classList.add(
      "bodyweight-mode"
    );

  }

}


/* =====================================================
   CALCULATOR
===================================================== */

const calculateTraining =
  document.getElementById(
    "calculateTraining"
  );


calculateTraining.addEventListener(
  "click",
  calculateSession
);


function getNumber(id){

  return Math.max(
    0,
    Number(
      document.getElementById(id).value
    ) || 0
  );

}


function calculateSession(){

  const exercises =
    Math.max(
      1,
      getNumber("exerciseCount")
    );


  const sets =
    Math.max(
      1,
      getNumber("setsPerExercise")
    );


  const reps =
    Math.max(
      1,
      getNumber("repsPerSet")
    );


  const load =
    getNumber("loadPerRep");


  const rest =
    getNumber("restTime");


  const setTime =
    Math.max(
      1,
      getNumber("setTime")
    );


  const totalSets =
    exercises * sets;


  const totalReps =
    totalSets * reps;


  const volume =
    totalReps * load;


  const workSeconds =
    totalSets * setTime;


  const restSeconds =
    Math.max(0,totalSets - 1) * rest;


  const totalSeconds =
    workSeconds + restSeconds;


  const minutes =
    Math.max(
      1,
      Math.round(totalSeconds / 60)
    );


  document.getElementById(
    "totalSets"
  ).textContent =
    totalSets;


  document.getElementById(
    "totalReps"
  ).textContent =
    totalReps;


  document.getElementById(
    "trainingVolume"
  ).textContent =
    `${volume.toLocaleString()} kg`;


  document.getElementById(
    "sessionTime"
  ).textContent =
    `${minutes} min`;

}


/* =====================================================
   CALENDAR
===================================================== */

const calendarButtons =
  document.querySelectorAll(
    ".day-card button"
  );


calendarButtons.forEach(button => {

  button.addEventListener("click",() => {

    const card =
      button.closest(".day-card");


    const workout =
      button.dataset.workout;


    if(card.classList.contains("scheduled")){

      card.classList.remove(
        "scheduled"
      );

      button.textContent = "+";


      const label =
        card.querySelector(
          ".workout-label"
        );


      if(label){
        label.remove();
      }


      return;

    }


    card.classList.add(
      "scheduled"
    );


    button.textContent = "✓";


    const label =
      document.createElement("small");


    label.className =
      "workout-label";


    label.style.color =
      "var(--lime)";


    label.style.fontSize =
      "8px";


    label.style.fontWeight =
      "900";


    label.textContent =
      translateWorkout(
        workout
      );


    card.insertBefore(
      label,
      button
    );

  });

});


function translateWorkout(workout){

  if(currentLanguage === "en"){
    return workout;
  }


  const translations = {

    Push:"دفع",
    Pull:"سحب",
    Legs:"أرجل",
    Core:"جذع",
    Upper:"الجزء العلوي",
    "Full Body":"الجسم كامل",
    Rest:"راحة"

  };


  return translations[workout]
    || workout;

}


function updateCalendarLanguage(){

  document
    .querySelectorAll(".workout-label")
    .forEach(label => {

      const card =
        label.closest(".day-card");

      if(!card) return;

      const button =
        card.querySelector("button");

      if(button){

        label.textContent =
          translateWorkout(
            button.dataset.workout
          );

      }

    });

}


/* =====================================================
   CALENDAR WEEK NAVIGATION
===================================================== */

let weekOffset = 0;

const weekLabel =
  document.getElementById(
    "weekLabel"
  );


document
  .getElementById("previousWeek")
  .addEventListener("click",() => {

    weekOffset--;

    updateWeekLabel();

  });


document
  .getElementById("nextWeek")
  .addEventListener("click",() => {

    weekOffset++;

    updateWeekLabel();

  });


function updateWeekLabel(){

  if(weekOffset === 0){

    weekLabel.textContent =
      currentLanguage === "ar"
        ? "هذا الأسبوع"
        : "THIS WEEK";

    return;

  }


  const amount =
    Math.abs(weekOffset);


  if(weekOffset > 0){

    weekLabel.textContent =
      currentLanguage === "ar"
        ? `بعد ${amount} أسبوع`
        : `IN ${amount} WEEK${amount > 1 ? "S" : ""}`;

  }else{

    weekLabel.textContent =
      currentLanguage === "ar"
        ? `قبل ${amount} أسبوع`
        : `${amount} WEEK${amount > 1 ? "S" : ""} AGO`;

  }

}


/* =====================================================
   SMOOTH NAVIGATION
===================================================== */

document
  .querySelectorAll('a[href^="#"]')
  .forEach(link => {

    link.addEventListener(
      "click",
      event => {

        const target =
          document.querySelector(
            link.getAttribute("href")
          );


        if(!target) return;


        event.preventDefault();


        const navbarHeight =
          document.querySelector(
            ".navbar"
          ).offsetHeight;


        const top =
          target.getBoundingClientRect().top +
          window.scrollY -
          navbarHeight -
          15;


        window.scrollTo({

          top:top,

          behavior:"smooth"

        });

      }
    );

  });


/* =====================================================
   NAVBAR SCROLL
===================================================== */

window.addEventListener(
  "scroll",
  () => {

    const navbar =
      document.querySelector(
        ".navbar"
      );


    if(window.scrollY > 30){

      navbar.style.background =
        "rgba(3,3,3,.97)";

    }else{

      navbar.style.background =
        "rgba(3,3,3,.87)";

    }

  }
);


/* =====================================================
   INITIALIZE
===================================================== */

renderMuscle("chest");

renderExercise(0);

calculateSession();

updateWeekLabel();
