import Input from './src/main'

Input.install = function(Vue,opts={}){
     Vue.components(Input.name,Input)
}
export default Input