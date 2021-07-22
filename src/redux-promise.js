//redux-promise

//跟redux-thunk类似
//由于使用了redux-promise，因此action是一个promise，在promise中，如果要触发action，则使用resolve

export function fetchStudent() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({type:'getdata'})  //{type:getdata} 就是action
        }, 1000)
    })
}

//或者这么写，都是返回promise函数
// export async function featchStudent1(condition) {
//     const resp = await searchStudent(condition)
//     return setStudentAndTotal(resp.data, resp,total)
// }