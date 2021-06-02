import {Server,Model} from 'miragejs'


export function makeServer({environment="test"}={}){
    let server=new Server({
        //you can use environment veriable if you want,but right now we are not using it here
        //you can pass that environment variable from index js from where you are initializing your server as
        //an object an we recive env veariable here
        environment,
        routes(){
            this.namespace="api";
            this.get("updatecounter",()=>{
                return 34;
            },{
                //you can also add timing for how much time(ms) you want to stay on isLoading,fullfilled and 
                //rejected state for a particular endpoint
                timing:1000
            })
        }
    })
}