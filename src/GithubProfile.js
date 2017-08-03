import React, {Component} from 'react';

class GithubProfile extends Component {
    
    constructor() {
        super()
        this.state = { user: ""};
    }
    
    fetchData() {
        fetch(`https://api.github.com/users/${this.props.username}`)
        .then(r => r.json()) 
        .then(data => {
            this.setState({
                user: data
            })
        }) 
    }
    
    componentDidMount() {
        this.fetchData();
    }
    
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.username !== this.props.username) { 
          this.fetchData()
      }
    
    }
    
    render() {
            if (this.state.user) {
            let user = this.state.user;
            return (
            <div className="github-user">
              <img className="github-user__avatar" src={user.avatar_url} alt="user" />
              <div className="github-user__info">
                <p>{user.name}</p>
                <p>{user.bio}</p>
              </div>
            </div>
            )
        }
        else {
            return <div>Loading....</div>
        }
        
    }
}

export default GithubProfile;