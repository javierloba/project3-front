import React, { Component } from 'react'
import privateService from '../../services/private.service'

export default class ShowServices extends Component {
   constructor(props) {
       super(props),
       this.state = {
           services: []
       }
       this.privateService = new privateService()
   }

   refreshState() {
       this.privateService.showClients()
       .then(response => {
           this.setState({ services : response.data })
       })
       .catch(err => console.error(err))
   }

   componentDidMount() {
       this.refreshState();
   }

   displayServices(){
       const { services } = this.state;
       return services.map(todo => {
           return (
               <Service refreshState={() => this.refreshState()} key={service.id} {...service} />
           )
       })
   }
   
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
