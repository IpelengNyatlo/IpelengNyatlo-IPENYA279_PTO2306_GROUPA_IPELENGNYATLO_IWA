const currentYear = new Date().getFullYear()

const holidays = {
    0: {
        id: 0,
        name: 'Day of Reconciliation',
        date: `16 December ${currentYear}`,
    },
    1: {
        id: 1,
        name: 'Workers Day',
        date: new Date(`1 April ${currentYear}`),
    },
    2: {
        id: 2,
        name: 'Day of Goodwill',
        date: new Date(`26 December ${currentYear}`),
    },
    3: {
        id: 3,
        name: 'New Year Day',
        date: new Date(`1 January ${currentYear}`),
    },
    4: {
        id: 4,
        name: 'Womens Day',
        date: new Date(`9 August ${currentYear}`),
    },
    5: {
        id: 5,
        name: 'Heritage Day',
        date: new Date(`24 September ${currentYear}`),
    },
    6: {
        id: 6,
        name: 'Christmas Day',
        date: new Date(`25 December ${currentYear} 13:25`),
    },
    7: {
        id: 7,
        name: 'Youth Day',
        date: new Date(`16 June ${currentYear}`),
    },
    8: {
        id: 8,
        name: 'Human Rights Day',
        date: new Date(`21 March ${currentYear}`)
    },
};

const christmas = 6;
const futureId = 9;

// Do not change code above this comment

console.log(holidays[futureId]?.name || `ID ${futureId} not created yet`); /*added a $ sign and back tickcs on alternative option, added the square brackets and question mark to check if the futureId has been assigned*/



const copied = {...holidays[christmas]};/*removed the key value 'Christmas' and added a spread operator to clone holidays[6] */
copied.name = 'X-mas Day'; /*I renamed the cloned Christmas from line 60 to 'X-mas Day' and used copied.name to specifically refer to the 'name' within the 'copied' object and removed { name: 'X-mas Day' } */
copied.date = new Date(holidays[6].date); /*created a new variable 'copied.date and assigned it to holiday[6]*/ 
copied.date.setHours(0);/*added the .setHours() and .setMinutes (below) to set our time to 0. We removed .hours = 0 & .minutes = 0 because our correctedDate variable does not have the 'hour' 'folder'*/
copied.date.setMinutes(0);

/*copied.date = new Date(holidays[christmas].date)

/* Used setHours() and setMinutes() instead of assigning the values to correctDate.hour with an equal sign.
this is going to change time for the copied object to 00:00 from 13:25.  
copied.date.setHours(0);
copied.date.setMinutes(0);*/

const isEarlier = copied.date.getTime() < holidays[6].date.getTime(); /*included const and included the .getTime() function to included for both dates*/
console.log('New date is earlier:', isEarlier);

    if (isEarlier) {
        console.log('ID change:', holidays[christmas].id != copied.id) 
        console.log('Name change:', copied.name) 
        console.log('Date change:', copied.date)
     };

const firstHolidayTimestamp = Math.min(
    new Date(holidays[0].date).getTime(), /*added 'new' next to the date because this line was missing it from the above object in line 7.added brackets to all the 'getTime' functions in firstHolidayTimeStamp and lastHolidayTimeStamp */
    Date(holidays[1].date).getTime(), /*added 'new Date ' around the holidays object (putting the words from holidays to 'date' inside the bracket*/
    Date(holidays[2].date).getTime(),
    Date(holidays[3].date).getTime(),
    Date(holidays[4].date).getTime(),
    Date(holidays[5].date).getTime(),
    Date(holidays[6].date).getTime(),
    Date(holidays[7].date).getTime(),
    Date(holidays[8].date).getTime(),
)

const lastHolidayTimestamp = Math.max(
    new Date(holidays[0].date).getTime(),
    Date(holidays[1].date).getTime(),
    Date(holidays[2].date).getTime(),
    Date(holidays[3].date).getTime(),
    Date(holidays[4].date).getTime(),
    Date(holidays[5].date).getTime(),
    Date(holidays[6].date).getTime(),
    Date(holidays[7].date).getTime(),
    Date(holidays[8].date).getTime(),
)

const firstHoliday = new Date(firstHolidayTimestamp); /*converted the first and last Holiday time stamps from miliseconds(because .get time converts the date into miliseconds) to the actual date*/
const lastHoliday = new Date(lastHolidayTimestamp);



const firstDay = String(firstHoliday.getDate()).padStart(2,0) /*added new Date function around the holiday time stamps (i.e added the words 'firstHolidayTimestamp' inside the brackets) and added the () next to the getDate */
const firstMonth = String(firstHoliday.getMonth()+1).padStart(2,0)
const lastDay = String(lastHoliday.getDate()).padStart(2,0)
const lastMonth = String(lastHoliday.getMonth()+1).padStart(2,0)

console.log(`${firstDay}/${firstMonth}/${currentYear}`) /*added template literals to the console.logs*/
console.log(`${lastDay}/${lastMonth}/${currentYear}`)

const randomHoliday = holidays[Math.round(Math.random()*8)].date 
const randomDay = String(randomHoliday.getDate()).padStart(2,0)
const randomMonth = String(randomHoliday.getMonth()+1).padStart(2,0)
console.log(`${randomDay}/${randomMonth}/${currentYear}`)