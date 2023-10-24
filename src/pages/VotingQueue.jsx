import React, { Component } from 'react'
import QrReader from 'react-weblineindia-qrcode-scanner'
import { useGlobalContext } from '../contexts';
import TempButton from '../components/TempButton';

class VotingQueue extends Component {
  constructor(props) {
    
    super(props)
    this.userIdRef = React.createRef();

    this.state = {
      delay: 100,
      result: null,
      userId: '',
      userData: null,
      hidecam: false
    }

    this.handleScan = this.handleScan.bind(this)
  }

  handleChange = (event) => {
    this.setState({ userId: event.target.value });
  };
  fetchData = () => {
    if (this.state.userId) {
      // Make an API request to fetch user data based on the provided ID
      // Replace 'API_URL' with the actual API endpoint
      fetch(`${process.env.REACT_APP_API_URL}/api/voters/${this.state.userId}`)
        .then((response) => response.json())
        .then((data) => this.setState({ userData: data }))
        .catch((error) => console.error('Error fetching user data:', error));
    }
  };

  handleScan(data) {
    // if (data !== null) {
      // this.userIdRef.current.value = data;
      this.setState({
        result: data,
      })
      
    // }
  }

  handleError(err) {
    console.error(err)
  }
  render() {
    
    const previewStyle = {
      height: 240,
      width: 320,
    };
   
    const { userData } = this.state;
    return (
      <div>
        {!this.state.hidecam && 
        <QrReader
          delay={this.state.delay}
          style={previewStyle}
          onError={this.handleError}
          onScan={this.handleScan}
        />}
        {/* <p>{this.state.result}</p> */}

        <div className='container' >
          <h1 className="mt-5">User Information</h1>
          <div className="row mt-3">
            <div className="col-6">
              <input
                ref={this.userIdRef}
                type="text"
                className="form-control"
                placeholder="Enter User ID"
                value={this.state.userId}
                onChange={this.handleChange}
              />
            </div>
            <div className="col-6">
              <button className="btn btn-primary" onClick={this.fetchData}>
                Fetch Data
              </button>
            </div>
          </div>
          {this.state.userData && (
            <div className="mt-3">
              <h2>Name: {this.state.userData.name}</h2>
              <p>Age: {this.state.userData.age}</p>
              <p>State: {this.state.userData.state}</p>
              <img
                src={`${process.env.REACT_APP_API_URL}${this.state.userData.photo}`}
                alt="User"
                className="img-fluid"
              />
             <TempButton id={this.state.userId}/>
            </div>
          )}
        </div>

      </div>
    )
  }
}


export default VotingQueue