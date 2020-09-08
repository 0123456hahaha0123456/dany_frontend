const TEXT_SUMMARY_REST_API_URL = 'http://localhost:8080/summary'
class TextServiceFetch{
    getText(){
        return fetch(TEXT_SUMMARY_REST_API_URL,{
            method: 'get',
            headers: {
                'Accept': 'application/json',
                'Content-Type' : 'application/json'
            }
        }).then((res=> res.json))
    }
}