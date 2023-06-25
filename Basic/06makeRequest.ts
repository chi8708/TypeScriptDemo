import fetch from 'node-fetch';//报错 使用npm install node-fetch@2
export function makeRequest(url: string, method: string, data?: any): Promise<any> {
    const options: any = {
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
    };
  
    if (data) {
      options.body = JSON.stringify(data);
    }
  
    return fetch(url,options)
      .then((response:any) => {
        //console.log(response);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response;
      })
      .catch((error:any) => {
        console.error("error:"+error);
      });
  }
  
  //export{makeRequest}