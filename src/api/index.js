
export const config = {
    method: 'get',
    url: `https://corona.lmao.ninja/v2/countries/Iran?yesterday&strict&query `,
    headers: {
        "Content-type" : "Application"
    }
};
export const worldConfig ={


    method: 'get',
    url:"https://corona.lmao.ninja/v2/all?yesterday",
    headers: {  "Content-type" : "Application"}


  
}
export const flagGet = {
    method: 'get',
    url: `https://corona.lmao.ninja/v2/countries/Iran?yesterday&strict&query `,
    headers: {
        "Content-type" : "Application"
    }
}

export const wordlTable = {

        method:"GET",
        url:"https://covid-193.p.rapidapi.com/statistics",
        headers:{
        "content-type":"application/octet-stream",
        
        "useQueryString":true},
       
        
   
}
export const searchWordlTable = {

    method:"GET",
    url:`https://covid-193.p.rapidapi.com/countries?search=`,
    headers:{
    "content-type":"application/octet-stream",
   
    "useQueryString":true}
    

}

export const airQuality = {
    method:"GET",
    url:`https://api.airvisual.com/v2/city?city=Tehran&state=Tehran&country=Iran&key=eccf06f3-7a02-4984-b9f5-cc50e281f064`,
   
}



