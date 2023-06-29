/*
E-maily
 fetch(`https://apps.kodim.cz/daweb/trening-api/apis/emails`);
.then(response => response.json())
.then(data => renderEmail(data.emails))

const renderEmail = (emails) => {
    const inbox = document.querySelector("#inbox");

    inbox.innerHTML = emails.map(email => {
        return `
        <div class="email">
            <div class="email__head">
                <button class="email__icon email__icon--closed"></button>
                <div class="email__info">
                    <div class="email__sender">${email.sender.name}</div>
                    <div class="email__subject">${email.subject}</div>
                </div>
                <div class="email__time">${email.time}</div>
            </div>
        <div class="email__body"></div>
        </div>
        `
    }).join('')
}; 
*/

//E-maily, složky
  
fetch(`https://apps.kodim.cz/daweb/trening-api/apis/emails?folder=unread`)
.then((response) => response.json())
.then((data) => renderSection(data.emails, 'unread'));

fetch(`https://apps.kodim.cz/daweb/trening-api/apis/emails?folder=read`)
.then((response) => response.json())
.then((data) => renderSection(data.emails, 'read'));

const renderSection = (emails, elementId) => {
    document.getElementById(elementId).innerHTML = emails
      .map((email) => {
        let iconClass = 'closed';
        if (elementId === 'read') {
          iconClass = 'opened';
        }
  
        return `
          <div class="email">
            <div class="email__head">
              <div class="email__icon email__icon--${iconClass}"></div>
              <div class="email__info">
                <div class="email__sender">${email.sender.name}</div>
                <div class="email__subject">${email.subject}</div>
              </div>
              <div class="email__time">${email.time}</div>
            </div>
            <div class="email__body"></div>
          </div>
        `;
      })
      .join('');
  };


 