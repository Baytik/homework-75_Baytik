import React, {Component} from 'react';
import './Cipher.css';
import {fetchDecode, fetchEncode} from "../../store/actions/actions";
import {connect} from "react-redux";

class Cipher extends Component {

    state = {
      encode: '',
      decode: '',
      password: ''
    };

    changeInputHandler = e => this.setState({[e.target.name]: e.target.value});

    clickEncode = async () => {
        const text = {
          encode: this.state.encode,
          password: this.state.password
        };
        this.props.fetchEncode(text);
    };

    clickDecode = async () => {
        const text = {
            decode: this.state.decode,
            password: this.state.password
        };
        this.props.fetchDecode(text);
    };


    render() {
        return (
            <div className="Cipher">
                <span className="text">Decoded message:</span>
                <input type="text" className="decode-input" name="encode"
                       onChange={this.changeInputHandler}
                />
                        <p className="message">Encode Message:</p>
                        <p>{this.props.decode}</p>
                <div>
                    <button onClick={this.clickEncode}>Encode</button>
                </div>
                <div className="block">
                    <span className="password-text">Password:</span>
                    <input type="text" className="password-input" name="password" onChange={this.changeInputHandler}/>
                </div>
                <div>
                    <span className="text">Encoded message:</span>
                    <input type="text" className="decode-input" name="decode"
                           onChange={this.changeInputHandler}/>
                           <p className="message">Decode Message:</p>
                           <p>{this.props.encode}</p>
                    <div>
                        <button onClick={this.clickDecode}>Decode</button>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
   encode: state.encode.encode,
   password: state.encode.password,
   decode: state.encode.decode
});

const mapDispatchToProps = dispatch => ({
   fetchEncode: (encode) => dispatch(fetchEncode(encode)),
   fetchDecode: (decode) => dispatch(fetchDecode(decode))
});

export default connect(mapStateToProps, mapDispatchToProps)(Cipher);