
// fetching data from endpoint and displaying on window using DOM manipulation 
// url = [baseurl + endpoint]  
function createElementAndAppend() {
    let baseURL = "https://jsonplaceholder.typicode.com";
    let postsEndpoint = "/posts";
    

    let url = `${baseURL}${postsEndpoint}`;
    console.log(url);
    
    fetch(url)
    .then(response => response.json())
    .then(data =>  {
      data.forEach(post => {
        const markup = `<li>${post.title}</li>`; 
        document.querySelector("ul").insertAdjacentHTML('beforeend', markup)
      })
      console.log(data)
    })
  }
  createElementAndAppend(); 
    