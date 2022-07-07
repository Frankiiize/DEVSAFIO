const URL_BASE = process.env.REACT_APP_CLIENTE_API_URL;

const headers = {
  headers: {
    'Content-Type': 'application/json',
  },
};

const request = async function (options) {
  let localStorageUser = JSON.parse(window.localStorage.getItem("user"));
  let op = {...options, ...headers};
  if (localStorageUser) {
    const authToken = { Authorization: `Bearer ${localStorageUser.token}` };
    op.headers = {...op.headers, ...authToken}
  }
  let { getHeaders, ...reqOptions } = op; 
  const req = await fetch (`${URL_BASE}${options.url}`, reqOptions );
  const statusCode = req.status;
  const response = await req.json()
  if(options.getHeaders){
    const headers =  req.headers.entries();
    let responseHeaders = {};
    for(let pair of headers ){
      responseHeaders = {...responseHeaders, [pair[0]] : pair[1]}
    }
    let sendHeaders = {...response, headers : responseHeaders} 
    return {...sendHeaders, status : statusCode} ;
  }
  return {...response, status: statusCode} ;
};

export default request;
