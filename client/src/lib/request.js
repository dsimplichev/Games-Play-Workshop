const buildOptions = (data) => {
const options = {};
if(data) {
    options.body = JSON.stringify(data);
    options.headers = {
        'Content-type': 'application/json'
    };
    
} 
return options;
};

export const request = async (method, url, data) => {
    
    
    const response = await fetch(url, {
        method,
        ...buildOptions(data)
    });
    
    


    const result = await response.json();

    return result
}