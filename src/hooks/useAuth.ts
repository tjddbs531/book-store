import { data, useNavigate } from "react-router-dom";
import { login, resetPassword, resetRequest, signup } from "../api/auth.api";
import { LoginProps } from "../pages/Login";
import { useAuthStore } from "../store/authStore"
import { useAlert } from "./useAlert";
import { SignupProps } from "../pages/Signup";
import { useState } from "react";

export const useAuth = () => {

    const { showAlert} = useAlert();
    const navigate = useNavigate();

    const { storeLogin, storeLogout, isloggedIn } =useAuthStore();

    const userLogin = (data: LoginProps) => {
        login(data).then((res) => {
                //상태 변화
                console.log("로그인 응답:", res);
                storeLogin(res.token);
        
                showAlert("로그인이 완료되었습니다");
                navigate("/");
            }, (error) => {
                showAlert("로그인을 실패했습니다.");
            });
            };

            const userSignup = (data: SignupProps) => {
                signup(data).then((res) => {
                showAlert('회원가입이 완료되었습니다');
                navigate("/login");
                })
            };

            const userResetPassword = (data: SignupProps) => {
                resetPassword(data).then(() => {
                showAlert("비밀번호가 초기화 되었습니다.");
                navigate("/login");
                });
            }

            const [resetRequested, setResetRequested] = useState(false);

            const userResetRequset = (data: SignupProps) => {
                resetRequest(data).then(() => {
                setResetRequested(true);
                });
            }
            return {userLogin, userSignup, userResetPassword, resetRequested, userResetRequset }
    }
