const value = {
    issueDescription: "itemName: Sunlight Washing Powder Pink 700 gm Pack returnQuantity: 1 returnReason: Paisay nahin hain \nitemName: Dollar Pointer Fine Liner Black Box (10 pcs) returnQuantity: 1 returnReason: Paisay nahin hain \n"
}

const parseLines = (valueString) => {
    console.log({valueString})
    const replaced = valueString.replace(/(\\n)/g, "\n");
    const abc = valueString.replace(/(?:\r|\n|\r\n)/g, `<br>`);
    console.log({replaced})
    console.log({abc})
    return replaced
}

const parseLines = (value: string) => {
    // const replaced = value.replace(/\n/g, `</br>`)
    // const replaced = value.split('\n')
    // const formattedString = `<div>${value.replace(/(?:\r|\n|\r\n)/g, `<br>`)}</div>`
    // console.log({replaced})
    // console.log({formattedString})
    // return formattedString
    // const comments = ticketComments.issueDescription;
    // const lines = comments.split("\n");

    // if (document.getElementById("comments")) {
    // 	const lines = comments.split("\n");
      
    // 	for (const line of lines) {
    // 	  document.getElementById("comments").innerHTML += `<br>${line}`;
    // 	}
    //   }
    if (document.querySelector(".info-card-detail--container-inner-comment")) {
        const comments = ticketComments.issueDescription;
        const lines = comments.split("\n");
      
        let innerHTML = "";
      
        for (const line of lines) {
          innerHTML += `<br>${line}`;
        }
      
        document.querySelector(".info-card-detail--container-inner-comment").innerHTML = innerHTML;
      } else {
        console.log("The comment element does not exist");
      }

}

console.log({value})

const parsed = parseLines(value.issueDescription)

console.log({parsed})
