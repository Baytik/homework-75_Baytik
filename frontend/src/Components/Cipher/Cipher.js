import React, {Component} from 'react';
import './Cipher.css';

class Cipher extends Component {
    render() {
        return (
            <div className="Cipher">
                <span className="text">Decoded message:</span>
                <input type="text" className="decode-input"/>
                <div>
                    <button>Encode</button>
                </div>
                <div className="block">
                    <span className="password-text">Password:</span>
                    <input type="text" className="password-input"/>
                </div>
                <div>
                    <span className="text">Encoded message:</span>
                    <input type="text" className="decode-input"/>
                    <div>
                        <button>Decode</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cipher;