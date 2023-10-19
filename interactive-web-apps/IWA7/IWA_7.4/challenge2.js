const nickname= " ";
const firstname = " ";

// added a dollar sign on first name, added template literals (backticks `) to create a string with placeholders for variables, added if statements, 
if (nickname) {
    console.log(`Good morning, ${nickname}!`);
  } else if (firstname) {
    console.log(`Good morning, ${firstname}!`);
  } else {
    console.log("Good morning!");
  }

  // Alternative console.log(`Good Morning, ${nickname || firstname}!`)