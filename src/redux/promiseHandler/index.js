export const promiseHandler = (fn)=>(req,res,next)=>{
return Promise.resolve(fn(req,res,next)).catch(err=>{
    throw new Error(err)
})
}