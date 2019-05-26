export default async function request(url, data) {
  let requestBody = {
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "X-Requested-With": "XMLHttpRequest",
      "X-CSRF-Token": document.querySelector('input[name="_token"]').value
    },
    method: "post",
    credentials: "same-origin",
    body: JSON.stringify(data)
  };

  return await fetch(url, requestBody)
    .then(async (response) => {
      if (response.status === 500) {
        return {message: 'Greška u sistemu, molimo Vas probajte kasnije.', error: true}
      } else if(response.status === 422) {
        return await response.json();
      }
      return {message: 'Akcija uspešno izvršena. Kontaktiraćemo Vas u najkraćem roku.', error: false}
    })
    .catch(() => {
      return {message: 'Greška, molimo Vas proverite Vašu internet konekciju.', error: true}
    });
}