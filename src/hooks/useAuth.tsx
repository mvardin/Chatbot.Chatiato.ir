
const useAuth = () =>{
    const _authToken = localStorage.getItem("chatbot_auth_token");
    return _authToken ;
}

export default useAuth ;