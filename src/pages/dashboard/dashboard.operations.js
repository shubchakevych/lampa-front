//                              EXAMPLE
// import * as requests from "../../services/requests/auth";

// export const forgotPassword = (data) => (dispatch) => {
//     dispatch(authActions.forgotPasswordRequest());

//     return requests
//         .sendForgotPasswordRequest(data)
//         .then(() => {
//             dispatch(authActions.forgotPasswordSuccess(data));
//         })
//         .catch(({ message }) => {
//             dispatch(authActions.forgotPasswordError(message));
//         })
//         .finally(() =>
//             dispatch(changeButtonLoader({ status: false, button: "" }))
//         );
// };
