const re = 	
/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
export default (emails) => {
    //console.log(emails);
    emails = emails.replace(/(^,)|(,$)/g, "");
    //console.log(emails);
    const invalidEmails = emails.split(',').map(email => email.trim()).filter(email => re.test(email) === false);
    
    // false here to check which email is not validated and keep it in emailArrays list to inform to user
    
    if(invalidEmails.length) {
        return `These emails are invalid: ${invalidEmails}`;
    }
    
    return;
};