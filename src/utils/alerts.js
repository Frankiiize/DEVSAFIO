import Swal from "sweetalert2";

// export const responseValidate = (res, onSucces = null, onError = null) => {
//   if (!!res) {
//     switch (res.status) {
//       case 200:
//         return new Promise((resolve,reject) => {
//           onSucces();
//           resolve();
//           reject({message: 'error al iniciar sesion'})
//         })
//       case 400:
//         Swal.fire({
//           title: res.data.message,
//           text: Object.values(res.data.errors),
//           icon: 'error',
//           buttonsStyling: false,
//           customClass: {
//             confirmButton: 'btn btn-primary text-white'
//           }
//         })
//         if (onError !== null) {
//           return onError
//         }
//         break
//       default:
//         return new Promise ((resolve,reject) => {
//           Swal.fire({
//             title: 'Error',
//             text: res.message,
//             icon: 'error',
//             customClass: {
//               confirmButton: ' flex w-full  border-none color: bg-primary text-white hover:bg-accent hover:border-none hover:drop-shadow-xl'
//             }
            
//           });
//           reject();
//         })
//     }
//   }
// }

export const responseOnValidate = (res, onSucces = null) => {
  if(!!res){
    return new Promise((resolve, reject) => {
      switch(res.status){
        case 200:
          onSucces();
          resolve();
          break
        case 201:
          Swal.fire({
            title: 'Exito',
            text: res.message,
            icon: 'success',
            customClass: {
              confirmButton: ' flex w-full  border-none color: bg-primary text-white hover:bg-accent hover:border-none hover:drop-shadow-xl'
            },
            didClose: () => {
              onSucces();
              resolve();
             }
          });
          break
        case 400: 
          Swal.fire({
            title: 'Error',
            text: res.message,
            icon: 'error',
            customClass: {
              confirmButton: ' flex w-full  border-none color: bg-primary text-white hover:bg-accent hover:border-none hover:drop-shadow-xl'
            }
          });
          reject();
          break
          default:
            Swal.fire({
              title: 'Error',
              text: res.message,
              icon: 'error',
              customClass: {
                confirmButton: ' flex w-full  border-none color: bg-primary text-white hover:bg-accent hover:border-none hover:drop-shadow-xl'
              }
              
            });
            reject(res);
            break
      }
    })
  }

}