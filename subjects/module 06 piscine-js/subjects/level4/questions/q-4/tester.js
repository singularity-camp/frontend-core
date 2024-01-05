// ::javascript
// ::header
// ::code

function tempForecasts(obj) {
  //your code
  return [];
}

// ::footer
const process = null;
const states = [
  {
    city: "Los Angeles",
    temperature: "101 °F",
    state: "california",
    region: "West",
  },
  {
    city: "San Francisco",
    temperature: "84 °F",
    state: "california",
    region: "West",
  },
  {
    city: "Miami",
    temperature: " 112 °F",
    state: "Florida",
    region: "South",
  },
  {
    city: "New York City",
    temperature: " 0 °F",
    state: "new york",
    region: "North East",
  },
  { city: "Juneau", temperature: " 21° F", state: "Alaska", region: "West" },
  {
    city: "Boston",
    temperature: "45 °F",
    state: "massachussetts",
    region: "North East",
  },
  {
    city: "Jackson",
    temperature: " 70°F  ",
    state: "mississippi",
    region: "South",
  },
  {
    city: "Utqiagvik",
    temperature: " -1 °F",
    state: "Alaska",
    region: "West",
  },
  {
    city: "Albuquerque",
    temperature: " 95 °F",
    state: "new mexico",
    region: "West",
  },
];
let testcases = {
  tempForecasts: [
    {
      args: [states],
      answer: [
        "38°Celsius in Los Angeles, California",
        "28°Celsius in San Francisco, California",
        "44°Celsius in Miami, Florida",
        "-18°Celsius in New York City, New York",
        "-7°Celsius in Juneau, Alaska",
        "7°Celsius in Boston, Massachussetts",
        "21°Celsius in Jackson, Mississippi",
        "-19°Celsius in Utqiagvik, Alaska",
        "35°Celsius in Albuquerque, New Mexico",
      ],
    },
  ],
};

let res = testcases.tempForecasts.every((elem) => {
  try {
    let res = tempForecasts(...elem.args);
    if (!equals(res, elem.answer)) {
      console.log("Error");
      console.log(`Input: ${elem.args}`);
      console.log(`Actual: ${res}`);
      console.log(`Expected: ${elem.answer}`);
      return false;
    }
    return true;
  } catch (e) {
    console.log(e.message);
    return false;
  }
});

if (res) {
  console.log("success");
}

function equals(array, array2) {
  if (!array2 || !array) return false;
  if (array2.length != array.length) return false;
  for (var i = 0, l = array2.length; i < l; i++) {
    if (array2[i] instanceof Array && array[i] instanceof Array) {
      if (!array2[i].equals(array[i])) return false;
    } else if (array2[i] != array[i]) {
      return false;
    }
  }
  return true;
}
