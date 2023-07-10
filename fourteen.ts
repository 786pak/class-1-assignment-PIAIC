let guestList: string[] = ["Ambreen", "Aisha", "Abida"];

for (let i = 0; i < guestList.length; i++) {
  let message: string = `Dear ${guestList[i]}, you are cordially invited to dinner. We would be delighted to have your presence.`;
  console.log(message);
}
