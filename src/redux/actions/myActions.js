export const add = val => {
   return {
      type: 'ADD',
      payload: val,
   }
}
export const show = () => {
   return {
      type: 'SHOW',
   }
}