import React from 'react'

class DescriptionStatus extends React.Component {

state = {
editStatus: false,
status: this.props.status
}

onEditStatus = () => {
    this.setState( {editStatus: true })
}
offEditStatus = () => {
    this.setState( {editStatus: false })
    this.props.updateUserStatusThunkCreator(this.state.status)
}
onChangeStatus = (e) =>{
    // debugger;

    this.setState( {status: e.currentTarget.value } )
}
componentDidUpdate(prevProps , prevState) {
    if( prevProps.status !== this.props.status){
        this.setState( {status: this.props.status} )

    }
}

render() {
    // debugger;
    return ( <>
    <div>
         {!this.state.editStatus &&
      <div>
          <span  onDoubleClick={this.onEditStatus}>  {this.props.status || 'no status' } </span>
          </div> }
          
            {this.state.editStatus &&
      <div >
           <input onChange={this.onChangeStatus} autoFocus={true} onBlur={this.offEditStatus} 
           defaultValue={this.state.status}/> 
          </div> }
      </div>
        </>
    )
}
}
export default DescriptionStatus